(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-ads-ad-applications-application-application-module"],{

/***/ "./src/app/employer/ads/ad/applications/application/application.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/application/application.module.ts ***!
  \********************************************************************************/
/*! exports provided: ApplicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPageModule", function() { return ApplicationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _application_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application.page */ "./src/app/employer/ads/ad/applications/application/application.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _application_page__WEBPACK_IMPORTED_MODULE_5__["ApplicationPage"]
    }
];
var ApplicationPageModule = /** @class */ (function () {
    function ApplicationPageModule() {
    }
    ApplicationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_application_page__WEBPACK_IMPORTED_MODULE_5__["ApplicationPage"]]
        })
    ], ApplicationPageModule);
    return ApplicationPageModule;
}());



/***/ }),

/***/ "./src/app/employer/ads/ad/applications/application/application.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/application/application.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"header container\">\r\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"title container\">\r\n        <h2>Bewerbung</h2>\r\n      </div>\r\n\r\n      <div class=\"application\">\r\n        <!-- employee profile image -->\r\n        <div class=\"profile-image container\">\r\n          <img *ngIf=\"userDetail.imageURL\" [src]=\" userDetail.imageURL \" alt=\"Employee's Image\">\r\n          <!-- <img src=\"../../../../../../assets/IMG_9577.JPG\"> -->\r\n        </div>\r\n\r\n        <div class=\"info\">\r\n          <div class=\"general\">\r\n            <p class=\"small-title container\">Allgemeine Informationen</p>\r\n            <div class=\"list-items\">\r\n\r\n              <!-- FIRST NAME LAST NAME of employee -->\r\n              <div class=\"item-no-icon container\">\r\n                <p> {{ userDetail.vorname }} {{ userDetail.nachname }} </p>\r\n                <!-- <p>Max Mustermann</p> -->\r\n              </div>\r\n\r\n              <!-- phone number, show only if the applicant has an approval from employer -->\r\n              <div class=\"item-no-icon container\" *ngIf=\"isConfirmApp\">\r\n                <p>{{userDetail.telefonnumer}} </p>\r\n                <!-- <p>+92 334 872 2424</p> -->\r\n              </div>\r\n\r\n              <!-- personal qualification -->\r\n              <div class=\"item-no-icon container\">\r\n                <p> {{ userDetail.qualifikation }} </p>\r\n                <!-- <p>Sanitätshelfer</p> -->\r\n              </div>\r\n\r\n              <!-- Is driving license necessary? \r\n              If yes - FORMAT: Führerscheinklasse \"DRIVING LICENSE TYPE\", \r\n              else if no - FORMAT: Es wird kein Führerschein benötigt, \r\n              else if beneficial - FORMAT: Führerschein wäre vorteilhaft, kein Muss. -->\r\n              <div class=\"item-no-icon container\">\r\n                <p> {{licenseType}} </p>\r\n                <!-- <p>Führerscheinklasse B vorteilhaft</p> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- show other qualifications -->\r\n          <div class=\"others\" *ngIf=\"!otherQualifications\" >\r\n            <p class=\"small-title container\">Sonstige Qualifikationen</p>\r\n            <div class=\"list-items\" *ngFor=\"let x of otherQual; let in = index\">\r\n              <!-- name of qualification -->\r\n              <div class=\"item-no-icon container\">\r\n                <p> {{otherQual[in] }} </p>\r\n                <!-- <p>Qualifikation</p> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- if a confirmation was sent, don't show the following button -->\r\n      <div class=\"container\" *ngIf=\"!isConfirmApp\">\r\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"answerOptions()\">Zusage / Absage</ion-button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/ads/ad/applications/application/application.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/application/application.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application .profile-image {\n  margin-bottom: 12px;\n  width: 124px;\n  height: 124px; }\n  .application .profile-image img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 124px;\n    width: 124px;\n    max-width: unset;\n    border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZXIvYWRzL2FkL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi9EOlxcS29kZUFscGhhXFxXb3Jrc3BhY2VcXFByb2plY3RzXFxEQUhNU1xcVGVzdFxcU2FhZC9zcmNcXGFwcFxcZW1wbG95ZXJcXGFkc1xcYWRcXGFwcGxpY2F0aW9uc1xcYXBwbGljYXRpb25cXGFwcGxpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYSxFQUFBO0VBSmpCO0lBT00sb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Fkcy9hZC9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb24vYXBwbGljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGxpY2F0aW9uIHtcclxuICAucHJvZmlsZS1pbWFnZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgaGVpZ2h0OiAxMjRweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgaGVpZ2h0OiAxMjRweDtcclxuICAgICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/employer/ads/ad/applications/application/application.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/application/application.page.ts ***!
  \******************************************************************************/
/*! exports provided: ApplicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPage", function() { return ApplicationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ApplicationPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function ApplicationPage(actionSheetController, toastController, navController, api, ngzone, helper) {
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.navController = navController;
        this.api = api;
        this.ngzone = ngzone;
        this.helper = helper;
        this.userDetail = {};
        // name: string;
        this.licenseType = '';
    }
    ApplicationPage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(localStorage.getItem('appliedId'));
        this.api.getEmployeeData(localStorage.getItem('appliedId')).subscribe(function (res) {
            _this.userDetail = res;
            _this.otherQual = _this.userDetail.qualification;
            // console.log('Qualification Data ', this.userDetail.qualification);
            // console.log('otherQyal Data ', this.otherQual);
        }, function (err) {
            console.log('errors!', err.message);
        });
        if (this.userDetail.führerscheinklasse === 'NO') {
            this.licenseType = 'Es wird kein Führerschein benötigt';
        }
        else if (this.userDetail.führerscheinklasse === 'BENEFICIAL') {
            this.licenseType = 'Führerschein wäre vorteilhaft';
        }
        else if (this.userDetail.führerscheinklasse === 'B') {
            this.licenseType = 'Führerschein B vorteilhaft';
        }
        else {
            this.licenseType = 'Führerschein B1 vorteilhaft';
        }
        this.isConfirmApp = JSON.parse(localStorage.getItem('confirm'));
        // console.log(this.isConfirmApp);
        if (this.otherQual !== '' || this.otherQual !== undefined) {
            this.otherQualifications = false;
            // this.otherQual = this.userDetail.qualification;
            // console.log('Other Qualifications ', this.otherQualifications);
            // console.log('Other Qual ', this.userDetail.qualification.length);
        }
        else {
            this.otherQualifications = true;
            // console.log('Other Qualifications ', this.otherQualifications);
            // console.log('Other Qualification ', this.otherQualifications);
        }
    };
    ApplicationPage.prototype.answerOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Geben Sie Ihrem Bewerber eine Rückmeldung.',
                            buttons: [{
                                    text: 'Verbindliche Zusage abschicken',
                                    handler: function () {
                                        // Confirmation of application
                                        var ad = JSON.parse(localStorage.getItem('adDetail'));
                                        // console.log(' is ', ad);
                                        if (ad.confirmEmployee) {
                                            ad.confirmEmployee.push({
                                                name: _this.userDetail.vorname + '' + _this.userDetail.nachname,
                                                uid: localStorage.getItem('appliedId')
                                            });
                                            ad.confirmEmployeeIds.push(localStorage.getItem('appliedId'));
                                        }
                                        else {
                                            ad.confirmEmployee = [];
                                            ad.confirmEmployeeIds = [];
                                            ad.confirmEmployee.push({
                                                name: _this.userDetail.vorname + '' + _this.userDetail.nachname,
                                                uid: localStorage.getItem('appliedId')
                                            });
                                            ad.confirmEmployeeIds.push(localStorage.getItem('appliedId'));
                                        }
                                        // console.log('detail is ', ad);
                                        var x = ad.apply.findIndex(function (data) { return data.uid === localStorage.getItem('appliedId'); });
                                        if (x > -1) {
                                            ad.apply.splice(x, 1);
                                            delete ad.id;
                                            // console.log(ad);
                                            _this.api.updateAds(localStorage.getItem('AdId'), ad).then(function (res) {
                                                _this.helper.presentToast('Sie haben erfolgreich dem Bewerber eine Zusage gesendet.');
                                                // this.confirmation('Sie haben erfolgreich dem Bewerber eine Zusage gesendet.');
                                                _this.navController.pop();
                                            });
                                        }
                                        // this.ngzone.run(this.navController.navigateBack('/employer/ads/ad/applications'));
                                    }
                                }, {
                                    text: 'Verbindliche Absage abschicken',
                                    handler: function () {
                                        // Rejection of application
                                        var ad = JSON.parse(localStorage.getItem('adDetail'));
                                        // console.log(' is ', ad);
                                        if (ad.rejectedEmployee) {
                                            ad.rejectedEmployee.push({
                                                name: _this.userDetail.vorname + '' + _this.userDetail.nachname,
                                                uid: localStorage.getItem('appliedId')
                                            });
                                        }
                                        else {
                                            ad.rejectedEmployee = [];
                                            ad.rejectedEmployee.push({
                                                name: _this.userDetail.vorname + '' + _this.userDetail.nachname,
                                                uid: localStorage.getItem('appliedId')
                                            });
                                            var x = ad.apply.findIndex(function (data) { return data.uid === localStorage.getItem('appliedId'); });
                                            if (x > -1) {
                                                ad.apply.splice(x, 1);
                                                delete ad.id;
                                                _this.api.updateAds(localStorage.getItem('AdId'), ad).then(function (res) {
                                                    // this.confirmation('Sie haben erfolgreich dem Bewerber eine Absage gesendet.');
                                                    _this.helper.presentToast('Sie haben erfolgreich dem Bewerber eine Absage gesendet.');
                                                    _this.navController.navigateBack('/employer/ads/ad/applications');
                                                });
                                            }
                                        }
                                        // console.log('detail is ', ad);
                                    }
                                }, {
                                    text: 'Abbrechen',
                                    role: 'cancel',
                                    handler: function () { }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.page.html */ "./src/app/employer/ads/ad/applications/application/application.page.html"),
            styles: [__webpack_require__(/*! ./application.page.scss */ "./src/app/employer/ads/ad/applications/application/application.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], ApplicationPage);
    return ApplicationPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-ads-ad-applications-application-application-module.js.map