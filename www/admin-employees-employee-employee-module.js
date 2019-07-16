(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-employees-employee-employee-module"],{

/***/ "./src/app/admin/employees/employee/employee.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/employees/employee/employee.module.ts ***!
  \*************************************************************/
/*! exports provided: EmployeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function() { return EmployeePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee.page */ "./src/app/admin/employees/employee/employee.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_5__["EmployeePage"]
    }
];
var EmployeePageModule = /** @class */ (function () {
    function EmployeePageModule() {
    }
    EmployeePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_employee_page__WEBPACK_IMPORTED_MODULE_5__["EmployeePage"]]
        })
    ], EmployeePageModule);
    return EmployeePageModule;
}());



/***/ }),

/***/ "./src/app/admin/employees/employee/employee.page.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/employees/employee/employee.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <!-- name of employee -->\r\n      <div class=\"title container\">\r\n        <h2>Max Mustermann</h2>\r\n      </div>\r\n\r\n      <div class=\"info\">\r\n        <!-- employee profile image -->\r\n        <div class=\"profile-image container\">\r\n          <img src=\"../../../../../../assets/IMG_9577.JPG\">\r\n        </div>\r\n\r\n        <!-- employee information -->\r\n        <div class=\"employee-info\">\r\n          <p class=\"small-title container\">Allgemeine Informationen</p>\r\n          <div class=\"list-items\">\r\n            <!-- email -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>info@medapp.com</p>\r\n            </div>\r\n            <!-- address -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>Musterstr. 10, 10000 Musterhausen</p>\r\n            </div>\r\n            <!-- phone number -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>+92 334 872 2424</p>\r\n            </div>\r\n            <!-- association -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>Deutsches Rotes Kreuz</p>\r\n            </div>\r\n            <!-- max. work radius -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>25km</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"employee-qualifications\">\r\n          <p class=\"small-title container\">Qualifikationsnachweise</p>\r\n          <div class=\"list-items\">\r\n            <!-- personal qualification -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>Sanitätshelfer</p>\r\n            </div>\r\n            <!-- qualification certificate -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>Qualifikationsnachweis</p>\r\n            </div>\r\n            <!-- training certificate -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>Fortbildungsnachweis</p>\r\n            </div>\r\n            <!-- driver license, FORMAT: Führerschein: \"DRIVING LICENSE TYPE\" -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>Führerschein: </p>\r\n            </div>\r\n            <!-- other qualification, show each other qualification as an entry -->\r\n            <div class=\"item-no-icon container\">\r\n              <p>Andere</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"divider\"></div>\r\n\r\n        <!-- accept or not accept employee, show only if still not accepted -->\r\n        <div class=\"container\">\r\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"block()\">Akzeptieren / Ablehnen</ion-button>\r\n        </div>\r\n\r\n        <!-- block employee -->\r\n        <div class=\"container\">\r\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"block()\">Blockieren</ion-button>\r\n        </div>\r\n\r\n        <!-- delete employee -->\r\n        <div class=\"container\">\r\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"delete()\">Löschen</ion-button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/employees/employee/employee.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/employees/employee/employee.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin-bottom: 12px;\n  width: 100%; }\n  .profile-image img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 124px;\n    width: 124px;\n    max-width: unset;\n    border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW1wbG95ZWVzL2VtcGxveWVlL0Q6XFxLb2RlQWxwaGFcXFdvcmtzcGFjZVxcUHJvamVjdHNcXERBSE1TXFxUZXN0XFxTYWFkL3NyY1xcYXBwXFxhZG1pblxcZW1wbG95ZWVzXFxlbXBsb3llZVxcZW1wbG95ZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtFQUZiO0lBS0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVlcy9lbXBsb3llZS9lbXBsb3llZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMjRweDtcclxuICAgIHdpZHRoOiAxMjRweDtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/employees/employee/employee.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/employees/employee/employee.page.ts ***!
  \***********************************************************/
/*! exports provided: EmployeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePage", function() { return EmployeePage; });
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

var EmployeePage = /** @class */ (function () {
    function EmployeePage() {
    }
    EmployeePage.prototype.ngOnInit = function () {
    };
    EmployeePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.page.html */ "./src/app/admin/employees/employee/employee.page.html"),
            styles: [__webpack_require__(/*! ./employee.page.scss */ "./src/app/admin/employees/employee/employee.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeePage);
    return EmployeePage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-employees-employee-employee-module.js.map