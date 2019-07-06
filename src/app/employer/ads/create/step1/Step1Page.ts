import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';




@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})

export class Step1Page implements OnInit {

  form: FormGroup;
  data: any;
  differDates: boolean;
  // will get values from Start Date and End Date 
  nowDate = new Date();
  today;
  // minDate = new Date(this.nowDate.getFullYear() + 10, this.nowDate.getMonth());
  // maxDate = new Date(this.nowDate.getFullYear() + 10, this.nowDate.getMonth());
  startMonth = '';
  startDay = '';
  endDay = '';
  endMonth = ''
  // start date minimum and maximum values
  minDate = new Date().toISOString();
  // maxDate: any = new Date(this.nowDate.Date().setFullDate(this.nowDate Date().getFullDate() + 2)).toISOString();
  maxDate = new Date(this.nowDate.getFullYear() + 2, 11, 31).toISOString().slice(0, 10);
  // new Date(new Date().setDate(new Date().getDate() + 2)).toISOString();
  // end Date minimum and maximum values 


  constructor(public actionSheetController: ActionSheetController, private navController: NavController, private fb: FormBuilder, public helper: HelperService) { }

  ngOnInit() {
    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      address: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      continoueWork: ['',],
      fastReply: ['',]
    });


    this.today = `${this.nowDate.getFullYear()}-${(this.nowDate.getMonth() + 1) < 10 ? ('0' + (this.nowDate.getMonth() + 1)) : (this.nowDate.getMonth() + 1)}-${(this.nowDate.getDate() < 10) ? ('0' + (this.nowDate.getDate())) : this.nowDate.getDate()}`;

    // this.time = this.nowDate.toTimeString().split(' ')[0].substring(0,5);
    // console.log(" Today ", this.today);
    // console.log(this.minDate);
    // console.log(this.maxDate);
    // console.log(new Date(this.nowDate.getFullYear() + 2, 0, 1).toISOString());
    // console.log("maxDate", new Date(this.nowDate.getFullYear() + 2, 0, 1).toISOString().slice(0, 10));
    // console.log(new Date(this.nowDate.getFullYear() + 2, 11, 31).toISOString().slice(0, 10));
    // console.log("20 days added in current date", new Date(new Date().setDate(new Date().getDate() + 20)).toISOString().slice(0, 10));




    // this.onChanges();

    this.data = JSON.parse(localStorage.getItem('AdsData'));

    if (this.data) {
      this.form.patchValue({
        'jobTitle': this.data.jobTitle,
        'address': this.data.address,
        // 'startDate': this.data.startDate,
        // 'endDate': this.data.endDate,
        'continoueWork': this.data.continoueWork,
        'fastReply': this.data.fastReply
      });


    }

  } //end Of ngOnInIt()

  onChanges() {
    /* this.form.get('continoueWork').valueChanges.subscribe(res => {
      this.continuoueCheck = res;
      console.log(' Continuous Check is ' + this.continuoueCheck);
    });
     this.form.get('endDate').valueChanges.subscribe(res => {
        console.log(' end date is ' + res);
      }); */

  }


  // Getting Values form form on Submittion 
  submit(form: any) {
    let data = {
      jobTitle: form.value.jobTitle,
      address: form.value.address,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      continoueWork: form.value.continoueWork,
      fastReply: form.value.fastReply
    };
    console.log(data);

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
    if (this.differDates === true) {

      const actionSheet = await this.actionSheetController.create({
        header: 'Stelleneinstellung',
        buttons: [{
          text: 'Einzelne Termine bearbeiten',
          handler: () => {
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
    else {
      const actionSheet = await this.actionSheetController.create({
        header: 'Stelleneinstellung',
        buttons: [{
          text: 'Alle Termine gleich',
          handler: () => {
            // localStorage.setItem('actionController', JSON.stringify(true));
            this.navController.navigateForward("/employer/ads/create/step2");
          }
        }
          // , {
          //   text: 'Einzelne Termine bearbeiten',
          //   handler: () => {
          //     // this.actionController = false;
          //     localStorage.setItem('actionController', JSON.stringify(false));
          //     this.navController.navigateForward("/employer/ads/create/step2");

          //   }
          // }
          , {
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

  // Getting dates on changes ... 
  gettingDate(event) {

    if (event.value.startDate !== '') {
      //  StartDate = event.value.start;
      // console.log("Start Date is ..." + event.value.startDate);
      if (event.value.startDate < this.today) {
        this.helper.presentToast(`Please select valid date for Start Date! \n not lessthan ${this.today}`);
        this.form.get('startDate').setValue(this.today);
        // console.log("start date after clean ", event.value.startDate);
        // alert('Please select valid date for Start Date! \n not lessthan ' + this.today);
      } else {
        let startDateX = event.value.startDate.split('-');
        // console.log('Getted Splitted Date ' + startDate);
        this.startMonth = startDateX.splice(1, 1).toString();
        // console.log("Month " + this.startMonth);
        this.startDay = startDateX.splice(1, 2).toString();
        // console.log("DAY is " + this.startDay);
      }
    }

    if (event.value.endDate !== '') {
      console.log("end Date is ..." + event.value.endDate);

      if (event.value.endDate < this.today) {
        this.helper.presentToast('Please select valid date for end Date! \n not lessthan ' + this.today);
        this.form.get('endDate').setValue('');
        // this.form.get('endDate').setValue('');
        // this.testFuction(false)
        // event.value.endDate = '';
      } else {
        let endDate = event.value.endDate.split('-');
        // console.log('Getted Splitted Date ' + endDate);
        this.endMonth = endDate.splice(1, 1).toString();
        // console.log("Month " + this.endMonth);
        this.endDay = endDate.splice(1, 2).toString();
        // console.log("DAY is " + this.endDay);
      }

    }

    /*  Checking both Start Date and End Date are not empty;
    and first date is not bigger than last date */

    if (event.value.startDate != '' && event.value.endDate != '') {

      // console.log(this.startDay + " " + this.endDay);
      if (event.value.startDate > event.value.endDate) {
        console.log('bigger');
        this.helper.presentToast(`First Date ${event.value.startDate} is greater than end date ${event.value.startDate} `);
        this.form.get('startDate').setValue('');
        this.form.get('endDate').setValue('');
      } else {
        console.log('normal');
        if (this.startDay === this.endDay) {
          console.log("equal");
          this.form.get('continoueWork').enable();
          this.differDates = false;
          console.log(" Differ date ", this.differDates);
          localStorage.setItem('differDates', JSON.stringify(false));
        }
        else {
          this.form.get('continoueWork').setValue(false);
          this.form.get('continoueWork').disable();
          this.differDates = true;
          localStorage.setItem('differDates', JSON.stringify(true));
          console.log(" Differ date ", this.differDates);
          // console.log('difference is ', Number(event.value.endDate) - Number(event.value.startDate));
        }


      } // Normal Dates

      


    }  // dates are not empty  closed


  }



}
