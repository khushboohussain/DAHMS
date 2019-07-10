import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.page.html',
  styleUrls: ['./confirmed.page.scss'],
})
export class ConfirmedPage implements OnInit {

  getAllAds: any;
  data: any = {};

  constructor(private navController: NavController) { }

  ngOnInit() {
    this.getAllAds = JSON.parse(localStorage.getItem('adDetail'));
    console.log('data', this.getAllAds.confirmEmployee);
    this.data = this.getAllAds.confirmEmployee;
  }


  navigateApplication(data) {
    // console.log('id is ', data.uid);
    localStorage.setItem('confirm', JSON.stringify(true));
    localStorage.setItem('appliedId', data.uid);
    this.navController.navigateForward('/employer/ads/ad/applications/application');
  }

}
