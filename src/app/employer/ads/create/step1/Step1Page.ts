import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ActionSheetController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from 'src/app/services/helper.service';
import { LocationService } from 'src/app/services/location.service';




@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})

export class Step1Page implements OnInit {

  form: FormGroup;
  data: any;
  continuoueCheck: boolean;
  differDates: boolean;
  // will get values from Start Date and End Date
  nowDate = new Date();
  today;
  // minDate = new Date(this.nowDate.getFullYear() + 10, this.nowDate.getMonth());
  // maxDate = new Date(this.nowDate.getFullYear() + 10, this.nowDate.getMonth());
  startMonth = '';
  startDay = '';
  endDay = '';
  endMonth = '';
  // start date minimum and maximum values
  minDate = new Date().toISOString();
  // maxDate: any = new Date(this.nowDate.Date().setFullDate(this.nowDate Date().getFullDate() + 2)).toISOString();
  maxDate = new Date(this.nowDate.getFullYear() + 2, 11, 31).toISOString().slice(0, 10);
  // new Date(new Date().setDate(new Date().getDate() + 2)).toISOString();
  // end Date minimum and maximum values

  disableaddress = true;
  myLocation: string;

  // tslint:disable-next-line: max-line-length
  constructor(public actionSheetController: ActionSheetController, private navController: NavController, private fb: FormBuilder, public helper: HelperService, private location: LocationService) {

    this.location.addressAutocompleteItems = [];
    this.location.addressAutocomplete = {
      query: ''
    };

  }

  ngOnInit() {
    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      address: ['',],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      continoueWork: ['',],
      fastReply: ['',]
    });


    // tslint:disable-next-line: max-line-length
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
        // 'address': this.data.address,
        // 'startDate': this.data.startDate,
        // 'endDate': this.data.endDate,
        'continoueWork': this.data.continoueWork,
        'fastReply': this.data.fastReply
      });
      this.location.addressAutocomplete = {
        query: this.data.address
      };


    }

  } // end Of ngOnInIt()

  // onChanges() {
  /* this.form.get('continoueWork').valueChanges.subscribe(res => {
    this.continuoueCheck = res;
    console.log(' Continuous Check is ' + this.continuoueCheck);
  });
   this.form.get('endDate').valueChanges.subscribe(res => {
      console.log(' end date is ' + res);
    }); */
  // }

  getLocations() {
    this.location.addressUpdateSearch();
  }

  addressItem(item) {
    this.disableaddress = true;
    this.location.addressAutocomplete.query = item;
    this.form.controls['address'].setValue(item);
    this.myLocation = item;
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


  // Getting Values form form on Submittion
  submit(form: any) {
    const data = {
      jobTitle: form.value.jobTitle,
      address: form.value.address,
      startDate: moment(form.value.startDate).format('DD-MM-YYYY'),
      endDate: moment(form.value.endDate).format('DD-MM-YYYY'),
      continoueWork: form.value.continoueWork,
      fastReply: form.value.fastReply
    };
    // console.log(data);
    // this.continueWork = data.continoueWork;
    // console.log(this.continueWork);
    // Put the object into storage
    localStorage.setItem('AdsData', JSON.stringify(data));
    // let id = localStorage.getItem('uid');
    // console.log('Current User Id is' + localStorage.getItem('uid'));

    // console.log(this.differDates, this.continuoueCheck);

    if (this.differDates === true && this.continuoueCheck === true) {

      localStorage.setItem('actionController', JSON.stringify(true));
      localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
      this.navController.navigateForward('/employer/ads/create/step2');

    } else if (this.differDates === false && this.continuoueCheck === false) {

      localStorage.setItem('actionController', JSON.stringify(true));
      localStorage.setItem('continuoueCheck', JSON.stringify(false));
      this.navController.navigateForward('/employer/ads/create/step2');

    } else {
      // console.log('woorrkkkinnnggg.....');

      this.adOptions();
    }
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
    // if (this.differDates === true && this.continuoueCheck === false) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Stelleneinstellung',
      buttons: [
        {
          text: 'Alle Termine gleich',
          handler: () => {
            localStorage.setItem('actionController', JSON.stringify(true));
            localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
            this.navController.navigateForward('/employer/ads/create/step2');
          }
        },
        {
          text: 'Einzelne Termine bearbeiten',
          handler: () => {
            localStorage.setItem('actionController', JSON.stringify(false));
            localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
            this.navController.navigateForward('/employer/ads/create/step2');
          }
        }, {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => { }
        }]
    });
    await actionSheet.present();
    // }
    // else if (this.differDates === false && this.continuoueCheck === true) {
    //   {
    //     const actionSheet = await this.actionSheetController.create({
    //       header: 'Stelleneinstellung',
    //       buttons: [
    //         {
    //           text: 'Alle Termine gleich',
    //           handler: () => {
    //             localStorage.setItem('actionController', JSON.stringify(true));
    //             localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
    //             this.navController.navigateForward('/employer/ads/create/step2');
    //           }
    //         },
    //         // {
    //         //   text: 'Einzelne Termine bearbeiten',
    //         //   handler: () => {
    //         //     localStorage.setItem('actionController', JSON.stringify(false));


    //         //     localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));

    //         //     this.navController.navigateForward('/employer/ads/create/step2');
    //         //   }
    //         // },
    //         {
    //           text: 'Abbrechen',
    //           role: 'cancel',
    //           handler: () => { }
    //         }]
    //     });
    //     await actionSheet.present();

    //   }
    // }

  }

  get f() {
    return this.form.controls;
  }

  // Getting dates on changes ...

  gettingDate(event) {

    if (event.value.startDate !== '') {

      // if (moment(event.value.startDate).format('L') < moment(this.minDate).format('L')) {
      // this.continuoueCheck = true;
      //   console.log('this', this.continuoueCheck);
      //   console.log('event.value.startDate');
      //   this.helper.presentToast('Please select valid date for Start Date! \n not less than' + this.today);
      //   this.form.get('startDate').setValue(this.today);
      // } else {
      const startDateX = event.value.startDate.split('-');
      // console.log('Getted Splitted Date ' + startDate);
      this.startMonth = startDateX.splice(1, 1).toString();
      // console.log("Month " + this.startMonth);
      this.startDay = startDateX.splice(1, 2).toString();
      // console.log('DAY is ' + this.startDay);
      // }
    }

    if (event.value.endDate !== '') {

      // if (moment(event.value.endDate).format('L') < moment(this.minDate).format('L')) {
      //   this.form.get('endDate').setValue('');
      //   this.helper.presentToast(`First Date ${event.value.startDate} is greater than end date ${event.value.startDate} `);
      //   this.helper.presentToast('Please select valid date for end Date! \n not lessthan ' + this.today);

      // } else {
      const endDate = event.value.endDate.split('-');
      // console.log('Getted Splitted Date ' + endDate);
      this.endMonth = endDate.splice(1, 1).toString();
      // console.log("Month " + this.endMonth);
      this.endDay = endDate.splice(1, 2).toString();
      // console.log("DAY is " + this.endDay);
      // }

    }

    /*  Checking both Start Date and End Date are not empty;
    and first date is not bigger than last date */

    if (event.value.startDate !== '' && event.value.endDate !== '') {

      if (event.value.startDate > event.value.endDate) {
        // console.log('bigger');
        this.helper.presentToast(`First Date ${event.value.startDate} is greater than end date ${event.value.startDate} `);
        this.form.get('startDate').setValue('');
        this.form.get('endDate').setValue('');
        // console.log('normal');
      } else {
        this.differDates = true;
        this.continuoueCheck = false;
        // console.log(moment(event.value.startDate).format('LL'), '\n', moment(event.value.endDate).format('LL'));
        // console.log(event.value.startDate, '\n', event.value.endDate);

        if (moment(event.value.startDate).format('LL') === moment(event.value.endDate).format('LL')) {
          this.form.get('continoueWork').setValue(false);
          this.form.get('continoueWork').disable();
          this.differDates = false;
          this.continuoueCheck = false;
        } else {
          this.form.get('continoueWork').setValue(false);
          this.form.get('continoueWork').disable();
          this.continuoueCheck = false;
          this.differDates = true;
          const DifferenceOfDate = moment(event.value.endDate).diff(moment(event.value.startDate), 'days');
          // console.log(DifferenceOfDate);

          if (DifferenceOfDate === 1) {
            localStorage.setItem('days', JSON.stringify(DifferenceOfDate + 1));
            this.differDates = true;
            this.continuoueCheck = false;
            this.form.controls['continoueWork'].setValue(false);
            this.form.get('continoueWork').enable();
            this.form.get('continoueWork').valueChanges.subscribe(res => {
              this.continuoueCheck = res;
              // this.differDates = true;
            });
          } else if (DifferenceOfDate > 20) {
            this.helper.presentToast(`You have selected '${DifferenceOfDate} days' but enter first 20 days`);
            localStorage.setItem('days', JSON.stringify(20));
          } else {
            localStorage.setItem('days', JSON.stringify(DifferenceOfDate + 1));
          }
        }
      } // Normal Dates

    }  // dates are not empty  closed

  } // end Function



}

