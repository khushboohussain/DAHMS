import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})

export class Step1Page implements OnInit {
  form: FormGroup;
  data: any;
  differDates: boolean;
  continuoueCheck: boolean;
  // will get values from Start Date and End Date 
  startMonth: string = '';
  startDay: string = '';
  endDay: string = '';
  endMonth: string = '';




  constructor(public actionSheetController: ActionSheetController, private navController: NavController, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      address: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      continoueWork: ['', {disable: false}],
      fastReply: ['']
    });

    // this.onChanges();
    
    this.data = JSON.parse(localStorage.getItem('AdsData'));

    if (this.data) {
      this.form.patchValue({
        'jobTitle': this.data.jobTitle,
        'address': this.data.address,
        // 'startDate': this.data.startDate,
        // 'endDate': this.data.endDate,
        'continoueWork': this.data.continoueWork,
        'role': this.data.role,
        'fastReply': this.data.fastReply
      });


    } else {

    }

  }

  /* onChanges() {
    this.form.get('continoueWork').valueChanges.subscribe(res => {
      this.continuoueCheck = res;
      console.log(' Continuous Check is ' + this.continuoueCheck);
    });
     this.form.get('endDate').valueChanges.subscribe(res => {
        console.log(' end date is ' + res);
      });
 
  } */


  // Getting Values form form on Submittion 
  submit(form: any) {
    let data = {
      jobTitle: form.value.jobTitle,
      address: form.value.address,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      continoueWork: form.value.continoueWork,
      fastReply: form.value.fastReply,
    };
    // this.continueWork = data.continoueWork;
    // console.log(this.continueWork);
    // Put the object into storage
    localStorage.setItem('AdsData', JSON.stringify(data));
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
    // template 3 will run
    if (this.differDates === true && this.continuoueCheck === false) {

      const actionSheet = await this.actionSheetController.create({
        header: 'Stelleneinstellung',
        buttons: [{
          text: 'Einzelne Termine bearbeiten',
          handler: () => {
            // this.actionController = false;
            localStorage.setItem('actionController', JSON.stringify(false));
            this.navController.navigateForward("/employer/ads/create/step2");

            // localStorage.setItem('differDates', JSON.stringify(this.differDates));
            // localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
          }
        },

        // {
        //   text: 'Einzelne Termine bearbeiten',
        //   handler: () => {
        //     this.navController.navigateForward("/employer/ads/create/step2");
        //     // this.actionController = false;
        //     localStorage.setItem('actionController', JSON.stringify(this.actionController = false));
        //   }
        // }, 

        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => { }
        }]
      });
      await actionSheet.present();
    }
    else {
      const actionSheet = await this.actionSheetController.create({
        header: 'Stelleneinstellung',
        buttons: [{
          text: 'Alle Termine gleich',
          handler: () => {
            localStorage.setItem('actionController', JSON.stringify(true));
            this.navController.navigateForward("/employer/ads/create/step2");
          }
        }, {
          text: 'Einzelne Termine bearbeiten',
          handler: () => {
            // this.actionController = false;
            localStorage.setItem('actionController', JSON.stringify(false));
            this.navController.navigateForward("/employer/ads/create/step2");

          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => { }
        }]
      });
      await actionSheet.present();
    }
  }

  get f() {
    return this.form.controls;
  }

  startDate(event) {
    if (event.value.startDate != '') {

      // console.log("Start Date is ..." + event.value.startDate);
      let startDate = event.value.startDate.split('-');
      // console.log('Getted Splitted Date ' + startDate);
      this.startMonth = startDate.splice(1, 1).toString();
      // console.log("Month " + this.startMonth);
      this.startDay = startDate.splice(1, 2).toString();
      // console.log("DAY is " + this.startDay);


    } else {
      console.log("waiting for Start Date ");

    }
    if (event.value.endDate != '') {

      // console.log("end Date is ..." + event.value.endDate);
      let endDate = event.value.endDate.split('-');
      // console.log('Getted Splitted Date ' + endDate);
      this.endMonth = endDate.splice(1, 1).toString();
      // console.log("Month " + this.endMonth);
      this.endDay = endDate.splice(1, 2).toString();
      // console.log("DAY is " + this.endDay);


    } else {
      console.log("waiting for end Date ");
    }

    // Checking both Start Date and End Date are not empty; must have value 

    if (event.value.startDate != '' && event.value.endDate != '') {

      // console.log(this.startDay + " " + this.endDay);

      if (this.startDay === this.endDay) {
        console.log("equal");
        this.form.get('continoueWork').enable();
        this.differDates = false;
        console.log(" Differ date ", this.differDates);
        localStorage.setItem('differDates', JSON.stringify(false));

      }
      else {
        console.log("not equals ");
        this.form.get('continoueWork').setValue(false);
        this.form.get('continoueWork').disable();
        this.differDates = true;
        localStorage.setItem('differDates', JSON.stringify(true));
        console.log(" Differ date ", this.differDates);

        this.continuoueCheck = false;
        //  console.log("continuous Check ", this.continuoueCheck);
        // console.log("value", this.);


      }


      // dates are differents 

    } else {
      console.log('problem!');

    }

  }

}
