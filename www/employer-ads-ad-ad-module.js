(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-ads-ad-ad-module"],{

/***/ "./src/app/employer/ads/ad/ad.module.ts":
/*!**********************************************!*\
  !*** ./src/app/employer/ads/ad/ad.module.ts ***!
  \**********************************************/
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
/* harmony import */ var _ad_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ad.page */ "./src/app/employer/ads/ad/ad.page.ts");
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

/***/ "./src/app/employer/ads/ad/ad.page.html":
/*!**********************************************!*\
  !*** ./src/app/employer/ads/ad/ad.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n\n      <div class=\"title container\">\n        <h2>Einsatzart</h2>\n      </div>\n\n      <div class=\"card-list container\">\n        <!-- dont show this one once the employer got all his employees -->\n        <div class=\"small-red-card pointer\" (click)=\"navigateApplications()\">\n          <h2>Bewerbungen (<span>2</span>)</h2>\n        </div>\n        <!-- show this one only if the employer accepted at least one employee -->\n        <div class=\"small-red-card pointer\" (click)=\"navigateConfirmedApplications()\">\n          <h2>Zusagen (<span>2</span>)</h2>\n        </div>\n      </div>\n\n      <div class=\"divider\"></div>\n\n      <div class=\"ad-info\">\n        <!-- Where will the job be? -->\n        <div class=\"address\">\n          <p class=\"small-title container\">Wo? </p>\n          <div class=\"list-items\">\n            <div class=\"item-no-icon container\">\n              <!-- <p>Musterstr. 10, 10000 Musterhausen {{data.location}}</p> -->\n              <p>{{data.location}}</p>\n\n            </div>\n          </div>\n        </div>\n\n        <!-- show if the ad is set as same dates and continuous is not selected-->\n        <div class=\"same-dates\" *ngIf=\"option1\">\n          <!-- when will the job be? -->\n          <div class=\"when\">\n            <p class=\"small-title container\">Wann? </p>\n            <div class=\"list-items\">\n              <div class=\"item-no-icon container\">\n                <!-- FORMAT: Am \"FIRST DATE\" - \"LAST DATE\" zwischen \"START TIME\" - \"END TIME\" Uhr -->\n                <!-- <p>Am 01.01.19 - 02.01.19 zwischen 09.00 - 18.00 Uhr</p> -->\n                <p>Am {{data.startDate}} - {{data.endDate}} zwischen {{data.startTime}} - {{data.endTime}} Uhr</p>\n\n              </div>\n            </div>\n          </div>\n\n          <!-- show personal qualification needed -->\n          <div class=\"who\">\n            <p class=\"small-title container\">Wer?</p>\n            <div class=\"list-items\">\n              <!-- FORMAT: \"AMOUNT PERSONAL QUALIFICATION\" - \"DRIVING LICENSE\" - \"WAGE MONEY\" / \"If DAILY then Tag, if HOURLY then Stunde\" -->\n              <div class=\"item-no-icon container\">\n                <!-- <p>5 Sanitätshelfer - B1 - 100,00€/Tag</p> -->\n                <p>{{data.qualification}} - {{data.drivingLinse}} - {{data.wage}}€/{{formatType}} </p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- show if the ad is set as same dates and continuous is selected-->\n        <div *ngIf=\"option2\" class=\"same-dates-continuous\">\n          <!-- when will the job be? -->\n          <div class=\"when\">\n            <p class=\"small-title container\">Wann?</p>\n            <div class=\"list-items\">\n              <div class=\"item-no-icon container\">\n                <!-- FORMAT: Am \"FIRST DATE\" um \"START TIME\" Uhr bis zum \"LAST DATE\" um \"END TIME\" Uhr -->\n                <!-- <p>Am 01.01.19 um 09.00 Uhr bis zum 02.01.19 um 09.00 Uhr</p> -->\n                <p>Am {{data.startDate}} um {{startTime}} Uhr bis zum {{endDate}} um {{data.endTime}} Uhr</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- show personal qualification needed -->\n          <div class=\"who\">\n            <p class=\"small-title container\">Wer?</p>\n            <div class=\"list-items\">\n              <!-- FORMAT: \"AMOUNT PERSONAL QUALIFICATION\" - \"DRIVING LICENSE\" - \"WAGE MONEY\" / \"If DAILY then Tag, if HOURLY then Stunde\" -->\n              <div class=\"item-no-icon container\">\n                <!-- <p>5 Sanitätshelfer - B1 - 100,00€/Tag</p> -->\n                <p>{{data.qualification}} - {{data.drivingLinse}} - {{data.wage}}€</p>\n                <!-- {{formatType}}  -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- show if the ad is set as different dates and continuous is not selected-->\n        <div *ngIf=\"option3\" class=\"different-dates\">\n          <div class=\"when-who\">\n            <p class=\"small-title container\">Wann und wer?</p>\n            <!-- Show for each date -->\n            <div class=\"list-items\">\n              <div class=\"item-no-icon container\">\n                <!-- FORMAT: Am \"FIRST DATE\" zwischen \"START TIME\" - \"END TIME\" Uhr -->\n                <!-- <p>Am 01.01.19 zwischen 09.00 - 18.00 Uhr</p> -->\n                <p>Am {{data.startDate}} zwischen {{data.startTime}} {{data.endTime}} Uhr</p>\n              </div>\n\n              <!-- FORMAT: \"AMOUNT PERSONAL QUALIFICATION\" - \"DRIVING LICENSE\" - \"WAGE MONEY\" / \"If DAILY then Tag, if HOURLY then Stunde\" -->\n              <div class=\"item-no-icon container\">\n                <!-- <p>5 Sanitätshelfer - B1 - 100,00€/Tag</p> -->\n                <p>{{data.qualification}} - {{data.drivingLinse}} - {{data.wage}}€/{{formatType}} </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/ads/ad/ad.page.scss":
/*!**********************************************!*\
  !*** ./src/app/employer/ads/ad/ad.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Fkcy9hZC9hZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/ads/ad/ad.page.ts":
/*!********************************************!*\
  !*** ./src/app/employer/ads/ad/ad.page.ts ***!
  \********************************************/
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
        this.data = {};
    }
    AdPage.prototype.ngOnInit = function () {
        this.data = JSON.parse(localStorage.getItem('AdData'));
        console.log(this.data);
        this.option1 = this.data.condition1;
        // console.log(this.option1 + " " + this.option2 + " " + this.option3 + " ")
        this.option2 = this.data.condition2;
        this.option3 = this.data.condition3;
        // for wage type daily or per hour
        if (this.data.wageType == 'DAILY') {
            this.formatType = 'Tag';
            // console.log("wageFormat " + this.formatType);
        }
        else {
            this.formatType = 'Stunde';
            // console.log("wageFormat "+this.formatType);
        }
        // if (this.data.requiredEmployees ) {
        // }
    };
    // <!-- dont show this one, =>  once the employer got all his employees -->
    AdPage.prototype.navigateApplications = function () {
        this.navController.navigateForward("/employer/ads/ad/applications");
    };
    // <!-- show this one only if the employer accepted at least one employee -->
    AdPage.prototype.navigateConfirmedApplications = function () {
        this.navController.navigateForward("/employer/ads/ad/applications/confirmed");
    };
    AdPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ad',
            template: __webpack_require__(/*! ./ad.page.html */ "./src/app/employer/ads/ad/ad.page.html"),
            styles: [__webpack_require__(/*! ./ad.page.scss */ "./src/app/employer/ads/ad/ad.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AdPage);
    return AdPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-ads-ad-ad-module.js.map