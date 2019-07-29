import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import * as moment from 'moment';
import { Subscription, Observable } from 'rxjs';
import { combineLatest } from 'rxjs';

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
  $newNotification: Observable<Array<any>>;
  $otherNotifications: Observable<Array<any>>;
  one: Array<any>;
  two: Array<any>;
  qualification = [
    'SANITAETSHELFER',
    'RETTUNGSHELFER',
    'RETTUNGSSANITAETER',
    'RETTUNGSASSISTENT',
    'NOTFALLSANITAETER',
    "ARZT",
    "ARZTRETTUNGSDIENST"
  ];

  constructor(private navController: NavController, private router: Router, private api: ApiService, private helper: HelperService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }


  ngOnInit() {

    // this.$newNotification = this.api.getNewAdNotification();
    // // where uid == empty
    // this.$otherNotifications = this.api.getNotifications(localStorage.getItem('uid'));
    // let x = [];
    // this.qualification.forEach((a, i) => {
    //   if (a.toLowerCase() === localStorage.getItem('qualifikation').toLowerCase()) {
    //     x = this.qualification.slice(i, this.qualification.length);
    //     console.log(x)
    //   }
    // });


    this.$newNotification = this.api.getNotifications(localStorage.getItem('uid'))
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const did = a.payload.doc.id;
        return { did, ...data };
      })));
    // .subscribe((res: Array<any>) => {
    //   console.log(res);
    //   this.one = res;
    // });

    // console.log(localStorage.getItem('uid'));
    this.$otherNotifications = this.api.getNewAdNotification()
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const did = a.payload.doc.id;
        return { did, ...data };
      })));
    combineLatest(this.$newNotification, this.$otherNotifications)
      .pipe(map(([one, two]) => [...one, ...two]))
      .subscribe((res:Array<any>) => {


        this.NotificationType = res.filter(data => (data.type === 'offer' || data.type === 'rejected' || data.type === 'new') && data.qualification.toLowerCase() === localStorage.getItem('qualifikation').toLowerCase()  );
        console.log(this.NotificationType);
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
    // .subscribe((res: Array<any>) => {
    //   console.log(res);
    //   this.two=res;
    //   


    // });


  }

  navigateAppointment(data) {
    console.log(data);
    localStorage.removeItem('data');
    localStorage.setItem('notification',JSON.stringify(data));
    if (data.type === 'offer') {
      this.api.getAd(data.notificationId).subscribe(res => {
        // console.log(res);
        localStorage.setItem('data', JSON.stringify({id: data.notificationId, ...res}));
        this.navController.navigateForward('/employee/appointments/appointment');
      });

    } else if (data.type === 'new') {
      this.api.getAd(data.notificationId).subscribe(res => {
        // console.log(res);
        localStorage.setItem('data', JSON.stringify({id: data.notificationId, ...res}));
        // this.navController.navigateForward('/employee/appointments/ads/ad');
        this.router.navigate(['/employee/appointments/ads/ad',{
          type: 'notification'
        }]);
      });

    } else {
      this.api.getAd(data.notificationId).subscribe(res => {
        // console.log(res);
        localStorage.setItem('data', JSON.stringify({id: data.notificationId, ...res}));
        this.navController.navigateForward('/employee/appointments/ads/ad');
      });

    }


  }




}
