import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private toastController: ToastController, private navController: NavController) {}

  async sendApplication() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Möchten Sie verbindlich für diese Stelle bewerben?',
      buttons: [{
        text: 'Verbindliche Bewerbung abschicken',
        handler: () => {
          this.navController.navigateBack("/employee/appointments");
          this.confirmation("Sie haben sich erfolgreich beworben.");
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
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  ngOnInit() {
  }

}
