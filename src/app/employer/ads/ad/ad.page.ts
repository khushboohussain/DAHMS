import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.page.html',
  styleUrls: ['./ad.page.scss'],
})
export class AdPage implements OnInit {

  constructor(private navController: NavController) {}

  navigateApplications() {
    this.navController.navigateForward("/employer/ads/ad/applications");
  }

  navigateConfirmedApplications() {
    this.navController.navigateForward("/employer/ads/ad/applications/confirmed");
  }

  ngOnInit() {
  }

}
