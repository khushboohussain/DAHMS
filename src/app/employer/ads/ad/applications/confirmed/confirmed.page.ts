import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.page.html',
  styleUrls: ['./confirmed.page.scss'],
})
export class ConfirmedPage implements OnInit {

  constructor(private navController: NavController) { }

  navigateApplication() {
    this.navController.navigateForward("/employer/ads/ad/applications/application");
  }

  ngOnInit() {
  }

}
