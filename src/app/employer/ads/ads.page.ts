import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';


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

  constructor(private navController: NavController,
    private helper: HelperService, private router: Router, private api: ApiService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {

    localStorage.removeItem('AdsData');
    localStorage.removeItem('AdId');
    localStorage.removeItem('confirm');
    localStorage.removeItem('appliedId');
    localStorage.removeItem('adDetail');

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
      }, err => {
        console.log(err.message);
      });
  }

  navigateAd(data) {
    // console.log('docID is ', data.did);
    localStorage.setItem('AdId', data.id);
    localStorage.setItem('adDetail', JSON.stringify(data));
    this.helper.setAdDetails(data);
    this.navController.navigateForward('/employer/ads/ad');

  }

  // check payment method is integrated or not
  navigateCreateAd() {
    this.navController.navigateForward('/employer/ads/create/step1');

  }

}
