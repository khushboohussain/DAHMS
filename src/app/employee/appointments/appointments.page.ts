import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: 'appointments.page.html',
  styleUrls: ['appointments.page.scss']
})
export class AppointmentsPage implements OnInit {

  currentUrl: string;
  userType;

  constructor(private navController: NavController, private router: Router) { 
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  navigateAppointment() {
    this.navController.navigateForward("/employee/appointments/appointment");
  }

  navigateAds() {
    this.navController.navigateForward("/employee/appointments/ads");
  }

  ngOnInit() {
  }
  
}