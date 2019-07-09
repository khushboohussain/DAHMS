import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {

  userDetail: any = {};
  licenseType = '';

  // tslint:disable-next-line: max-line-length
  constructor(public actionSheetController: ActionSheetController, private toastController: ToastController, private navController: NavController, public api: ApiService, private helper: HelperService) { }

  ngOnInit() {
    // console.log(localStorage.getItem('appliedId'));
    this.api.getEmployeeData(localStorage.getItem('appliedId')).subscribe(res => {
      this.userDetail = res;
      console.log('Received Data ', this.userDetail);
      /* BENEFICIAL
      NO
    If yes - FORMAT: Führerscheinklasse "DRIVING LICENSE TYPE", 
    else if no - FORMAT: Es wird kein Führerschein benötigt, 
    else if beneficial - FORMAT: Führerschein wäre vorteilhaft, kein Muss */

      if (this.userDetail.führerscheinklasse === 'NO') {
        this.licenseType = 'Es wird kein Führerschein benötigt';
      } else if (this.userDetail.führerscheinklasse === 'BENEFICIAL') {
        this.licenseType = 'Führerschein wäre vorteilhaft';
      }  else if (this.userDetail.führerscheinklasse === 'B') {
        this.licenseType = 'Führerschein B vorteilhaft';
      } else {
        this.licenseType = 'Führerschein B1 vorteilhaft';
      }

      console.log('Driving License ', this.userDetail.imageURL);

    });


  }


  async answerOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Geben Sie Ihrem Bewerber eine Rückmeldung.',
      buttons: [{
        text: 'Verbindliche Zusage abschicken',
        handler: () => {
          this.navController.navigateBack('/employer/ads/ad/applications');
          this.confirmation('Sie haben erfolgreich dem Bewerber eine Zusage gesendet.');
        }
      }, {
        text: 'Verbindliche Absage abschicken',
        handler: () => {
          this.navController.navigateBack('/employer/ads/ad/applications');
          this.confirmation('Sie haben erfolgreich dem Bewerber eine Absage gesendet.');
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
