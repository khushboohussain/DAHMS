(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-ads-create-step2-step2-module"],{

/***/ "./src/app/employer/ads/create/step2/step2.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step2/step2.module.ts ***!
  \***********************************************************/
/*! exports provided: Step2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2PageModule", function() { return Step2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _step2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step2.page */ "./src/app/employer/ads/create/step2/step2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _step2_page__WEBPACK_IMPORTED_MODULE_5__["Step2Page"]
    }
];
var Step2PageModule = /** @class */ (function () {
    function Step2PageModule() {
    }
    Step2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_step2_page__WEBPACK_IMPORTED_MODULE_5__["Step2Page"]]
        })
    ], Step2PageModule);
    return Step2PageModule;
}());



/***/ }),

/***/ "./src/app/employer/ads/create/step2/step2.page.html":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step2/step2.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <!-- show if dates same (option 1) is clicked and continuous checkbox is not selected -->\n      <div *ngIf=\"option1;\" class=\" dates-same\">\n\n        <form [formGroup]=\"form\">\n          <div class=\"title container\">\n            <h2>Einsatz Template 1</h2>\n          </div>\n\n          <ion-list>\n            <div class=\"grid-2\">\n              <!-- start time -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Startzeit </ion-label>\n                <ion-datetime displayFormat=\"HH:mm\" formControlName=\"startTime\" cancelText=\"Abbrechen\"\n                  doneText=\"Fertig\"></ion-datetime>\n              </ion-item>\n\n              <!-- end time -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Endzeit</ion-label>\n                <ion-datetime formControlName=\"endTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\" doneText=\"Fertig\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-list>\n          <div class=\"employee-info\">\n            <div class=\"title container\">\n              <h3>Einsatzkraft</h3>\n            </div>\n            <ion-list>\n              <div class=\"grid-2-l\">\n                <!-- personal qualification -->\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\">Einsatzkraft</ion-label>\n                  <ion-select formControlName=\"qualification\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                    <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\n                    <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\n                    <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\n                    <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\n                    <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\n                    <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\n                    <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <!-- how many of those employees -->\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\">Anzahl</ion-label>\n                  <ion-input formControlName=\"requiredEmployees\" type=\"number\" clearInput></ion-input>\n                </ion-item>\n              </div>\n\n              <!-- wage -->\n              <div class=\"grid-2-l\">\n                <!-- money -->\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\">Honorar</ion-label>\n                  <ion-input formControlName=\"wage\" type=\"number\" clearInput></ion-input>\n                </ion-item>\n\n                <!-- money per day or per hour paid -->\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\">Tag/Std.</ion-label>\n                  <ion-select formControlName=\"wageType\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                    <ion-select-option value=\"HOURLY\">pro Stunde</ion-select-option>\n                    <ion-select-option value=\"DAILY\">pro Tag</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </div>\n\n              <!-- driving license -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Führerschein benötigt?</ion-label>\n                <ion-select formControlName=\"drivingLicence\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                  <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\n                  <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\n                  <ion-select-option value=\"B\">B</ion-select-option>\n                  <ion-select-option value=\"B1\">B1</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </div>\n\n          <!-- create another \"employee-info\" just below the first one, the newly created one should have a remove icon so we can delete it if added by mistake -->\n          <div class=\"add-new container pointer\" (click)=\"addField()\">\n            <ion-icon name=\"add\"></ion-icon>\n            <p>Weitere Einsatzkraft hinzufügen</p>\n          </div>\n\n          <!-- create ad -->\n          <div class=\"container\">\n            <div class=\"divider\"></div>\n            <ion-button color=\"primary\" expand=\"block\" [disabled]=\"form.invalid || form.pristine\"\n              (click)=\"submitForm(form)\">Jetzt Stelle erstellen\n            </ion-button>\n          </div>\n\n        </form>\n      </div>\n      <!-- show if dates same (Option 1) is clicked and continuous checkbox is selected -->\n      <div *ngIf=\"option2;\" class=\" dates-same-continuous\">\n\n        <form [formGroup]=\"form\">\n          <div class=\"title container\">\n            <h2>Einsatz Template 2</h2>\n          </div>\n\n          <ion-list>\n            <div class=\"grid-2\">\n              <!-- start time start date-->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Startzeit FIRSTDATE </ion-label>\n                <ion-datetime formControlName=\"startTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\"\n                  doneText=\"Fertig\"></ion-datetime>\n              </ion-item>\n\n              <!-- end time end date-->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Endzeit LASTDATE</ion-label>\n                <ion-datetime formControlName=\"endTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\" doneText=\"Fertig\">\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-list>\n\n          <div class=\"employee-info\">\n            <div class=\"title container\">\n              <h3>Einsatzkraft</h3>\n            </div>\n            <ion-list>\n              <div class=\"grid-2-l\">\n                <!-- personal qualification -->\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\">Einsatzkraft</ion-label>\n                  <ion-select formControlName=\"qualification\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                    <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\n                    <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\n                    <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\n                    <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\n                    <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\n                    <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\n                    <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n                <!-- how many of those employees -->\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\">Anzahl</ion-label>\n                  <ion-input formControlName=\"requiredEmployees\" type=\"number\" clearInput></ion-input>\n                </ion-item>\n              </div>\n\n              <!-- wage -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Honorar</ion-label>\n                <ion-input formControlName=\"wage\" type=\"number\" clearInput></ion-input>\n              </ion-item>\n\n              <!-- driving license -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Führerschein benötigt?</ion-label>\n                <ion-select formControlName=\"drivingLicence\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                  <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\n                  <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\n                  <ion-select-option value=\"B\">B</ion-select-option>\n                  <ion-select-option value=\"B1\">B1</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </div>\n\n          <!-- create another \"employee-info\" just below the first one, the newly created one should have a remove icon so we can delete it if added by mistake -->\n          <div class=\"add-new container\">\n            <ion-icon name=\"add\"></ion-icon>\n            <p>Weitere Einsatzkraft hinzufügen</p>\n          </div>\n\n          <!-- create ad -->\n          <div class=\"container\">\n            <div class=\"divider\"></div>\n            <ion-button color=\"primary\" expand=\"block\" [disabled]=\"form.invalid || form.pristine\"\n              (click)=\"submitForm(form)\">Jetzt Stelle erstellen\n            </ion-button>\n          </div>\n\n        </form>\n      </div>\n      <!-- show if dates different (Option 2) is clicked and continuous checkbox is not selected -->\n      <div *ngIf=\"continousCheck\" class=\"dates-different\">\n        <ion-slides>\n          <!-- show for each date an own form/slide; in last slide the submit button will be to confirm, else it should just go to the next slide -->\n          <ion-slide>\n\n            <form [formGroup]=\"form\">\n              <div class=\"title container\">\n                <h2>Einsatz Template 3</h2>\n\n                <!-- get data from last slide, if first slide then don't show -->\n                <div class=\"add-new\">\n                  <ion-icon name=\"add\"></ion-icon>\n                  <p>Voherige Daten übernehmen </p>\n                </div>\n              </div>\n\n              <ion-list>\n                <div class=\"grid-2\">\n                  <!-- start time -->\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Startzeit</ion-label>\n                    <ion-datetime formControlName=\"startTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\"\n                      doneText=\"Fertig\"></ion-datetime>\n                  </ion-item>\n\n                  <!-- end time -->\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Endzeit</ion-label>\n                    <ion-datetime formControlName=\"endTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\"\n                      doneText=\"Fertig\"></ion-datetime>\n                  </ion-item>\n                </div>\n              </ion-list>\n\n              <div class=\"employee-info\">\n                <div class=\"title container\">\n                  <h3>Einsatzkraft</h3>\n                </div>\n\n                <ion-list>\n                  <div class=\"grid-2-l\">\n                    <!-- personal qualfication-->\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\">Einsatzkraft</ion-label>\n                      <ion-select formControlName=\"qualification\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                        <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\n                        <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\n                        <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\n                        <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\n                        <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\n                        <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\n                        <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n\n                    <!-- how many of those employees -->\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\">Anzahl</ion-label>\n                      <ion-input formControlName=\"requiredEmployees\" type=\"number\" clearInput></ion-input>\n                    </ion-item>\n                  </div>\n\n                  <!-- wage -->\n                  <div class=\"grid-2-l\">\n                    <!-- money -->\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\">Honorar</ion-label>\n                      <ion-input formControlName=\"wage\" type=\"number\" clearInput></ion-input>\n                    </ion-item>\n\n                    <!-- money per day or per hour paid -->\n                    <ion-item lines=\"none\">\n                      <ion-label position=\"stacked\">Tag/Std.</ion-label>\n                      <ion-select formControlName=\"wageType\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                        <ion-select-option value=\"HOURLY\">pro Stunde</ion-select-option>\n                        <ion-select-option value=\"DAILY\">pro Tag</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </div>\n\n                  <!-- driving license -->\n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Führerschein benötigt?</ion-label>\n                    <ion-select formControlName=\"drivingLicence\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                      <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\n                      <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\n                      <ion-select-option value=\"B\">B</ion-select-option>\n                      <ion-select-option value=\"B1\">B1</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n              </div>\n\n              <!-- create another \"employee-info\" just below the first one, the newly created one should have a remove icon so we can delete it if added by mistake -->\n              <div class=\"add-new container\">\n                <ion-icon name=\"add\"></ion-icon>\n                <p>Weitere Einsatzkraft hinzufügen</p>\n              </div>\n\n              <!-- create ad -->\n              <div class=\"container\">\n                <div class=\"divider\"></div>\n                <ion-button color=\"primary\" expand=\"block\" [disabled]=\"form.invalid || form.pristine\"\n                  (click)=\"submitForm(form)\">Jetzt Stelle erstellen\n                </ion-button>\n              </div>\n            </form>\n          </ion-slide>\n        </ion-slides>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/ads/create/step2/step2.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step2/step2.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-new {\n  display: grid;\n  grid-template-columns: 20px auto;\n  align-items: center; }\n\nion-slide {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZXIvYWRzL2NyZWF0ZS9zdGVwMi9EOlxcS29kZUFscGhhXFxXb3Jrc3BhY2VcXFByb2plY3RzXFxEQUhNU1xcVGVzdFxcREFITVMgMS4wL3NyY1xcYXBwXFxlbXBsb3llclxcYWRzXFxjcmVhdGVcXHN0ZXAyXFxzdGVwMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLG1CQUFtQixFQUFBOztBQUdyQjtFQUFZLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZXIvYWRzL2NyZWF0ZS9zdGVwMi9zdGVwMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLW5ldyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tc2xpZGUgeyB0ZXh0LWFsaWduOiBsZWZ0OyB9Il19 */"

/***/ }),

/***/ "./src/app/employer/ads/create/step2/step2.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/employer/ads/create/step2/step2.page.ts ***!
  \*********************************************************/
/*! exports provided: Step2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Page", function() { return Step2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Step2Page = /** @class */ (function () {
    function Step2Page(navController, fb, api, helper) {
        this.navController = navController;
        this.fb = fb;
        this.api = api;
        this.helper = helper;
        this.newField = [];
    }
    Step2Page.prototype.ngOnInit = function () {
        // Retrieve the object from storage
        this.data = JSON.parse(localStorage.getItem('AdsData'));
        // console.log('retrievedObject: \n', this.data);
        this.actionController = JSON.parse(localStorage.getItem("actionController"));
        // console.log(typeof this.actionController);
        // console.log("actionController check is " + this.actionController);
        // console.log("continuous Work is " + this.data.continoueWork);
        // checking conditions for showing proper template
        // Template 1 will execute
        if (this.actionController == true && (this.data.continoueWork == '' || this.data.continoueWork == false)) {
            this.option1 = true;
            this.option2 = false;
            this.continousCheck = false;
            // from builder
            this.form = this.fb.group({
                startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                requiredEmployees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                wage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                wageType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                drivingLicence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            // localStorage.setItem('continousCheck', JSON.stringify(this.continousCheck));
            // localStorage.setItem('option1', JSON.stringify(this.option1));
            // localStorage.setItem('actionController', JSON.stringify(this.actionController));
        }
        // Tempate 2 will execute
        else if (this.actionController == true && this.data.continoueWork == true) {
            this.option1 = false;
            this.option2 = true;
            this.continousCheck = false;
            // from builder
            this.form = this.fb.group({
                startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                requiredEmployees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                wage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                // wageType: ['', Validators.required],
                drivingLicence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
        // Template 3 will execute
        else if (this.actionController == false && (this.data.continoueWork == '' || this.data.continoueWork == false)) {
            this.option1 = false;
            this.option2 = false;
            this.continousCheck = true;
            // from builder
            this.form = this.fb.group({
                startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                requiredEmployees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                wage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                wageType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                drivingLicence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
    };
    /* ngOnInit end */
    // Form Submit Method
    Step2Page.prototype.submitForm = function (form) {
        var _this = this;
        // submit method for template 1 and 3
        if (this.option2 != true) {
            // for condition 3
            if (this.continousCheck === true) {
                var record = {
                    jobTitle: this.data.jobTitle,
                    location: this.data.address,
                    startDate: this.data.startDate,
                    endDate: this.data.endDate,
                    fastReply: this.data.fastReply,
                    startTime: form.value.startTime,
                    endTime: form.value.endTime,
                    qualification: form.value.qualification,
                    requiredEmployees: form.value.requiredEmployees,
                    wage: form.value.wage,
                    wageType: form.value.wageType,
                    drivingLinse: form.value.drivingLicence,
                    uid: localStorage.getItem('uid'),
                    condition1: false,
                    condition2: false,
                    condition3: true
                };
                // console.log(record);
                this.api.createAds(record)
                    .then(function (res) {
                    _this.helper.presentToast('Ad Created Successfuliy!');
                    _this.navController.navigateRoot("/employer/ads/create/step3");
                }, function (err) {
                    _this.helper.presentToast(err.message + 'Error!');
                });
            }
            else {
                //  for condition 1 
                var record = {
                    jobTitle: this.data.jobTitle,
                    location: this.data.address,
                    startDate: this.data.startDate,
                    endDate: this.data.endDate,
                    fastReply: this.data.fastReply,
                    startTime: form.value.startTime,
                    endTime: form.value.endTime,
                    qualification: form.value.qualification,
                    requiredEmployees: form.value.requiredEmployees,
                    wage: form.value.wage,
                    wageType: form.value.wageType,
                    drivingLinse: form.value.drivingLicence,
                    uid: localStorage.getItem('uid'),
                    condition1: true,
                    condition2: false,
                    condition3: false
                    // drivingLicence: form.value.drivingLicence[0].text,
                    // licence: form.value.licence
                };
                // localStorage.setItem('option', JSON.stringify(false));
                // console.log(record);
                this.api.createAds(record)
                    .then(function (res) {
                    _this.helper.presentToast(' Ad Created Successfuliy!');
                    _this.navController.navigateRoot("/employer/ads/create/step3");
                }, function (err) {
                    _this.helper.presentToast(err.message + 'Error!');
                });
            }
        }
        else {
            // for tempate 2
            var record = {
                jobTitle: this.data.jobTitle,
                location: this.data.address,
                startDate: this.data.startDate,
                endDate: this.data.endDate,
                fastReply: this.data.fastReply,
                startTime: form.value.startTime,
                endTime: form.value.endTime,
                qualification: form.value.qualification,
                requiredEmployees: form.value.requiredEmployees,
                wage: form.value.wage,
                drivingLinse: form.value.drivingLicence,
                uid: localStorage.getItem('uid'),
                condition1: false,
                condition2: true,
                condition3: false
                // drivingLicence: form.value.drivingLicence[0].text,
                // licence: form.value.licence
            };
            // localStorage.setItem('option', JSON.stringify(false));
            // console.log(record);
            this.api.createAds(record)
                .then(function (res) {
                _this.helper.presentToast(' Ad Created Successfuliy!');
                _this.navController.navigateRoot("/employer/ads/create/step3");
            }, function (err) {
                _this.helper.presentToast(err.message + 'Error!');
            });
        }
        // end Else Bloack
    }; // end SubmitForm method
    // For adding new input field for employee
    Step2Page.prototype.addField = function () {
    };
    Step2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! ./step2.page.html */ "./src/app/employer/ads/create/step2/step2.page.html"),
            styles: [__webpack_require__(/*! ./step2.page.scss */ "./src/app/employer/ads/create/step2/step2.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], Step2Page);
    return Step2Page;
}());



/***/ })

}]);
//# sourceMappingURL=employer-ads-create-step2-step2-module.js.map