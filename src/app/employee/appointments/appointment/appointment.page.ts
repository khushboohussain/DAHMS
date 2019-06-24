import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private toastController: ToastController, private navController: NavController) {}

  async cancelAppointment() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Möchten Sie den Termin verbindlich absagen?',
      buttons: [{
        text: 'Verbindliche Absage abschicken',
        handler: () => {
          this.navController.navigateBack("/employee/appointments");
          this.confirmation("Sie haben erfolgreich den Termin abgesagt.");
        }
      }, {
        text: 'Abbrechen',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

  async confirmation(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  ngOnInit() {
  }

}
