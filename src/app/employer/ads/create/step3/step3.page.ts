import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {

  constructor(private navController: NavController) { }

  navigateHome() {
  localStorage.removeItem('AdsData');
    this.navController.navigateRoot("/employer/ads");
  }

  ngOnInit() {
  }

}
