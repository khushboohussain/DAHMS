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

module.exports = "<ion-content>\n  <div class=\"main container\">\n    <div class=\"header\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n\n      <!-- navigate to the ads overview -->\n      <ion-icon name=\"folder\" (click)=\"navigateAds()\"></ion-icon>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title\">\n        <h1>Termine im Überblick</h1>\n      </div>\n\n      <!-- list of appointments -->\n      <div class=\"appointments\" *ngFor=\"let item of getads\">\n        <!-- appointment-->\n        <div class=\"red-card\" (click)=\"navigateAppointment(item)\">\n          <!-- ad title-->\n          <h2>{{item?.jobTitle}}</h2>\n          <div class=\"info\">\n            <!-- job date; FORMAT: Datum \"STARTDATE\" - \"ENDDATE\" -->\n            <p><b>Datum</b><br>{{item?.startDate}} - {{item?.endDate}}</p>\n            <!-- job address; FORMAT: Einsatzort: \"CITY\" -->\n            <p><b>Einsatzort</b><br>{{item?.location}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/appointments'\" routerLink=\"/employee/appointments\" routerDirection=\"root\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Stellenanzeigen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/notifications'\" routerLink=\"/employee/notifications\" routerDirection=\"root\">\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Nachrichten</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employee/profile'\" routerLink=\"/employee/profile\" routerDirection=\"root\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label>Profil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/employee/appointments/appointments.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/employee/appointments/appointments.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvYXBwb2ludG1lbnRzL0Q6XFxLb2RlQWxwaGFcXFdvcmtzcGFjZVxcUHJvamVjdHNcXERBSE1TXFxUZXN0XFxTYWFkL3NyY1xcYXBwXFxlbXBsb3llZVxcYXBwb2ludG1lbnRzXFxhcHBvaW50bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

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
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var AppointmentsPage = /** @class */ (function () {
    function AppointmentsPage(navController, router, api) {
        var _this = this;
        this.navController = navController;
        this.router = router;
        this.api = api;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    AppointmentsPage.prototype.navigateAppointment = function () {
        this.navController.navigateForward('/employee/appointments/appointment');
    };
    AppointmentsPage.prototype.navigateAds = function (item) {
        localStorage.setItem('data', JSON.stringify(item));
        this.navController.navigateForward('/employee/appointments/ads');
    };
    AppointmentsPage.prototype.ngOnInit = function () {
        this.getAdsData();
        this.getEmployeeData();
        this.data = {
            jobTitle: '',
            location: '',
            startDate: '',
            endDate: ''
        };
    };
    AppointmentsPage.prototype.getAdsData = function () {
        var _this = this;
        this.api.getAllAds().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.did;
                return __assign({ id: id }, data);
            });
        })).subscribe(function (res) {
            // console.log(res.id);
            _this.getads = res.filter(function (result) { return result.confirmEmployeeIds.indexOf(localStorage.getItem('uid')) > -1; });
            // this.getads= res.filter( result => result.confirmEmployeeIds.indexOf(localStorage.getItem('uid')) > -1)
            // console.log(this.getads)
            // this.getads=res;
            // if(this.getads[0].confirmEmployeeIds.indexOf(data => data.uid === localStorage.getItem('uid'))){
            //   this.api.getAd(localStorage.getItem('uid')).subscribe(res => {
            //     this.getad = res;
            //     console.log(this.getad)
            //   })
            // }else{
            //   console.log("no")
            // }
            // console.log(res)
        });
    };
    AppointmentsPage.prototype.getEmployeeData = function () {
        var _this = this;
        this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(function (res) {
            _this.getEmployedata = res;
            // console.log(this.getEmployedata);
            localStorage.setItem('qualifikation', _this.getEmployedata.qualifikation);
        });
    };
    AppointmentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appointments',
            template: __webpack_require__(/*! ./appointments.page.html */ "./src/app/employee/appointments/appointments.page.html"),
            styles: [__webpack_require__(/*! ./appointments.page.scss */ "./src/app/employee/appointments/appointments.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-appointments-appointments-module.js.map