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
  licenseTypes = [];
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
    // console.log(localStorage);

    localStorage.removeItem('confirm');

    this.data = JSON.parse(localStorage.getItem('adDetail'));
    let id = this.data.did;
    // console.log(this.data);

    this.totalApp = this.data.apply.length;
    this.api.getAd(this.data.did)
      .subscribe(res => {
        this.data = res;
        this.data.did = id;
        this.totalApp = this.data.apply.length;
        localStorage.setItem('adDetail', JSON.stringify(this.data));
        if (this.data.confirmEmployee.length !== 0) {
          this.acceptedEmploye = true;
          this.totalConfirm = this.data.confirmEmployee.length;
          if (this.data.confirmEmployee.length === this.data.requiredEmployees) {
            this.getAllEmployees = true;
            this.data.status = 'close';
            const id = this.data.did;
            delete this.data['did'];

            this.api.updateAds(id, this.data).then(() => {
              this.data.did = id;
            });
          } else {
            this.getAllEmployees = false;
          }
        } else {
          this.acceptedEmploye = false;
          this.getAllEmployees = false;
        }

      });


    this.option1 = this.data.condition1;
    this.option2 = this.data.condition2;
    this.option3 = this.data.condition3;
    // console.log('%c next Line', 'background: #222; color: #bada55');
    if (this.data.step2) {
      this.step2 = this.data.step2;

      for (let index = 0; index < this.step2.length; index++) {
        if (this.step2[index].wageType === 'DAILY') {
          // this.formatType.push('Tag');
          this.formatType[index] = 'Tag';
          // console.log('wageFormat ' + this.formatType);
        } else {
          // this.formatType.push('Stunde');
          this.formatType[index] = 'Stunde';
        }
        if (this.step2[index].drivingLinse === 'NO') {
          this.licenseTypes[index] = 'Kein Führerschein';
        } else if (this.step2[index].drivingLinse === 'BENEFICIAL') {
          this.licenseTypes[index] = 'Führerschein vorteilhaft';
        } else {
          this.licenseTypes[index] = this.step2[index].drivingLinse;
        }

      }
    } else {
      if (this.data.wageType === 'DAILY') {
        this.formatTypes = 'Tag';
      } else {
        this.formatTypes = 'Stunde';
      }


      if (this.data.drivingLinse === 'NO') {
        this.licenseType = 'Kein Führerschein';
      } else if (this.data.drivingLinse === 'BENEFICIAL') {
        this.licenseType = 'Führerschein vorteilhaft';
      } else {
        this.licenseType = this.data.drivingLinse;
      }

    }


  } // ngOnit end

  // <!-- dont show this one, =>  once the employer got all his employees -->
  navigateApplications() {
    if (!this.data.did) {
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
