import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {

  form: FormGroup;
  // data: any;
  actionController: boolean;


  constructor(public actionSheetController: ActionSheetController, private navController: NavController, private fb: FormBuilder, private api: ApiService, private helper: HelperService) { }



  ngOnInit() {
    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      address: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      continoueWork: ['', Validators.required],
      fastReply: ['', Validators.required]
    })
  }


  submit(form: any) {
    let data = {
      jobTitle: form.value.jobTitle,
      address: form.value.address,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      continoueWork: form.value.continoueWork,
      fastReply: form.value.fastReply,
    }
    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(data));

    // localStorage.setItem('AdsData', this.data);
       // let id = localStorage.getItem('uid');
    // console.log('Current User Id is' + localStorage.getItem('uid'));

    this.adOptions();
 

    // this.api.createAds(localStorage.getItem('uid'), {
    //   jobTitle: this.data.value.jobTitle,
    //   address: this.data.address,
    //   startDate: this.data.startDate,
    //   endDate: this.data.value.endDate
    // }).then(res => {
    //   if (this.data.continoueWork == '' || this.data.continoueWork == false) {
    //     this.continousCheck = false;
    //   }
    //   else {
    //     this.continousCheck = true;
    //   }
    //   this.helper.presentToast("")
    // }, err => {
    //   this.helper.presentToast(err.message + 'Error!');
    // });


    // var test = JSON.parse(localStorage.getItem("continousCheck"));
    // console.log(typeof test);
    // console.log(test); 
  }
  async adOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Stelleneinstellung',
      buttons: [{
        text: 'Alle Termine gleich',
        handler: () => {
          this.navController.navigateForward("/employer/ads/create/step2");

          localStorage.setItem('actionController', JSON.stringify(this.actionController = true));
        }
      }, {
        text: 'Einzelne Termine bearbeiten',
        handler: () => {
          this.navController.navigateForward("/employer/ads/create/step2");
          // this.actionController = false;
          localStorage.setItem('actionController', JSON.stringify(this.actionController = false));

        }
      }, {
        text: 'Abbrechen',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

}
