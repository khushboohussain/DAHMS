import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(public toastController: ToastController) { }

  async presentToast(MSG) {
    const toast = await this.toastController.create({
      message: MSG,
      duration: 4000,
      position: 'top',
    });
    toast.present();
  }

}
