import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.page.html',
  styleUrls: ['./employers.page.scss'],
})
export class EmployersPage implements OnInit {

  currentUrl: string;
  userType;
  userData: any;
  totalRecord: number;

  // tslint:disable-next-line: max-line-length
  constructor(public actionSheetController: ActionSheetController, private navController: NavController, private router: Router, public api: ApiService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  ngOnInit() {

    this.api.getAllEmployer().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const did = a.payload.doc.id;
      // console.log(did);
      return { did, ...data };
    })))
      .subscribe(res => {
        this.userData = res;
        this.totalRecord = res.length;
        // console.log(res);
        console.log(res.length);
        // console.log(this.totalRecord);
        // console.log(res);
        // console.log(this.getAds.did);
      }, err => {
        console.log(err.message);
      });

    console.log('data ', this.userData);

  }

  takeAction() {
    this.adOptions();
  }
  async adOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Take Action',
      buttons: [
        {
          text: 'Alle Termine gleich',
          handler: () => {
            // localStorage.setItem('actionController', JSON.stringify(true));
            // localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
            this.navController.navigateForward('/employer/ads/create/step2');
          }
        },
        {
          text: 'Einzelne Termine bearbeiten',
          handler: () => {
            // localStorage.setItem('actionController', JSON.stringify(false));
            // localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
            this.navController.navigateForward('/employer/ads/create/step2');
          }
        }, {
          text: 'Abbrechen',
          role: 'cancel',
          handler: () => { }
        }]
    });
    await actionSheet.present();

  }

  navigateEmployer(data) {
    // console.log(data.did);
    // localStorage.setItem('empId', data.did);
    this.api.getEmployerData(data.did).subscribe(res => {
      localStorage.setItem('empData', JSON.stringify(res));
      this.navController.navigateForward('/admin/employers/employer');
    }, err => {
      alert(err.message);
    });
  }




}
