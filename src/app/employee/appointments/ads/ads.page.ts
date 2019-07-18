import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {

  getads;
  getEmployeedata;
  getAllads;
  jobTitle:'';
  qualification=[
     'SANITAETSHELFER',
     'RETTUNGSHELFER',
     'RETTUNGSSANITATER',
     'RETTUNGSASSISTENT',
     'NOTFALLSANITATER'
  ];

  constructor(private navController: NavController, private api:ApiService) { }

  navigateAd(item) {
    localStorage.setItem('data', JSON.stringify(item))
    this.navController.navigateForward("employee/appointments/ads/ad");
  }

  ngOnInit() {
    let x = [];
    this.qualification.forEach((a,i) => {
      if(a.toLowerCase() === localStorage.getItem('qualifikation').toLowerCase()){
        x = this.qualification.slice(i,this.qualification.length);
        // console.log(x)
      }
    });
    // this.getAdsData()

    this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(res =>{
      this.getEmployeedata = res;
      if(this.getEmployeedata.status === true){
        this.getAllAds(x)
      }
    })
              
            
  
   
  }

  // getAdsData(){
  //   this.api.getAdsByQualification(localStorage.getItem('qualifikation')).pipe(map((actions: any) => {
  //     return actions.map(a => {
  //       const data = a.payload.doc.data()
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     });
  //   })).subscribe(res =>{
  //       this.getads=res;
  //       //  console.log(res)
  //   })
  // }

  getAllAds(x){
    this.api.getAllAds().pipe(map((actions: any) => {
      return actions.map(a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })).subscribe(res =>{
        this.getAllads=res.filter( result => x.indexOf(result.qualification) > -1 );
        //  console.log(this.getAllads)
    })
  }
  

}
