import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {

  getAllAds: any;
  data: any = [];

  constructor(private navController: NavController, private api: ApiService, private helper: HelperService) { }

  ngOnInit() {
    console.log(localStorage);
    localStorage.removeItem('confirm');

    this.getAllAds = JSON.parse(localStorage.getItem('adDetail'));

    // this.helper.getAdDetails()
    //   .subscribe(res => {
    //     this.getAllAds = res;
    //   });
    // this.getAllAds = JSON.parse(localStorage.getItem('adDetail'));
    // this.api.getAd(localStorage.getItem('AdId')).subscribe(res => {
    // this.getAllAds = res;
    console.log('data', this.getAllAds);
    // localStorage.setItem('adDetail', JSON.stringify(res));

    if (this.getAllAds.apply.length > 0) {
      this.data = this.getAllAds.apply;
    } else {

    }

    // });


  }

  navigateApplication(data) {
    // console.log('id is ', data.uid);
    localStorage.setItem('appliedId', data.uid);
    this.navController.navigateForward('/employer/ads/ad/applications/application');
  }

  navigateBack(){
    this.navController.pop();
  }


}
