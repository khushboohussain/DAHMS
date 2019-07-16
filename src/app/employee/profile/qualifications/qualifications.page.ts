import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.page.html',
  styleUrls: ['./qualifications.page.scss'],
})
export class QualificationsPage implements OnInit {

  form: FormGroup;
  data;
  fileArr = [];
  field = [];
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  promises = [];
  urls = [];
  getEmployeeData;
  getEmployeeID;
  filesRecord;

  constructor(public toastController: ToastController, private navController: NavController, private helper: HelperService, private fb: FormBuilder, private fireStorage: AngularFireStorage, private router: Router, private api: ApiService) { }

  async update() {
    const toast = await this.toastController.create({
      message: 'Erfolgreich aktualisiert.',
      position: 'top',
      duration: 1000
    });
    toast.present();
    this.navController.navigateBack('/employee/profile');
  }

  ngOnInit() {
    this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(res => {
      this.getEmployeeData = res;
      console.log(this.getEmployeeData);
      this.getEmployeeID = localStorage.getItem('uid');
      // console.log(this.getEmployeeData);
      // this.filesRecord = this.getEmployeeData.files;
      // this.getEmployeeData =res.files;
      // console.log("Files record\n " + this.filesRecord);
    }, err => {
      console.log(err.message);
    });



    let x: File;
    this.field.push({
      text: '',
      file: x
    });
    this.form = this.fb.group({
      qualifikation: ['', Validators.required],
      führerscheinklasse: ['', Validators.required]
    });
  }

  submit(form) {
    this.data = {
      qualifikation: form.value.qualifikation,
      führerscheinklasse: form.value.führerscheinklasse,
      sonstige: this.field[0].text,
      files: [],
      qualification: []
    };

    this.field.forEach(a => {
      this.data.qualification.push(a.text);
      if (a.file) {
        this.fileArr.push(a.file);
      }
    });

    this.fileArr.forEach((a, i) => {
      this.ref = this.fireStorage.ref('Files/' + this.getEmployeeID);
      this.task = this.ref.put(a);
      this.promises.push(this.task);
      this.urls.push({ ref: this.ref, index: i, fileId: this.getEmployeeID, name: a.name });

      this.task.snapshotChanges().subscribe();

    });

    Promise.all(
      this.promises
    )
      .then((url: Array<any>) => {
        this.urls.forEach(a => {
          a.ref.getDownloadURL().subscribe(res => {
            this.data.files.push({
              fileURL: res,
              fileID: a.fileId,
              name: a.name
            });
          });
        });
        this.updateEmplyee();
      })
      .catch((error) => {
        console.log(`Some failed: `, error.message);
      });
  }

  uploadFile(event, val, i?) {
    if (i && i > 0) {
      this.field[i].file = event.target.files[0];
      return;
    } else {
      this.fileArr[val] = event.target.files[0];
    }
  }

  updateEmplyee() {

    this.api.updateEmployee(localStorage.getItem('uid'), this.data)
      .then(after => {
        this.router.navigate(['employee/profile']);
      });
  }

  addNewfield() {
    this.field.push({
      text: '',
      file: ''
    });
  }

}
