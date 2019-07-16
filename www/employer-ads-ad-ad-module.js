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

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n\r\n      <div class=\"title container\">\r\n        <h2>Einsatzart</h2>\r\n      </div>\r\n\r\n      <div class=\"card-list container\">\r\n        <!-- dont show this one => once the employer got all his employees -->\r\n        <div *ngIf=\"!getAllEmployees\" class=\"small-red-card pointer\"\r\n          (click)=\"navigateApplications()\">\r\n          <h2>Bewerbungen (<span>{{ totalApp }}</span>)</h2>\r\n        </div>\r\n        <!-- show this one only if the employer accepted at least one employee -->\r\n        <div *ngIf=\"acceptedEmploye\" class=\"small-red-card pointer\" (click)=\"navigateConfirmedApplications()\">\r\n          <h2>Zusagen ( <span>{{ totalConfirm }} </span>)</h2>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"divider\"></div>\r\n\r\n      <div class=\"ad-info\">\r\n        <!-- Where will the job be? -->\r\n        <div class=\"address\">\r\n          <p class=\"small-title container\">Wo? </p>\r\n          <div class=\"list-items\">\r\n            <div class=\"item-no-icon container\">\r\n              <!-- <p>Musterstr. 10, 10000 Musterhausen {{data.location}}</p> -->\r\n              <p>{{data.location}}</p>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- show if the ad is set as same dates and continuous is not selected-->\r\n        <div class=\"same-dates\" *ngIf=\"option1\">\r\n          <!-- when will the job be? -->\r\n          <div class=\"when\">\r\n            <p class=\"small-title container\">Wann? </p>\r\n            <div class=\"list-items\">\r\n              <div class=\"item-no-icon container\">\r\n                <!-- FORMAT: Am \"FIRST DATE\" - \"LAST DATE\" zwischen \"START TIME\" - \"END TIME\" Uhr -->\r\n                <!-- <p>Am 01.01.19 - 02.01.19 zwischen 09.00 - 18.00 Uhr</p> -->\r\n                <p>Am {{data.startDate}} - {{data.endDate}} zwischen {{data.startTime}} - {{data.endTime}} Uhr</p>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- show personal qualification needed -->\r\n          <div class=\"who\">\r\n            <p class=\"small-title container\">Wer?</p>\r\n            <div class=\"list-items\">\r\n              <!-- FORMAT: \"AMOUNT PERSONAL QUALIFICATION\" - \"DRIVING LICENSE\" - \"WAGE MONEY\" / \"If DAILY then Tag, if HOURLY then Stunde\" -->\r\n              <div class=\"item-no-icon container\">\r\n                <!-- <p>5 Sanitätshelfer - B1 - 100,00€/Tag</p> -->\r\n                <p>{{data.qualification}} - {{data.drivingLinse}} - {{data.wage}} {{formatType}} </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- show if the ad is set as same dates and continuous is selected-->\r\n        <div *ngIf=\"option2\" class=\"same-dates-continuous\">\r\n          <!-- when will the job be? -->\r\n          <div class=\"when\">\r\n            <p class=\"small-title container\">Wann?</p>\r\n            <div class=\"list-items\">\r\n              <div class=\"item-no-icon container\">\r\n                <!-- FORMAT: Am \"FIRST DATE\" um \"START TIME\" Uhr bis zum \"LAST DATE\" um \"END TIME\" Uhr -->\r\n                <!-- <p>Am 01.01.19 um 09.00 Uhr bis zum 02.01.19 um 09.00 Uhr</p> -->\r\n                <p>Am {{data.startDate}} um {{startTime}} Uhr bis zum {{endDate}} um {{data.endTime}} Uhr</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- show personal qualification needed -->\r\n          <div class=\"who\">\r\n            <p class=\"small-title container\">Wer?</p>\r\n            <div class=\"list-items\">\r\n              <!-- FORMAT: \"AMOUNT PERSONAL QUALIFICATION\" - \"DRIVING LICENSE\" - \"WAGE MONEY\" / \"If DAILY then Tag, if HOURLY then Stunde\" -->\r\n              <div class=\"item-no-icon container\">\r\n                <!-- <p>5 Sanitätshelfer - B1 - 100,00€/Tag</p> -->\r\n                <p>{{data.qualification}} - {{data.drivingLinse}} - {{data.wage}}</p>\r\n                <!-- {{formatType}}  -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- show if the ad is set as different dates and continuous is not selected-->\r\n        <div *ngIf=\"option3\" class=\"different-dates\">\r\n          <div class=\"when-who\">\r\n            <p class=\"small-title container\">Wann und wer?</p>\r\n            <!-- Show for each date -->\r\n            <div class=\"list-items\">\r\n              <div class=\"item-no-icon container\">\r\n                <!-- FORMAT: Am \"FIRST DATE\" zwischen \"START TIME\" - \"END TIME\" Uhr -->\r\n                <!-- <p>Am 01.01.19 zwischen 09.00 - 18.00 Uhr</p> -->\r\n                <p>Am {{data.startDate}} zwischen {{data.startTime}} {{data.endTime}} Uhr</p>\r\n              </div>\r\n\r\n              <!-- FORMAT: \"AMOUNT PERSONAL QUALIFICATION\" - \"DRIVING LICENSE\" - \"WAGE MONEY\" / \"If DAILY then Tag, if HOURLY then Stunde\" -->\r\n              <div class=\"item-no-icon container\">\r\n                <!-- <p>5 Sanitätshelfer - B1 - 100,00€/Tag</p> -->\r\n                <p>{{data.qualification}} - {{data.drivingLinse}} - {{data.wage }} {{formatType}} </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>"

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
    function AdPage(navController) {
        this.navController = navController;
        this.data = {};
        this.totalApp = 0;
        this.totalConfirm = 0;
    }
    AdPage.prototype.ngOnInit = function () {
        localStorage.removeItem('confirm');
        this.data = JSON.parse(localStorage.getItem('adDetail'));
        // console.log('Ad data ', this.data);
        // console.log('Applications length', this.data.did);
        if (this.data.apply) {
            this.totalApp = this.data.apply.length;
        }
        if (this.data.confirmEmployee) {
            if (this.data.confirmEmployee.length === this.data.requiredEmployees) {
                this.getAllEmployees = true;
            }
            this.acceptedEmploye = true;
            this.totalConfirm = this.data.confirmEmployee.length;
        }
        else {
            this.acceptedEmploye = false;
        }
        // console.log('Applications length', this.data.apply.length);
        // console.log('Confirmation length', this.data.confirmation.length);
        this.option1 = this.data.condition1;
        // console.log(this.option1 + " " + this.option2 + " " + this.option3 + " ")
        this.option2 = this.data.condition2;
        this.option3 = this.data.condition3;
        // for wage type daily or per hour
        if (this.data.wageType === 'DAILY') {
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
        if (localStorage.getItem('AdId') === undefined) {
            alert('Sorry! You have not any application');
            // this.navController.navigateForward('/employer/ads/ad/applications');
        }
        else {
            // console.log('Doc id is ', localStorage.getItem('AdId'));
            this.navController.navigateForward('/employer/ads/ad/applications');
        }
    };
    // <!-- show this one only if the employer accepted at least one employee -->
    AdPage.prototype.navigateConfirmedApplications = function () {
        this.navController.navigateForward('/employer/ads/ad/applications/confirmed');
    };
    AdPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ad',
            template: __webpack_require__(/*! ./ad.page.html */ "./src/app/employer/ads/ad/ad.page.html"),
            styles: [__webpack_require__(/*! ./ad.page.scss */ "./src/app/employer/ads/ad/ad.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], AdPage);
    return AdPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-ads-ad-ad-module.js.map