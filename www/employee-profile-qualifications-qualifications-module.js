(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-profile-qualifications-qualifications-module"],{

/***/ "./src/app/employee/profile/qualifications/qualifications.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employee/profile/qualifications/qualifications.module.ts ***!
  \**************************************************************************/
/*! exports provided: QualificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificationsPageModule", function() { return QualificationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qualifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qualifications.page */ "./src/app/employee/profile/qualifications/qualifications.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _qualifications_page__WEBPACK_IMPORTED_MODULE_5__["QualificationsPage"]
    }
];
var QualificationsPageModule = /** @class */ (function () {
    function QualificationsPageModule() {
    }
    QualificationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_qualifications_page__WEBPACK_IMPORTED_MODULE_5__["QualificationsPage"]]
        })
    ], QualificationsPageModule);
    return QualificationsPageModule;
}());



/***/ }),

/***/ "./src/app/employee/profile/qualifications/qualifications.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/employee/profile/qualifications/qualifications.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Qualifikationen ändern</h2>\n      </div>\n      \n      <div class=\"general\">\n        <form [formGroup]=\"form\">\n          <!-- {{ getEmployeeData.nachname}} -->\n          <ion-list>\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Persönliche Qualifikation</ion-label>\n              <!-- {{getEmployeeData.qualifikation}} -->\n              <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\" formControlName=\"qualifikation\">\n                <ion-select-option value=\"SANITAETSHELFER\">Sanitätsheler</ion-select-option>\n                <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\n                <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\n                <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\n                <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\n                <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\n                <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\n              </ion-select>\n\n              <!-- training certificate -->\n              <ion-input type=\"file\" (change)=\"uploadFile($event, 1)\" placeholder=\"Fortbildungsnachweis hochladen\"></ion-input>\n            </ion-item>\n\n            <!-- driving license -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Führerscheinklasse</ion-label>\n              <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\" formControlName=\"führerscheinklasse\">\n                <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\n                <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\n                <ion-select-option value=\"B\">B</ion-select-option>\n                <ion-select-option value=\"B1\">B1</ion-select-option>\n              </ion-select> \n\n              <!-- Show only if first option is not selected, driving license certificate -->\n              <ion-input type=\"file\" (change)=\"uploadFile($event, 2)\" placeholder=\"Führerschein Vorderseite hochladen\"></ion-input>\n              <ion-input type=\"file\" (change)=\"uploadFile($event, 3)\" placeholder=\"Führerschein Rückseite hochladen\"></ion-input>\n            </ion-item>\n\n            <!-- other qualification -->\n            <ion-item lines=\"none\" *ngFor=\"let item of field; let i = index;\">\n              <ion-label position=\"stacked\">Sonstige Qualifikation</ion-label>\n\n              <!-- name of qualification -->\n              <ion-input type=\"text\" clearInput [(ngModel)]=\"item.text\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n\n              <!-- other qualification certificate -->\n              <ion-input type=\"file\" (change)=\"uploadFile($event, 4, i)\" placeholder=\"Qualifikationsnachweis\"></ion-input>\n            </ion-item>\n\n            <!-- add another other qualification -->\n            <div class=\"add-new container\" (click)=\"addNewfield()\">\n              <ion-icon name=\"add\"></ion-icon><p>Weitere sonstige Qualifikation hinzufügen</p>\n            </div>\n          </ion-list>\n          \n          <div class=\"divider\"></div>\n          \n          <div class=\"container\">\n            <ion-button color=\"primary\" expand=\"block\"  (click)=\"submit(form)\">Aktualisieren</ion-button>\n          </div>\n          \n        </form>\n      </div>\n      \n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employee/profile/qualifications/qualifications.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/employee/profile/qualifications/qualifications.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-new {\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: 20px auto;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvcHJvZmlsZS9xdWFsaWZpY2F0aW9ucy9EOlxcS29kZUFscGhhXFxXb3Jrc3BhY2VcXFByb2plY3RzXFxEQUhNU1xcVGVzdFxcU2FhZC9zcmNcXGFwcFxcZW1wbG95ZWVcXHByb2ZpbGVcXHF1YWxpZmljYXRpb25zXFxxdWFsaWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL3Byb2ZpbGUvcXVhbGlmaWNhdGlvbnMvcXVhbGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1uZXcge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/employee/profile/qualifications/qualifications.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/employee/profile/qualifications/qualifications.page.ts ***!
  \************************************************************************/
/*! exports provided: QualificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificationsPage", function() { return QualificationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
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







var QualificationsPage = /** @class */ (function () {
    function QualificationsPage(toastController, navController, helper, fb, fireStorage, router, api) {
        this.toastController = toastController;
        this.navController = navController;
        this.helper = helper;
        this.fb = fb;
        this.fireStorage = fireStorage;
        this.router = router;
        this.api = api;
        this.fileArr = [];
        this.field = [];
        this.promises = [];
        this.urls = [];
    }
    QualificationsPage.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Erfolgreich aktualisiert.',
                            position: 'top',
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.navController.navigateBack('/employee/profile');
                        return [2 /*return*/];
                }
            });
        });
    };
    QualificationsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getEmployeeData(localStorage.getItem('uid')).subscribe(function (res) {
            _this.getEmployeeData = res;
            console.log(_this.getEmployeeData);
            _this.getEmployeeID = localStorage.getItem('uid');
            // console.log(this.getEmployeeData);
            // this.filesRecord = this.getEmployeeData.files;
            // this.getEmployeeData =res.files;
            // console.log("Files record\n " + this.filesRecord);
        }, function (err) {
            console.log(err.message);
        });
        var x;
        this.field.push({
            text: '',
            file: x
        });
        this.form = this.fb.group({
            qualifikation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            führerscheinklasse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    QualificationsPage.prototype.submit = function (form) {
        var _this = this;
        this.data = {
            qualifikation: form.value.qualifikation,
            führerscheinklasse: form.value.führerscheinklasse,
            sonstige: this.field[0].text,
            files: [],
            qualification: []
        };
        this.field.forEach(function (a) {
            _this.data.qualification.push(a.text);
            if (a.file) {
                _this.fileArr.push(a.file);
            }
        });
        this.fileArr.forEach(function (a, i) {
            _this.ref = _this.fireStorage.ref('Files/' + _this.getEmployeeID);
            _this.task = _this.ref.put(a);
            _this.promises.push(_this.task);
            _this.urls.push({ ref: _this.ref, index: i, fileId: _this.getEmployeeID, name: a.name });
            _this.task.snapshotChanges().subscribe();
        });
        Promise.all(this.promises)
            .then(function (url) {
            _this.urls.forEach(function (a) {
                a.ref.getDownloadURL().subscribe(function (res) {
                    _this.data.files.push({
                        fileURL: res,
                        fileID: a.fileId,
                        name: a.name
                    });
                });
            });
            _this.updateEmplyee();
        })
            .catch(function (error) {
            console.log("Some failed: ", error.message);
        });
    };
    QualificationsPage.prototype.uploadFile = function (event, val, i) {
        if (i && i > 0) {
            this.field[i].file = event.target.files[0];
            return;
        }
        else {
            this.fileArr[val] = event.target.files[0];
        }
    };
    QualificationsPage.prototype.updateEmplyee = function () {
        var _this = this;
        this.api.updateEmployee(localStorage.getItem('uid'), this.data)
            .then(function (after) {
            _this.router.navigate(['employee/profile']);
        });
    };
    QualificationsPage.prototype.addNewfield = function () {
        this.field.push({
            text: '',
            file: ''
        });
    };
    QualificationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qualifications',
            template: __webpack_require__(/*! ./qualifications.page.html */ "./src/app/employee/profile/qualifications/qualifications.page.html"),
            styles: [__webpack_require__(/*! ./qualifications.page.scss */ "./src/app/employee/profile/qualifications/qualifications.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], QualificationsPage);
    return QualificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-profile-qualifications-qualifications-module.js.map