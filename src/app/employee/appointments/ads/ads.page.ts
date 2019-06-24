import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {

  constructor(private navController: NavController) { }

  navigateAd() {
    this.navController.navigateForward("employee/appointments/ads/ad");
  }

  ngOnInit() {
  }

}
