import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  currentUrl: string;
  userType;
  
  constructor(private navController: NavController, private router: Router) { 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  navigateApplication() {
    this.navController.navigateForward("/employer/ads/ad/applications/application");
  }

  ngOnInit() {
  }

}
