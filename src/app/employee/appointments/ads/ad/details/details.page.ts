import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  AdData;
  feeType: string;
  license: string;
  apply=[];
  getEmployeeData;
  employeeName;

  constructor(public actionSheetController: ActionSheetController, private api:ApiService, private toastController: ToastController, private navController: NavController) { }

  async sendApplication() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Möchten Sie verbindlich für diese Stelle bewerben?',
      buttons: [{
        text: 'Verbindliche Bewerbung abschicken',
        handler: () => {
          this.updateAds();
          this.navController.navigateBack("/employee/appointments");
          this.confirmation("Sie haben sich erfolgreich beworben.");
        }
      }, {
        text: 'Abbrechen',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

  async confirmation(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  ngOnInit() {
    this.getAds();
    this.GetEmployeeData();
    if (this.AdData.wageType == "DAILY") {

      this.feeType = 'tag';
    } else {
      this.feeType = '€';
    }
    
    if (this.AdData.drivingLinse == "B"){
      this.license = 'Führerscheinklasse';
    }
    else if(this.AdData.drivingLinse == "NO"){
      this.license = 'Es wird kein Führerschein benötigt';
    }
    else{
      this.license = 'Führerschein wäre vorteilhaft, kein Muss.'
    }
  }

  getAds() {
    this.AdData = JSON.parse(localStorage.getItem('data'));
   
  }

  GetEmployeeData(){
    this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(res => {
      this.getEmployeeData = res;
      this.employeeName = (this.getEmployeeData.vorname +' '+ this.getEmployeeData.nachname)
      // console.log(this.employeeName)
  })
}

  updateAds(){
  //   if(this.AdData.apply=[]){
  //   this.AdData.apply = [{'uid':localStorage.getItem('uid'), 'name':this.employeeName}];
  //   this.api.updateAds(this.AdData.id, this.AdData)
  //   .then(after => {

  //   });
  // }
    this.AdData.apply.push({'uid':localStorage.getItem('uid'), 'name':this.employeeName})
    this.api.updateAds(this.AdData.id, this.AdData)
    .then(after => {

    });
    
  }
  isApply(){
    if(this.AdData.apply.map(data => {return data.uid;}).indexOf(localStorage.getItem('uid')) > -1){
       return true
    }else{
       return false
    }
  }

}


