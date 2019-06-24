import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ads',
  templateUrl: 'ads.page.html',
  styleUrls: ['ads.page.scss']
})
export class AdsPage {
  
  currentUrl: string;
  userType;
  
  constructor(private navController: NavController, private router: Router) { 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  navigateAd() {
    this.navController.navigateForward("/employer/ads/ad");
  }

  navigateCreateAd() {
    this.navController.navigateForward("/employer/ads/create/step1");
  }

  ngOnInit() {
  }
}
