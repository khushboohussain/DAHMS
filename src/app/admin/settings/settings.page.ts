import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  currentUrl: string;
  userType;

  constructor(private navController: NavController, private router: Router) { 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  navigateEmployer() {
    this.navController.navigateForward("/admin/employers/employer");
  }

  logout() {
    this.navController.navigateRoot("/start");
  }

  ngOnInit() {
  }

}
