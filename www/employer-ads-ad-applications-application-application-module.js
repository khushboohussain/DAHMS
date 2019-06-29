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

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Bewerbung</h2>\n      </div>\n\n      <div class=\"application\">\n        <!-- employee profile image -->\n        <div class=\"profile-image container\">\n          <img src=\"../../../../../../assets/IMG_9577.JPG\">\n        </div>\n\n        <div class=\"info\">\n          <div class=\"general\">\n            <p class=\"small-title container\">Allgemeine Informationen</p>\n            <div class=\"list-items\">\n              \n              <!-- FIRST NAME LAST NAME of employee -->\n              <div class=\"item-no-icon container\">\n                <p>Max Mustermann</p>\n              </div>\n\n              <!-- phone number, show only if the applicant has an approval from employer -->\n              <div class=\"item-no-icon container\">\n                <p>+92 334 872 2424</p>\n              </div>\n\n              <!-- personal qualification -->\n              <div class=\"item-no-icon container\">\n                <p>Sanitätshelfer</p>\n              </div>\n\n              <!-- Is driving license necessary? \n              If yes - FORMAT: Führerscheinklasse \"DRIVING LICENSE TYPE\", \n              else if no - FORMAT: Es wird kein Führerschein benötigt, \n              else if beneficial - FORMAT: Führerschein wäre vorteilhaft, kein Muss. -->\n              <div class=\"item-no-icon container\">\n                <p>Führerscheinklasse B vorteilhaft</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- show other qualifications -->\n          <div class=\"others\">\n            <p class=\"small-title container\">Sonstige Qualifikationen</p>\n            <div class=\"list-items\">\n              <!-- name of qualification -->\n              <div class=\"item-no-icon container\">\n                <p>Qualifikation</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- if a confirmation was sent, don't show the following button -->\n      <div class=\"container\">\n        <ion-button color=\"primary\" expand=\"block\" (click)=\"answerOptions()\">Zusage / Absage</ion-button>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/ads/ad/applications/application/application.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/employer/ads/ad/applications/application/application.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application .profile-image {\n  margin-bottom: 12px;\n  width: 124px;\n  height: 124px; }\n  .application .profile-image img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 124px;\n    width: 124px;\n    max-width: unset;\n    border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZXIvYWRzL2FkL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi9EOlxcS29kZUFscGhhXFxXb3Jrc3BhY2VcXFByb2plY3RzXFxEQUhNU1xcVGVzdFxcREFITVMgMS4wL3NyY1xcYXBwXFxlbXBsb3llclxcYWRzXFxhZFxcYXBwbGljYXRpb25zXFxhcHBsaWNhdGlvblxcYXBwbGljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFKakI7SUFPTSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZXIvYWRzL2FkL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbGljYXRpb24ge1xuICAucHJvZmlsZS1pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB3aWR0aDogMTI0cHg7XG4gICAgaGVpZ2h0OiAxMjRweDtcblxuICAgIGltZyB7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGhlaWdodDogMTI0cHg7XG4gICAgICB3aWR0aDogMTI0cHg7XG4gICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"

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
    function ApplicationPage(actionSheetController, toastController, navController) {
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.navController = navController;
    }
    ApplicationPage.prototype.ngOnInit = function () {
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
                                        _this.navController.navigateBack("/employer/ads/ad/applications");
                                        _this.confirmation("Sie haben erfolgreich dem Bewerber eine Zusage gesendet.");
                                    }
                                }, {
                                    text: 'Verbindliche Absage abschicken',
                                    handler: function () {
                                        _this.navController.navigateBack("/employer/ads/ad/applications");
                                        _this.confirmation("Sie haben erfolgreich dem Bewerber eine Absage gesendet.");
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
    ApplicationPage.prototype.confirmation = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 1500,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
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
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], ApplicationPage);
    return ApplicationPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-ads-ad-applications-application-application-module.js.map