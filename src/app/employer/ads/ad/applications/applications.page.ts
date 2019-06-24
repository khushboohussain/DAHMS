import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {

  constructor(private navController: NavController) {}

  navigateApplication() {
    this.navController.navigateForward("/employer/ads/ad/applications/application");
  }

  ngOnInit() {
  }

}
