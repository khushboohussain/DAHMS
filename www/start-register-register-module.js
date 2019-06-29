(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-register-register-module"],{

/***/ "./src/app/start/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/start/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/start/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/start/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/start/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Registrieren</h2>\n        <div class=\"text\">\n          <p>Schnell & einfach registrieren und noch heute beginnen Aufträge anzunehmen oder in Auftrag zu geben.</p>\n        </div>\n      </div>\n\n      <div class=\"general\">\n        <form [formGroup]=\"form\">\n          <ion-list>\n            <!-- type of account -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Accountart</ion-label>\n              <ion-select [(ngModel)]=\"getType\" cancelText=\"Abbrechen\" okText=\"Fertig\" formControlName=\"type\" required>\n                <!-- employee -->\n                <ion-select-option value=\"employee\">Einsatzkraft</ion-select-option>\n                <!-- employer -->\n                <ion-select-option value=\"employer\">Organisation</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <!-- {{getType}} -->\n            <!-- name -->\n            <div class=\"grid-2\">\n              <!-- first name -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Vorname</ion-label>\n                <ion-input type=\"text\" clearInput autocapitalize=\"word\" autocomplete autocorrect\n                  formControlName=\"vorname\" required></ion-input>\n              </ion-item>\n\n              <!-- last name -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Nachname</ion-label>\n                <ion-input type=\"text\" clearInput autocapitalize=\"word\" autocomplete autocorrect\n                  formControlName=\"nachname\" required></ion-input>\n              </ion-item>\n            </div>\n\n            <!-- email -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">E-Mail</ion-label>\n              <ion-input type=\"email\" clearInput formControlName=\"email\" required></ion-input>\n            </ion-item>\n\n            <!-- password -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Passwort</ion-label>\n              <ion-input type=\"password\" clearInput formControlName=\"password\" required></ion-input>\n            </ion-item>\n          </ion-list>\n\n          <div class=\"divider\"></div>\n\n          <div class=\"container\">\n            <p>Mit Ihrer Registrierung erklären Sie sich mit unserer AGB & Datenschutzerklärung einverstanden.</p>\n\n            <ion-button (click)=\"submitForm(form)\" type=\"submit\" [disabled]=\"form.invalid || form.pristine\" color=\"primary\" expand=\"block\"> Jetzt registrieren </ion-button>\n\n            <!-- show if account type is set to \"EMPLOYEE\" -->\n            <!-- (click)=\"navigateEmployeeOnboarding()\" -->\n            <!-- show if account type is set to \"EMPLOYER\" -->\n            <!-- <ion-button (click)=\"submitForm(form)\" type=\"submit\" [disabled]=\"form.invalid || form.pristine \" color=\"primary\" expand=\"block\" >Jetzt registrieren</ion-button> -->\n            <!-- (click)=\"navigateEmployerOnboarding()\" -->\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/start/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/start/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/start/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/start/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
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






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navController, fb, auth, api, helper) {
        this.navController = navController;
        this.fb = fb;
        this.auth = auth;
        this.api = api;
        this.helper = helper;
        this.getType = '';
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vorname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nachname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ])]
        });
    };
    // navigation for Company
    RegisterPage.prototype.navigateEmployerOnboarding = function () {
        this.navController.navigateRoot('/employer/onboarding');
    };
    // Navigation for Employee
    RegisterPage.prototype.navigateEmployeeOnboarding = function () {
        this.navController.navigateRoot('/employee/onboarding');
    };
    // getting values from Registration form
    RegisterPage.prototype.submitForm = function (form) {
        var _this = this;
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
            .then(function (res) {
            // console.log(res);
            _this.api.createUser(res.user.uid, {
                email: _this.data.email,
                password: _this.data.password,
                type: _this.data.type
            })
                .then(function (ress) {
                if (_this.data.type === 'employer') {
                    console.log("Start" + _this.data.type);
                    _this.createEmployer(res.user.uid).then(function (after) {
                        _this.helper.presentToast('EMPLOYER Account Created successfully!');
                        // console.log('Creating new user ' + res);
                        // this.toastr.success('Please complete rest of the Registeration Process.','Account Created.');
                        localStorage.setItem('uid', res.user.uid);
                        // this.router.navigate(['/onboarding']);
                        _this.navController.navigateRoot('/login');
                    }, function (err) {
                        _this.helper.presentToast(err.message + 'Error!');
                    });
                }
                else {
                    _this.createEmployee(res.user.uid).then(function (after) {
                        _this.helper.presentToast('EMPLOYEE Account Created successfully!');
                        // console.log('Creating new user ' + res);
                        // this.toastr.success('Please complete rest of the Registeration Process.','Account Created.');
                        localStorage.setItem('uid', res.user.uid);
                        // this.router.navigate(['/onboarding']);
                        _this.navController.navigateRoot('/login');
                    }, function (err) {
                        _this.helper.presentToast(err.message + 'Error!');
                    });
                }
            }, function (err) {
                _this.helper.presentToast(err.message + 'Error!');
                // this.toastr.error(err.message,'Error!');
                console.log(err.message);
            });
        }, function (err) {
            _this.helper.presentToast(err.message + 'Error!');
            // this.toastr.error(err.message,'Error!');
            console.log(err.message);
        });
        // if (this.getType === 'EMPLOYEE') {
        //   this.navController.navigateRoot('/employee/onboarding');
        // } else {
        // this.navController.navigateRoot('/employer/onboarding');
        // }
    };
    Object.defineProperty(RegisterPage.prototype, "f", {
        // end of OnSubmit method
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.createEmployee = function (id) {
        return this.api.createEmployee(id, {
            vorname: this.data.vorname,
            nachname: this.data.nachname
        });
    };
    RegisterPage.prototype.createEmployer = function (id) {
        return this.api.createEmployer(id, {
            vorname: this.data.vorname,
            nachname: this.data.nachname
        });
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/start/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/start/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=start-register-register-module.js.map