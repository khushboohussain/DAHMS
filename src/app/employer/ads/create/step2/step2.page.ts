import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {

  data: any;
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
    console.log("actionController check is " + this.actionController);
    console.log("option1 is " + this.option1);

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


  }

  constructor(private navController: NavController) { }

  navigateConfirmation() {
    this.navController.navigateRoot("/employer/ads/create/step3");
  }



}
