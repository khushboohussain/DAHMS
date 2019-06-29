(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-login-password-reset-password-reset-module"],{

/***/ "./src/app/start/login/password-reset/password-reset.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/start/login/password-reset/password-reset.module.ts ***!
  \*********************************************************************/
/*! exports provided: PasswordResetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function() { return PasswordResetPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-reset.page */ "./src/app/start/login/password-reset/password-reset.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _password_reset_page__WEBPACK_IMPORTED_MODULE_5__["PasswordResetPage"]
    }
];
var PasswordResetPageModule = /** @class */ (function () {
    function PasswordResetPageModule() {
    }
    PasswordResetPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_5__["PasswordResetPage"]]
        })
    ], PasswordResetPageModule);
    return PasswordResetPageModule;
}());



/***/ }),

/***/ "./src/app/start/login/password-reset/password-reset.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/start/login/password-reset/password-reset.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Passwort zurücksetzen</h2>\n        <div class=\"text\">\n          <p>Passwort vergessen? Kein Problem! Einfach E-Mail eintragen und du erhältst einen Link zum Zurücksetzen\n            deines Passworts.</p>\n        </div>\n      </div>\n\n      <div class=\"general\">\n        <form>\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">E-Mail</ion-label>\n              <ion-input type=\"email\" [(ngModel)]=\"email\" name=\"email\" clearInput required> </ion-input>\n            </ion-item>\n          </ion-list>\n          {{email}}\n          <div class=\"divider\"></div>\n\n          <div class=\"container\">\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"passwordReset()\">Jetzt zurücksetzen</ion-button>\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/start/login/password-reset/password-reset.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/start/login/password-reset/password-reset.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L2xvZ2luL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/start/login/password-reset/password-reset.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/start/login/password-reset/password-reset.page.ts ***!
  \*******************************************************************/
/*! exports provided: PasswordResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPage", function() { return PasswordResetPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordResetPage = /** @class */ (function () {
    function PasswordResetPage(toastController, navController, auth, helper) {
        this.toastController = toastController;
        this.navController = navController;
        this.auth = auth;
        this.helper = helper;
        this.email = '';
    }
    PasswordResetPage.prototype.ngOnInit = function () {
    };
    // async passwordReset() {
    //   const toast = await this.toastController.create({
    //     message: 'Wir haben dir erfolgreich einen Link zur Zurücksetzung deines Passworts geschickt.',
    //     duration: 4000,
    //     position: 'top'
    //   });
    //   toast.present();
    //   this.navController.navigateRoot('/start');
    // }
    PasswordResetPage.prototype.passwordReset = function () {
        // console.log('starts of Password reset');
        var _this = this;
        if (this.email != '') {
            this.auth.resetPassword(this.email)
                .then(function (res) {
                _this.helper.presentToast('Wir haben dir erfolgreich einen Link zur Zurücksetzung deines Passworts geschickt.');
                // this.toastr.success('An Email has sent to your account for Password reset.');
                // this.router.navigate(['login']);
                _this.navController.navigateRoot('/start');
            }, function (err) {
                _this.helper.presentToast(err.message + 'Error!');
                // this.toastr.error(err.message,'Error!');
                console.log(err.message);
            });
        }
        else {
            console.log('Else Condition');
            // this.toastr.warning('Please Provide a Email.','Unable to Proceed');
            this.helper.presentToast('Please Provide a Email.' + 'Unable to Proceed');
            // console.log('Please Provide a Email.', 'Unable to Proceed');
        }
    };
    PasswordResetPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__(/*! ./password-reset.page.html */ "./src/app/start/login/password-reset/password-reset.page.html"),
            styles: [__webpack_require__(/*! ./password-reset.page.scss */ "./src/app/start/login/password-reset/password-reset.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());



/***/ })

}]);
//# sourceMappingURL=start-login-password-reset-password-reset-module.js.map