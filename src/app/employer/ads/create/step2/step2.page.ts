import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {

  form: FormGroup;
  data: any;
  license: string;
  continousCheck: boolean;
  option1: boolean;
  option2: boolean;
  actionController: boolean;


  ngOnInit() {

    // Retrieve the object from storage
    this.data = JSON.parse(localStorage.getItem('testObject'));
    // console.log('retrievedObject: \n', this.data);

    this.actionController = JSON.parse(localStorage.getItem("actionController"));
    // console.log(typeof this.actionController);
    // console.log("actionController check is " + this.actionController);
    // console.log("option1 is " + this.option1);

    // checking conditions for showing proper template
    if (this.actionController == false && (this.data.continoueWork == '' || this.data.continoueWork == false)) {
      this.continousCheck = true;
      this.option1 = false;
      this.option2 = false;

    }
    if (this.actionController == true && this.data.continoueWork == true) {
      this.option2 = true;
      this.option1 = false;
      this.continousCheck = false;
      // localStorage.setItem('continousCheck', JSON.stringify(this.continousCheck));
      // localStorage.setItem('option1', JSON.stringify(this.option1));
      // localStorage.setItem('actionController', JSON.stringify(this.actionController));
    }
    if (this.actionController == true && (this.data.continoueWork == '' || this.data.continoueWork == false)) {
      this.option1 = true;
      this.option2 = false;
      this.continousCheck = false;
    }

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

  constructor(private navController: NavController, private fb: FormBuilder, private api: ApiService) { }

  submitForm1(form: any) {
    let record = {
      jobTitle: this.data.jobTitle,
      location: this.data.address,
      startDate: this.data.startDate,
      endDate: this.data.endDate,
      fastReply: this.data.fastReply,

      startTime: form.value.startTime,
      endTime: form.value.endTime,
      qualification: form.value.qualification,
      wage: form.value.wage,
      wageType: form.value.wageType,
      drivingLinse: form.value.drivingLicence
      // drivingLicence: form.value.drivingLicence[0].text,
      // licence: form.value.licence
    }
    console.log(record);
    this.navController.navigateRoot("/employer/ads/create/step3");
  }
  submitForm2(form: any) {

    let record = {
      jobTitle: this.data.jobTitle,
      location: this.data.address,
      startDate: this.data.startDate,
      endDate: this.data.endDate,
      fastReply: this.data.fastReply,

      startTime: form.value.startTime,
      endTime: form.value.endTime,
      qualification: form.value.qualification,
      wage: form.value.wage,
      drivingLinse: form.value.drivingLicence
      // drivingLicence: form.value.drivingLicence[0].text,
      // licence: form.value.licence
    }
    console.log(record);
  }



}
