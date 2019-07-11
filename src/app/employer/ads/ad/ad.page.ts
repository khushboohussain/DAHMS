import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-ad',
  templateUrl: './ad.page.html',
  styleUrls: ['./ad.page.scss'],
})
export class AdPage implements OnInit {

  data: any = {};
  option1: boolean;
  option2: boolean;
  option3: boolean;
  formatType: string;
  totalApp = 0;
  totalConfirm = 0;
  getAllEmployees: boolean;
  acceptedEmploye: boolean;


  constructor(private navController: NavController) { }

  ngOnInit() {
    localStorage.removeItem('confirm');

    this.data = JSON.parse(localStorage.getItem('adDetail'));
    // console.log('Ad data ', this.data);
    // console.log('Applications length', this.data.apply.length);
    if (this.data.apply) {
      this.totalApp = this.data.apply.length;
    }
    if (this.data.confirmEmployee) {
      if (this.data.confirmEmployee.length === this.data.requiredEmployees) {
        this.getAllEmployees = true;
      }
      this.acceptedEmploye = true;
      this.totalConfirm = this.data.confirmEmployee.length;
    } else {
      this.acceptedEmploye = false;
    }

    // console.log('Applications length', this.data.apply.length);
    // console.log('Confirmation length', this.data.confirmation.length);

    this.option1 = this.data.condition1;
    // console.log(this.option1 + " " + this.option2 + " " + this.option3 + " ")
    this.option2 = this.data.condition2;
    this.option3 = this.data.condition3;
    // for wage type daily or per hour
    if (this.data.wageType === 'DAILY') {
      this.formatType = 'Tag';
      // console.log("wageFormat " + this.formatType);
    } else {
      this.formatType = 'Stunde';
      // console.log("wageFormat "+this.formatType);
    }

    // if (this.data.requiredEmployees ) {

    // }


  }

  // <!-- dont show this one, =>  once the employer got all his employees -->
  navigateApplications() {
    if (this.data.id === undefined) {
      alert('Sorry! You have not any application');
      // this.navController.navigateForward('/employer/ads/ad/applications');
    } else {
      // console.log('Doc id is ', localStorage.getItem('AdId'));
      localStorage.setItem('AdId', this.data.id);
      this.navController.navigateForward('/employer/ads/ad/applications');

    }
  }

  // <!-- show this one only if the employer accepted at least one employee -->
  navigateConfirmedApplications() {
    this.navController.navigateForward('/employer/ads/ad/applications/confirmed');
  }

}
