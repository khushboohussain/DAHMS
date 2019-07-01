import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  form: FormGroup;
  userData: any;



  constructor(public toastController: ToastController, private navController: NavController, private api: ApiService, private fb: FormBuilder, private helper: HelperService) { }

  ngOnInit() {


    this.form = this.fb.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      telephone: ['', Validators.required],
      CompanyName: ['', Validators.required],
      address: ['', Validators.required],
      role: [''],
      email: [{ value: '', disabled: true }, Validators.required],
      password: [{ value: '', disabled: true }, Validators.compose([
        Validators.required
      ])],
    });

    this.api.getUser(localStorage.getItem('uid')).subscribe(res => {

      this.userData = res;
      // console.log(this.userData);
      this.api.getEmployerData(localStorage.getItem('uid')).subscribe(res => {
        this.userData = { ...this.userData, ...res };

        this.form.get('vorname').setValue(this.userData.vorname);
        this.form.get('nachname').setValue(this.userData.nachname);
        this.form.get('telephone').setValue(this.userData.telephone);
        this.form.get('CompanyName').setValue(this.userData.CompanyName);
        this.form.get('address').setValue(this.userData.address);
        this.form.get('role').setValue(this.userData.role);
        this.form.get('email').setValue(this.userData.email);
        this.form.get('password').setValue(this.userData.password);

        // console.log(this.userData);
      }, err => {
        // console.log(err.message);
      });
    });

    /* 
      name: [{ value: '', disabled: true }, Validators.required],
      name: [{ value: '', disabled: this.variable }, Validators.required]
      this.form.controls['name'].disable();
   */

  }
  // end ngOnInit

  update(data) {

    let formData = {
      vorname: data.value.vorname,
      nachname: data.value.nachname,
      telephone: data.value.telephone,
      CompanyName: data.value.CompanyName,
      address: data.value.address,
      role: data.value.role,
      email: data.value.email,
      password: data.value.password
    }
    // console.log(formData);
    this.api.updateEmployerData(localStorage.getItem('uid'), {
      vorname: formData.vorname,
      nachname: formData.nachname,
      telephone: formData.telephone,
      CompanyName: formData.CompanyName,
      address: formData.address,
      role: formData.role,
    }).then(() => {
      this.helper.presentToast('Erfolgreich aktualisiert.');
      this.navController.navigateBack("/employer/profile");

    }, err => {
      this.helper.presentToast(err.message);
    })





    // this.updated();

  }
  // async updated() {
  //   const toast = await this.toastController.create({
  //     message: 'Erfolgreich aktualisiert.',
  //     position: 'top',
  //     duration: 1000
  //   });
  //   toast.present();
  //   this.navController.navigateBack("/employer/profile");
  // }

  get f() {
    return this.form.controls;
  }


}
