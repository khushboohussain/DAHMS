import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {

  form: FormGroup;
  data: any;
  newField: any = [];


  continousCheck: boolean;
  option1: boolean;
  option2: boolean;
  actionController: boolean;




  constructor(private navController: NavController, private fb: FormBuilder, private api: ApiService, public helper: HelperService) { }

  ngOnInit() {

    // this.newField.push({
    //   qualification: '',
    //   requiredEmployees: ''
    // })

    // Retrieve the object from storage
    this.data = JSON.parse(localStorage.getItem('AdsData'));
    // console.log('retrievedObject: \n', this.data);

    this.actionController = JSON.parse(localStorage.getItem("actionController"));
    // console.log(typeof this.actionController);
    // console.log("actionController check is " + this.actionController);
    // console.log("continuous Work is " + this.data.continoueWork);

    // checking conditions for showing proper template

    // Template 1 will execute
    if (this.actionController == true && (this.data.continoueWork == '' || this.data.continoueWork == false)) {
      this.option1 = true;
      this.option2 = false;
      this.continousCheck = false;
      // from builder
      this.form = this.fb.group({
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
        qualification: ['', Validators.required],
        requiredEmployees: ['', Validators.required],
        wage: ['', Validators.required],
        wageType: ['', Validators.required],
        drivingLicence: ['', Validators.required]

      })
      // localStorage.setItem('continousCheck', JSON.stringify(this.continousCheck));
      // localStorage.setItem('option1', JSON.stringify(this.option1));
      // localStorage.setItem('actionController', JSON.stringify(this.actionController));
    }
    // Tempate 2 will execute
    else if (this.actionController == true && this.data.continoueWork == true) {
      this.option1 = false;
      this.option2 = true;
      this.continousCheck = false;
      // from builder
      this.form = this.fb.group({
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
        qualification: ['', Validators.required],
        requiredEmployees: ['', Validators.required],
        wage: ['', Validators.required],
        // wageType: ['', Validators.required],
        drivingLicence: ['', Validators.required]
      })
    }
    // Template 3 will execute
    else if (this.actionController == false && (this.data.continoueWork == '' || this.data.continoueWork == false)) {
      this.option1 = false;
      this.option2 = false;
      this.continousCheck = true;
      // from builder
      this.form = this.fb.group({
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
        qualification: ['', Validators.required],
        requiredEmployees: ['', Validators.required],
        wage: ['', Validators.required],
        wageType: ['', Validators.required],
        drivingLicence: ['', Validators.required]
      })

    }
  }
  /* ngOnInit end */

  // Form Submit Method
  submitForm(form: any) {
    // submit method for template 1 and 3
    if (this.option2 != true) {
      // for condition 3
      if (this.continousCheck === true) {
        let record = {
          jobTitle: this.data.jobTitle,
          location: this.data.address,
          startDate: this.data.startDate,
          endDate: this.data.endDate,
          fastReply: this.data.fastReply,
          // getting values from Step2 
          startTime: form.value.startTime,
          endTime: form.value.endTime,

          qualification: form.value.qualification,
          requiredEmployees: form.value.requiredEmployees,
          otherQualification: [],

          wage: form.value.wage,
          wageType: form.value.wageType,
          drivingLinse: form.value.drivingLicence,
          uid: localStorage.getItem('uid'),
          condition1: false,
          condition2: false,
          condition3: true
        }
        // console.log(record);
        this.newField.forEach(a => {
          record.otherQualification.push({
            qualification: a.otherQualification,
            requiredEmployees: a.otherRequiredEmp
          }
          );
        })
        // console.log(record);

        this.api.createAds(record)
          .then(res => {
            this.helper.presentToast('Ad Created Successfuliy!');
            this.navController.navigateRoot("/employer/ads/create/step3");
          }, err => {
            this.helper.presentToast(err.message + 'Error!');
          });

      } else {
        //  for condition 1 
        let record = {
          jobTitle: this.data.jobTitle,
          location: this.data.address,
          startDate: this.data.startDate,
          endDate: this.data.endDate,
          fastReply: this.data.fastReply,

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
        }
        // localStorage.setItem('option', JSON.stringify(false));
        // console.log(record);
        this.newField.forEach(a => {
          record.otherQualification.push({
            qualification: a.otherQualification,
            requiredEmployees: a.otherRequiredEmp
          }
          );
        })
        // console.log(record);
        this.api.createAds(record)
          .then(res => {
            this.helper.presentToast(' Ad Created Successfuliy!');
            this.navController.navigateRoot("/employer/ads/create/step3");
          }, err => {
            this.helper.presentToast(err.message + 'Error!');
          });
      }

    } else {
      // for tempate 2
      let record = {
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


        wage: form.value.wage,
        drivingLinse: form.value.drivingLicence,
        uid: localStorage.getItem('uid'),
        condition1: false,
        condition2: true,
        condition3: false

      }
      // localStorage.setItem('option', JSON.stringify(false));
      // console.log(record);

      this.newField.forEach(a => {
        record.otherQualification.push({
          qualification: a.otherQualification,
          requiredEmployees: a.otherRequiredEmp
        }
        );
      })
      // console.log(record);

      this.api.createAds(record)
        .then(res => {
          this.helper.presentToast(' Ad Created Successfuliy!');
          this.navController.navigateRoot("/employer/ads/create/step3");
        }, err => {
          this.helper.presentToast(err.message + 'Error!');
        });

    }

    // end Else Bloack
  } // end SubmitForm method

  // For adding new input field for employee
  addField() {

    this.newField.push({
      qualification: '',
      requiredEmployees: null
    })
  };
  removeField(index: number) {
    // console.log('Remove Field is working...');
    this.newField.splice(index, 1);
    // console.log('successfuly deleted item number '+ index);
  }

 

}
