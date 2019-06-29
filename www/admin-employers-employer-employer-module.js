(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-employers-employer-employer-module"],{

/***/ "./src/app/admin/employers/employer/employer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/employers/employer/employer.module.ts ***!
  \*************************************************************/
/*! exports provided: EmployerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerPageModule", function() { return EmployerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employer.page */ "./src/app/admin/employers/employer/employer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _employer_page__WEBPACK_IMPORTED_MODULE_5__["EmployerPage"]
    }
];
var EmployerPageModule = /** @class */ (function () {
    function EmployerPageModule() {
    }
    EmployerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_employer_page__WEBPACK_IMPORTED_MODULE_5__["EmployerPage"]]
        })
    ], EmployerPageModule);
    return EmployerPageModule;
}());



/***/ }),

/***/ "./src/app/admin/employers/employer/employer.page.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/employers/employer/employer.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <!-- name of organisation -->\n      <div class=\"title container\">\n        <h2>Deutsches Rotes Kreuz</h2>\n      </div>\n\n      <!-- organisation information -->\n      <div class=\"organisation-info\">\n        <p class=\"small-title container\">Allgemeine Informationen</p>\n        <div class=\"list-items\">\n        <!-- address -->\n        <div class=\"item-no-icon container\">\n          <p>Musterstr. 10, 10000 Musterhausen</p>\n        </div>\n        </div>\n      </div>\n\n      <!-- organisation contact person -->\n      <div class=\"organisation-contact\">\n        <p class=\"small-title container\">Kontaktperson</p>\n        <div class=\"list-items\">\n          <!-- first name last name -->\n          <div class=\"item-no-icon container\">\n            <p>Max Mustermann</p>\n          </div>\n\n          <!-- email -->\n          <div class=\"item-no-icon container\">\n            <p>info@medapp.com</p>\n          </div>\n\n          <!-- phone number -->\n          <div class=\"item-no-icon container\">\n            <p>+92 334 872 2424</p>\n          </div>\n          \n          <!-- organisation role -->\n          <div class=\"item-no-icon container\">\n            <p>Vorstand</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"divider\"></div>\n\n      <!-- block employer -->\n      <div class=\"container\">\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"block()\">Blockieren</ion-button>\n      </div>\n\n      <!-- delete employer -->\n      <div class=\"container\">\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"delete()\">Löschen</ion-button>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/employers/employer/employer.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/employers/employer/employer.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVycy9lbXBsb3llci9lbXBsb3llci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/employers/employer/employer.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/employers/employer/employer.page.ts ***!
  \***********************************************************/
/*! exports provided: EmployerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerPage", function() { return EmployerPage; });
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

var EmployerPage = /** @class */ (function () {
    function EmployerPage() {
    }
    EmployerPage.prototype.ngOnInit = function () {
    };
    EmployerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employer',
            template: __webpack_require__(/*! ./employer.page.html */ "./src/app/admin/employers/employer/employer.page.html"),
            styles: [__webpack_require__(/*! ./employer.page.scss */ "./src/app/admin/employers/employer/employer.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployerPage);
    return EmployerPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-employers-employer-employer-module.js.map