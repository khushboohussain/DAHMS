(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-appointments-appointments-module"],{

/***/ "./src/app/employee/appointments/appointments.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee/appointments/appointments.module.ts ***!
  \**************************************************************/
/*! exports provided: AppointmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPageModule", function() { return AppointmentsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointments.page */ "./src/app/employee/appointments/appointments.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppointmentsPageModule = /** @class */ (function () {
    function AppointmentsPageModule() {
    }
    AppointmentsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _appointments_page__WEBPACK_IMPORTED_MODULE_5__["AppointmentsPage"] }])
            ],
            declarations: [_appointments_page__WEBPACK_IMPORTED_MODULE_5__["AppointmentsPage"]]
        })
    ], AppointmentsPageModule);
    return AppointmentsPageModule;
}());



/***/ }),

/***/ "./src/app/employee/appointments/appointments.page.html":
/*!**************************************************************!*\
  !*** ./src/app/employee/appointments/appointments.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main container\">\n    <div class=\"header\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n\n      <!-- navigate to the ads overview -->\n      <ion-icon name=\"folder\" (click)=\"navigateAds()\"></ion-icon>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title\">\n        <h1>Termine im Überblick</h1>\n      </div>\n\n      <!-- list of appointments -->\n      <div class=\"appointments\">\n        <!-- appointment-->\n        <div class=\"red-card\" (click)=\"navigateAppointment()\">\n          <!-- ad title-->\n          <h2>Einsatzart</h2>\n          <div class=\"info\">\n            <!-- job date; FORMAT: Datum \"STARTDATE\" - \"ENDDATE\" -->\n            <p><b>Datum</b><br>01.01.19 - 02.01.19</p>\n            <!-- job address; FORMAT: Einsatzort: \"CITY\" -->\n            <p><b>Einsatzort</b><br>Göppingen</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/appointments'\" routerLink=\"/employee/appointments\" routerDirection=\"root\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Stellenanzeigen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/notifications'\" routerLink=\"/employee/notifications\" routerDirection=\"root\">\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Nachrichten</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/profile'\" routerLink=\"/employee/profile\" routerDirection=\"root\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label>Profil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/employee/appointments/appointments.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/employee/appointments/appointments.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvYXBwb2ludG1lbnRzL0Q6XFxLb2RlQWxwaGFcXFdvcmtzcGFjZVxcUHJvamVjdHNcXERBSE1TXFxUZXN0XFxEQUhNUyAxLjAvc3JjXFxhcHBcXGVtcGxveWVlXFxhcHBvaW50bWVudHNcXGFwcG9pbnRtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9hcHBvaW50bWVudHMvYXBwb2ludG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/employee/appointments/appointments.page.ts":
/*!************************************************************!*\
  !*** ./src/app/employee/appointments/appointments.page.ts ***!
  \************************************************************/
/*! exports provided: AppointmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPage", function() { return AppointmentsPage; });
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



var AppointmentsPage = /** @class */ (function () {
    function AppointmentsPage(navController, router) {
        var _this = this;
        this.navController = navController;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    AppointmentsPage.prototype.navigateAppointment = function () {
        this.navController.navigateForward("/employee/appointments/appointment");
    };
    AppointmentsPage.prototype.navigateAds = function () {
        this.navController.navigateForward("/employee/appointments/ads");
    };
    AppointmentsPage.prototype.ngOnInit = function () {
    };
    AppointmentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appointments',
            template: __webpack_require__(/*! ./appointments.page.html */ "./src/app/employee/appointments/appointments.page.html"),
            styles: [__webpack_require__(/*! ./appointments.page.scss */ "./src/app/employee/appointments/appointments.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-appointments-appointments-module.js.map