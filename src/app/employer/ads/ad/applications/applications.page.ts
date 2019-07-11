import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {

  getAllAds: any;
  data: any = {};

  constructor(private navController: NavController) { }

  ngOnInit() {
    localStorage.removeItem('confirm');

    this.getAllAds = JSON.parse(localStorage.getItem('adDetail'));
    // console.log('data', this.getAllAds.apply);
    this.data = this.getAllAds.apply;

    // this.api.getEmployeerAds(localStorage.getItem('uid'))
    //   .pipe(map(actions => actions.map(a => {
    //     const data = a.payload.doc.data();
    //     const did = a.payload.doc.id;
    //     // console.log(did);
    //     return { did, ...data };
    //   })))
    //   .subscribe(res => {
    //     console.log('response ', res);
    //     this.getAllAds = res.filter((result: any) => result.apply !== undefined && result.did === localStorage.getItem('AdId'));
    //     console.log('updated ad ', this.getAllAds);
    //     this.getAllAds = this.getAllAds.apply;
    //     console.log('data \n');
    //     console.log('did \n');
    //     console.log(this.getAllAds.apply);

    //   }, err => {
    //     console.log(err.message);
    //   });

  }

  navigateApplication(data) {
    // console.log('id is ', data.uid);
    localStorage.setItem('appliedId', data.uid);
    this.navController.navigateForward('/employer/ads/ad/applications/application');
  }


}
