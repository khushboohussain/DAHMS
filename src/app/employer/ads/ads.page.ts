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
  getAds: any = {};
  data;

  constructor(private navController: NavController, private router: Router, private api: ApiService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  ngOnInit() {
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
        // console.log(res);
        // console.log('did \n');
        // console.log(this.getAds.did);
      }, err => {
        console.log(err.message);
      })



  }

  navigateAd(data) {
    // console.log("docID is " + data.did);

    this.api.getAd(data.did).subscribe(res => {
      localStorage.setItem('adId', data.did);
      localStorage.setItem('AdData', JSON.stringify(data));

      // console.log("res");
      // console.log(res);
      this.navController.navigateForward("/employer/ads/ad");
    }, err => {
      console.log(err.message);
    })
  }

  navigateCreateAd() {
    this.navController.navigateForward("/employer/ads/create/step1");
  }

}
