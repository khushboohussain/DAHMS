(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-ads-create-step3-step3-module"],{

/***/ "./src/app/employer/ads/create/step3/step3.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step3/step3.module.ts ***!
  \***********************************************************/
/*! exports provided: Step3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3PageModule", function() { return Step3PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _step3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step3.page */ "./src/app/employer/ads/create/step3/step3.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _step3_page__WEBPACK_IMPORTED_MODULE_5__["Step3Page"]
    }
];
var Step3PageModule = /** @class */ (function () {
    function Step3PageModule() {
    }
    Step3PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_step3_page__WEBPACK_IMPORTED_MODULE_5__["Step3Page"]]
        })
    ], Step3PageModule);
    return Step3PageModule;
}());



/***/ }),

/***/ "./src/app/employer/ads/create/step3/step3.page.html":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step3/step3.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"main container\">\r\n    <div class=\"header\">\r\n      <ion-icon name=\"checkmark\"></ion-icon>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"title\">\r\n        <h2>Ihre Stelle wurde erfolgreich erstellt.</h2>\r\n      </div>\r\n\r\n        <div class=\"divider\"></div>\r\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"navigateHome()\">Zur Startseite</ion-button>\r\n      \r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/ads/create/step3/step3.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step3/step3.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Fkcy9jcmVhdGUvc3RlcDMvc3RlcDMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/employer/ads/create/step3/step3.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/employer/ads/create/step3/step3.page.ts ***!
  \*********************************************************/
/*! exports provided: Step3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Page", function() { return Step3Page; });
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


var Step3Page = /** @class */ (function () {
    function Step3Page(navController) {
        this.navController = navController;
    }
    Step3Page.prototype.navigateHome = function () {
        localStorage.removeItem('AdsData');
        this.navController.navigateRoot("/employer/ads");
    };
    Step3Page.prototype.ngOnInit = function () {
    };
    Step3Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step3',
            template: __webpack_require__(/*! ./step3.page.html */ "./src/app/employer/ads/create/step3/step3.page.html"),
            styles: [__webpack_require__(/*! ./step3.page.scss */ "./src/app/employer/ads/create/step3/step3.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], Step3Page);
    return Step3Page;
}());



/***/ })

}]);
//# sourceMappingURL=employer-ads-create-step3-step3-module.js.map