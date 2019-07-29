import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.page.html',
  styleUrls: ['./ad.page.scss'],
})
export class AdPage implements OnInit {

  AdData;
  qualification;
  location;
  type = '';
  step2;

  constructor(private navController: NavController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('index');

    this.getAds();
    this.route.params.subscribe(res => {
      if (res.type) {
        this.type = res.type;
      }
    });
  }

  getAds() {
    this.AdData = JSON.parse(localStorage.getItem('data'));
    // console.log('ad.page', this.AdData);
    if (this.AdData.condition3 === true) {
      this.step2 = this.AdData.step2;
      // for (let index = 0; index < this.step2.length; index++) {   
      // }

    } else {

    }

  }
  navigateAdDetails() {
    // localStorage.removeItem('data');
    // localStorage.setItem('data', JSON.stringify(this.AdData));

    if (this.type !== '') {
      this.router.navigate(['employee/appointments/ads/ad/details', {
        type: this.type
      }]);
    }
    else {
      this.navController.navigateForward('employee/appointments/ads/ad/details');
    }
  }
  navigateAdDetails2(index) {
    // console.log('index is ', index);
    localStorage.removeItem('index');

    localStorage.setItem('index', index);

    if (this.type !== '') {
      this.router.navigate(['employee/appointments/ads/ad/details', {
        type: this.type
      }]);
    }
    else {
      this.navController.navigateForward('employee/appointments/ads/ad/details');
    }

  }

}
