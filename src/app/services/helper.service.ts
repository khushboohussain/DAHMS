import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

// import { HttpClient, RequestOptions, Headers } from 'selenium-webdriver/http';
// import { RequestOptions, Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  loading;
  adDetail: BehaviorSubject<any>;


  constructor(public toastController: ToastController, private loadingController: LoadingController, public http: HttpClient) {


    if (localStorage.getItem('adDetail')) {
      this.adDetail = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('adDetail')));
    } else {
      this.adDetail = new BehaviorSubject<any>({});
    }

  }

  // setAdDetails(val){
  //   this.adDetail.next(val);
  // }

  // getAdDetails(): Observable<any> {
  //   return this.adDetail.asObservable();
  // }

  async presentToast(MSG) {
    const toast = await this.toastController.create({
      message: MSG,
      duration: 4000,
      position: 'top',
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 15000
    });
    await this.loading.present();
  }

  closeLoading() {
    this.loading.dismiss();
  }




  // Delete User
  deleteUser(id: string) {
    // const myHeaders = new HttpHeaders();
    // myHeaders.append('Content-Type', 'application/json');
    // tslint:disable-next-line: deprecation
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    // const options = new RequestOptions({ headers: myHeaders });
    // call request
    return this.http.post(' https://us-central1-medapp-88989.cloudfunctions.net/deleteUser/delete/', {
      uid: id
    }, options);
  }


  /*  Update HttpClient
    import { HttpClient, HttpHeaders } from "@angular/common/http";
    private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
   */

  /*
  PRE
   headers: Headers = new Headers({ 'Content-Type': 'application/json' });
   options: RequestOptions = new RequestOptions({ headers: this.headers });
  */


  sendEmail(email: string) {
    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // const options = new RequestOptions({ headers: myHeaders });
    // return this.http.post(' http://localhost:3000/sendemail/', {
    //   email: email
    // }, options);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('http://localhost:3000/sendemail/', {
      email: email
    }, options);

  }

  convertDate(x) {
    // tslint:disable-next-line: max-line-length
    return `${x.getFullYear()}-${(x.getMonth() + 1) < 10 ? ('0' + (x.getMonth() + 1)) : (x.getMonth() + 1)}-${(x.getDate() < 10) ? ('0' + (x.getDate())) : x.getDate()}`;

  }



}
