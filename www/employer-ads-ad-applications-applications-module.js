(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-ads-ad-applications-applications-module"],{

/***/ "./src/app/employer/ads/ad/applications/applications.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/applications.module.ts ***!
  \*********************************************************************/
/*! exports provided: ApplicationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsPageModule", function() { return ApplicationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _applications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applications.page */ "./src/app/employer/ads/ad/applications/applications.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _applications_page__WEBPACK_IMPORTED_MODULE_5__["ApplicationsPage"]
    }
];
var ApplicationsPageModule = /** @class */ (function () {
    function ApplicationsPageModule() {
    }
    ApplicationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_applications_page__WEBPACK_IMPORTED_MODULE_5__["ApplicationsPage"]]
        })
    ], ApplicationsPageModule);
    return ApplicationsPageModule;
}());



/***/ }),

/***/ "./src/app/employer/ads/ad/applications/applications.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/applications.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <!-- Show by defaul all applications, if more than 1 personal qualification is needed, I should able to filter between those -->\n        <h2>Alle Bewerbungen</h2>\n        <div class=\"text\">\n          <p>Alle Bewerbungen sortiert nach Qualifikation.</p>\n        </div>\n      </div>\n\n      <!-- show applications after personal qualifications -->\n      <div class=\"applications\">\n        <div class=\"list-items\">\n          <!-- personal qualification -->\n          <div class=\"title container\">\n            <h3>Sanitätshelfer</h3>\n          </div>\n          <!-- show each application for the specific qualification -->\n          <div class=\"item\" (click)=\"navigateApplication()\">\n            <!-- FIRST NAME LAST NAME -->\n            <div class=\"item-text text container\">\n              <p>Max Mustermann</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon class=\"pointer\" name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/ads/ad/applications/applications.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/applications.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Fkcy9hZC9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employer/ads/ad/applications/applications.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/applications.page.ts ***!
  \*******************************************************************/
/*! exports provided: ApplicationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsPage", function() { return ApplicationsPage; });
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


var ApplicationsPage = /** @class */ (function () {
    function ApplicationsPage(navController) {
        this.navController = navController;
    }
    ApplicationsPage.prototype.navigateApplication = function () {
        this.navController.navigateForward("/employer/ads/ad/applications/application");
    };
    ApplicationsPage.prototype.ngOnInit = function () {
    };
    ApplicationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! ./applications.page.html */ "./src/app/employer/ads/ad/applications/applications.page.html"),
            styles: [__webpack_require__(/*! ./applications.page.scss */ "./src/app/employer/ads/ad/applications/applications.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], ApplicationsPage);
    return ApplicationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-ads-ad-applications-applications-module.js.map