import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  companyData: any = " ";

  // tslint:disable-next-line: max-line-length
  constructor(private navController: NavController, private api: ApiService, private fb: FormBuilder, private auth: AuthService, private helper: HelperService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required]
    });

  }

  navigatePasswordReset() {
    this.navController.navigateForward('/login/password-reset');
  }
  navigateHome() {
    this.navController.navigateRoot('/');
  }

  // Strar of Login method
  login(form) {
    // console.log('Login starts');
    let email = form.value.email;
    let password = form.value.password;

    this.auth.login(email, password)
      .then(res => {
        this.api.getUser(res.user.uid)
          .subscribe((user: any) => {
            if (user.type === 'ADMIN ') {
              // this.router.navigate(['admin/companies']);
              localStorage.setItem('uid', res.user.uid);
              localStorage.setItem('type', 'admin');
            } else
              if (user.type === 'employer') {
                localStorage.setItem('uid', res.user.uid);
                localStorage.setItem('type', 'employer');
                this.api.getEmployerData(res.user.uid)
                  .subscribe(res => {
                    this.companyData = res;
                    // console.log(res);
                    // localStorage.setItem('userName', this.userData.fname);
                    // this.helper.setuserName(this.userData.fname);
                    if (this.companyData.telephone === '' || this.companyData.telephone == null) {
                      this.navController.navigateRoot('/employer/onboarding');
                    } else {
                      this.navController.navigateRoot("/employer/ads");
                    }
                  });

                // if(!user.firmenname)
                // this.router.navigate(['onboarding']);
                // else
                // this.router.navigate(['overview']);
                /* Taking Company data; checking employer/onboarding form is already fild*/

              } else
                if (user.type === 'employee') {
                  localStorage.setItem('uid', res.user.uid);
                  localStorage.setItem('type', ' employee');
                  this.api.getEmployeeData(res.user.uid)
                    .subscribe(res => {
                      this.companyData = res;
                      // console.log(res);
                      // localStorage.setItem('userName', this.userData.fname);
                      // this.helper.setuserName(this.userData.fname);
                      if (this.companyData.telephone === '' || this.companyData.telephone == null) {
                        this.navController.navigateRoot('/employee/onboarding');
                      } else {
                        this.navController.navigateRoot("/employee/appointments");
                      }
                    });
                  // if(!user.firmenname)
                  // this.router.navigate(['onboarding']);
                  // else
                  // this.router.navigate(['overview']);


                } else {
                  this.auth.logout();
                  // this.toastr.error('User Account Doesnt Exists');
                  this.helper.presentToast('User Account Doesnt Exists!');
                }
          });
      }, err => {
        // this.toastr.error(err.message,'Error!');
        this.helper.presentToast(err.message + 'Error!');
        console.log(err.message);

      });
    // if (this.getType === 'EMPLOYEE') {
    //   this.navController.navigateRoot('/employee/onboarding');
    // } else {
    // this.navController.navigateRoot('/employer/onboarding');
    // }
    // console.log('Login ends');
  }
  // end of login method
  get f() {
    return this.form.controls;
  }
}