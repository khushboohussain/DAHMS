import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  form: FormGroup;
  base64Image;
  image = 'assets/profile.jpg';
  sourcex;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadImageId;
  data;
  file;
  filepath;
  fileID;
  fileArr = [];
  blob: Blob;
  field = [];
  disableaddress: boolean;
  myLocation: string;

  // tslint:disable-next-line: max-line-length
  constructor(private helper: HelperService, private fb: FormBuilder, private fireStorage: AngularFireStorage, private router: Router, private api: ApiService, private location: LocationService) {

    this.location.addressAutocompleteItems = [];
    this.location.addressAutocomplete = {
      query: ''
    };
  }

  ngOnInit() {
    let x: File;
    this.field.push({
      text: '',
      file: x
    });
    this.form = this.fb.group({
      adresse: ['', ],
      telefonnumer: ['', Validators.required],
      zugehorigkeit: ['', Validators.required],
      Einsatzradius: ['', Validators.required],
      qualifikation: ['', Validators.required],
      führerscheinklasse: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  // navigateHome() {
  //   this.navController.navigateRoot("/employee/appointments");
  // }

  promises = [];


  getLocations() {
    this.location.addressUpdateSearch();
  }

  addressItem(item) {
    this.disableaddress = true;
    this.location.addressAutocomplete.query = item;
    this.form.controls['adresse'].setValue(item);
    // console.log('MY ITEM ', this.myLocation);
    this.location.addressChooseItem(item);
  }

  pickupBlur() {
    if (this.location.addressAutocomplete.query.length === 0) {
      this.disableaddress = true;
    }
  }

  pickupFocus() {
    this.disableaddress = false;
  }


  submit(form) {
    console.log(form);
    this.data = {
      // adresse: form.value.adresse,
      telefonnumer: form.value.telefonnumer,
      zugehorigkeit: form.value.zugehorigkeit,
      Einsatzradius: form.value.Einsatzradius,
      qualifikation: form.value.qualifikation,
      führerscheinklasse: form.value.führerscheinklasse,
      sonstige: this.field[0].text,
      imageURL: '',
      imageId: '',
      files: [],
      qualification: []
    };
    this.helper.presentLoading();

    console.log(this.field);
    console.log(this.fileArr)


    this.field.forEach(a => {
      this.data.qualification.push(a.text)
      if (a.file)
        this.fileArr.push(a.file);
    });

    this.fileArr.forEach((a, i) => {
      this.fileID = Math.floor(Date.now());
      this.ref = this.fireStorage.ref('Files/' + this.fileID);
      this.task = this.ref.put(a);
      this.promises.push(this.task);
      this.urls.push({ ref: this.ref, index: i, fileId: this.fileID, name: a.name });
      localStorage.setItem('fID', this.fileID)

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
        this.uploadImage();
      })
      .catch((error) => {
        console.log(`Some failed: `, error.message)
      });
  }

  choosePicture() {
    const element: HTMLElement = document.querySelector('input[type="file"]') as HTMLElement;
    element.click();
  }

  upload(event) {
    const x: any = document.getElementById('profileImage');
    x.src = URL.createObjectURL(event.target.files[0]);
    this.convert(event.target.files[0]);
  }

  convert(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    try {
      reader.onload = (): void => {
        const base64String: string = (reader.result as string).match(
          /.+;base64,(.+)/
        )[1];
        this.base64Image = base64String;
        this.form.controls['image'].setValue(this.base64Image);
      };
    } catch (e) {
      //no error
    }
  }

  uploadImage() {
    this.uploadImageId = Math.floor(Date.now());
    this.ref = this.fireStorage.ref(`Thumbnails/${this.uploadImageId}`);
    const task = this.ref.putString('data:image/jpeg;base64,' + this.base64Image, 'data_url');
    task.snapshotChanges()
      .pipe(finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.image = url;
          if (this.image !== '') {
            this.data.imageURL = this.image;
            this.data.imageId = this.uploadImageId;
            localStorage.setItem('imgid', this.data.imageId)
            this.createEmplyee();
          }
        });
      })).subscribe();
  }

  uploadFile(event, val, i?) {
    // this.fileID = Math.floor(Date.now());
    if (i && i > 0) {
      this.field[i].file = event.target.files[0];
      return;
    }
    else
      this.fileArr[val] = event.target.files[0];
    // this.filepath=(`files'/${this.fileID}`);
    // this.ref=this.fireStorage.ref(this.filepath);
    // this.task= this.ref.put(this.file);
  }

  urls = [];

  // async uploadAllFiles(item,i){
  //   this.fileID = Math.floor(Date.now());
  //   this.ref = this.fireStorage.ref('Files/'+this.fileID);
  //   this.task = this.ref.put(item);
  //   await this.task.snapshotChanges().pipe(
  //     finalize( async() => {
  //      await this.ref.getDownloadURL().subscribe( (url) => {
  //        this.urls[i] =url;
  //        console.log(url);
  //        return Promise.resolve(url);
  //       });
  //     })
  //   ).subscribe();
  // }

  createEmplyee() {

    this.api.updateEmployee(localStorage.getItem('uid'), this.data)
      .then(after => {
        this.router.navigate(['employee/appointments']);
      });
  }

  addNewfield() {
    this.field.push({
      text: '',
      file: ''
    })
  }
}


/*
[
  {
    text: '',
    file: ''
  }
]
*/