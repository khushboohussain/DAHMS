(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-notifications-notifications-module"],{

/***/ "./src/app/employee/notifications/notifications.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee/notifications/notifications.module.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.page */ "./src/app/employee/notifications/notifications.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"] }])
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/employee/notifications/notifications.page.html":
/*!****************************************************************!*\
  !*** ./src/app/employee/notifications/notifications.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h1>Nachrichten</h1>\n      </div>\n      <div class=\"notifications\">\n        <!-- all notifications received today -->\n        <div class=\"today\">\n          <p class=\"small-title container\">Heute</p>\n          <div class=\"list-items\">\n            <!-- that notification comes, if the application got accepted -->\n            <div class=\"item\" (click)=\"navigateAppointment()\">\n              <div class=\"item-text text container\">\n                <p>Herzlichen Glückwunsch! Sie haben eine Stellenzusage erhalten.</p>\n              </div>\n              <div class=\"item-icon\">\n                <ion-icon name=\"arrow-forward\"></ion-icon>\n              </div>\n            </div>\n\n            <!-- that notification comes, if the application didnt get accepted -->\n            <div class=\"item\" (click)=\"navigateAd()\">\n              <div class=\"item-text text container\">\n                <p>Leider haben Sie eine Absage erhalten.</p>\n              </div>\n              <div class=\"item-icon\">\n                <ion-icon name=\"arrow-forward\"></ion-icon>\n              </div>\n            </div>\n\n            <!-- that notification comes, if the employee gets a job offer -->\n            <div class=\"item\" (click)=\"navigateAd()\">\n              <div class=\"item-text text container\">\n                <p>Sie haben eine neue Stellenanfrage erhalten. Jetzt bewerben!</p>\n              </div>\n              <div class=\"item-icon\">\n                <ion-icon name=\"arrow-forward\"></ion-icon>\n              </div>\n            </div>\n\n            <!-- that notification comes, if the employee needs to send again a training certificate -->\n            <div class=\"item\">\n              <div class=\"item-text text container\">\n                <p>Bitte senden Sie uns innerhalb der nächsten 2 Wochen einen neuen Fortbildungsnachweis, um medAPP weiterhin zu nutzen.</p>\n              </div>\n              <div class=\"item-icon\">\n                <ion-icon name=\"arrow-forward\"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- all notifications received yesterday -->\n        <div class=\"yesterday\">\n          <p class=\"small-title container\">Gestern</p>\n          <div class=\"list-items\">\n            <div class=\"item\" (click)=\"navigateAd()\">\n              <div class=\"item-text text container\">\n                <p>Sie haben eine neue Stellenanfrage erhalten. Jetzt bewerben!</p>\n              </div>\n              <div class=\"item-icon\">\n                <ion-icon name=\"arrow-forward\"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- all notifications received last 7 days -->\n        <div class=\"week\">\n          <p class=\"small-title container\">Letzte 7 Tage</p>\n          <div class=\"list-items\">\n            <div class=\"item\" (click)=\"navigateAd()\">\n              <div class=\"item-text text container\">\n                <p>Sie haben eine neue Stellenanfrage erhalten. Jetzt bewerben!</p>\n              </div>\n              <div class=\"item-icon\">\n                <ion-icon name=\"arrow-forward\"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/appointments'\" routerLink=\"/employee/appointments\" routerDirection=\"root\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Stellenanzeigen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/notifications'\" routerLink=\"/employee/notifications\" routerDirection=\"root\">\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Nachrichten</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/profile'\" routerLink=\"/employee/profile\" routerDirection=\"root\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label>Profil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/employee/notifications/notifications.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/employee/notifications/notifications.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/notifications/notifications.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee/notifications/notifications.page.ts ***!
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
    NotificationsPage.prototype.navigateAd = function () {
        this.navController.navigateForward("/employee/appointments/ads/ad");
    };
    NotificationsPage.prototype.navigateAppointment = function () {
        this.navController.navigateForward("/employee/appointments/appointment");
    };
    NotificationsPage.prototype.ngOnInit = function () {
    };
    NotificationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/employee/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/employee/notifications/notifications.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-notifications-notifications-module.js.map