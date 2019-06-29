(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-ads-create-step1-step1-module"],{

/***/ "./src/app/employer/ads/create/step1/Step1Page.ts":
/*!********************************************************!*\
  !*** ./src/app/employer/ads/create/step1/Step1Page.ts ***!
  \********************************************************/
/*! exports provided: Step1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Page", function() { return Step1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var Step1Page = /** @class */ (function () {
    function Step1Page(actionSheetController, navController, fb) {
        this.actionSheetController = actionSheetController;
        this.navController = navController;
        this.fb = fb;
    }
    Step1Page.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            jobTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            continoueWork: [''],
            fastReply: ['']
        });
    };
    // Getting Values form form on Submittion 
    Step1Page.prototype.submit = function (form) {
        var data = {
            jobTitle: form.value.jobTitle,
            address: form.value.address,
            startDate: form.value.startDate,
            endDate: form.value.endDate,
            continoueWork: form.value.continoueWork,
            fastReply: form.value.fastReply,
        };
        this.continueWork = data.continoueWork;
        // console.log(this.continueWork);
        // Put the object into storage
        localStorage.setItem('AdsData', JSON.stringify(data));
        // localStorage.setItem('AdsData', this.data);
        // let id = localStorage.getItem('uid');
        // console.log('Current User Id is' + localStorage.getItem('uid'));
        this.adOptions();
        // this.api.createAds(localStorage.getItem('uid'), {
        //   jobTitle: this.data.value.jobTitle,
        //   address: this.data.address,
        //   startDate: this.data.startDate,
        //   endDate: this.data.value.endDate
        // }).then(res => {
        //   if (this.data.continoueWork == '' || this.data.continoueWork == false) {
        //     this.continousCheck = false;
        //   }
        //   else {
        //     this.continousCheck = true;
        //   }
        //   this.helper.presentToast("")
        // }, err => {
        //   this.helper.presentToast(err.message + 'Error!');
        // });
        // var test = JSON.parse(localStorage.getItem("continousCheck"));
        // console.log(typeof test);
        // console.log(test); 
    };
    Step1Page.prototype.adOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet, actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.continueWork === true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Stelleneinstellung',
                                buttons: [{
                                        text: 'Alle Termine gleich',
                                        handler: function () {
                                            _this.navController.navigateForward("/employer/ads/create/step2");
                                            localStorage.setItem('actionController', JSON.stringify(_this.actionController = true));
                                        }
                                    },
                                    // {
                                    //   text: 'Einzelne Termine bearbeiten',
                                    //   handler: () => {
                                    //     this.navController.navigateForward("/employer/ads/create/step2");
                                    //     // this.actionController = false;
                                    //     localStorage.setItem('actionController', JSON.stringify(this.actionController = false));
                                    //   }
                                    // }, 
                                    {
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
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Stelleneinstellung',
                            buttons: [{
                                    text: 'Alle Termine gleich',
                                    handler: function () {
                                        _this.navController.navigateForward("/employer/ads/create/step2");
                                        localStorage.setItem('actionController', JSON.stringify(_this.actionController = true));
                                    }
                                }, {
                                    text: 'Einzelne Termine bearbeiten',
                                    handler: function () {
                                        _this.navController.navigateForward("/employer/ads/create/step2");
                                        // this.actionController = false;
                                        localStorage.setItem('actionController', JSON.stringify(_this.actionController = false));
                                    }
                                },
                                {
                                    text: 'Abbrechen',
                                    role: 'cancel',
                                    handler: function () { }
                                }]
                        })];
                    case 4:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Step1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-step1',
            template: __webpack_require__(/*! ./step1.page.html */ "./src/app/employer/ads/create/step1/step1.page.html"),
            styles: [__webpack_require__(/*! ./step1.page.scss */ "./src/app/employer/ads/create/step1/step1.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], Step1Page);
    return Step1Page;
}());



/***/ }),

/***/ "./src/app/employer/ads/create/step1/step1.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step1/step1.module.ts ***!
  \***********************************************************/
/*! exports provided: Step1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1PageModule", function() { return Step1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Step1Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Step1Page */ "./src/app/employer/ads/create/step1/Step1Page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _Step1Page__WEBPACK_IMPORTED_MODULE_5__["Step1Page"]
    }
];
var Step1PageModule = /** @class */ (function () {
    function Step1PageModule() {
    }
    Step1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_Step1Page__WEBPACK_IMPORTED_MODULE_5__["Step1Page"]]
        })
    ], Step1PageModule);
    return Step1PageModule;
}());



/***/ }),

/***/ "./src/app/employer/ads/create/step1/step1.page.html":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step1/step1.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\" routerLink=\"['/employer/ads']\">\n      </ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Neue Stelle</h2>\n        <div class=\"text\">\n          <p></p>\n        </div>\n      </div>\n\n      <div class=\"general\">\n        <form [formGroup]=\"form\">\n          <ion-list>\n            <!-- ad title -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Einsatzart </ion-label>\n              <ion-select formControlName=\"jobTitle\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                <ion-select-option>empty field</ion-select-option>\n                <ion-select-option>not given</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <!-- where? (address) -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Wo?</ion-label>\n              <ion-input type=\"text\" formControlName=\"address\" clearInput autocapitalize=\"word\" autocomplete autocorrect\n                required></ion-input>\n            </ion-item>\n\n            <!-- when? -->\n            <div class=\"grid-2\">\n              <!-- start date -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Startdatum</ion-label>\n                <ion-datetime formControlName=\"startDate\" displayFormat=\"DD.MM.YYYY\" cancelText=\"Abbrechen\"\n                  doneText=\"Fertig\" required>\n                </ion-datetime>\n              </ion-item>\n\n              <!-- last date -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Enddatum</ion-label>\n                <ion-datetime formControlName=\"endDate\" displayFormat=\"DD.MM.YYYY\" cancelText=\"Abbrechen\"\n                  doneText=\"Fertig\" required>\n                </ion-datetime>\n              </ion-item>\n            </div>\n          </ion-list>\n\n          <div class=\"container\">\n            <div class=\"box\">\n              <!-- continuous work -->\n              <ion-item lines=\"none\">\n                <ion-checkbox formControlName=\"continoueWork\" value=\"CONTINUOUS\" checked='false'></ion-checkbox>\n                <ion-label>&nbsp; Durchgehende Schicht?</ion-label>\n              </ion-item>\n            </div>\n\n            <!-- fast reply -->\n            <div class=\"box\">\n              <ion-item lines=\"none\">\n                <ion-checkbox formControlName=\"fastReply\" value=\"FASTREPLY\" checked='false'></ion-checkbox>\n                <ion-label>&nbsp; Schnelle Rückmeldung</ion-label>\n              </ion-item>\n            </div>\n\n            <!-- go to the ad details; \"Alle Termine gleich\" = same dates / \"Einzelne Termine bearbeiten\" = different dates -->\n            <ion-button color=\"primary\" expand=\"block\" [disabled]=\"form.invalid || form.pristine\"\n              (click)=\"submit(form)\"> Zu den Einsatzdetails </ion-button>\n\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/ads/create/step1/step1.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/employer/ads/create/step1/step1.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box ion-item {\n  --padding-start: 0;\n  --background: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZXIvYWRzL2NyZWF0ZS9zdGVwMS9EOlxcS29kZUFscGhhXFxXb3Jrc3BhY2VcXFByb2plY3RzXFxEQUhNU1xcVGVzdFxcREFITVMgMS4wL3NyY1xcYXBwXFxlbXBsb3llclxcYWRzXFxjcmVhdGVcXHN0ZXAxXFxzdGVwMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBZ0I7RUFDaEIsa0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL2Fkcy9jcmVhdGUvc3RlcDEvc3RlcDEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=employer-ads-create-step1-step1-module.js.map