import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-ads',
  templateUrl: 'ads.page.html',
  styleUrls: ['ads.page.scss']
})
export class AdsPage {

  currentUrl: string;
  userType;
  getAds: any;
  data;

  constructor(private navController: NavController, private router: Router, private api: ApiService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {

    localStorage.removeItem('AdsData');
    localStorage.removeItem('AdId');
    localStorage.removeItem('confirm');
    localStorage.removeItem('appliedId');

    // console.log(localStorage.getItem('uid'))
    this.api.getEmployeerAds(localStorage.getItem('uid'))
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const did = a.payload.doc.id;
        // console.log(did);
        return { did, ...data };
      })))
      .subscribe(res => {
        this.getAds = res;
        // console.log('data \n');
        // console.log(res.length);
        // console.log('did \n');
        // console.log(this.getAds.did);
      }, err => {
        console.log(err.message);
      });



  }

  navigateAd(data) {
    // console.log("docID is " + data.did);

    this.api.getAd(data.did).subscribe(res => {
      localStorage.setItem('adDetail', JSON.stringify(res));
      // console.log("res");
      // console.log(res);
      this.navController.navigateForward('/employer/ads/ad');
    }, err => {
      console.log(err.message);
    });
  }

  // check payment method is integrated or not
  navigateCreateAd() {
    this.navController.navigateForward('/employer/ads/create/step1');

  }

}
