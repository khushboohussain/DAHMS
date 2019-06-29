(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employer-profile-details-details-module"],{

/***/ "./src/app/employer/profile/details/details.module.ts":
/*!************************************************************!*\
  !*** ./src/app/employer/profile/details/details.module.ts ***!
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
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details.page */ "./src/app/employer/profile/details/details.page.ts");
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

/***/ "./src/app/employer/profile/details/details.page.html":
/*!************************************************************!*\
  !*** ./src/app/employer/profile/details/details.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <ion-back-button text=\"\" defaultHref=\"\" icon=\"arrow-round-back\"></ion-back-button>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h2>Daten ändern</h2>\n        <div class=\"text-danger\">\n          <span *ngIf=\"f.vorname.errors || vorname.value == '' \" >vorname is empty</span>\n          <span *ngIf=\"f.nachname.errors || nachname.value == ''; \">nachname is empty</span>\n          <span *ngIf=\"f.telephone.errors || telephone.value == ''; \">telephone is empty</span>\n          <span *ngIf=\"f.CompanyName.errors || CompanyName.value == ''; \">Name der Orga is empty</span>\n          <!-- <span *ngIf=\"f.role.errors || role.value == ''; \"> Ihre Rolle in der Organisation is empty</span>       -->\n          <span *ngIf=\"f.address.errors || address.value == ''; \">Address field is empty</span>\n\n        </div>\n      </div>\n      <div class=\"general\">\n        <form [formGroup]=\"form\">\n          <ion-list>\n            <div class=\"grid-2\">\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Vorname</ion-label>\n                <ion-input type=\"text\" [ngModel]=\"userData.vorname\" #vorname formControlName=\"vorname\" clearInput\n                  autocapitalize=\"word\" autocomplete autocorrect> </ion-input>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Nachname</ion-label>\n                <ion-input type=\"text\" [ngModel]=\"userData.nachname\" #nachname formControlName=\"nachname\"  clearInput\n                  autocapitalize=\"word\" autocomplete autocorrect> </ion-input>\n              </ion-item>\n            </div>\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Telefonnummer</ion-label>\n              <ion-input type=\"number\" formControlName=\"telephone\" #telephone [ngModel]=\"userData.telephone\" clearInput\n                autocapitalize=\"word\" autocomplete autocorrect></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\"> Name der Orga</ion-label>\n              <ion-input type=\"text\" formControlName=\"CompanyName\" #CompanyName [ngModel]=\"userData.CompanyName\"\n                clearInput autocapitalize=\"word\" autocomplete autocorrect></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Adresse</ion-label>\n              <ion-input type=\"text\" formControlName=\"address\" #address [ngModel]=\"userData.address\" clearInput\n                autocapitalize=\"word\" autocomplete autocorrect></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Ihre Rolle in der Organisation</ion-label>\n\n              <ion-select formControlName=\"role\" [ngModel]=\"userData.role\" cancelText=\"Abbrechen\" okText=\"Fertig\">\n                <ion-select-option>Geschäftsinhaber</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">E-Mail</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" [ngModel]=\"userData.email\" clearInput >\n              </ion-input>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label position=\"stacked\">Passwort</ion-label>\n              <ion-input type=\"password\" formControlName=\"password\" [ngModel]=\"userData.password\" clearInput >\n              </ion-input>\n            </ion-item>\n          </ion-list>\n\n          <div class=\"divider\"></div>\n\n          <div class=\"container\">\n            <ion-button color=\"primary\" expand=\"block\" [disabled]=\"!form.valid || form.pristine\" (click)=\"update(form)\">Aktualisieren</ion-button>\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employer/profile/details/details.page.scss":
/*!************************************************************!*\
  !*** ./src/app/employer/profile/details/details.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyL3Byb2ZpbGUvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employer/profile/details/details.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/employer/profile/details/details.page.ts ***!
  \**********************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPage = /** @class */ (function () {
    function DetailsPage(toastController, navController, api, fb, helper) {
        this.toastController = toastController;
        this.navController = navController;
        this.api = api;
        this.fb = fb;
        this.helper = helper;
    }
    DetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getUser(localStorage.getItem('uid')).subscribe(function (res) {
            _this.userData = res;
            // console.log(this.userData);
            _this.api.getEmployerData(localStorage.getItem('uid')).subscribe(function (res) {
                _this.userData = __assign({}, _this.userData, res);
                // console.log(this.userData);
            }, function (err) {
                // console.log(err.message);
            });
        });
        this.form = this.fb.group({
            vorname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nachname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            CompanyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: [''],
            email: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
        });
        /*
          name: [{ value: '', disabled: true }, Validators.required],
          name: [{ value: '', disabled: this.variable }, Validators.required]
          this.form.controls['name'].disable();
       */
    };
    // end ngOnInit
    DetailsPage.prototype.update = function (data) {
        var _this = this;
        var formData = {
            vorname: data.value.vorname,
            nachname: data.value.nachname,
            telephone: data.value.telephone,
            CompanyName: data.value.CompanyName,
            address: data.value.address,
            role: data.value.role,
            email: data.value.email,
            password: data.value.password
        };
        // console.log(formData);
        this.api.updateEmployerData(localStorage.getItem('uid'), {
            vorname: formData.vorname,
            nachname: formData.nachname,
            telephone: formData.telephone,
            CompanyName: formData.CompanyName,
            address: formData.address,
            role: formData.role,
        }).then(function () {
            _this.helper.presentToast('Erfolgreich aktualisiert.');
            _this.navController.navigateBack("/employer/profile");
        }, function (err) {
            _this.helper.presentToast(err.message);
        });
        // this.updated();
    };
    Object.defineProperty(DetailsPage.prototype, "f", {
        // async updated() {
        //   const toast = await this.toastController.create({
        //     message: 'Erfolgreich aktualisiert.',
        //     position: 'top',
        //     duration: 1000
        //   });
        //   toast.present();
        //   this.navController.navigateBack("/employer/profile");
        // }
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    DetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/employer/profile/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/employer/profile/details/details.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employer-profile-details-details-module.js.map