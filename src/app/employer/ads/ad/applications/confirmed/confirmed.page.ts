import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.page.html',
  styleUrls: ['./confirmed.page.scss'],
})
export class ConfirmedPage implements OnInit {

  getAllAd: any;
  data: any = {};
  qualifications;

  constructor(private navController: NavController) { }

  ngOnInit() {
    localStorage.removeItem('appliedId');

    this.getAllAd = JSON.parse(localStorage.getItem('adDetail'));
    // console.log('data', this.getAllAd);

    if (this.getAllAd.step2) {
      for (let i = 0; i < this.getAllAd.step2.length; i++) {
        this.qualifications.push(this.getAllAd.step2[i].qualification);
      }
    } else {
      this.qualifications = this.getAllAd.qualification;
    }
    // console.log('confirm employee', this.getAllAd.confirmEmployee);

    this.data = this.getAllAd.confirmEmployee;
    // for (let index = 0; index < this.data.length; index++) {

    // }

  }

  navigateApplication(data) {
    // console.log('id is ', data.uid);
    localStorage.setItem('confirm', JSON.stringify(true));
    localStorage.setItem('appliedId', data.uid);
    this.navController.navigateForward('/employer/ads/ad/applications/application');
  }

}
