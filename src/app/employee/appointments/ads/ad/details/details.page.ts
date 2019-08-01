import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  AdData;
  feeType: string;
  license: string;
  apply = [];
  getEmployeeData;
  employeeName;
  type = '';
  step2: any = [];
  qualification;
  ApplyFor: string;

  // tslint:disable-next-line: max-line-length
  constructor(public actionSheetController: ActionSheetController, private api: ApiService, private toastController: ToastController, private navController: NavController, private route: ActivatedRoute) { }


  ngOnInit() {

    this.route.params.subscribe(res => {
      if (res.type) {
        this.type = res.type;
      }
    });

    this.getAds();
    this.GetEmployeeData();

  }

  getAds() {
    this.AdData = JSON.parse(localStorage.getItem('data'));
    // console.log('detail', this.AdData);

    if (this.AdData.step2) {
      const q = JSON.parse(localStorage.getItem('qual'));
      const oQ = JSON.parse(localStorage.getItem('otherQual'));
      if (q > -1 && oQ === -1) {
        this.step2 = this.AdData.step2[q];

      } else {
        this.step2 = this.AdData.step2[q].otherQualification[oQ];
      }

      // console.log('this.step2[i]', this.step2);
      if (this.step2.wageType === 'DAILY') {
        this.feeType = 'Tag';
      } else {
        this.feeType = 'Stunde';
      }

      if (this.step2.drivingLinse === 'B') {
        this.license = 'B';
      } else if (this.step2.drivingLinse === 'B1') {
        this.license = 'B1';
      } else if (this.step2.drivingLinse === 'NO') {
        this.license = 'Es wird kein Führerschein benötigt.';
      } else {
        this.license = 'Ein Führerschein ist vorteilhaft, aber nicht notwendig.';
      }
      this.ApplyFor = this.step2.qualification;
      // console.log(this.ApplyFor);
    } else {
      let i = JSON.parse(localStorage.getItem('otherQual'));
      if (i === -1) {
        this.qualification = this.AdData.qualification;
        if (this.AdData.wageType === 'DAILY') {
          this.feeType = 'Tag';
        } else {
          this.feeType = 'Stunde';
        }
        if (this.AdData.drivingLinse === 'B') {
          this.license = 'B';
        } else if (this.AdData.drivingLinse === 'B1') {
          this.license = 'B1';
        } else if (this.AdData.drivingLinse === 'NO') {
          this.license = 'Es wird kein Führerschein benötigt.';
        } else {
          this.license = 'Ein Führerschein ist vorteilhaft, aber nicht notwendig.';
        }
      } else {
        this.qualification = this.AdData.otherQualification[i].qualification;

        if (this.AdData.otherQualification[i].wageType === 'DAILY') {
          this.feeType = 'Tag';
        } else {
          this.feeType = 'Stunde';
        }

        if (this.AdData.otherQualification[i].drivingLinse === 'B') {
          this.license = 'B';
        } else if (this.AdData.otherQualification[i].drivingLinse === 'B1') {
          this.license = 'B1';
        } else if (this.AdData.otherQualification[i].drivingLinse === 'NO') {
          this.license = 'Es wird kein Führerschein benötigt.';
        } else {
          this.license = 'Ein Führerschein ist vorteilhaft, aber nicht notwendig.';
        }
      }
      this.ApplyFor = this.qualification;
      // console.log(this.ApplyFor);
    }

  }

  GetEmployeeData() {
    this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(res => {
      this.getEmployeeData = res;
      this.employeeName = (this.getEmployeeData.vorname + ' ' + this.getEmployeeData.nachname);
      // console.log(this.employeeName)
    });
  }

  updateAds() {
    //   if(this.AdData.apply=[]){
    //   this.AdData.apply = [{'uid':localStorage.getItem('uid'), 'name':this.employeeName}];
    //   this.api.updateAds(this.AdData.id, this.AdData)
    //   .then(after => {

    //   });
    // }
    this.AdData.apply.push(
      {
        'uid': localStorage.getItem('uid'),
        'applyFor': this.ApplyFor,
        'name': this.employeeName
      }
    );
    // console.log(this.AdData);
    // debugger;
    this.api.updateAds(this.AdData.id, this.AdData)
      .then(after => {
        if (this.type === 'notification') {
          let x = JSON.parse(localStorage.getItem('notification'));
          this.api.deleteNotification(x.did).then(goto => {
            this.navController.navigateRoot('/employee/appointments');
          });
        }
      });

  }
  isApply() {
    if (this.AdData.apply.map(data => data.uid).indexOf(localStorage.getItem('uid')) > -1) {
      return true;
    } else if (this.AdData.requiredEmployees === this.AdData.confirmEmployee.length) {
      return true;
    } else if (this.AdData.confirmEmployee.map(data => data.uid).indexOf(localStorage.getItem('uid')) > -1) {
      return true;
    } else {
      return false;
    }
  }
  async sendApplication() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Möchten Sie sich verbindlich für diese Stelle bewerben?',
      buttons: [{
        text: 'Verbindliche Bewerbung abschicken',
        handler: () => {
          this.updateAds();
          this.navController.navigateBack('/employee/appointments');
          this.confirmation('Sie haben sich erfolgreich beworben.');
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


}


