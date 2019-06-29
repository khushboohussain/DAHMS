(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-appointments-ads-ads-module"],{

/***/ "./src/app/employee/appointments/ads/ads.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/employee/appointments/ads/ads.module.ts ***!
  \*********************************************************/
/*! exports provided: AdsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPageModule", function() { return AdsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ads_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ads.page */ "./src/app/employee/appointments/ads/ads.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _ads_page__WEBPACK_IMPORTED_MODULE_5__["AdsPage"]
    }
];
var AdsPageModule = /** @class */ (function () {
    function AdsPageModule() {
    }
    AdsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_ads_page__WEBPACK_IMPORTED_MODULE_5__["AdsPage"]]
        })
    ], AdsPageModule);
    return AdsPageModule;
}());



/***/ }),

/***/ "./src/app/employee/appointments/ads/ads.page.html":
/*!*********************************************************!*\
  !*** ./src/app/employee/appointments/ads/ads.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Stellenanfragen</h2>\n      </div>\n\n      <!-- all ads received  -->\n      <div class=\"ads\">\n        <div class=\"list-items\">\n          <!-- single ad -->\n          <div class=\"item\" (click)=\"navigateAd()\">\n            <!-- ad title -->\n            <div class=\"item-text text container\">\n              <p>Einsatzart</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employee/appointments/ads/ads.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/employee/appointments/ads/ads.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2FwcG9pbnRtZW50cy9hZHMvYWRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employee/appointments/ads/ads.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee/appointments/ads/ads.page.ts ***!
  \*******************************************************/
/*! exports provided: AdsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsPage", function() { return AdsPage; });
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


var AdsPage = /** @class */ (function () {
    function AdsPage(navController) {
        this.navController = navController;
    }
    AdsPage.prototype.navigateAd = function () {
        this.navController.navigateForward("employee/appointments/ads/ad");
    };
    AdsPage.prototype.ngOnInit = function () {
    };
    AdsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ads',
            template: __webpack_require__(/*! ./ads.page.html */ "./src/app/employee/appointments/ads/ads.page.html"),
            styles: [__webpack_require__(/*! ./ads.page.scss */ "./src/app/employee/appointments/ads/ads.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], AdsPage);
    return AdsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-appointments-ads-ads-module.js.map