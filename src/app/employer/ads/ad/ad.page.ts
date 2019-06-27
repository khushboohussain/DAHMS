import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.page.html',
  styleUrls: ['./ad.page.scss'],
})
export class AdPage implements OnInit {

  data: any = {};
  option: boolean;
  option1: boolean;

  constructor(private navController: NavController, private api: ApiService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('AdData'));
    console.log(this.data);
  }


  navigateApplications() {
    this.navController.navigateForward("/employer/ads/ad/applications");
  }

  navigateConfirmedApplications() {
    this.navController.navigateForward("/employer/ads/ad/applications/confirmed");
  }

}
