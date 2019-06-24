import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {

  form: FormGroup;

  constructor(public actionSheetController: ActionSheetController, private navController: NavController, private fb: FormBuilder, private api: ApiService) {}

  

  ngOnInit() {
    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      address: ['', Validators.required],
      startDate: ['', Validators.required], 
      endDate: ['', Validators.required],
      continoueWork: ['', Validators.required],
      fastReply: ['', Validators.required]
    })
  }
  submit(form) {
    let data = {
      jobTitle: form.value.jobTitle,
      address: form.value.address,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      continoueWork: form.value.continoueWork,
      fastReply: form.value.fastReply,
    }
    console.log(data);
    this.adOptions();
  }
  async adOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Stelleneinstellung',
      buttons: [{
        text: 'Alle Termine gleich',
        handler: () => {
          this.navController.navigateForward("/employer/ads/create/step2");
        }
      }, {
        text: 'Einzelne Termine bearbeiten',
        handler: () => {
          this.navController.navigateForward("/employer/ads/create/step2");
        }
      }, {
        text: 'Abbrechen',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

}
