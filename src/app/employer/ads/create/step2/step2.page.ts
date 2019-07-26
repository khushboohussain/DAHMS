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
  previousData: any;

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

      this.days = JSON.parse(localStorage.getItem('days'));


      for (let i = 0; i < this.days; i++) {
        this.form2.push(
          this.form = this.fb.group({
            startTime: ['', Validators.required],
            endTime: ['', Validators.required],
            qualification: ['', Validators.required],
            requiredEmployees: ['', Validators.required],
            wage: ['', Validators.required],
            wageType: ['', Validators.required],
            drivingLicence: ['', Validators.required]
          })
        );
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
      requiredEmployees: 0,
      wage: 0,
      wageType: '',
      drivingLicence: ''
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
    // console.log(this.lengthOfFields);
    if (i >= 0) {
      this.extraWorkforce.push({
        qualification: '',
        requiredEmployees: 0,
        wage: 0,
        wageType: '',
        drivingLicence: '',
        index: i
      });
    } else {
      this.extraWorkforce.push({
        qualification: '',
        requiredEmployees: 0,
        wage: 0,
        wageType: '',
        drivingLicence: ''
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
    this.slides.slidePrev().then(() => { this.slides.lockSwipes(true); });
    // console.log('Minus 1 ', this.dateStart);
    // this.dateStart = moment(this.dateStart).subtract(1, 'days').format();
  }

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
          latitude: this.data.latitude,
          longitude: this.data.longitude,

          confirmEmployee: [],
          confirmEmployeeIds: [],
          apply: [],

          step2: [],
          // otherQualification: [],
          uid: localStorage.getItem('uid'),
          condition1: false,
          condition2: false,
          condition3: true
        };
        // moment(event.value.startDate).format('HH:mm');
        //

        // a.value

        form.forEach(a => {
          this.record.step2.push(
            {
              startTime: moment(a.value.startTime).format('HH:mm'),
              endTime: moment(a.value.endTime).format('HH:mm'),
              qualification: a.value.qualification,
              requiredEmployees: a.value.requiredEmployees,
              wage: a.value.wage,
              wageType: a.value.wageType,
              drivingLinse: a.value.drivingLicence,
              otherQualification: []
            }
          );
        });

        if (this.extraWorkforce.length > 0) {
          this.extraWorkforce.forEach(a => {
            if (a.index >= 0) {
              this.record.step2[a.index].otherQualification.push({
                qualification: a.qualification,
                requiredEmployees: a.requiredEmployees,
                wage: a.wage,
                wageType: a.wageType,
                drivingLicence: a.drivingLicence
              });
            }
          });
        }

        this.api.createAds({status: 'open', ...this.record})
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
          latitude: this.data.latitude,
          longitude: this.data.longitude,

          confirmEmployee: [],
          confirmEmployeeIds: [],
          apply: [],

          startTime: moment(form.value.startTime).format('HH:mm'),
          endTime: moment(form.value.endTime).format('HH:mm'),

          qualification: form.value.qualification,
          requiredEmployees: form.value.requiredEmployees,

          // abc: this.newField[0].otherQualification,
          // xyz: this.newField[0].otherRequiredEmp,

          otherQualification: [],


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
            requiredEmployees: a.otherRequiredEmp,
            wage: a.wage,
            wageType: a.wageType,
            drivingLicence: a.drivingLicence
          }
          );
        });
        // console.log(record);
        this.api.createAds({status: 'open', ...record})
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
        latitude: this.data.latitude,
        longitude: this.data.longitude,

        otherQualification: [],

        confirmEmployee: [],
        confirmEmployeeIds: [],
        apply: [],

        startTime: moment(form.value.startTime).format('HH:mm'),
        endTime: moment(form.value.endTime).format('HH:mm'),

        qualification: form.value.qualification,
        requiredEmployees: form.value.requiredEmployees,
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
          requiredEmployees: a.otherRequiredEmp,
          wage: a.wage,
          wageType: a.wageType,
          drivingLicence: a.drivingLicence
        });
      }
      );
      // });
      // console.log(record);

      this.api.createAds({status: 'open', ...record})
        .then(res => {
          this.helper.presentToast(' Ad Created Successfuliy!');
          this.navController.navigateRoot('/employer/ads/create/step3');
        }, err => {
          this.helper.presentToast(err.message + 'Error!');
        });

    }

    // end Else Bloack
  } // end SubmitForm method

  getValues(form, i) {
    this.previousData = form[i - 1].value;

    this.previousData.otherQualification = [];

    this.extraWorkforce.forEach(a => {
      if (a.index === i - 1) {
        this.previousData.otherQualification.push(a);
      }
    });

    // console.log('getting data from last slide', this.previousData);
    // console.log('getting data from last slide', this.previousData.controls.startDate);

    // console.log(`'Previous Slide data is \n'  ${JSON.stringify(this.previousData)}`);
    this.form2[i].controls['startTime'].setValue(this.previousData.startTime);
    this.form2[i].controls['endTime'].setValue(this.previousData.endTime);
    this.form2[i].controls['qualification'].setValue(this.previousData.qualification);
    this.form2[i].controls['requiredEmployees'].setValue(this.previousData.requiredEmployees);
    this.form2[i].controls['wage'].setValue(this.previousData.wage);
    this.form2[i].controls['wageType'].setValue(this.previousData.wageType);
    this.form2[i].controls['drivingLicence'].setValue(this.previousData.drivingLicence);


    const len = this.previousData.otherQualification.length;

    this.extraWorkforce = [];
    for (let index = 0; index < len; index++) {
      this.extraWorkforce.push({
        qualification: this.previousData.otherQualification[index].qualification,
        requiredEmployees: this.previousData.otherQualification[index].requiredEmployees,
        wage: this.previousData.otherQualification[index].wage,
        wageType: this.previousData.otherQualification[index].wageType,
        drivingLicence: this.previousData.otherQualification[index].drivingLicence,
        index: i
      });

    }
  }


}
