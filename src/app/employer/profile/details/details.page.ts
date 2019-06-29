import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  form: FormGroup;
  userData: any;
  


  constructor(public toastController: ToastController, private navController: NavController, private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.api.getUser(localStorage.getItem('uid')).subscribe(res => {
      this.userData = res;
      // console.log(this.userData);
      this.api.getEmployerData(localStorage.getItem('uid')).subscribe(res => {
        this.userData = { ...this.userData, ...res };
        console.log(this.userData);
      }, err => {
        console.log(err.message);
      });
    });

    this.form = this.fb.group({
      vorname: [ Validators.required],
      nachname: [ Validators.required],
      telephone: [ Validators.required],
      CompanyName: [ Validators.required],
      address: [ Validators.required],
      role: [ Validators.required],
      email: [ Validators.required],
      password: [ Validators.required],
    });


  }
  // end ngOnInit

  async update() {
    const toast = await this.toastController.create({
      message: 'Erfolgreich aktualisiert.',
      position: 'top',
      duration: 1000
    });
    toast.present();
    this.navController.navigateBack("/employer/profile");
  }



}
