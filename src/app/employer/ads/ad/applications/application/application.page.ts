import { Component, OnInit, NgZone } from '@angular/core';
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
  // name: string;
  licenseType = '';
  otherQualifications: boolean;
  otherQual: any;
  isConfirmApp: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(public actionSheetController: ActionSheetController, private toastController: ToastController, private navController: NavController, public api: ApiService,
    private ngzone: NgZone, private helper: HelperService) { }

  ngOnInit() {
    // console.log(localStorage.getItem('appliedId'));
    this.api.getEmployeeData(localStorage.getItem('appliedId')).subscribe(res => {
      this.userDetail = res;
      this.otherQual = this.userDetail.qualification;
      // console.log('Qualification Data ', this.userDetail.qualification);
      // console.log('otherQyal Data ', this.otherQual);
    }, err => {
      console.log('errors!', err.message);
    });
    if (this.userDetail.führerscheinklasse === 'NO') {
      this.licenseType = 'Es wird kein Führerschein benötigt';
    } else if (this.userDetail.führerscheinklasse === 'BENEFICIAL') {
      this.licenseType = 'Führerschein wäre vorteilhaft';
    } else if (this.userDetail.führerscheinklasse === 'B') {
      this.licenseType = 'Führerschein B vorteilhaft';
    } else {
      this.licenseType = 'Führerschein B1 vorteilhaft';
    }

    this.isConfirmApp = JSON.parse(localStorage.getItem('confirm'));
    // console.log(this.isConfirmApp);

    if (this.otherQual !== '' || this.otherQual !== undefined) {
      this.otherQualifications = false;
      // this.otherQual = this.userDetail.qualification;
      // console.log('Other Qualifications ', this.otherQualifications);
      // console.log('Other Qual ', this.userDetail.qualification.length);
    } else {
      this.otherQualifications = true;
      // console.log('Other Qualifications ', this.otherQualifications);
      // console.log('Other Qualification ', this.otherQualifications);
    }

  }


  async answerOptions() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Geben Sie Ihrem Bewerber eine Rückmeldung.',
      buttons: [{
        text: 'Verbindliche Zusage abschicken',
        handler: () => {
          // Confirmation of application
          let ad = JSON.parse(localStorage.getItem('adDetail'));
          // console.log('ad is ', ad);
          if (ad.confirmEmployee) {
            ad.confirmEmployee.push({
              name: this.userDetail.vorname + '' + this.userDetail.nachname,
              uid: localStorage.getItem('appliedId')
            });
            ad.confirmEmployeeIds.push(localStorage.getItem('appliedId'));
          } else {
            ad.confirmEmployee = [];
            ad.confirmEmployeeIds = [];
            ad.confirmEmployee.push({
              name: this.userDetail.vorname + '' + this.userDetail.nachname,
              uid: localStorage.getItem('appliedId')
            });
            ad.confirmEmployeeIds.push(localStorage.getItem('appliedId'));
          }
          // console.log('detail is ', ad);
          const x = ad.apply.findIndex(data => data.uid === localStorage.getItem('appliedId'));
          if (x > -1) {
            ad.apply.splice(x, 1);
            delete ad.id;
            // console.log(ad);
            this.api.updateAds(localStorage.getItem('AdId'), ad).then(res => {
              this.helper.presentToast('Sie haben erfolgreich dem Bewerber eine Zusage gesendet.');
              // this.confirmation('Sie haben erfolgreich dem Bewerber eine Zusage gesendet.');
              // this.navController.pop();
              this.navController.navigateBack('/employer/ads/ad/applications');

            });
          }
          // this.ngzone.run(this.navController.navigateBack('/employer/ads/ad/applications'));
        }

      }, {
        text: 'Verbindliche Absage abschicken',
        handler: () => {
          // Rejection of application
          let ad = JSON.parse(localStorage.getItem('adDetail'));
          // console.log(' is ', ad);
          if (ad.rejectedEmployee) {
            ad.rejectedEmployee.push({
              name: this.userDetail.vorname + '' + this.userDetail.nachname,
              uid: localStorage.getItem('appliedId')
            });
          } else {
            ad.rejectedEmployee = [];
            ad.rejectedEmployee.push({
              name: this.userDetail.vorname + '' + this.userDetail.nachname,
              uid: localStorage.getItem('appliedId')
            });
            const x = ad.apply.findIndex(data => data.uid === localStorage.getItem('appliedId'));
            if (x > -1) {
              ad.apply.splice(x, 1);
              delete ad.id;
              this.api.updateAds(localStorage.getItem('AdId'), ad).then(res => {
                // this.confirmation('Sie haben erfolgreich dem Bewerber eine Absage gesendet.');
                this.helper.presentToast('Sie haben erfolgreich dem Bewerber eine Absage gesendet.');
                this.navController.navigateBack('/employer/ads/ad/applications');
              });
            }
          }
          // console.log('detail is ', ad);

        }
      }, {
        text: 'Abbrechen',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

  // async confirmation(message) {
  //   const toast = await this.toastController.create({
  //     message: message,
  //     duration: 1500,
  //     position: 'top'
  //   });
  //   toast.present();
  // }



}
