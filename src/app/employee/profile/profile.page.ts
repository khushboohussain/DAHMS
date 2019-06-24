import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

  currentUrl: string;
  userType;
  
  constructor(private navController: NavController, private router: Router) { 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  navigateDetails() {
    this.navController.navigateForward("/employee/profile/details");
  }

  navigateQualifications() {
    this.navController.navigateForward("/employee/profile/qualifications");
  }

  navigateStart() {
    this.navController.navigateRoot("/start");
  }

  ngOnInit() {}
}
