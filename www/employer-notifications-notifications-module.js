(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-notifications-notifications-module"],{

/***/ "./src/app/employer/notifications/notifications.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/employer/notifications/notifications.module.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.page */ "./src/app/employer/notifications/notifications.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/employer/notifications/notifications.page.html":
/*!****************************************************************!*\
  !*** ./src/app/employer/notifications/notifications.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <div class=\"logo\">\r\n        <p>medApp</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"title container\">\r\n        <h1>Nachrichten</h1>\r\n      </div>\r\n      <div class=\"notifications\">\r\n        <!-- all notifications received today -->\r\n        <div class=\"today\">\r\n          <p class=\"small-title container\">Heute</p>\r\n          <div class=\"list-items\">\r\n            <!-- that notification comes, if someone applied on an ad -->\r\n            <div class=\"item\" (click)=\"navigateApplication()\">\r\n              <div class=\"item-text text container\">\r\n                <p>Sie haben eine Bewerbung auf Ihrer Stellenanzeige erhalten.</p>\r\n              </div>\r\n              <div class=\"item-icon\">\r\n                <ion-icon name=\"arrow-forward\"></ion-icon>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- that notification comes, if someone cancelled the job -->\r\n            <div class=\"item\" (click)=\"navigateApplication()\">\r\n              <div class=\"item-text text container\">\r\n                <p>Eine Einsatzkraft hat den Einsatztermin abgesagt.</p>\r\n              </div>\r\n              <div class=\"item-icon\">\r\n                <ion-icon name=\"arrow-forward\"></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- all notifications received yesterday -->\r\n        <div class=\"yesterday\">\r\n          <p class=\"small-title container\">Gestern</p>\r\n          <div class=\"list-items\">\r\n            <div class=\"item\" (click)=\"navigateApplication()\">\r\n              <div class=\"item-text text container\">\r\n                <p>Sie haben eine Bewerbung auf Ihrer Stellenanzeige erhalten.</p>\r\n              </div>\r\n              <div class=\"item-icon\">\r\n                <ion-icon name=\"arrow-forward\"></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- all notifications received last 7 days -->\r\n        <div class=\"week\">\r\n          <p class=\"small-title container\">Letzte 7 Tage</p>\r\n          <div class=\"list-items\">\r\n            <div class=\"item\" (click)=\"navigateApplication()\">\r\n              <div class=\"item-text text container\">\r\n                <p>Sie haben eine Bewerbung auf Ihrer Stellenanzeige erhalten.</p>\r\n              </div>\r\n              <div class=\"item-icon\">\r\n                <ion-icon name=\"arrow-forward\"></ion-icon>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/ads'\" routerLink=\"/employer/ads\" routerDirection=\"root\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Stellenanzeigen</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/notifications'\" routerLink=\"/employer/notifications\" routerDirection=\"root\">\r\n      <ion-icon name=\"notifications\"></ion-icon>\r\n      <ion-label>Nachrichten</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/profile'\" routerLink=\"/employer/profile\" routerDirection=\"root\">\r\n      <ion-icon name=\"contact\"></ion-icon>\r\n      <ion-label>Profil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/employer/notifications/notifications.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/employer/notifications/notifications.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/notifications/notifications.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/employer/notifications/notifications.page.ts ***!
  \**************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
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



var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navController, router) {
        var _this = this;
        this.navController = navController;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    NotificationsPage.prototype.navigateApplication = function () {
        this.navController.navigateForward("/employer/ads/ad/applications/application");
    };
    NotificationsPage.prototype.ngOnInit = function () {
    };
    NotificationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/employer/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/employer/notifications/notifications.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-notifications-notifications-module.js.map