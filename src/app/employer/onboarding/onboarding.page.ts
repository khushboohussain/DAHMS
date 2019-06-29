import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  form: FormGroup;
  data: any;
  
  constructor(private navController: NavController, private fb: FormBuilder, private api: ApiService, private helper: HelperService) { }

  ngOnInit() {
    this.form = this.fb.group({
      role: [''],
      CompanyName: ['', Validators.required],
      address: [''],
      telephone: ['', Validators.required]
    });
    
  }

  navigateHome() {
    this.navController.navigateRoot("/employer/ads");
  }

  submit(form: any) {
    this.data = {
      role: form.value.role,
      CompanyName: form.value.CompanyName,
      address: form.value.address,
      telephone: form.value.telephone
    };
    // console.log(this.data.role + " " + this.data.name + " " + this.data.address + " \n" + this.data.telephone);
    // let userId = localStorage.getItem('uid');
    // console.log(localStorage.getItem('uid'));

    this.api.updateEmployerData(localStorage.getItem('uid'), this.data).then( res => {
      
      this.helper.presentToast('Company record save successfully!');
      this.navController.navigateRoot("/employer/ads");

    }, err => {
      this.helper.presentToast(err.message);
    })


  }
}
