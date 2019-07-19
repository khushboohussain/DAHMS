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
    localStorage.removeItem('empId');
    localStorage.removeItem('empData');

    this.getAllEmployers();
    // console.log(this.userData);


  }

  getAllEmployers() {
    this.api.getAllEmployer().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const did = a.payload.doc.id;
      // console.log(did);
      return { did, ...data };
    }))).subscribe(res => {
      this.userData = res;
      if (res !== undefined) {
        this.totalRecord = res.length;
        // console.log(this.totalRecord);

      } else {
        this.totalRecord = 0;
        // console.log(this.totalRecord);
      }
      // console.log(this.userData);
    }, err => {
      console.log(err.message);
    });


  }

  takeAction() {
    this.adOptions();
  }
  async adOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Take Action',
      buttons: [
        {
          text: 'Download',
          handler: () => {
            alert('not clear!');
            // localStorage.setItem('actionController', JSON.stringify(true));
            // localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
            // this.navController.navigateForward('/employer/ads/create/step2');
          }
        },
        // {
        //   text: 'Einzelne Termine bearbeiten',
        //   handler: () => {
        //     // localStorage.setItem('actionController', JSON.stringify(false));
        //     // localStorage.setItem('continuoueCheck', JSON.stringify(this.continuoueCheck));
        //     this.navController.navigateForward('/employer/ads/create/step2');
        //   }
        // }, 
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => { }
        // },
        {
          text: 'Download',
          role: '',
          handler: () => { alert('not clear about download cls files'); }
        }]
    });
    await actionSheet.present();

  }

  onSearchChange(value: string) {
    if (value === '') {
      this.getAllEmployers();
    } else {
      const y = value.toLowerCase();
      const x = this.userData.filter(data => (data.vorname + ' ' + data.nachname).toLowerCase().indexOf(y) > -1);
      if (x.length > 0) {
        this.userData = x;
      } else {
        this.userData = [];
      }

    }
  }

  navigateEmployer(data) {
    // console.log(data.did);
    localStorage.setItem('empId', data.did);
    localStorage.setItem('empData', JSON.stringify(data));
  }




}
