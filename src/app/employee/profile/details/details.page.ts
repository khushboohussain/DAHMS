import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  form: FormGroup;
  base64Image;
  image = 'assets/profile.jpg';
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadImageId;
  data;
  file;

  constructor(public toastController: ToastController, private navController: NavController, private helper: HelperService,private fb: FormBuilder,private fireStorage: AngularFireStorage,private router: Router, private api:ApiService) {}

  async update() {
    const toast = await this.toastController.create({
      message: 'Erfolgreich aktualisiert.',
      position: 'top',
      duration: 1000
    });
    toast.present();
    this.navController.navigateBack("/employee/profile");
  }

  ngOnInit() {
    // this.api.getAllEmployees();
    
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(6)
        ])],
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      adresse: ['', Validators.required],
      telefonnumer: ['', Validators.required],
      zugehörigkeit: ['', Validators.required],
      Einsatzradius: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  submit(form){
    this.data = {
      vorname: form.value.vorname,
      nachname: form.value.nachname,
      email: form.value.email,
      password: form.value.password,
      adresse: form.value.adresse,
      telefonnumer: form.value.telefonnumer,
      zugehörigkeit: form.value.zugehörigkeit,
      Einsatzradius: form.value.Einsatzradius,
    };
    this.uploadImage();
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
    } catch ( e ) {
      //no error
    }
  }

  uploadImage() {
    this.ref = this.fireStorage.ref(`Thumbnails/${localStorage.getItem('imgid')}`);
    const task = this.ref.putString( 'data:image/jpeg;base64,' + this.base64Image, 'data_url');
    task.snapshotChanges()
      .pipe(finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.image = url;
          if (this.image !== '') {
            this.data.imageURL = this.image;
            this.updateEmplyeeData();
          }
        });
      })).subscribe();
  }

  updateEmplyeeData(){

    this.api.updateUser(localStorage.getItem('uid'), {
      email: this.data.email,
      password: this.data.password
    }).then(res =>{
      this.api.updateEmployee(localStorage.getItem('uid'),{
        vorname: this.data.vorname,
        nachname: this.data.nachname,
        adresse: this.data.adresse,
        telefonnumer: this.data.telefonnumer,
        zugehörigkeit: this.data.zugehörigkeit,
        Einsatzradius: this.data.Einsatzradius,
      })
      .then(after => {
        this.router.navigate(['employee/profile']);
      });
    })
    
   
  }

}
