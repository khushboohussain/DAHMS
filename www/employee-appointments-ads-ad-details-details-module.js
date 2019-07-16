(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-appointments-ads-ad-details-details-module"],{

/***/ "./src/app/employee/appointments/ads/ad/details/details.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/employee/appointments/ads/ad/details/details.module.ts ***!
  \************************************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details.page */ "./src/app/employee/appointments/ads/ad/details/details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/employee/appointments/ads/ad/details/details.page.html":
/*!************************************************************************!*\
  !*** ./src/app/employee/appointments/ads/ad/details/details.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <!-- Ad title -->\n      <div class=\"title container\">\n        <h2>Einsatzart</h2>\n      </div>\n\n      <div class=\"ad-info\">\n        <div class=\"address\">\n          <p class=\"small-title container\">Allgemeine Informationen</p>\n          <div class=\"list-items\">\n            <!-- What kind of qualification -->\n            <div class=\"item-no-icon container\">\n              <p>{{AdData.qualification}}</p>\n            </div>\n            <!-- Wage, FORMAT: Honorar: \"MONEY\" / \"If DAILY then Tag, if HOURLY then Stunde\" -->\n            <div class=\"item-no-icon container\">\n              <p>Honorar: {{AdData.wage}} {{feeType}} </p>\n            </div>\n            <!-- Is driving license necessary? \n              If yes - FORMAT: Führerscheinklasse \"DRIVING LICENSE TYPE\", \n              else if no - FORMAT: Es wird kein Führerschein benötigt, \n              else if beneficial - FORMAT: Führerschein wäre vorteilhaft, kein Muss. -->\n            <div class=\"item-no-icon container\">\n              <p>{{license}}</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"divider\"></div>\n\n        <div class=\"container\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"sendApplication()\" [disabled]=\"isApply()\">Jetzt bewerben</ion-button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employee/appointments/ads/ad/details/details.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/employee/appointments/ads/ad/details/details.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2FwcG9pbnRtZW50cy9hZHMvYWQvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employee/appointments/ads/ad/details/details.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/employee/appointments/ads/ad/details/details.page.ts ***!
  \**********************************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
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



var DetailsPage = /** @class */ (function () {
    function DetailsPage(actionSheetController, api, toastController, navController) {
        this.actionSheetController = actionSheetController;
        this.api = api;
        this.toastController = toastController;
        this.navController = navController;
        this.apply = [];
    }
    DetailsPage.prototype.sendApplication = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Möchten Sie verbindlich für diese Stelle bewerben?',
                            buttons: [{
                                    text: 'Verbindliche Bewerbung abschicken',
                                    handler: function () {
                                        _this.updateAds();
                                        _this.navController.navigateBack("/employee/appointments");
                                        _this.confirmation("Sie haben sich erfolgreich beworben.");
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
    DetailsPage.prototype.confirmation = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
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
    DetailsPage.prototype.ngOnInit = function () {
        this.getAds();
        this.GetEmployeeData();
        if (this.AdData.wageType == "DAILY") {
            this.feeType = 'tag';
        }
        else {
            this.feeType = '€';
        }
        if (this.AdData.drivingLinse == "B") {
            this.license = 'Führerscheinklasse';
        }
        else if (this.AdData.drivingLinse == "NO") {
            this.license = 'Es wird kein Führerschein benötigt';
        }
        else {
            this.license = 'Führerschein wäre vorteilhaft, kein Muss.';
        }
    };
    DetailsPage.prototype.getAds = function () {
        this.AdData = JSON.parse(localStorage.getItem('data'));
    };
    DetailsPage.prototype.GetEmployeeData = function () {
        var _this = this;
        this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(function (res) {
            _this.getEmployeeData = res;
            _this.employeeName = (_this.getEmployeeData.vorname + ' ' + _this.getEmployeeData.nachname);
            // console.log(this.employeeName)
        });
    };
    DetailsPage.prototype.updateAds = function () {
        //   if(this.AdData.apply=[]){
        //   this.AdData.apply = [{'uid':localStorage.getItem('uid'), 'name':this.employeeName}];
        //   this.api.updateAds(this.AdData.id, this.AdData)
        //   .then(after => {
        //   });
        // }
        this.AdData.apply.push({ 'uid': localStorage.getItem('uid'), 'name': this.employeeName });
        this.api.updateAds(this.AdData.id, this.AdData)
            .then(function (after) {
        });
    };
    DetailsPage.prototype.isApply = function () {
        if (this.AdData.apply.map(function (data) { return data.uid; }).indexOf(localStorage.getItem('uid')) > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    DetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/employee/appointments/ads/ad/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/employee/appointments/ads/ad/details/details.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-appointments-ads-ad-details-details-module.js.map