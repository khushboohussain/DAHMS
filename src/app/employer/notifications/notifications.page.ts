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
  userData = [];
  NotificationData: any;

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
    localStorage.removeItem('adDetail');

    // console.log(localStorage.getItem('uid'));

    this.api.getEmployeerNotifications(localStorage.getItem('uid'))
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const did = a.payload.doc.id;
        return { did, ...data };
      })))
      .subscribe((res: Array<any>) => {
        // console.log('full response ', res);
        this.NotificationData = res;

        // this.userData = res.filter(data => data.uid === localStorage.getItem('uid'));
        // console.log('this user notification', this.userData);

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

        for (let i = 0; i < this.NotificationData.length; i++) {
          // console.log(this.NotificationData[i].type);

          if (this.NotificationData[i].type === 'apply' || this.NotificationData[i].type === 'cancelled') {
            this.api.getAd(this.NotificationData[i].notificationId).subscribe(ad => {
              // console.log('res', ad);
              if (ad === undefined) {
                this.api.deleteNotification(this.NotificationData[i].did).then(() => {
                  // console.log('deleted ');

                }, err => {
                  console.log('error in notification deleting', err.message);

                });

              } else {
                // const x = ad.apply.findIndex(data => data.uid === this.NotificationData[i].uid);
                // if (x < 0) {
                //   this.api.deleteNotification(this.NotificationData[i].did).then(() => {
                //     console.log('deleted ');

                //   }, err => {
                //     console.log('error in notification deleting', err.message);

                //   });
                // }

              }
            });
          }

        } // end of for loop


      });





  } // end of ngOnInIt

  navigateApplication(data) {
    console.log('data', data);

    // localStorage.removeItem('appliedId');
    // localStorage.removeItem('adDetail');
    // localStorage.removeItem('AdId');

    // localStorage.setItem('appliedId', data.uid);

    // this.api.getAd(data.notificationId).subscribe((ad: any) => {
    //   console.log('ad data', ad);

    //   localStorage.removeItem('confirm');

    //   const x = ad.apply.findIndex(res => res.uid === data.uid);
    //   if (x > -1) {
    //     localStorage.setItem('adDetail', JSON.stringify(ad));
    //     localStorage.setItem('confirm', JSON.stringify(false));
    //   } else {
    //     localStorage.setItem('adDetail', JSON.stringify(ad));
    //     localStorage.setItem('confirm', JSON.stringify(true));
    //   }

    // });


    // this.navController.navigateForward('/employer/ads/ad/applications/application');
    // this.router.navigate(['/employer/ads/ad/applications/application', {
    //   type: 'notification'
    // }]);

    localStorage.setItem('appliedId', data.uid);
    localStorage.setItem('notification', JSON.stringify(data));

    if (data.type === 'apply') {
      this.navController.navigateForward('/employer/ads/ad/applications/application');
      this.router.navigate(['/employer/ads/ad/applications/application', {
        type: 'notification'
      }]);
    } else {
      // localStorage.setItem('appliedId', data.uid.uid);
      localStorage.setItem('confirm', JSON.stringify(true));
      // localStorage.setItem('appliedId', data.uid);
      this.navController.navigateForward('/employer/ads/ad/applications/application');

    }

  }


}
