import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {

  constructor(private navController: NavController) { }

  navigateConfirmation() {
    this.navController.navigateRoot("/employer/ads/create/step3");
  }

  ngOnInit() {
  }

}
