(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-onboarding-onboarding-module"],{

/***/ "./src/app/employee/onboarding/onboarding.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee/onboarding/onboarding.module.ts ***!
  \**********************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/employee/onboarding/onboarding.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_5__["OnboardingPage"]
    }
];
var OnboardingPageModule = /** @class */ (function () {
    function OnboardingPageModule() {
    }
    OnboardingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_5__["OnboardingPage"]]
        })
    ], OnboardingPageModule);
    return OnboardingPageModule;
}());



/***/ }),

/***/ "./src/app/employee/onboarding/onboarding.page.html":
/*!**********************************************************!*\
  !*** ./src/app/employee/onboarding/onboarding.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h1>Erste Schritte</h1>\n        <div class=\"text\">\n          <p></p>\n        </div>\n      </div>\n\n      <div class=\"general\">\n        <form>\n          <div class=\"personal-data\">\n            <ion-list>\n              <div class=\"grid-1\">\n                <!-- profile image -->\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\">Profilbild</ion-label>\n                  <div class=\"profile-image container\" (click)=\"uploadImage()\">\n                    <img src=\"../../../../../../assets/IMG_9577.JPG\">\n                  </div>\n                </ion-item>\n              </div>\n\n              <!-- address -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Adresse</ion-label>\n                <ion-input type=\"text\"></ion-input>\n              </ion-item>\n\n              <!-- phone number -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Telefonnumer</ion-label>\n                <ion-input type=\"text\" clearInput autocapitalize=\"word\" autocomplete autocorrect></ion-input>\n              </ion-item>\n\n              <!-- association-->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Zugehörigkeit Hi. Orga.</ion-label>\n                <ion-input type=\"text\"></ion-input>\n              </ion-item>\n\n              <!-- max. work radius -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Max. Einsatzradius</ion-label>\n                <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\">\n                  <ion-select-option>10km</ion-select-option>\n                  <ion-select-option>25km</ion-select-option>\n                  <ion-select-option>50km</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n              <!-- passport -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Ausweis</ion-label>\n                <ion-input type=\"file\" placeholder=\"Ausweis Vorderseite hochladen\"></ion-input>\n                <ion-input type=\"file\" placeholder=\"Ausweis Rückseite hochladen\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </div>\n          \n          <div class=\"divider\"></div>\n\n          <!-- qualifications -->\n          <div class=\"qualifications-data\">\n            <div class=\"title container\">\n              <h3>Qualfikationen</h3>\n            </div>\n            <ion-list>\n              <!-- personal qualifications -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Persönliche Qualifikation</ion-label>\n                <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\">\n                  <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\n                  <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\n                  <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\n                  <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\n                  <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\n                  <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\n                  <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\n                </ion-select>\n\n                <!-- qualification certificate -->\n                <ion-input type=\"file\" placeholder=\"Qualifikationsnachweis hochladen\"></ion-input>\n\n                <!-- training certificate -->\n                <ion-input type=\"file\" placeholder=\"Fortbildungsnachweis hochladen\"></ion-input>\n              </ion-item>\n\n              <!-- driving license -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Führerscheinklasse</ion-label>\n                <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\">\n                  <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\n                  <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\n                  <ion-select-option value=\"B\">B</ion-select-option>\n                  <ion-select-option value=\"B1\">B1</ion-select-option>\n                </ion-select> \n  \n                <!-- Show only if first option is not selected, driving license certificate -->\n                <ion-input type=\"file\" placeholder=\"Führerschein Vorderseite hochladen\"></ion-input>\n                <ion-input type=\"file\" placeholder=\"Führerschein Rückseite hochladen\"></ion-input>\n              </ion-item>\n              \n              <!-- other qualification -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Sonstige Qualifikation (optional)</ion-label>\n\n                <!-- name of qualification -->\n                <ion-input type=\"text\"></ion-input>\n\n                <!-- other qualification certificate -->\n                <ion-input type=\"file\" placeholder=\"Qualifikationsnachweis\"></ion-input>\n              </ion-item>\n\n              <!-- add another other qualification -->\n              <div class=\"add-new container\">\n                <ion-icon name=\"add\"></ion-icon><p>Weitere sonstige Qualifikation hinzufügen</p>\n              </div>\n            </ion-list>\n          </div>\n          \n          <!-- finish onboarding -->\n          <div class=\"container\">\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"navigateHome()\">Einrichtung abschließen</ion-button>\n          </div>\n          \n        </form>\n      </div>\n      \n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employee/onboarding/onboarding.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/employee/onboarding/onboarding.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin-bottom: 12px;\n  width: 100%; }\n  .profile-image img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 124px;\n    width: 124px;\n    max-width: unset;\n    border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvb25ib2FyZGluZy9EOlxcS29kZUFscGhhXFxXb3Jrc3BhY2VcXFByb2plY3RzXFxEQUhNU1xcVGVzdFxcREFITVMgMS4wL3NyY1xcYXBwXFxlbXBsb3llZVxcb25ib2FyZGluZ1xcb25ib2FyZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBRmI7SUFLSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWltYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEyNHB4O1xuICAgIHdpZHRoOiAxMjRweDtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/employee/onboarding/onboarding.page.ts":
/*!********************************************************!*\
  !*** ./src/app/employee/onboarding/onboarding.page.ts ***!
  \********************************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
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


var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navController) {
        this.navController = navController;
    }
    OnboardingPage.prototype.ngOnInit = function () {
    };
    OnboardingPage.prototype.navigateHome = function () {
        this.navController.navigateRoot("/employee/appointments");
    };
    OnboardingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onboarding',
            template: __webpack_require__(/*! ./onboarding.page.html */ "./src/app/employee/onboarding/onboarding.page.html"),
            styles: [__webpack_require__(/*! ./onboarding.page.scss */ "./src/app/employee/onboarding/onboarding.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], OnboardingPage);
    return OnboardingPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-onboarding-onboarding-module.js.map