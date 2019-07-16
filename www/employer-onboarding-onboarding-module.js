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

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <div class=\"logo\">\r\n        <p>medApp</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"title container\">\r\n        <h1>Erste Schritte mit medAPP</h1>\r\n        <div class=\"text\">\r\n          <p></p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"general\">\r\n        <form [formGroup]=\"form\">\r\n          <ion-list>\r\n            <!-- contact persons organisation role -->\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">Ihre Rolle in der Organisation</ion-label>\r\n              <ion-select formControlName=\"role\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                <ion-select-option>Geschäftsinhaber</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <!-- organisation name -->\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">Name der Orga</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"CompanyName\" clearInput autocapitalize=\"word\" autocomplete\r\n                autocorrect></ion-input>\r\n            </ion-item>\r\n\r\n            <!-- organisation address -->\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">Adresse</ion-label>\r\n              <ion-input type=\"text\" clearInput autocapitalize=\"word\" [(ngModel)]=\"location.addressAutocomplete.query\"\r\n                [ngModelOptions]=\"{standalone: true}\" (ionInput)=\"getLocations()\" (ionBlur)=\"pickupBlur()\"\r\n                (ionFocus)=\"pickupFocus()\" required></ion-input>\r\n            </ion-item>\r\n            <ion-list\r\n              [hidden]=\"location.addressAutocompleteItems.length === 0 || disableaddress === true || location.addressAutocomplete.query.length === 0 \">\r\n              <ion-item *ngFor=\"let item of location.addressAutocompleteItems\" tappable (click)=\"addressItem(item)\">\r\n                {{ item }}\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n            <!-- contact persons phone number -->\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">Telefonnumer</ion-label>\r\n              <ion-input type=\"number\" formControlName=\"telephone\" clearInput autocomplete autocorrect required>\r\n              </ion-input>\r\n            </ion-item>\r\n          </ion-list>\r\n\r\n          <!-- finish onboarding -->\r\n          <div class=\"container\">\r\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"submit(form)\"\r\n              [disabled]=\"form.invalid || form.pristine\">Einrichtung abschließen</ion-button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
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
    // tslint:disable-next-line: max-line-length
    function OnboardingPage(navController, fb, api, helper, location) {
        this.navController = navController;
        this.fb = fb;
        this.api = api;
        this.helper = helper;
        this.location = location;
        this.location.addressAutocompleteItems = [];
        this.location.addressAutocomplete = {
            query: ''
        };
    }
    OnboardingPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            role: [''],
            CompanyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [''],
            telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    OnboardingPage.prototype.getLocations = function () {
        this.location.addressUpdateSearch();
    };
    OnboardingPage.prototype.addressItem = function (item) {
        this.disableaddress = true;
        this.location.addressAutocomplete.query = item;
        this.form.controls['address'].setValue(item);
        this.location.addressChooseItem(item);
    };
    OnboardingPage.prototype.pickupBlur = function () {
        if (this.location.addressAutocomplete.query.length === 0) {
            this.disableaddress = true;
        }
    };
    OnboardingPage.prototype.pickupFocus = function () {
        this.disableaddress = false;
    };
    OnboardingPage.prototype.submit = function (form) {
        var _this = this;
        this.data = {
            role: form.value.role,
            CompanyName: form.value.CompanyName,
            address: form.value.address,
            telephone: form.value.telephone
        };
        // console.log(this.form.value);
        // console.log(this.data);
        // console.log(this.data.role + " " + this.data.name + " " + this.data.address + " \n" + this.data.telephone);
        // let userId = localStorage.getItem('uid');
        // console.log(localStorage.getItem('uid'));
        this.api.updateEmployerData(localStorage.getItem('uid'), this.data).then(function (res) {
            _this.helper.presentToast('Company record save successfully!');
            _this.navController.navigateRoot('/employer/ads');
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
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]])
    ], OnboardingPage);
    return OnboardingPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-onboarding-onboarding-module.js.map