import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import * as moment from 'moment';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  currentUrl: string;
  userType;

  NotificationType;
  today = [];
  yesterday = [];
  older = [];

  constructor(private navController: NavController, private router: Router, private helper: HelperService, private api: ApiService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }


  ngOnInit() {
    localStorage.removeItem('appliedId');
    localStorage.removeItem('confirm');

    // console.log(localStorage.getItem('uid'));

    this.api.getEmployeerNotifications(localStorage.getItem('uid'))
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const did = a.payload.doc.id;
        return { did, ...data };
      })))
      .subscribe((res: Array<any>) => {
        // console.log(res);

        this.NotificationType = res.filter(data => data.type === 'cancelled' || data.type === 'apply');
        this.today = this.NotificationType.filter(data => {
          if (this.helper.convertDate(data.date.toDate()) === this.helper.convertDate(new Date())) {
            return data;
          }
        });

        this.yesterday = this.NotificationType.filter(data => {
          const today = moment(this.helper.convertDate(new Date()));
          const otherDate = moment(this.helper.convertDate(data.date.toDate()));
          if (today.diff(otherDate, 'days') === 1) {
            return data;
          }
        });

        this.older = this.NotificationType.filter(data => {
          const today = moment(this.helper.convertDate(new Date()));
          const otherDate = moment(this.helper.convertDate(data.date.toDate()));
          if (today.diff(otherDate, 'days') > 1 && today.diff(otherDate, 'days') <= 7) {
            return data;
          }
        });


      });
  }

  navigateApplication(data) {
    console.log(data);

    localStorage.setItem('appliedId', data.uid);

    if (data.type === 'apply') {

      // this.navController.navigateForward('/employer/ads/ad/applications/application');

    } else {

      // localStorage.setItem('appliedId', data.uid.uid);
      localStorage.setItem('confirm', JSON.stringify(true));
      // localStorage.setItem('appliedId', data.uid);
      // this.navController.navigateForward('/employer/ads/ad/applications/application');

    }

  }


}
