import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.page.html',
  styleUrls: ['./ad.page.scss'],
})
export class AdPage implements OnInit {
  AdData;
  qualification;
  location;

  constructor(private navController: NavController, private api: ApiService) { }

  navigateAdDetails() {
    this.navController.navigateForward('employee/appointments/ads/ad/details');
  }

  ngOnInit() {
    this.getAds();
  }

  getAds() {
    this.AdData = JSON.parse(localStorage.getItem('data'));
  }

}
