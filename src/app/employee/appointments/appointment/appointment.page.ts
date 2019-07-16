import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  AdData;
  feeType;

  constructor(public actionSheetController: ActionSheetController, private toastController: ToastController, private navController: NavController, private api: ApiService) { }

  async cancelAppointment() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Möchten Sie den Termin verbindlich absagen?',
      buttons: [{
        text: 'Verbindliche Absage abschicken',
        handler: () => {
          this.deleteAppointment();
          this.navController.navigateBack('/employee/appointments');
          this.confirmation('Sie haben erfolgreich den Termin abgesagt.');
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
    this.getAds();

    if (this.AdData.wageType == 'DAILY') {

      this.feeType = 'tag';
    } else {
      this.feeType = '€';
    }
  }

  getAds() {
    this.AdData = JSON.parse(localStorage.getItem('data'));
  }

  deleteAppointment() {
    const x = this.AdData.confirmEmployee.findIndex(data => data.uid === localStorage.getItem('uid'));
    const y = this.AdData.confirmEmployeeIds.findIndex(data => data === localStorage.getItem('uid'));
    if (x > -1) {
      this.AdData.confirmEmployee.splice(x, 1);
    }
    if (y > -1) {
      this.AdData.confirmEmployeeIds.splice(y, 1);
    }
    this.api.updateAds(this.AdData.id, this.AdData);

  }

}
