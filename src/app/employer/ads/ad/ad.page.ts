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
  option1: boolean;
  option2: boolean;
  option3: boolean;
  formatType: string;


  constructor(private navController: NavController, private api: ApiService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('AdData'));
    console.log(this.data);
    this.option1 = this.data.condition1;
    // console.log(this.option1 + " " + this.option2 + " " + this.option3 + " ")
    this.option2 = this.data.condition2;
    this.option3 = this.data.condition3
    // for wage type daily or per hour
    if (this.data.wageType == 'DAILY') {
      this.formatType = 'Tag';
      // console.log("wageFormat " + this.formatType);
    }
    else {
      this.formatType = 'Stunde';
      // console.log("wageFormat "+this.formatType);
    }
    
    // if (this.data.requiredEmployees ) {
      
    // }


  }

  // <!-- dont show this one, =>  once the employer got all his employees -->
  navigateApplications() {
    this.navController.navigateForward("/employer/ads/ad/applications");
  }

  // <!-- show this one only if the employer accepted at least one employee -->
  navigateConfirmedApplications() {
    this.navController.navigateForward("/employer/ads/ad/applications/confirmed");
  }

}
