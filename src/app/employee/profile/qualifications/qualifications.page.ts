import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.page.html',
  styleUrls: ['./qualifications.page.scss'],
})
export class QualificationsPage implements OnInit {

  constructor(public toastController: ToastController, private navController: NavController) {}

  async update() {
    const toast = await this.toastController.create({
      message: 'Erfolgreich aktualisiert.',
      position: 'top',
      duration: 1000
    });
    toast.present();
    this.navController.navigateBack("/employee/profile");
  }

  ngOnInit() {
  }

}
