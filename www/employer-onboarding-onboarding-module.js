(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-onboarding-onboarding-module"],{

/***/ "./src/app/employer/onboarding/onboarding.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/employer/onboarding/onboarding.module.ts ***!
  \**********************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/employer/onboarding/onboarding.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_5__["OnboardingPage"]
    }
];
var OnboardingPageModule = /** @class */ (function () {
    function OnboardingPageModule() {
    }
    OnboardingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_5__["OnboardingPage"]]
        })
    ], OnboardingPageModule);
    return OnboardingPageModule;
}());



/***/ }),

/***/ "./src/app/employer/onboarding/onboarding.page.html":
/*!**********************************************************!*\
  !*** ./src/app/employer/onboarding/onboarding.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h1>Erste Schritte mit medAPP</h1>\n        <div class=\"text\">\n          <p></p>\n        </div>\n      </div>\n\n      <div class=\"general\">\n        <form [formGroup]=\"form\">\n          <ion-list>\n            <!-- contact persons organisation role -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Ihre Rolle in der Organisation</ion-label>\n              <ion-select formControlName=\"role\" cancelText=\"Abbrechen\" okText=\"Fertig\" >\n                <ion-select-option>Geschäftsinhaber</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <!-- organisation name -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Name der Orga</ion-label>\n              <ion-input type=\"text\" formControlName=\"CompanyName\" clearInput autocapitalize=\"word\" autocomplete autocorrect ></ion-input>\n            </ion-item>\n\n            <!-- organisation address -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Adresse</ion-label>\n              <ion-input type=\"text\" formControlName=\"address\" clearInput autocapitalize=\"word\" autocomplete autocorrect required></ion-input>\n            </ion-item>\n\n            <!-- contact persons phone number -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Telefonnumer</ion-label>\n              <ion-input type=\"number\" formControlName=\"telephone\"  clearInput autocomplete autocorrect required></ion-input>\n            </ion-item>\n          </ion-list>\n\n          <!-- finish onboarding -->\n          <div class=\"container\">\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"submit(form)\" [disabled]=\"form.invalid || form.pristine\">Einrichtung abschließen</ion-button>\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/onboarding/onboarding.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/employer/onboarding/onboarding.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL29uYm9hcmRpbmcvb25ib2FyZGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/onboarding/onboarding.page.ts":
/*!********************************************************!*\
  !*** ./src/app/employer/onboarding/onboarding.page.ts ***!
  \********************************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navController, fb, api, helper) {
        this.navController = navController;
        this.fb = fb;
        this.api = api;
        this.helper = helper;
    }
    OnboardingPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            role: [''],
            CompanyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [''],
            telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    OnboardingPage.prototype.navigateHome = function () {
        this.navController.navigateRoot("/employer/ads");
    };
    OnboardingPage.prototype.submit = function (form) {
        var _this = this;
        this.data = {
            role: form.value.role,
            CompanyName: form.value.CompanyName,
            address: form.value.address,
            telephone: form.value.telephone
        };
        // console.log(this.data.role + " " + this.data.name + " " + this.data.address + " \n" + this.data.telephone);
        // let userId = localStorage.getItem('uid');
        // console.log(localStorage.getItem('uid'));
        this.api.updateEmployerData(localStorage.getItem('uid'), this.data).then(function (res) {
            _this.helper.presentToast('Company record save successfully!');
            _this.navController.navigateRoot("/employer/ads");
        }, function (err) {
            _this.helper.presentToast(err.message);
        });
    };
    OnboardingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onboarding',
            template: __webpack_require__(/*! ./onboarding.page.html */ "./src/app/employer/onboarding/onboarding.page.html"),
            styles: [__webpack_require__(/*! ./onboarding.page.scss */ "./src/app/employer/onboarding/onboarding.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], OnboardingPage);
    return OnboardingPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-onboarding-onboarding-module.js.map