import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUrl: string;
  userType;

  constructor(private navController: NavController, private router: Router, private auth: AuthService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  navigateDetails() {
    this.navController.navigateForward("/employer/profile/details");
  }

  navigatePaymentMethods() {
    this.navController.navigateForward("/employer/profile/payment-methods");
  }

  navigateStart() {
    if (confirm("Are you sure to logout!")) {
      this.auth.logout();
      localStorage.clear();
      // this.navController.navigateRoot("/employer/profile");
      this.navController.navigateRoot("/start");
    }
    // this.navController.navigateRoot("/start");
  }

  ngOnInit() {
  }

}
