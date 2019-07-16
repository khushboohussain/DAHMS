(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-profile-details-details-module"],{

/***/ "./src/app/employee/profile/details/details.module.ts":
/*!************************************************************!*\
  !*** ./src/app/employee/profile/details/details.module.ts ***!
  \************************************************************/
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
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details.page */ "./src/app/employee/profile/details/details.page.ts");
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/employee/profile/details/details.page.html":
/*!************************************************************!*\
  !*** ./src/app/employee/profile/details/details.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Persönliche Daten ändern</h2>\n      </div>\n\n      <div class=\"general\">\n        <form [formGroup]=\"form\">\n          <ion-list>\n            <!-- profile image -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Profilbild</ion-label>\n              <div class=\"profile-image container\">\n                <img src=\"{{image || base64Image}} \"(click)=\"choosePicture()\" id=\"profileImage\">\n                <input type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\" style=\"visibility: hidden;\">\n              </div>\n            </ion-item>\n\n            <!-- name -->\n            <div class=\"grid-2\">\n              <!-- first name -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Vorname</ion-label>\n                <ion-input type=\"text\" clearInput autocapitalize=\"word\" formControlName=\"vorname\" autocomplete autocorrect></ion-input>\n              </ion-item>\n\n              <!-- last name -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Nachname</ion-label>\n                <ion-input type=\"text\" clearInput autocapitalize=\"word\" formControlName=\"nachname\" autocomplete autocorrect></ion-input>\n              </ion-item>\n            </div>\n\n            <!-- address -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Adresse</ion-label>\n              <ion-input type=\"text\" clearInput formControlName=\"adresse\"></ion-input>\n            </ion-item>\n\n            <!-- phone number -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Telefonnumer</ion-label>\n              <ion-input type=\"text\" clearInput autocapitalize=\"word\" formControlName=\"telefonnumer\" autocomplete autocorrect></ion-input>\n            </ion-item>\n\n            <!-- association -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Zugehörigkeit Hi. Orga.</ion-label>\n              <ion-input type=\"text\" clearInput formControlName=\"zugehörigkeit\"></ion-input>\n            </ion-item>\n\n            <!-- max. work radius -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Max. Einsatzradius</ion-label>\n              <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\" formControlName=\"Einsatzradius\">\n                <ion-select-option>10km</ion-select-option>\n                <ion-select-option>25km</ion-select-option>\n                <ion-select-option>50km</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <!-- email -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">E-Mail</ion-label>\n              <ion-input type=\"email\" clearInput formControlName=\"email\"></ion-input>\n            </ion-item>\n\n            <!-- password change -->\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Passwort</ion-label>\n              <ion-input type=\"password\" clearInput formControlName=\"password\"></ion-input>\n            </ion-item>\n          </ion-list>\n          \n          <div class=\"divider\"></div>\n          \n          <div class=\"container\">\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"submit(form)\">Aktualisieren</ion-button>\n          </div>\n          \n        </form>\n      </div>\n      \n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employee/profile/details/details.page.scss":
/*!************************************************************!*\
  !*** ./src/app/employee/profile/details/details.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin-bottom: 12px;\n  width: 100%; }\n  .profile-image img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 124px;\n    width: 124px;\n    max-width: unset;\n    border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvcHJvZmlsZS9kZXRhaWxzL0Q6XFxLb2RlQWxwaGFcXFdvcmtzcGFjZVxcUHJvamVjdHNcXERBSE1TXFxUZXN0XFxTYWFkL3NyY1xcYXBwXFxlbXBsb3llZVxccHJvZmlsZVxcZGV0YWlsc1xcZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0VBRmI7SUFLSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvcHJvZmlsZS9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1hZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcblxuICBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGhlaWdodDogMTI0cHg7XG4gICAgd2lkdGg6IDEyNHB4O1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee/profile/details/details.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee/profile/details/details.page.ts ***!
  \**********************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function DetailsPage(toastController, navController, helper, fb, fireStorage, router, api) {
        this.toastController = toastController;
        this.navController = navController;
        this.helper = helper;
        this.fb = fb;
        this.fireStorage = fireStorage;
        this.router = router;
        this.api = api;
        this.image = 'assets/profile.jpg';
    }
    DetailsPage.prototype.update = function () {
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
    DetailsPage.prototype.ngOnInit = function () {
        // this.api.getAllEmployees();
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)
                ])],
            vorname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nachname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            telefonnumer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            zugehörigkeit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            Einsatzradius: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    DetailsPage.prototype.submit = function (form) {
        this.data = {
            vorname: form.value.vorname,
            nachname: form.value.nachname,
            email: form.value.email,
            password: form.value.password,
            adresse: form.value.adresse,
            telefonnumer: form.value.telefonnumer,
            zugehörigkeit: form.value.zugehörigkeit,
            Einsatzradius: form.value.Einsatzradius,
        };
        this.uploadImage();
    };
    DetailsPage.prototype.choosePicture = function () {
        var element = document.querySelector('input[type="file"]');
        element.click();
    };
    DetailsPage.prototype.upload = function (event) {
        var x = document.getElementById('profileImage');
        x.src = URL.createObjectURL(event.target.files[0]);
        this.convert(event.target.files[0]);
    };
    DetailsPage.prototype.convert = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        try {
            reader.onload = function () {
                var base64String = reader.result.match(/.+;base64,(.+)/)[1];
                _this.base64Image = base64String;
                _this.form.controls['image'].setValue(_this.base64Image);
            };
        }
        catch (e) {
            // no error
        }
    };
    DetailsPage.prototype.uploadImage = function () {
        var _this = this;
        this.ref = this.fireStorage.ref("Thumbnails/" + localStorage.getItem('imgid'));
        var task = this.ref.putString('data:image/jpeg;base64,' + this.base64Image, 'data_url');
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (url) {
                _this.image = url;
                if (_this.image !== '') {
                    _this.data.imageURL = _this.image;
                    _this.updateEmplyeeData();
                }
            });
        })).subscribe();
    };
    DetailsPage.prototype.updateEmplyeeData = function () {
        var _this = this;
        this.api.updateUser(localStorage.getItem('uid'), {
            email: this.data.email,
            password: this.data.password
        }).then(function (res) {
            _this.api.updateEmployee(localStorage.getItem('uid'), {
                vorname: _this.data.vorname,
                nachname: _this.data.nachname,
                adresse: _this.data.adresse,
                telefonnumer: _this.data.telefonnumer,
                zugehörigkeit: _this.data.zugehörigkeit,
                Einsatzradius: _this.data.Einsatzradius,
            })
                .then(function (after) {
                _this.router.navigate(['employee/profile']);
            });
        });
    };
    DetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/employee/profile/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/employee/profile/details/details.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employee-profile-details-details-module.js.map