import { Component, OnInit } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import * as moment from 'moment';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  form: FormGroup;
  form2: Array<FormGroup> = [];
  data: any;
  record;

  newField: any = [];
  days: number;
  otherQualification = '';
  otherRequiredEmployees = null;

  option1: boolean;
  option2: boolean;
  option3: boolean;

  actionController: boolean;
  continuoueCheck: boolean;
  dateStart;
  dateEnd: Date;
  extraWorkforce = [];



  constructor(private navController: NavController, private fb: FormBuilder, private api: ApiService, public helper: HelperService) { }

  ngOnInit() {
    // Retrieve the object from storage
    this.data = JSON.parse(localStorage.getItem('AdsData'));
    // console.log('retrieved Object: \n', this.data);

    this.dateStart = this.data.startDate;

    this.actionController = JSON.parse(localStorage.getItem('actionController'));
    this.continuoueCheck = JSON.parse(localStorage.getItem('continuoueCheck'));
    // this.continuoueCheck = JSON.parse(localStorage.getItem('continuoueCheck'));
    // this.differDates = JSON.parse(localStorage.getItem("differDates"));
    // console.log('differDates check is ' + this.differDates);

    // this.continuoueCheck = JSON.parse(localStorage.getItem("continuoueCheck"));

    /*     console.log('actionController ', this.actionController);
        console.log(typeof this.actionController);
        console.log('continuoueCheck ', this.continuoueCheck);
        console.log(typeof this.continuoueCheck); */


    // checking conditions for showing proper template

    // Template 1 will execute
    if (this.actionController === true && this.continuoueCheck === false) {
      this.option1 = true;
      this.option2 = false;
      this.option3 = false;
      // from builder
      this.form = this.fb.group({
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
        qualification: ['', Validators.required],
        requiredEmployees: ['', Validators.required],
        wage: ['', Validators.required],
        wageType: ['', Validators.required],
        drivingLicence: ['', Validators.required]

      });
      // localStorage.setItem('option3', JSON.stringify(this.option3));
      // localStorage.setItem('option1', JSON.stringify(this.option1));
      // localStorage.setItem('actionController', JSON.stringify(this.actionController));
    } else if (this.actionController === true && this.continuoueCheck === true) {
      this.option1 = false;
      this.option2 = true;
      this.option3 = false;
      // from builder
      this.form = this.fb.group({
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
        qualification: ['', Validators.required],
        requiredEmployees: ['', Validators.required],
        wage: ['', Validators.required],
        wageType: ['', Validators.required],
        drivingLicence: ['', Validators.required]
      });
      // Template 3
    } else if (this.actionController === false && this.continuoueCheck === false) {
      this.option1 = false;
      this.option2 = false;
      this.option3 = true;
      // from builder
      this.form = this.fb.group({
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
        qualification: ['', Validators.required],
        requiredEmployees: ['', Validators.required],
        wage: ['', Validators.required],
        wageType: ['', Validators.required],

        drivingLicence: ['', Validators.required]
      });
      // console.log(JSON.parse(localStorage.getItem('day')));

      this.days = JSON.parse(localStorage.getItem('days'));

      // console.log('Days are:  ', this.days);
      // console.log(typeof this.days);

      // console.log(moment(this.data.startDate).format());
      // console.log(moment(this.data.endDate).format());

      for (let i = 0; i < this.days; i++) {
        this.form2.push(
          this.form = this.fb.group({
            startTime: ['', Validators.required],
            endTime: ['', Validators.required],
            qualification: ['', Validators.required],
            requiredEmployees: ['', Validators.required],
            otherQualification: [],
            wage: ['', Validators.required],
            wageType: ['', Validators.required],
            drivingLicence: ['', Validators.required]
          })
        );
        // this.dateStart = moment(this.dateStart).add(i, 'days').format();
        // console.log('Adding 1', this.dateStart);
      }
      setTimeout(() => {
        this.slides.lockSwipes(true);
      }, 1000);

    }
  }
  /* ngOnInit end */



  // For adding new input field for template 1 and 2
  addFieldx() {
    this.otherQualification = '';
    this.otherRequiredEmployees = null;
    this.newField.push({
      qualification: '',
      requiredEmployees: null
    });
  }
  removeFieldx(index: number) {
    // console.log('Remove Field is working...');
    // this.otherQualification = '';
    // this.otherRequiredEmployees = null;
    this.newField.splice(index, 1);
    // console.log('successfuly deleted item number '+ index);
  }

  // For adding new input field for template 3
  addField(i) {
    // jd logic only for Template 3
    // console.log(i)
    if (i >= 0) {
      this.extraWorkforce.push({
        qualification: '',
        requiredEmployees: 0,
        index: i
      });
    } else {
      this.extraWorkforce.push({
        qualification: '',
        requiredEmployees: 0
      });
    }

    // console.log(this.extraWorkforce)

  }
  removeField(index) {
    // console.log('Remove Field is working...');
    // this.otherQualification = '';
    // this.otherRequiredEmployees = null;
    this.extraWorkforce.splice(index, 1);
    // console.log('successfuly deleted item number '+ index);
  }

  nextSlide() {
    // console.log('Actual Date ', this.dateStart);
    this.slides.lockSwipes(false);
    this.slides.slideNext().then(() => { this.slides.lockSwipes(true); });
    // this.dateStart = moment(this.dateStart).add(1, 'days').format();
    // console.log('Adding 1', this.dateStart);

  }

  goBack() {
    this.slides.lockSwipes(false);
    // this.dateStart = moment(this.dateStart).subtract(1, 'days').format();
    // console.log('Minus 1 ', this.dateStart);
    // this.slides.slidePrev().then(() => { this.slides.lockSwipes(true); });
  }
  // getQulalifications(item) {
  //   console.log(item.value);


  // }
  // getRegEmp(item) {
  //   console.log(item.value);

  // }

  // Form Submit Method
  submitForm(form: any) {
    // submit method for template 1 and 3
    // console.log('form values ', form);
    if (this.option2 !== true) {
      // for condition 3
      if (this.option3 === true) {
        this.record = {
          jobTitle: this.data.jobTitle,
          location: this.data.address,
          startDate: this.data.startDate,
          endDate: this.data.endDate,
          fastReply: this.data.fastReply,

          confirmEmployee: [],
          confirmEmployeeIds: [],

          step2: [],
          // otherQualification: [],
          uid: localStorage.getItem('uid'),
          condition1: false,
          condition2: false,
          condition3: true
        };

        form.forEach(a => {
          this.record.step2.push(a.value);
        });

        if (this.extraWorkforce.length > 0) {
          this.extraWorkforce.forEach(a => {
            if (a.index >= 0) {
              if (this.record.step2[a.index].otherQualification === null) {
                this.record.step2[a.index].otherQualification = [];
              } else {
                this.record.step2[a.index].otherQualification.push({
                  qualification: a.qualification,
                  requiredEmployees: a.requiredEmployees
                });
              }

            }
          });
        }

        // this.newField.forEach(a => {
        //   this.record.otherQualification.push({
        //     qualification: a.otherQualification,
        //     requiredEmployees: a.otherRequiredEmployees
        //   });
        // });
        // console.log(this.record);

        // getting values from Step2
        //  startTime: form.value.startTime,
        //  endTime: form.value.endTime,

        //  qualification: form.value.qualification,
        //  requiredEmployees: form.value.requiredEmployees,
        //  otherQualification: [],

        //  wage: form.value.wage,
        //  wageType: form.value.wageType,
        //  drivingLinse: form.value.drivingLicence,
        // console.log('Record ', this.record);
        // this.newField.forEach(a => {
        // });
        // this.adDetail.push(record)
        // console.log(record);

        this.api.createAds(this.record)
          .then(res => {
            this.helper.presentToast(' Ad Created Successfuliy!');
            this.navController.navigateRoot('/employer/ads/create/step3');
          }, err => {
            this.helper.presentToast(err.message + 'Error!');
          });
        // end of template 3
      } else {
        //  for condition 1
        const record = {
          jobTitle: this.data.jobTitle,
          location: this.data.address,
          startDate: this.data.startDate,
          endDate: this.data.endDate,
          fastReply: this.data.fastReply,

          confirmEmployee: [],
          confirmEmployeeIds: [],

          startTime: form.value.startTime,
          endTime: form.value.endTime,

          qualification: form.value.qualification,
          requiredEmployees: form.value.requiredEmployees,

          // abc: this.newField[0].otherQualification,
          // xyz: this.newField[0].otherRequiredEmp,

          otherQualification: [],
          // otherRequiredEmp: [],


          wage: form.value.wage,
          wageType: form.value.wageType,
          drivingLinse: form.value.drivingLicence,
          uid: localStorage.getItem('uid'),
          condition1: true,
          condition2: false,
          condition3: false
          // drivingLicence: form.value.drivingLicence[0].text,
          // licence: form.value.licence
        };
        // localStorage.setItem('option', JSON.stringify(false));
        // console.log(record);
        this.newField.forEach(a => {
          record.otherQualification.push({
            qualification: a.otherQualification,
            requiredEmployees: a.otherRequiredEmp
          }
          );
        });
        // console.log(record);
        this.api.createAds(record)
          .then(res => {
            this.helper.presentToast(' Ad Created Successfuliy!');
            this.navController.navigateRoot('/employer/ads/create/step3');
          }, err => {
            this.helper.presentToast(err.message + 'Error!');
          });
      }

    } else {
      // for tempate 2
      const record = {
        jobTitle: this.data.jobTitle,
        location: this.data.address,
        startDate: this.data.startDate,
        endDate: this.data.endDate,
        fastReply: this.data.fastReply,

        startTime: form.value.startTime,
        endTime: form.value.endTime,

        qualification: form.value.qualification,
        requiredEmployees: form.value.requiredEmployees,
        otherQualification: [],

        confirmEmployee: [],
        confirmEmployeeIds: [],

        wage: form.value.wage,
        wageType: form.value.wageType,
        drivingLinse: form.value.drivingLicence,
        uid: localStorage.getItem('uid'),
        condition1: false,
        condition2: true,
        condition3: false

      };
      // localStorage.setItem('option', JSON.stringify(false));
      // console.log(record);

      this.newField.forEach(a => {
        record.otherQualification.push({
          qualification: a.otherQualification,
          requiredEmployees: a.otherRequiredEmp
        }
        );
      });
      // console.log(record);

      this.api.createAds(record)
        .then(res => {
          this.helper.presentToast(' Ad Created Successfuliy!');
          this.navController.navigateRoot('/employer/ads/create/step3');
        }, err => {
          this.helper.presentToast(err.message + 'Error!');
        });

    }

    // end Else Bloack
  } // end SubmitForm method




}
