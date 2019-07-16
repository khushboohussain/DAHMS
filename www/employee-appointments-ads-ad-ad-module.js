(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-appointments-ads-ad-ad-module"],{

/***/ "./src/app/employee/appointments/ads/ad/ad.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/appointments/ads/ad/ad.module.ts ***!
  \***********************************************************/
/*! exports provided: AdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPageModule", function() { return AdPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ad_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ad.page */ "./src/app/employee/appointments/ads/ad/ad.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _ad_page__WEBPACK_IMPORTED_MODULE_5__["AdPage"]
    }
];
var AdPageModule = /** @class */ (function () {
    function AdPageModule() {
    }
    AdPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_ad_page__WEBPACK_IMPORTED_MODULE_5__["AdPage"]]
        })
    ], AdPageModule);
    return AdPageModule;
}());



/***/ }),

/***/ "./src/app/employee/appointments/ads/ad/ad.page.html":
/*!***********************************************************!*\
  !*** ./src/app/employee/appointments/ads/ad/ad.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <!-- ad title -->\n      <div class=\"title container\">\n        <h2>Einsatzart</h2>\n      </div>\n\n      <div class=\"ad-info\">\n        <div class=\"who\">\n          <p class=\"small-title container\">Gesucht werden</p>\n          <div class=\"list-items\">\n            <!-- show all personal qualification which are searched for -->\n            <div class=\"item\" (click)=\"navigateAdDetails()\">\n              <div class=\"item-text text container\">\n                <p>{{AdData.qualification}}</p>\n              </div>\n              <div class=\"item-icon\">\n                <ion-icon name=\"arrow-forward\"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- where will the job be -->\n        <div class=\"where\">\n          <p class=\"small-title container\">Wo?</p>\n          <div class=\"list-items\">\n            <div class=\"item-no-icon container\">\n              <p>{{AdData.location}}</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- show if the ad is set as same dates and continuous is not selected condition 1-->\n        <div class=\"same-dates\" *ngIf=\"AdData.condition1\">\n          <div class=\"when\">\n            <p class=\"small-title container\">Wann?</p>\n            <div class=\"list-items\">\n              <div class=\"item-no-icon container\">\n                <!-- FORMAT: Am \"FIRST DATE\" - \"LAST DATE\" zwischen \"START TIME\" - \"END TIME\" Uhr -->\n                <p>Am {{AdData.startDate}} - {{AdData.endDate}} zwischen {{AdData.startTime}} - {{AdData.endTime}} Uhr</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- show if the ad is set as same dates and continuous is selected condition 2-->\n        <div class=\"same-dates-continuous\" *ngIf=\"AdData.condition2\">\n          <div class=\"when\">\n            <p class=\"small-title container\">Wann?</p>\n            <div class=\"list-items\">\n              <div class=\"item-no-icon container\">\n                <!-- FORMAT: Am \"FIRST DATE\" um \"START TIME\" Uhr bis zum \"LAST DATE\" um \"END TIME\" Uhr -->\n                <p>Am {{AdData.startDate}} - {{AdData.endDate}} zwischen {{AdData.startTime}} - {{AdData.endTime}} Uhr</p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- show if the ad is set as different dates and continuous is not selected condition 3-->\n        <div class=\"different-dates\" *ngIf=\"AdData.condition3\">\n          <div class=\"when\">\n            <p class=\"small-title container\">Wann?</p>\n            <div class=\"list-items\">\n              <!-- Show for each date -->\n              <div class=\"item-no-icon container\">\n                <!-- FORMAT: Am \"FIRST DATE\" zwischen \"START TIME\" - \"END TIME\" Uhr -->\n                <p>Am {{AdData.startDate}} - {{AdData.endDate}} zwischen {{AdData.startTime}} - {{AdData.endTime}} Uhr</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employee/appointments/ads/ad/ad.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/employee/appointments/ads/ad/ad.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2FwcG9pbnRtZW50cy9hZHMvYWQvYWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/employee/appointments/ads/ad/ad.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/employee/appointments/ads/ad/ad.page.ts ***!
  \*********************************************************/
/*! exports provided: AdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPage", function() { return AdPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdPage = /** @class */ (function () {
    function AdPage(navController, api) {
        this.navController = navController;
        this.api = api;
    }
    AdPage.prototype.navigateAdDetails = function () {
        this.navController.navigateForward("employee/appointments/ads/ad/details");
    };
    AdPage.prototype.ngOnInit = function () {
        this.getAds();
    };
    AdPage.prototype.getAds = function () {
        this.AdData = JSON.parse(localStorage.getItem('data'));
    };
    AdPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ad',
            template: __webpack_require__(/*! ./ad.page.html */ "./src/app/employee/appointments/ads/ad/ad.page.html"),
            styles: [__webpack_require__(/*! ./ad.page.scss */ "./src/app/employee/appointments/ads/ad/ad.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AdPage);
    return AdPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-appointments-ads-ad-ad-module.js.map