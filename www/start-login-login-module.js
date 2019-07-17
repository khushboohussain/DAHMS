(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-login-login-module"],{

/***/ "./src/app/start/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/start/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/start/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/start/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/start/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"title container\">\r\n        <h2>Login</h2>\r\n        <div class=\"text\">\r\n          <p>Willkommen zurück! Trage deine Mail und das entsprechende Passwort, um onPoint zu starten.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"general\"> -->\r\n      <form [formGroup]=\"form\">\r\n        <ion-list>\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"stacked\">E-Mail</ion-label>\r\n            <ion-input type=\"email\" clearInput name=\"email\" id=\"email\" required formControlName=\"email\"> </ion-input>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"stacked\">Passwort</ion-label>\r\n            <ion-input type=\"password\" clearInput iname=\"password\" class=\"form-control\" id=\"password\" required formControlName=\"password\" ></ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n        <div class=\"password-reset container\">\r\n          <p class=\"btn-link pointer\" (click)=\"navigatePasswordReset()\">Passwort vergessen?</p>\r\n        </div>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <div class=\"container\">\r\n          <ion-button (click)=\"login(form)\" type=\"submit\" [disabled]=\"form.invalid || form.pristine \" color=\"primary\"\r\n            expand=\"block\" class=\"button button-primary\"> Jetzt einloggen</ion-button>\r\n          <!-- (click)=\"login(form)\" -->\r\n          <!-- (click)=\"navigateHome()\" -->\r\n          <!-- [disabled]=\"form.pristine || form.invalid\" -->\r\n        </div>\r\n\r\n      </form>\r\n      <!-- </div> -->\r\n\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/start/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/start/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".password-reset {\n  color: var(--ion-color-medium);\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvbG9naW4vRDpcXEtvZGVBbHBoYVxcV29ya3NwYWNlXFxQcm9qZWN0c1xcREFITVNcXFRlc3RcXFNhYWQvc3JjXFxhcHBcXHN0YXJ0XFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N3b3JkLXJlc2V0IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/start/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/start/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function LoginPage(navController, api, fb, auth, helper) {
        this.navController = navController;
        this.api = api;
        this.fb = fb;
        this.auth = auth;
        this.helper = helper;
        this.companyData = ' ';
    }
    LoginPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginPage.prototype.navigatePasswordReset = function () {
        this.navController.navigateForward('/login/password-reset');
    };
    LoginPage.prototype.navigateHome = function () {
        this.navController.navigateRoot('/');
    };
    // Strar of Login method
    LoginPage.prototype.login = function (form) {
        var _this = this;
        // console.log('Login starts');
        var email = form.value.email;
        var password = form.value.password;
        this.auth.login(email, password)
            .then(function (res) {
            _this.api.getUser(res.user.uid)
                .subscribe(function (user) {
                if (user.type === 'ADMIN ') {
                    // this.router.navigate(['admin/companies']);
                    localStorage.setItem('uid', res.user.uid);
                    // localStorage.setItem('type', 'admin');
                }
                else if (user.type === 'employer') {
                    localStorage.setItem('uid', res.user.uid);
                    // localStorage.setItem('type', 'employer');
                    _this.api.getEmployerData(res.user.uid)
                        .subscribe(function (res) {
                        _this.companyData = res;
                        // console.log(res);
                        // localStorage.setItem('userName', this.userData.fname);
                        // this.helper.setuserName(this.userData.fname);
                        if (_this.companyData.telephone === '' || _this.companyData.telephone == null) {
                            _this.navController.navigateRoot('/employer/onboarding');
                        }
                        else {
                            _this.navController.navigateRoot('/employer/ads');
                        }
                    });
                    // if(!user.firmenname)
                    // this.router.navigate(['onboarding']);
                    // else
                    // this.router.navigate(['overview']);
                    /* Taking Company data; checking employer/onboarding form is already fild*/
                }
                else if (user.type === 'employee') {
                    localStorage.setItem('uid', res.user.uid);
                    // localStorage.setItem('type', ' employee');
                    _this.api.getEmployeeData(res.user.uid)
                        .subscribe(function (res) {
                        _this.companyData = res;
                        // console.log(res);
                        // localStorage.setItem('userName', this.userData.fname);
                        // this.helper.setuserName(this.userData.fname);
                        if (_this.companyData.telefonnumer === '' || _this.companyData.telefonnumer == null) {
                            _this.navController.navigateRoot('/employee/onboarding');
                        }
                        else {
                            _this.navController.navigateRoot('/employee/appointments');
                        }
                    });
                    // if(!user.firmenname)
                    // this.router.navigate(['onboarding']);
                    // else
                    // this.router.navigate(['overview']);
                }
                else {
                    _this.auth.logout();
                    // this.toastr.error('User Account Doesnt Exists');
                    _this.helper.presentToast('User Account Doesnt Exists!');
                }
            });
        }, function (err) {
            // this.toastr.error(err.message,'Error!');
            _this.helper.presentToast(err.message + 'Error!');
            console.log(err.message);
        });
        // if (this.getType === 'EMPLOYEE') {
        //   this.navController.navigateRoot('/employee/onboarding');
        // } else {
        // this.navController.navigateRoot('/employer/onboarding');
        // }
        // console.log('Login ends');
    };
    Object.defineProperty(LoginPage.prototype, "f", {
        // end of login method
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/start/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/start/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=start-login-login-module.js.map