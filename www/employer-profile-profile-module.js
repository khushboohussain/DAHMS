(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-profile-profile-module"],{

/***/ "./src/app/employer/profile/profile.module.ts":
/*!****************************************************!*\
  !*** ./src/app/employer/profile/profile.module.ts ***!
  \****************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/employer/profile/profile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/employer/profile/profile.page.html":
/*!****************************************************!*\
  !*** ./src/app/employer/profile/profile.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h1>Profil</h1>\n      </div>\n      <div class=\"general\">\n        <p class=\"small-title container\">Allgemein</p>\n        <div class=\"list-items\">\n          <div class=\"item pointer\" (click)=\"navigateDetails()\">\n            <div class=\"item-text text container\">\n              <p>Daten ändern</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"item pointer\" (click)=\"navigatePaymentMethods()\">\n            <div class=\"item-text text container\">\n              <p>Bezahlmethode anpassen</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"item-text text container\">\n              <p>Supportanfrage</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"law\">\n        <p class=\"small-title container\">Rechtliches & mehr</p>\n        <div class=\"list-items\">\n          <div class=\"item\">\n            <div class=\"item-text text container\">\n              <p>Impressum</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"item-text text container\">\n              <p>Datenschutz</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"item-text text container\">\n              <p>Allgemeine Geschäftsbedingungen</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"item\" (click)=\"navigateStart()\">\n            <div class=\"item-text text container\">\n              <p>Ausloggen</p>\n            </div>\n            <div class=\"item-icon\">\n              <ion-icon name=\"arrow-forward\"></ion-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/ads'\" routerLink=\"/employer/ads\" routerDirection=\"root\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Stellenanzeigen</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/notifications'\" routerLink=\"/employer/notifications\" routerDirection=\"root\">\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Nachrichten</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/profile'\" routerLink=\"/employer/profile\" routerDirection=\"root\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label>Profil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/employer/profile/profile.page.scss":
/*!****************************************************!*\
  !*** ./src/app/employer/profile/profile.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/profile/profile.page.ts":
/*!**************************************************!*\
  !*** ./src/app/employer/profile/profile.page.ts ***!
  \**************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navController, router, auth, api) {
        var _this = this;
        this.navController = navController;
        this.router = router;
        this.auth = auth;
        this.api = api;
        router.events.subscribe(function (_) { return _this.currentUrl = _this.router.url; });
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.navigateDetails = function () {
        this.navController.navigateForward("/employer/profile/details");
    };
    ProfilePage.prototype.navigatePaymentMethods = function () {
        this.navController.navigateForward("/employer/profile/payment-methods");
    };
    ProfilePage.prototype.navigateStart = function () {
        if (confirm("Are you sure to logout!")) {
            this.auth.logout();
            localStorage.clear();
            // this.navController.navigateRoot("/employer/profile");
            this.navController.navigateRoot("/start");
        }
    };
    ProfilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/employer/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/employer/profile/profile.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-profile-profile-module.js.map