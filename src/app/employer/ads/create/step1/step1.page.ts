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
      startJob: ['', Validators.required], 
      endJob: ['', Validators.required],
      continueWork: ['', Validators.required],
      fastResponse: ['', Validators.required]
    })
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
