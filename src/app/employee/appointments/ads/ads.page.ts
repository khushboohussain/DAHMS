import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { map, take } from 'rxjs/operators';
import * as haversine from 'haversine';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {

  getads;
  getEmployeedata;
  getAllads;
  jobTitle: '';
  qualification = [];
  // RETTUNGSSANITAETER

  step2 = [];

  constructor(private navController: NavController, private api: ApiService) { }



  ngOnInit() {

    let x = [];
    this.api.getPersonalQualification().subscribe((res: any) => {
      this.qualification = res.data;
      // console.log('own qualification', localStorage.getItem('qualifikation'));
      this.qualification.forEach((a, i) => {
        if (a.toLowerCase() === localStorage.getItem('qualifikation').toLowerCase()) {
          x = this.qualification.slice(i, this.qualification.length);
        }
      });
      // console.log('Accordingly ', x);
    });
    // this.getAdsData()

    this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(res => {
      this.getEmployeedata = res;
      if (this.getEmployeedata.status === true) {
        this.getAllAds(x);
      }
    });

  }


  navigateAd(item) {
    localStorage.setItem('data', JSON.stringify(item));
    this.navController.navigateForward('employee/appointments/ads/ad');
  }

  getAllAds(x) {
    this.api.getAllAds().pipe(map((actions: any) =>
      actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }
      )
    )).subscribe((res: Array<any>) => {
      // console.log(res);

      this.getAllads = res.filter(result => {
        const distance = haversine({
          latitude: this.getEmployeedata.latitude,
          longitude: this.getEmployeedata.longitude
        },
          {
            latitude: result.latitude,
            longitude: result.longitude
          });

        if (result.condition3 === true) {
          // this.getads = result;
          this.step2 = result.step2;
          for (let index = 0; index < this.step2.length; index++) {
            // tslint:disable-next-line: radix
            if (parseInt(this.getEmployeedata.Einsatzradius) >= distance && x.indexOf(result.step2[index].qualification) > -1) {
              return result;
            }
            if (this.step2[index].otherQualification.length > -1) {

              for (let xc = 0; xc < this.step2[index].otherQualification.length; xc++) {

                // tslint:disable-next-line: max-line-length
                if (parseInt(this.getEmployeedata.Einsatzradius) >= distance && x.indexOf(this.step2[index].otherQualification[xc].qualification) > -1) {
                  return result;
                }
              }
            }
          }

        } else {
          // tslint:disable-next-line: radix otherQualification
          if (parseInt(this.getEmployeedata.Einsatzradius) >= distance && x.indexOf(result.qualification) > -1) {
            return result;
          }
          if (result.otherQualification.length > -1) {
            for (let index = 0; index < result.otherQualification.length; index++) {
              // tslint:disable-next-line: max-line-length
              if (parseInt(this.getEmployeedata.Einsatzradius) >= distance && x.indexOf(result.otherQualification[index].qualification) > -1) {
                return result;
              }

            }
          }
        }
        // console.log(result);

      });
    });
  }


}
