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

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <div class=\"logo\">\r\n        <p>medApp</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"title container\">\r\n        <h1>Profil</h1>\r\n      </div>\r\n      <div class=\"general\">\r\n        <p class=\"small-title container\">Allgemein</p>\r\n        <div class=\"list-items\">\r\n          <div class=\"item pointer\" (click)=\"navigateDetails()\">\r\n            <div class=\"item-text text container\">\r\n              <p>Daten ändern</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n          <div class=\"item pointer\" (click)=\"navigatePaymentMethods()\">\r\n            <div class=\"item-text text container\">\r\n              <p>Bezahlmethode anpassen</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"item-text text container\">\r\n              <p>Supportanfrage</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"law\">\r\n        <p class=\"small-title container\">Rechtliches & mehr</p>\r\n        <div class=\"list-items\">\r\n          <div class=\"item\">\r\n            <div class=\"item-text text container\">\r\n              <p>Impressum</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"item-text text container\">\r\n              <p>Datenschutz</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"item-text text container\">\r\n              <p>Allgemeine Geschäftsbedingungen</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\" (click)=\"navigateStart()\">\r\n            <div class=\"item-text text container\">\r\n              <p>Ausloggen</p>\r\n            </div>\r\n            <div class=\"item-icon\">\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/ads'\" routerLink=\"/employer/ads\" routerDirection=\"root\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Stellenanzeigen</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/notifications'\" routerLink=\"/employer/notifications\" routerDirection=\"root\">\r\n      <ion-icon name=\"notifications\"></ion-icon>\r\n      <ion-label>Nachrichten</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button [class.active]=\"currentUrl == '/employer/profile'\" routerLink=\"/employer/profile\" routerDirection=\"root\">\r\n      <ion-icon name=\"contact\"></ion-icon>\r\n      <ion-label>Profil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>"

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
        this.navController.navigateForward('/employer/profile/details');
    };
    ProfilePage.prototype.navigatePaymentMethods = function () {
        this.navController.navigateForward('/employer/profile/payment-methods');
    };
    ProfilePage.prototype.navigateStart = function () {
        var _this = this;
        // if (confirm('Are you sure to logout!')) {
        // }
        this.auth.logout().then(function (res) {
            localStorage.clear();
            _this.navController.navigateRoot('/start');
        });
        // this.navController.navigateRoot("/employer/profile");
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