import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import * as moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class NotificationsPage implements OnInit {

  currentUrl: string;
  userType;
  NotificationType;
  today = [];
  yesterday = [];
  older = [];

  constructor(private navController: NavController, private router: Router, private api: ApiService, private helper: HelperService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }


  ngOnInit() {
    // console.log(localStorage.getItem('uid'));
    this.api.getNotification(localStorage.getItem('uid'))
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const did = a.payload.doc.id;
        return { did, ...data };
      })))
      .subscribe((res: Array<any>) => {
        // console.log(res);

        this.NotificationType = res.filter(data => data.type === 'offer' || data.type === 'rejected' || data.type === 'new');

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


  navigateAd(data) {
    console.log(data);

    // this.navController.navigateForward('/employee/appointments/ads/ad');
  }

  navigateAppointment(data) {
    console.log(data);
    localStorage.removeItem('data');

    if (data.type === 'offer') {
      this.api.getAd(data.notificationId).subscribe(res => {
        // console.log(res);
        localStorage.setItem('data', JSON.stringify(res));
        this.navController.navigateForward('/employee/appointments/appointment');
      });

    } else if (data.type === 'new') {
      this.api.getAd(data.notificationId).subscribe(res => {
        // console.log(res);
        localStorage.setItem('data', JSON.stringify(res));
        this.navController.navigateForward('/employee/appointments/ads/ad');
      });

    } else {
      this.api.getAd(data.notificationId).subscribe(res => {
        // console.log(res);
        localStorage.setItem('data', JSON.stringify(res));
        this.navController.navigateForward('/employee/appointments/ads/ad');
      });

    }


  }




}
