(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-ads-ads-module"],{

/***/ "./src/app/employer/ads/ads.module.ts":
/*!********************************************!*\
  !*** ./src/app/employer/ads/ads.module.ts ***!
  \********************************************/
/*! exports provided: AdsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPageModule", function() { return AdsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ads_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ads.page */ "./src/app/employer/ads/ads.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdsPageModule = /** @class */ (function () {
    function AdsPageModule() {
    }
    AdsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _ads_page__WEBPACK_IMPORTED_MODULE_5__["AdsPage"] }])
            ],
            declarations: [_ads_page__WEBPACK_IMPORTED_MODULE_5__["AdsPage"]]
        })
    ], AdsPageModule);
    return AdsPageModule;
}());



/***/ }),

/***/ "./src/app/employer/ads/ads.page.html":
/*!********************************************!*\
  !*** ./src/app/employer/ads/ads.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main container\">\n    <div class=\"header\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n      <!-- if payment details are not set yet, redirect to /employer/profile/payment-methods -->\n      <ion-icon class=\"pointer\" name=\"add\" (click)=\"navigateCreateAd()\"></ion-icon>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title\">\n        <h1>Laufende Stellen</h1>\n      </div>\n      <div class=\"ads\" *ngFor=\"let item of getAds\">\n        <div class=\"red-card\">\n          <!--  -->\n          <!-- ad title  -->\n          <h2 class=\"pointer\" (click)=\"navigateAd(item)\"> {{item?.jobTitle}} </h2>\n          <div class=\" info\">\n            <!-- job date; FORMAT: Datum \"STARTDATE\" - \"ENDDATE\" -->\n            <p>\n              <b>Datum</b>\n              <br>{{item?.startDate}} - {{item?.endDate}}\n            </p>\n            <!-- job address; FORMAT: Einsatzort: \"CITY\" -->\n            <p>\n              <b>Einsatzort</b>\n              <br> {{item?.location}}\n            </p>\n          </div>\n        </div>\n      </div>\n      <!-- Ads end -->\n    </div>\n  </div>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/ads'\" routerLink=\"/employer/ads\" routerDirection=\"root\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Stellenanzeigen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/notifications'\" routerLink=\"/employer/notifications\"\n      routerDirection=\"root\">\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Nachrichten</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/profile'\" routerLink=\"/employer/profile\"\n      routerDirection=\"root\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label>Profil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/employer/ads/ads.page.scss":
/*!********************************************!*\
  !*** ./src/app/employer/ads/ads.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Fkcy9hZHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/employer/ads/ads.page.ts":
/*!******************************************!*\
  !*** ./src/app/employer/ads/ads.page.ts ***!
  \******************************************/
/*! exports provided: AdsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPage", function() { return AdsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdsPage = /** @class */ (function () {
    function AdsPage(navController, router, api) {
        var _this = this;
        this.navController = navController;
        this.router = router;
        this.api = api;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    AdsPage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(localStorage.getItem('uid'))
        this.api.getEmployeerAds(localStorage.getItem('uid'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var did = a.payload.doc.id;
            // console.log(did);
            return __assign({ did: did }, data);
        }); }))
            .subscribe(function (res) {
            _this.getAds = res;
            // console.log('data \n');
            // console.log(res);
            // console.log('did \n');
            // console.log(this.getAds.did);
        }, function (err) {
            console.log(err.message);
        });
    };
    AdsPage.prototype.navigateAd = function (data) {
        // console.log("docID is " + data.did);
        var _this = this;
        this.api.getAd(data.did).subscribe(function (res) {
            localStorage.setItem('AdData', JSON.stringify(res));
            // console.log("res");
            // console.log(res);
            _this.navController.navigateForward("/employer/ads/ad");
        }, function (err) {
            console.log(err.message);
        });
    };
    AdsPage.prototype.navigateCreateAd = function () {
        this.navController.navigateForward("/employer/ads/create/step1");
    };
    AdsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ads',
            template: __webpack_require__(/*! ./ads.page.html */ "./src/app/employer/ads/ads.page.html"),
            styles: [__webpack_require__(/*! ./ads.page.scss */ "./src/app/employer/ads/ads.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AdsPage);
    return AdsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-ads-ads-module.js.map