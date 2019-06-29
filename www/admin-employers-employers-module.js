(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-employers-employers-module"],{

/***/ "./src/app/admin/employers/employers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/employers/employers.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersPageModule", function() { return EmployersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employers_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employers.page */ "./src/app/admin/employers/employers.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _employers_page__WEBPACK_IMPORTED_MODULE_5__["EmployersPage"]
    }
];
var EmployersPageModule = /** @class */ (function () {
    function EmployersPageModule() {
    }
    EmployersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_employers_page__WEBPACK_IMPORTED_MODULE_5__["EmployersPage"]]
        })
    ], EmployersPageModule);
    return EmployersPageModule;
}());



/***/ }),

/***/ "./src/app/admin/employers/employers.page.html":
/*!*****************************************************!*\
  !*** ./src/app/admin/employers/employers.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n      <!-- make an action sheet and for each month an entry, so we have stats download option (.cls file) for every month. An email should be sent automatically each month with the stats to the admin\n          stats includes: employer id / name of organisation / address / how many employees the employer asked for the whole month / how many employees the employer got successfully accepted -->\n      <ion-icon name=\"stats\"></ion-icon>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h1>Organisationen (5)</h1>\n        <ion-searchbar showCancelButton cancelButtonText=\"Abbrechen\" autocomplete autocorrect animated\n      placeholder=\"Name eintippen\"></ion-searchbar>\n      </div>\n\n      <div class=\"employees\">\n        <div class=\"list-items\">\n          <div class=\"item\" (click)=\"navigateEmployer()\">\n            <div class=\"item-text text container\">\n              <p>Max Mustermann</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [class.active]=\"currentUrl == '/admin/employees'\" routerLink=\"/admin/employees\" routerDirection=\"root\">\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-label>Einsatzkräfte</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/admin/employers'\" routerLink=\"/admin/employers\" routerDirection=\"root\">\n      <ion-icon name=\"medkit\"></ion-icon>\n      <ion-label>Organisationen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/admin/settings'\" routerLink=\"/admin/settings\" routerDirection=\"root\">\n      <ion-icon name=\"cog\"></ion-icon>\n      <ion-label>Einstellungen</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/admin/employers/employers.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin/employers/employers.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVycy9lbXBsb3llcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/employers/employers.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/employers/employers.page.ts ***!
  \***************************************************/
/*! exports provided: EmployersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersPage", function() { return EmployersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployersPage = /** @class */ (function () {
    function EmployersPage(navController, router) {
        var _this = this;
        this.navController = navController;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    EmployersPage.prototype.navigateEmployer = function () {
        this.navController.navigateForward("/admin/employers/employer");
    };
    EmployersPage.prototype.ngOnInit = function () {
    };
    EmployersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employers',
            template: __webpack_require__(/*! ./employers.page.html */ "./src/app/admin/employers/employers.page.html"),
            styles: [__webpack_require__(/*! ./employers.page.scss */ "./src/app/admin/employers/employers.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployersPage);
    return EmployersPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-employers-employers-module.js.map