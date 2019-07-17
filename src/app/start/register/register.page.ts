import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  public getType = '';
  data: any;

  // tslint:disable-next-line: max-line-length
  constructor(private navController: NavController, private fb: FormBuilder, private auth: AuthService, private api: ApiService, public helper: HelperService) { }

  ngOnInit() {
    this.form = this.fb.group({
      type: ['', Validators.required],
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(6)
        ])]
    });
  }
  // navigation for Company
  navigateEmployerOnboarding() {
    this.navController.navigateRoot('/employer/onboarding');
  }
  // Navigation for Employee
  navigateEmployeeOnboarding() {
    this.navController.navigateRoot('/employee/onboarding');
  }

  // getting values from Registration form
  submitForm(form: any) {
    this.data = {
      vorname: form.value.vorname,
      nachname: form.value.nachname,
      email: form.value.email,
      password: form.value.password,
      type: this.getType
    };
    // console.log(data.type);
    // console.log(data.vorname + " " + data.nachname + " " + data.email + " " + data.password);
    this.auth.signup(this.data.email, this.data.password)
      .then(res => {
        // console.log(res);
        this.api.createUser(res.user.uid, {
          email: this.data.email,
          password: this.data.password,
          type: this.data.type
        })
          .then(ress => {
            if (this.data.type === 'employer') {
              // console.log('Start' + this.data.type);
              this.createEmployer(res.user.uid).then(after => {
                this.helper.presentToast('EMPLOYER Account Created successfully!');
                // console.log('Creating new user ' + res);
                // this.toastr.success('Please complete rest of the Registeration Process.','Account Created.');
                localStorage.setItem('uid', res.user.uid);
                // this.router.navigate(['/onboarding']);
                this.navController.navigateRoot('/login');
              }, err => {
                this.helper.presentToast(err.message + 'Error!');
              });

            } else {
              this.createEmployee(res.user.uid).then(after => {
                this.helper.presentToast('EMPLOYEE Account Created successfully!');
                // console.log('Creating new user ' + res);
                // this.toastr.success('Please complete rest of the Registeration Process.','Account Created.');
                localStorage.setItem('uid', res.user.uid);
                // this.router.navigate(['/onboarding']);
                this.navController.navigateRoot('/login');
              }, err => {
                this.helper.presentToast(err.message + 'Error!');
              });
            }
          }, err => {
            this.helper.presentToast(err.message + 'Error!');
            // this.toastr.error(err.message,'Error!');
            // console.log(err.message);
          });
      }, err => {
        this.helper.presentToast(err.message + 'Error!');
        // this.toastr.error(err.message,'Error!');
        // console.log(err.message);
      });

    // if (this.getType === 'EMPLOYEE') {
    //   this.navController.navigateRoot('/employee/onboarding');
    // } else {
    // this.navController.navigateRoot('/employer/onboarding');
    // }

  }
  // end of OnSubmit method

  get f() {
    return this.form.controls;
  }
  createEmployee(id: string) {
    return this.api.createEmployee(id, {
      vorname: this.data.vorname,
      nachname: this.data.nachname,
      email: this.data.email
    });
  }
  createEmployer(id: string) {
    return this.api.createEmployer(id, {
      vorname: this.data.vorname,
      nachname: this.data.nachname,
      email: this.data.email
    });
  }


}
