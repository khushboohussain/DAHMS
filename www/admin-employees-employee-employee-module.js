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

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <!-- name of employee -->\n      <div class=\"title container\">\n        <h2>Max Mustermann</h2>\n      </div>\n\n      <div class=\"info\">\n        <!-- employee profile image -->\n        <div class=\"profile-image container\">\n          <img src=\"../../../../../../assets/IMG_9577.JPG\">\n        </div>\n\n        <!-- employee information -->\n        <div class=\"employee-info\">\n          <p class=\"small-title container\">Allgemeine Informationen</p>\n          <div class=\"list-items\">\n            <!-- email -->\n            <div class=\"item-no-icon container\">\n              <p>info@medapp.com</p>\n            </div>\n            <!-- address -->\n            <div class=\"item-no-icon container\">\n              <p>Musterstr. 10, 10000 Musterhausen</p>\n            </div>\n            <!-- phone number -->\n            <div class=\"item-no-icon container\">\n              <p>+92 334 872 2424</p>\n            </div>\n            <!-- association -->\n            <div class=\"item-no-icon container\">\n              <p>Deutsches Rotes Kreuz</p>\n            </div>\n            <!-- max. work radius -->\n            <div class=\"item-no-icon container\">\n              <p>25km</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"employee-qualifications\">\n          <p class=\"small-title container\">Qualifikationsnachweise</p>\n          <div class=\"list-items\">\n            <!-- personal qualification -->\n            <div class=\"item-no-icon container\">\n              <p>Sanitätshelfer</p>\n            </div>\n            <!-- qualification certificate -->\n            <div class=\"item-no-icon container\">\n              <p>Qualifikationsnachweis</p>\n            </div>\n            <!-- training certificate -->\n            <div class=\"item-no-icon container\">\n              <p>Fortbildungsnachweis</p>\n            </div>\n            <!-- driver license, FORMAT: Führerschein: \"DRIVING LICENSE TYPE\" -->\n            <div class=\"item-no-icon container\">\n              <p>Führerschein: </p>\n            </div>\n            <!-- other qualification, show each other qualification as an entry -->\n            <div class=\"item-no-icon container\">\n              <p>Andere</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"divider\"></div>\n\n        <!-- accept or not accept employee, show only if still not accepted -->\n        <div class=\"container\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"block()\">Akzeptieren / Ablehnen</ion-button>\n        </div>\n\n        <!-- block employee -->\n        <div class=\"container\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"block()\">Blockieren</ion-button>\n        </div>\n\n        <!-- delete employee -->\n        <div class=\"container\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"delete()\">Löschen</ion-button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/admin/employees/employee/employee.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/employees/employee/employee.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin-bottom: 12px;\n  width: 100%; }\n  .profile-image img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 124px;\n    width: 124px;\n    max-width: unset;\n    border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZW1wbG95ZWVzL2VtcGxveWVlL0Q6XFxLb2RlQWxwaGFcXFdvcmtzcGFjZVxcUHJvamVjdHNcXERBSE1TXFxUZXN0XFxEQUhNUyAxLjAvc3JjXFxhcHBcXGFkbWluXFxlbXBsb3llZXNcXGVtcGxveWVlXFxlbXBsb3llZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBRmI7SUFLSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEyNHB4O1xuICAgIHdpZHRoOiAxMjRweDtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbn0iXX0= */"

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