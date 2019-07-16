(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-start-module"],{

/***/ "./src/app/start/start.module.ts":
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start.page */ "./src/app/start/start.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_5__["StartPage"]
    }
];
var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_start_page__WEBPACK_IMPORTED_MODULE_5__["StartPage"]]
        })
    ], StartPageModule);
    return StartPageModule;
}());



/***/ }),

/***/ "./src/app/start/start.page.html":
/*!***************************************!*\
  !*** ./src/app/start/start.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"main container\">\r\n    <div class=\"content\">\r\n      <div class=\"title\">\r\n        <h1>medApp</h1>\r\n        <div class=\"text\">\r\n          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"buttons\">\r\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"navigateRegister()\">Jetzt registrieren</ion-button>\r\n        <p class=\"pointer\" (click)=\"navigateLogin()\">Bereits registriert? Jetzt einloggen!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/start/start.page.scss":
/*!***************************************!*\
  !*** ./src/app/start/start.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-top: 20%; }\n\n.buttons {\n  position: absolute;\n  width: 100%;\n  bottom: 4.5%;\n  text-align: center;\n  padding: 0 32px 0 0; }\n\n.buttons p {\n    margin-top: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvRDpcXEtvZGVBbHBoYVxcV29ya3NwYWNlXFxQcm9qZWN0c1xcREFITVNcXFRlc3RcXFNhYWQvc3JjXFxhcHBcXHN0YXJ0XFxzdGFydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUxyQjtJQVFJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQvc3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDQuNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMzJweCAwIDA7XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDsgXHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/start/start.page.ts":
/*!*************************************!*\
  !*** ./src/app/start/start.page.ts ***!
  \*************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartPage = /** @class */ (function () {
    function StartPage(navController) {
        this.navController = navController;
    }
    StartPage.prototype.navigateLogin = function () {
        this.navController.navigateForward("/login");
    };
    StartPage.prototype.navigateRegister = function () {
        this.navController.navigateForward("/register");
    };
    StartPage.prototype.ngOnInit = function () {
    };
    StartPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.page.html */ "./src/app/start/start.page.html"),
            styles: [__webpack_require__(/*! ./start.page.scss */ "./src/app/start/start.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], StartPage);
    return StartPage;
}());



/***/ })

}]);
//# sourceMappingURL=start-start-module.js.map