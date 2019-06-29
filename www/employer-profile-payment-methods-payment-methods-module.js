(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-profile-payment-methods-payment-methods-module"],{

/***/ "./src/app/employer/profile/payment-methods/payment-methods.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/employer/profile/payment-methods/payment-methods.module.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentMethodsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodsPageModule", function() { return PaymentMethodsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_methods_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-methods.page */ "./src/app/employer/profile/payment-methods/payment-methods.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _payment_methods_page__WEBPACK_IMPORTED_MODULE_5__["PaymentMethodsPage"]
    }
];
var PaymentMethodsPageModule = /** @class */ (function () {
    function PaymentMethodsPageModule() {
    }
    PaymentMethodsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_methods_page__WEBPACK_IMPORTED_MODULE_5__["PaymentMethodsPage"]]
        })
    ], PaymentMethodsPageModule);
    return PaymentMethodsPageModule;
}());



/***/ }),

/***/ "./src/app/employer/profile/payment-methods/payment-methods.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/employer/profile/payment-methods/payment-methods.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Bezahlmethode anpassen</h2>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/profile/payment-methods/payment-methods.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/employer/profile/payment-methods/payment-methods.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL3Byb2ZpbGUvcGF5bWVudC1tZXRob2RzL3BheW1lbnQtbWV0aG9kcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/employer/profile/payment-methods/payment-methods.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employer/profile/payment-methods/payment-methods.page.ts ***!
  \**************************************************************************/
/*! exports provided: PaymentMethodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodsPage", function() { return PaymentMethodsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentMethodsPage = /** @class */ (function () {
    function PaymentMethodsPage() {
    }
    PaymentMethodsPage.prototype.ngOnInit = function () {
    };
    PaymentMethodsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-methods',
            template: __webpack_require__(/*! ./payment-methods.page.html */ "./src/app/employer/profile/payment-methods/payment-methods.page.html"),
            styles: [__webpack_require__(/*! ./payment-methods.page.scss */ "./src/app/employer/profile/payment-methods/payment-methods.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentMethodsPage);
    return PaymentMethodsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-profile-payment-methods-payment-methods-module.js.map