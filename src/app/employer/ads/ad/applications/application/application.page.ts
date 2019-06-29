import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private toastController: ToastController, private navController: NavController) { }

  ngOnInit() {
  }


  async answerOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Geben Sie Ihrem Bewerber eine Rückmeldung.',
      buttons: [{
        text: 'Verbindliche Zusage abschicken',
        handler: () => {
          this.navController.navigateBack("/employer/ads/ad/applications");
          this.confirmation("Sie haben erfolgreich dem Bewerber eine Zusage gesendet.");
        }
      }, {
        text: 'Verbindliche Absage abschicken',
        handler: () => {
          this.navController.navigateBack("/employer/ads/ad/applications");
          this.confirmation("Sie haben erfolgreich dem Bewerber eine Absage gesendet.");
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



}
