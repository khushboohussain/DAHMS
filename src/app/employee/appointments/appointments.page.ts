import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-appointments',
  templateUrl: 'appointments.page.html',
  styleUrls: ['appointments.page.scss']
})
export class AppointmentsPage implements OnInit {

  currentUrl: string;
  userType;
  getads;
  getad;
  getEmployedata;
  data;

  constructor(private navController: NavController, private router: Router, private api: ApiService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = this.router.url);
  }

  navigateAppointment() {
    this.navController.navigateForward("/employee/appointments/appointment");
  }

  navigateAds(item) {
    localStorage.setItem('data', JSON.stringify(item))
    this.navController.navigateForward("/employee/appointments/ads");
  }

  ngOnInit() {
    this.getAdsData();
    this.getEmployeeData();
    this.data = {
      jobTitle: '',
      location: '',
      startDate: '',
      endDate: ''
    }
  }

  getAdsData() {
    this.api.getAllAds().pipe(map((actions: any) => {
      return actions.map(a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.did;
        return { id, ...data };

      });
    })).subscribe(res => {
      // console.log(res.id);
      this.getads = res.filter(result => result.confirmEmployeeIds.indexOf(localStorage.getItem('uid')) > -1)

      // this.getads= res.filter( result => result.confirmEmployeeIds.indexOf(localStorage.getItem('uid')) > -1)
      // console.log(this.getads)
      // this.getads=res;

      // if(this.getads[0].confirmEmployeeIds.indexOf(data => data.uid === localStorage.getItem('uid'))){
      //   this.api.getAd(localStorage.getItem('uid')).subscribe(res => {
      //     this.getad = res;
      //     console.log(this.getad)
      //   })
      // }else{
      //   console.log("no")
      // }
      // console.log(res)
    })
  }
  getEmployeeData() {
    this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(res => {
      this.getEmployedata = res;
      // console.log(this.getEmployedata);
      localStorage.setItem('qualifikation', this.getEmployedata.qualifikation)
    })
  }
}