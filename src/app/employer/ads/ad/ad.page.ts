import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ad',
  templateUrl: './ad.page.html',
  styleUrls: ['./ad.page.scss'],
})
export class AdPage implements OnInit {

  data: any = {};
  step2: any = {}; // template 3 or for option3
  formatType = [];
  formatTypes: string; // for template 1 and 2
  option1: boolean;
  option2: boolean;
  option3: boolean;


  totalApp = 0;
  totalConfirm = 0;
  licenseType: string;
  getAllEmployees: boolean;
  acceptedEmploye: boolean;


  constructor(private navController: NavController,
     private api: ApiService, private helper: HelperService, private router: Router) { }

  ngOnInit() {
    console.log(localStorage);

    localStorage.removeItem('confirm');

    this.helper.getAdDetails()
      .subscribe(res => {
        console.log('%c next Line','background: #222; color: #bada55')
        console.log(res);
        this.data = res;
        this.totalApp = this.data.apply.length;
        
      });

    // this.data = JSON.parse(localStorage.getItem('adDetail'));
    // console.log('Ad data ', this.data);

    if (this.data.step2) {
      this.step2 = this.data.step2;

      for (let index = 0; index < this.step2.length; index++) {
        if (this.step2[index].wageType === 'DAILY') {
          this.formatType.push('Tag');
          // console.log('wageFormat ' + this.formatType);
        } else {
          this.formatType.push('Stunde');
        }
      }
    } else {
      if (this.data.wageType === 'DAILY') {
        this.formatTypes = 'Tag';
      } else {
        this.formatTypes = 'Stunde';
      }
    }

    // console.log('Applications length', this.data.did);
    // 
    // console.log(this.data.confirmEmployeeIds.length);
    if (this.data.confirmEmployee.length !== 0) {
      this.acceptedEmploye = true;
      this.totalConfirm = this.data.confirmEmployee.length;
      if (this.data.confirmEmployee.length === this.data.requiredEmployees) {
        this.getAllEmployees = true;
        this.data.status = 'close';
        const id = this.data.did;
        delete this.data['did'];
        this.api.updateAds(id, this.data)
          .then(res => { this.data.did = id; });
      } else {
        this.getAllEmployees = false;
      }
    } else {
      this.acceptedEmploye = false;
      this.getAllEmployees = false;
    }

    // console.log('Applications length', this.data.apply.length);
    // console.log('Confirmation length', this.data.confirmation.length);

    this.option1 = this.data.condition1;
    // console.log(this.option1 + " " + this.option2 + " " + this.option3 + " ")
    this.option2 = this.data.condition2;
    this.option3 = this.data.condition3;
    // for wage type daily or per hour

    if (this.data.drivingLinse === 'NO') {
      this.licenseType = 'Kein Führerschein';
    } else if (this.data.drivingLinse === 'BENEFICIAL') {
      this.licenseType = 'Führerschein vorteilhaft';
    } else {
      this.licenseType = this.data.drivingLinse;
    }

  } // ngOnit end

  // <!-- dont show this one, =>  once the employer got all his employees -->
  navigateApplications() {
    if (this.data.did === undefined) {
      alert('Sorry! You have not any application');
    } else {
      // console.log('Doc id is ', localStorage.getItem('AdId'));
      // this.navController.navigateForward('');
      this.router.navigate(['/employer/ads/ad/applications'])
    }
  }

  // <!-- show this one only if the employer accepted at least one employee -->
  navigateConfirmedApplications() {
    this.navController.navigateForward('/employer/ads/ad/applications/confirmed');
  }

}
