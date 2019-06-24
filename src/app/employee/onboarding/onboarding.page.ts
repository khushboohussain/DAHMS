import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  navigateHome() {
    this.navController.navigateRoot("/employee/appointments");
  }

}
