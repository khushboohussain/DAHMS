(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-settings-settings-module"],{

/***/ "./src/app/admin/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/admin/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/settings.page.html":
/*!***************************************************!*\
  !*** ./src/app/admin/settings/settings.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <div class=\"logo\">\r\n        <p>medApp</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"title container\">\r\n        <h1>Appeinstellungen</h1>\r\n      </div>\r\n\r\n      <div class=\"employees\">\r\n        <div class=\"list-items\">\r\n          <!-- change personal qualifications -->\r\n          <div class=\"item\" (click)=\"navigateEmployer()\">\r\n            <div class=\"item-text text container\">\r\n              <p>Persönliche Qualifikationen</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- change images for personal qualifications -->\r\n          <div class=\"item\" (click)=\"navigateEmployer()\">\r\n            <div class=\"item-text text container\">\r\n              <p>Bilder anpassen</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"item\" (click)=\"logout()\">\r\n            <div class=\"item-text text container\">\r\n              <p>Ausloggen</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [class.active]=\"currentUrl == '/admin/employees'\" routerLink=\"/admin/employees\" routerDirection=\"root\">\r\n      <ion-icon name=\"people\"></ion-icon>\r\n      <ion-label>Einsatzkräfte</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [class.active]=\"currentUrl == '/admin/employers'\" routerLink=\"/admin/employers\" routerDirection=\"root\">\r\n      <ion-icon name=\"medkit\"></ion-icon>\r\n      <ion-label>Organisationen</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [class.active]=\"currentUrl == '/admin/settings'\" routerLink=\"/admin/settings\" routerDirection=\"root\">\r\n      <ion-icon name=\"cog\"></ion-icon>\r\n      <ion-label>Einstellungen</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/admin/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/admin/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
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



var SettingsPage = /** @class */ (function () {
    function SettingsPage(navController, router) {
        var _this = this;
        this.navController = navController;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    SettingsPage.prototype.navigateEmployer = function () {
        this.navController.navigateForward("/admin/employers/employer");
    };
    SettingsPage.prototype.logout = function () {
        this.navController.navigateRoot("/start");
    };
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/admin/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/admin/settings/settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-settings-settings-module.js.map