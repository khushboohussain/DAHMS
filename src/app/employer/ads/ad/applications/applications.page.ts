import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {
  getAllAds: any;

  constructor(private navController: NavController, public api: ApiService) { }

  ngOnInit() {
    this.api.getEmployeerAds(localStorage.getItem('uid'))
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const did = a.payload.doc.id;
        // console.log(did);
        return { did, ...data };
      })))
      .subscribe(res => {
        console.log('response ', res);
        this.getAllAds = res.filter(result => result.apply);
        // console.log('data \n');
        // console.log('did \n');
        console.log('updated ad', this.getAllAds);
      }, err => {
        console.log(err.message);
      });
  }

  navigateApplication(data) {
    console.log('id is ', data.apply[0]);
    localStorage.setItem('appliedId', data.apply[0]);
    this.navController.navigateForward('/employer/ads/ad/applications/application');
  }


}
