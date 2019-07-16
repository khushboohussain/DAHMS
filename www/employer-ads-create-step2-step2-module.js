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

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <!-- show if dates same (option 1) is clicked and continuous checkbox is not selected -->\r\n      <div *ngIf=\"option1;\" class=\" dates-same\">\r\n\r\n\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"title container\">\r\n            <h2>Einsatz Template 1</h2>\r\n          </div>\r\n\r\n          <ion-list>\r\n            <div class=\"grid-2\">\r\n              <!-- start time -->\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Startzeit </ion-label>\r\n                <ion-datetime displayFormat=\"HH:mm\" formControlName=\"startTime\" cancelText=\"Abbrechen\"\r\n                  doneText=\"Fertig\"> </ion-datetime>\r\n              </ion-item>\r\n\r\n              <!-- end time -->\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Endzeit</ion-label>\r\n                <ion-datetime formControlName=\"endTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\" doneText=\"Fertig\">\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </div>\r\n          </ion-list>\r\n          <div class=\"employee-info\">\r\n            <div class=\"title container\">\r\n              <h3>Einsatzkraft</h3>\r\n            </div>\r\n            <ion-list>\r\n\r\n              <!-- new field will add here -->\r\n              <div class=\"grid-2-l\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Einsatzkraft</ion-label>\r\n                  <ion-select formControlName=\"qualification\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                    <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\r\n                    <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\r\n                    <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\r\n                    <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\r\n                    <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\r\n                    <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\r\n                    <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <!-- how many of those employees -->\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Anzahl</ion-label>\r\n                  <ion-input formControlName=\"requiredEmployees\" type=\"number\" clearInput></ion-input>\r\n                </ion-item>\r\n              </div>\r\n\r\n\r\n              <div *ngFor=\"let item of newField; let i = index \">\r\n                <ion-item float-right>\r\n                  <!-- {{i}} -->\r\n                  <!-- <ion-icon name=\"close\"  ></ion-icon> -->\r\n                  <ion-icon name=\"close-circle\" title=\"Remove newly created fields\" (click)=\"removeFieldx(i)\"></ion-icon>\r\n                </ion-item>\r\n\r\n\r\n                <div class=\"grid-2-l\">\r\n                  <!-- personal qualification -->\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Einsatzkraft</ion-label>\r\n                    <ion-select [(ngModel)]=\"item.otherQualification\" [ngModelOptions]=\"{standalone: true}\"\r\n                      cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                      <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\r\n                      <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\r\n                      <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\r\n                      <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\r\n                      <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\r\n                      <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\r\n                      <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n\r\n                  <!-- how many of those employees -->\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Anzahl</ion-label>\r\n                    <ion-input type=\"number\" [(ngModel)]=\"item.otherRequiredEmp\" [ngModelOptions]=\"{standalone: true}\"\r\n                      clearInput></ion-input>\r\n\r\n                  </ion-item>\r\n\r\n                </div>\r\n              </div>\r\n              <!-- new field creation end -->\r\n\r\n              <!-- wage -->\r\n              <div class=\"grid-2-l\">\r\n                <!-- money -->\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Honorar</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"wage\" clearInput></ion-input>\r\n                </ion-item>\r\n\r\n                <!-- money per day or per hour paid -->\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Tag/Std.</ion-label>\r\n                  <ion-select formControlName=\"wageType\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                    <ion-select-option value=\"HOURLY\">pro Stunde</ion-select-option>\r\n                    <ion-select-option value=\"DAILY\">pro Tag</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n\r\n              <!-- driving license -->\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Führerschein benötigt?</ion-label>\r\n                <ion-select formControlName=\"drivingLicence\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                  <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\r\n                  <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\r\n                  <ion-select-option value=\"B\">B</ion-select-option>\r\n                  <ion-select-option value=\"B1\">B1</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n\r\n          <!-- create another \"employee-info\" just below the first one, the newly created one should have a remove icon so we can delete it if added by mistake -->\r\n          <div class=\"add-new container pointer\" (click)=\"addFieldx()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n            <p>Weitere Einsatzkraft hinzufügen</p>\r\n          </div>\r\n\r\n          <!-- create ad -->\r\n          <div class=\"container\">\r\n            <div class=\"divider\"></div>\r\n            <ion-button color=\"primary\" expand=\"block\" [disabled]=\"form.invalid || form.pristine\"\r\n              (click)=\"submitForm(form)\">Jetzt Stelle erstellen\r\n            </ion-button>\r\n            <!--  -->\r\n          </div>\r\n\r\n        </form>\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <!-- show if dates same (Option 1) is clicked and continuous checkbox is selected -->\r\n      <div *ngIf=\"option2;\" class=\" dates-same-continuous\">\r\n\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"title container\">\r\n            <h2>Einsatz Template 2</h2>\r\n          </div>\r\n\r\n          <ion-list>\r\n            <div class=\"grid-2\">\r\n              <!-- start time start date-->\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Startzeit {{data.startDate | date}} </ion-label>\r\n                <ion-datetime formControlName=\"startTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\"\r\n                  doneText=\"Fertig\"></ion-datetime>\r\n              </ion-item>\r\n\r\n              <!-- end time end date-->\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Endzeit {{data.endDate | date}}</ion-label>\r\n                <ion-datetime formControlName=\"endTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\" doneText=\"Fertig\">\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </div>\r\n          </ion-list>\r\n\r\n          <div class=\"employee-info\">\r\n            <div class=\"title container\">\r\n              <h3>Einsatzkraft</h3>\r\n            </div>\r\n            <ion-list>\r\n              <div class=\"grid-2-l\">\r\n                <!-- personal qualification -->\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Einsatzkraft</ion-label>\r\n                  <ion-select formControlName=\"qualification\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                    <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\r\n                    <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\r\n                    <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\r\n                    <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\r\n                    <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\r\n                    <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\r\n                    <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n\r\n                <!-- how many of those employees -->\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Anzahl</ion-label>\r\n                  <ion-input formControlName=\"requiredEmployees\" type=\"number\" clearInput></ion-input>\r\n                </ion-item>\r\n              </div>\r\n\r\n              <div *ngFor=\"let item of newField; let i = index \">\r\n                <ion-item float-right>\r\n                  <!-- {{i}} -->\r\n                  <!-- <ion-icon name=\"close\"  ></ion-icon> -->\r\n                  <ion-icon name=\"close-circle\" title=\"Remove newly created fields\" (click)=\"removeFieldx(i)\"></ion-icon>\r\n                </ion-item>\r\n\r\n\r\n                <div class=\"grid-2-l\">\r\n                  <!-- personal qualification -->\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Einsatzkraft</ion-label>\r\n                    <ion-select [(ngModel)]=\"item.otherQualification\" [ngModelOptions]=\"{standalone: true}\"\r\n                      cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                      <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\r\n                      <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\r\n                      <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\r\n                      <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\r\n                      <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\r\n                      <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\r\n                      <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n\r\n                  <!-- how many of those employees -->\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Anzahl</ion-label>\r\n                    <ion-input type=\"number\" [(ngModel)]=\"item.otherRequiredEmp\" [ngModelOptions]=\"{standalone: true}\"\r\n                      clearInput></ion-input>\r\n\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <!-- new field creation end -->\r\n\r\n              <!-- wage -->\r\n              <div class=\"grid-2-l\">\r\n                <!-- money -->\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Honorar</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"wage\" clearInput></ion-input>\r\n                </ion-item>\r\n\r\n                <!-- money per day or per hour paid -->\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Tag/Std.</ion-label>\r\n                  <ion-select formControlName=\"wageType\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                    <ion-select-option value=\"HOURLY\">pro Stunde</ion-select-option>\r\n                    <ion-select-option value=\"DAILY\">pro Tag</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n              <!-- driving license -->\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">Führerschein benötigt?</ion-label>\r\n                <ion-select formControlName=\"drivingLicence\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                  <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\r\n                  <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\r\n                  <ion-select-option value=\"B\">B</ion-select-option>\r\n                  <ion-select-option value=\"B1\">B1</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n          </div>\r\n\r\n          <!-- create another \"employee-info\" just below the first one, the newly created one should have a remove icon so we can delete it if added by mistake -->\r\n          <div class=\"add-new container pointer\" (click)=\"addFieldx()\">\r\n            <ion-icon name=\"add\"></ion-icon>\r\n            <p>Weitere Einsatzkraft hinzufügen</p>\r\n          </div>\r\n\r\n          <!-- create ad -->\r\n          <div class=\"container\">\r\n            <div class=\"divider\"></div>\r\n            <ion-button color=\"primary\" expand=\"block\" [disabled]=\"form.invalid || form.pristine\"\r\n              (click)=\"submitForm(form)\">Jetzt Stelle erstellen\r\n            </ion-button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n\r\n\r\n      <!-- show if dates different (Option 2) is clicked and continuous checkbox is not selected -->\r\n\r\n      <div *ngIf=\"option3\" class=\"dates-different\">\r\n        <ion-slides #slides>\r\n          <!-- show for each date an own form/slide; in last slide the submit button will be to confirm, else it should just go to the next slide -->\r\n          <ion-slide *ngFor=\"let item of form2; let i = index;\">\r\n            <form [formGroup]=\"form2[i]\">\r\n              <div class=\"title container\">\r\n                <h2>Einsatz</h2>\r\n                <!-- Data for day {{i+1}} <br> -->\r\n                <!-- {{dateStart | date}} -->\r\n                <!-- {{dateEnd | date}} -->\r\n\r\n                <!-- get data from last slide, if first slide then don't show -->\r\n                <div class=\"add-new\" *ngIf=\"i > 0\" (click)=\"goBack()\">\r\n                  <ion-icon name=\"add\"></ion-icon>\r\n                  <p>Voherige Daten übernehmen </p>\r\n                </div>\r\n              </div>\r\n\r\n              <ion-list>\r\n                <div class=\"grid-2\">\r\n                  <!-- start time -->\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Startzeit</ion-label>\r\n                    <ion-datetime formControlName=\"startTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\"\r\n                      doneText=\"Fertig\"></ion-datetime>\r\n                  </ion-item>\r\n\r\n                  <!-- end time -->\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Endzeit</ion-label>\r\n                    <ion-datetime formControlName=\"endTime\" displayFormat=\"HH:mm\" cancelText=\"Abbrechen\"\r\n                      doneText=\"Fertig\"></ion-datetime>\r\n                  </ion-item>\r\n                </div>\r\n              </ion-list>\r\n\r\n              <div class=\"employee-info\">\r\n                <div class=\"title container\">\r\n                  <h3>Einsatzkraft</h3>\r\n                </div>\r\n\r\n                <ion-list>\r\n                  <div class=\"grid-2-l\">\r\n                    <!-- personal qualfication-->\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label position=\"stacked\">Einsatzkraft</ion-label>\r\n                      <ion-select formControlName=\"qualification\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                        <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\r\n                        <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\r\n                        <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\r\n                        <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\r\n                        <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\r\n                        <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\r\n                        <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                    <!-- how many of those employees -->\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label position=\"stacked\">Anzahl</ion-label>\r\n                      <ion-input formControlName=\"requiredEmployees\" type=\"number\" clearInput></ion-input>\r\n                    </ion-item>\r\n                  </div>\r\n\r\n                  <div *ngFor=\"let extra of extraWorkforce; let j = index\">\r\n                    <ion-item float-right *ngIf=\"extra.index === i\">\r\n                      <!-- {{i}} -->\r\n                      <!-- <ion-icon name=\"close\"  ></ion-icon> -->\r\n                      <ion-icon name=\"close-circle\" title=\"Remove newly created fields\" (click)=\"removeField(j)\">\r\n                      </ion-icon>\r\n                    </ion-item>\r\n\r\n                    <div class=\"grid-2-l\" *ngIf=\"extra.index === i\">\r\n                      <!-- personal qualification -->\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label position=\"stacked\">Einsatzkraft</ion-label>\r\n                        <ion-select [(ngModel)]=\"extra.qualification\" [ngModelOptions]=\"{standalone: true}\"\r\n                          cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                          <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\r\n                          <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\r\n                          <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\r\n                          <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\r\n                          <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\r\n                          <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\r\n                          <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\r\n                        </ion-select>\r\n                      </ion-item>\r\n\r\n                      <!-- how many of those employees -->\r\n                      <ion-item lines=\"none\">\r\n                        <ion-label position=\"stacked\">Anzahl</ion-label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"extra.requiredEmployees\"\r\n                          [ngModelOptions]=\"{standalone: true}\" clearInput></ion-input>\r\n\r\n                      </ion-item>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <!-- new field creation end -->\r\n\r\n                  <!-- wage -->\r\n                  <div class=\"grid-2-l\">\r\n                    <!-- money -->\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label position=\"stacked\">Honorar</ion-label>\r\n                      <ion-input formControlName=\"wage\" type=\"number\" clearInput></ion-input>\r\n                    </ion-item>\r\n\r\n                    <!-- money per day or per hour paid -->\r\n                    <ion-item lines=\"none\">\r\n                      <ion-label position=\"stacked\">Tag/Std.</ion-label>\r\n                      <ion-select formControlName=\"wageType\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                        <ion-select-option value=\"HOURLY\">pro Stunde</ion-select-option>\r\n                        <ion-select-option value=\"DAILY\">pro Tag</ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n                  </div>\r\n\r\n                  <!-- driving license -->\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Führerschein benötigt?</ion-label>\r\n                    <ion-select formControlName=\"drivingLicence\" cancelText=\"Abbrechen\" okText=\"Fertig\">\r\n                      <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\r\n                      <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\r\n                      <ion-select-option value=\"B\">B</ion-select-option>\r\n                      <ion-select-option value=\"B1\">B1</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-list>\r\n              </div>\r\n\r\n              <!-- create another \"employee-info\" just below the first one, the newly created one should have a remove icon so we can delete it if added by mistake -->\r\n              <div class=\"add-new container pointer\" (click)=\"addField(i)\">\r\n                <ion-icon name=\"add\"></ion-icon>\r\n                <p>Weitere Einsatzkraft hinzufügen</p>\r\n              </div>\r\n\r\n              <!-- create ad -->\r\n              <div class=\"container\">\r\n                <div class=\"divider\"></div>\r\n                <ion-button color=\"primary\" expand=\"block\" *ngIf=\"i < days-1\"\r\n                  [disabled]=\"form2[i].invalid || form2[i].pristine\" (click)=\"nextSlide()\">Next Slide\r\n                </ion-button>\r\n                <ion-button color=\"primary\" expand=\"block\" *ngIf=\"i == days-1 \"\r\n                  [disabled]=\"form2[i].invalid || form2[i].pristine\" (click)=\"submitForm(form2)\">Jetzt Stelle erstellen\r\n                </ion-button>\r\n              </div>\r\n            </form>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/ads/create/step2/step2.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step2/step2.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-new {\n  display: grid;\n  grid-template-columns: 20px auto;\n  align-items: center; }\n\nion-slide {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZXIvYWRzL2NyZWF0ZS9zdGVwMi9EOlxcS29kZUFscGhhXFxXb3Jrc3BhY2VcXFByb2plY3RzXFxEQUhNU1xcVGVzdFxcU2FhZC9zcmNcXGFwcFxcZW1wbG95ZXJcXGFkc1xcY3JlYXRlXFxzdGVwMlxcc3RlcDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQkFBbUIsRUFBQTs7QUFHckI7RUFBWSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Fkcy9jcmVhdGUvc3RlcDIvc3RlcDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1uZXcge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXNsaWRlIHsgdGV4dC1hbGlnbjogbGVmdDsgfSJdfQ== */"

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
        this.form2 = [];
        this.newField = [];
        this.otherQualification = '';
        this.otherRequiredEmployees = null;
        this.extraWorkforce = [];
    }
    Step2Page.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve the object from storage
        this.data = JSON.parse(localStorage.getItem('AdsData'));
        // console.log('retrieved Object: \n', this.data);
        this.dateStart = this.data.startDate;
        this.actionController = JSON.parse(localStorage.getItem('actionController'));
        this.continuoueCheck = JSON.parse(localStorage.getItem('continuoueCheck'));
        // this.continuoueCheck = JSON.parse(localStorage.getItem('continuoueCheck'));
        // this.differDates = JSON.parse(localStorage.getItem("differDates"));
        // console.log('differDates check is ' + this.differDates);
        // this.continuoueCheck = JSON.parse(localStorage.getItem("continuoueCheck"));
        /*     console.log('actionController ', this.actionController);
            console.log(typeof this.actionController);
            console.log('continuoueCheck ', this.continuoueCheck);
            console.log(typeof this.continuoueCheck); */
        // checking conditions for showing proper template
        // Template 1 will execute
        if (this.actionController === true && this.continuoueCheck === false) {
            this.option1 = true;
            this.option2 = false;
            this.option3 = false;
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
            // localStorage.setItem('option3', JSON.stringify(this.option3));
            // localStorage.setItem('option1', JSON.stringify(this.option1));
            // localStorage.setItem('actionController', JSON.stringify(this.actionController));
        }
        else if (this.actionController === true && this.continuoueCheck === true) {
            this.option1 = false;
            this.option2 = true;
            this.option3 = false;
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
            // Template 3
        }
        else if (this.actionController === false && this.continuoueCheck === false) {
            this.option1 = false;
            this.option2 = false;
            this.option3 = true;
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
            // console.log(JSON.parse(localStorage.getItem('day')));
            this.days = JSON.parse(localStorage.getItem('days'));
            // console.log('Days are:  ', this.days);
            // console.log(typeof this.days);
            // console.log(moment(this.data.startDate).format());
            // console.log(moment(this.data.endDate).format());
            for (var i = 0; i < this.days; i++) {
                this.form2.push(this.form = this.fb.group({
                    startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    requiredEmployees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    otherQualification: [],
                    wage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    wageType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    drivingLicence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                }));
                // this.dateStart = moment(this.dateStart).add(i, 'days').format();
                // console.log('Adding 1', this.dateStart);
            }
            setTimeout(function () {
                _this.slides.lockSwipes(true);
            }, 1000);
        }
    };
    /* ngOnInit end */
    // For adding new input field for template 1 and 2
    Step2Page.prototype.addFieldx = function () {
        this.otherQualification = '';
        this.otherRequiredEmployees = null;
        this.newField.push({
            qualification: '',
            requiredEmployees: null
        });
    };
    Step2Page.prototype.removeFieldx = function (index) {
        // console.log('Remove Field is working...');
        // this.otherQualification = '';
        // this.otherRequiredEmployees = null;
        this.newField.splice(index, 1);
        // console.log('successfuly deleted item number '+ index);
    };
    // For adding new input field for template 3
    Step2Page.prototype.addField = function (i) {
        // jd logic only for Template 3
        // console.log(i)
        if (i >= 0) {
            this.extraWorkforce.push({
                qualification: '',
                requiredEmployees: 0,
                index: i
            });
        }
        else {
            this.extraWorkforce.push({
                qualification: '',
                requiredEmployees: 0
            });
        }
        // console.log(this.extraWorkforce)
    };
    Step2Page.prototype.removeField = function (index) {
        // console.log('Remove Field is working...');
        // this.otherQualification = '';
        // this.otherRequiredEmployees = null;
        this.extraWorkforce.splice(index, 1);
        // console.log('successfuly deleted item number '+ index);
    };
    Step2Page.prototype.nextSlide = function () {
        var _this = this;
        // console.log('Actual Date ', this.dateStart);
        this.slides.lockSwipes(false);
        this.slides.slideNext().then(function () { _this.slides.lockSwipes(true); });
        // this.dateStart = moment(this.dateStart).add(1, 'days').format();
        // console.log('Adding 1', this.dateStart);
    };
    Step2Page.prototype.goBack = function () {
        this.slides.lockSwipes(false);
        // this.dateStart = moment(this.dateStart).subtract(1, 'days').format();
        // console.log('Minus 1 ', this.dateStart);
        // this.slides.slidePrev().then(() => { this.slides.lockSwipes(true); });
    };
    // getQulalifications(item) {
    //   console.log(item.value);
    // }
    // getRegEmp(item) {
    //   console.log(item.value);
    // }
    // Form Submit Method
    Step2Page.prototype.submitForm = function (form) {
        var _this = this;
        // submit method for template 1 and 3
        // console.log('form values ', form);
        if (this.option2 !== true) {
            // for condition 3
            if (this.option3 === true) {
                this.record = {
                    jobTitle: this.data.jobTitle,
                    location: this.data.address,
                    startDate: this.data.startDate,
                    endDate: this.data.endDate,
                    fastReply: this.data.fastReply,
                    confirmEmployee: [],
                    confirmEmployeeIds: [],
                    step2: [],
                    // otherQualification: [],
                    uid: localStorage.getItem('uid'),
                    condition1: false,
                    condition2: false,
                    condition3: true
                };
                form.forEach(function (a) {
                    _this.record.step2.push(a.value);
                });
                if (this.extraWorkforce.length > 0) {
                    this.extraWorkforce.forEach(function (a) {
                        if (a.index >= 0) {
                            if (_this.record.step2[a.index].otherQualification === null) {
                                _this.record.step2[a.index].otherQualification = [];
                            }
                            else {
                                _this.record.step2[a.index].otherQualification.push({
                                    qualification: a.qualification,
                                    requiredEmployees: a.requiredEmployees
                                });
                            }
                        }
                    });
                }
                // this.newField.forEach(a => {
                //   this.record.otherQualification.push({
                //     qualification: a.otherQualification,
                //     requiredEmployees: a.otherRequiredEmployees
                //   });
                // });
                // console.log(this.record);
                // getting values from Step2
                //  startTime: form.value.startTime,
                //  endTime: form.value.endTime,
                //  qualification: form.value.qualification,
                //  requiredEmployees: form.value.requiredEmployees,
                //  otherQualification: [],
                //  wage: form.value.wage,
                //  wageType: form.value.wageType,
                //  drivingLinse: form.value.drivingLicence,
                // console.log('Record ', this.record);
                // this.newField.forEach(a => {
                // });
                // this.adDetail.push(record)
                // console.log(record);
                this.api.createAds(this.record)
                    .then(function (res) {
                    _this.helper.presentToast(' Ad Created Successfuliy!');
                    _this.navController.navigateRoot('/employer/ads/create/step3');
                }, function (err) {
                    _this.helper.presentToast(err.message + 'Error!');
                });
                // end of template 3
            }
            else {
                //  for condition 1
                var record_1 = {
                    jobTitle: this.data.jobTitle,
                    location: this.data.address,
                    startDate: this.data.startDate,
                    endDate: this.data.endDate,
                    fastReply: this.data.fastReply,
                    confirmEmployee: [],
                    confirmEmployeeIds: [],
                    startTime: form.value.startTime,
                    endTime: form.value.endTime,
                    qualification: form.value.qualification,
                    requiredEmployees: form.value.requiredEmployees,
                    // abc: this.newField[0].otherQualification,
                    // xyz: this.newField[0].otherRequiredEmp,
                    otherQualification: [],
                    // otherRequiredEmp: [],
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
                this.newField.forEach(function (a) {
                    record_1.otherQualification.push({
                        qualification: a.otherQualification,
                        requiredEmployees: a.otherRequiredEmp
                    });
                });
                // console.log(record);
                this.api.createAds(record_1)
                    .then(function (res) {
                    _this.helper.presentToast(' Ad Created Successfuliy!');
                    _this.navController.navigateRoot('/employer/ads/create/step3');
                }, function (err) {
                    _this.helper.presentToast(err.message + 'Error!');
                });
            }
        }
        else {
            // for tempate 2
            var record_2 = {
                jobTitle: this.data.jobTitle,
                location: this.data.address,
                startDate: this.data.startDate,
                endDate: this.data.endDate,
                fastReply: this.data.fastReply,
                startTime: form.value.startTime,
                endTime: form.value.endTime,
                qualification: form.value.qualification,
                requiredEmployees: form.value.requiredEmployees,
                otherQualification: [],
                confirmEmployee: [],
                confirmEmployeeIds: [],
                wage: form.value.wage,
                wageType: form.value.wageType,
                drivingLinse: form.value.drivingLicence,
                uid: localStorage.getItem('uid'),
                condition1: false,
                condition2: true,
                condition3: false
            };
            // localStorage.setItem('option', JSON.stringify(false));
            // console.log(record);
            this.newField.forEach(function (a) {
                record_2.otherQualification.push({
                    qualification: a.otherQualification,
                    requiredEmployees: a.otherRequiredEmp
                });
            });
            // console.log(record);
            this.api.createAds(record_2)
                .then(function (res) {
                _this.helper.presentToast(' Ad Created Successfuliy!');
                _this.navController.navigateRoot('/employer/ads/create/step3');
            }, function (err) {
                _this.helper.presentToast(err.message + 'Error!');
            });
        }
        // end Else Bloack
    }; // end SubmitForm method
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slides'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], Step2Page.prototype, "slides", void 0);
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