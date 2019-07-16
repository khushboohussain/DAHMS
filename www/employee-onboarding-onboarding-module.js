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
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
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

module.exports = "<ion-content>\n  <div class=\"main\">\n    <div class=\"header container\">\n      <div class=\"logo\">\n        <p>medApp</p>\n      </div>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"title container\">\n        <h1>Erste Schritte</h1>\n        <div class=\"text\">\n          <p></p>\n        </div>\n      </div>\n\n      <div class=\"general\">\n        <form [formGroup]=\"form\">\n          <div class=\"personal-data\">\n            <ion-list>\n              <div class=\"grid-1\">\n                <!-- profile image -->\n                <ion-item lines=\"none\">\n                  <ion-label position=\"stacked\">Profilbild</ion-label>\n                  <div class=\"profile-image container\">\n                    <img src=\"{{image || base64Image}} \" (click)=\"choosePicture()\" id=\"profileImage\">\n                    <input type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\" style=\"visibility: hidden;\">\n                  </div>\n                </ion-item>\n              </div>\n\n              <!-- address -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Adresse</ion-label>\n                <ion-input type=\"text\" clearInput formControlName=\"adresse\"></ion-input>\n              </ion-item>\n\n              <!-- phone number -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Telefonnumer</ion-label>\n                <ion-input type=\"text\" clearInput autocapitalize=\"word\" formControlName=\"telefonnumer\" autocomplete autocorrect></ion-input>\n              </ion-item>\n\n              <!-- association-->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Zugehörigkeit Hi. Orga.</ion-label>\n                <ion-input type=\"text\" clearInput formControlName=\"zugehörigkeit\"></ion-input>\n              </ion-item>\n\n              <!-- max. work radius -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Max. Einsatzradius</ion-label>\n                <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\" formControlName=\"Einsatzradius\">\n                  <ion-select-option>10km</ion-select-option>\n                  <ion-select-option>25km</ion-select-option>\n                  <ion-select-option>50km</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n              <!-- passport -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Ausweis</ion-label>\n                <ion-input type=\"file\" (change)=\"uploadFile($event, 0)\" placeholder=\"Ausweis Vorderseite hochladen\"></ion-input>\n                <ion-input type=\"file\" (change)=\"uploadFile($event, 1)\" placeholder=\"Ausweis Rückseite hochladen\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </div>\n          \n          <div class=\"divider\"></div>\n\n          <!-- qualifications -->\n          <div class=\"qualifications-data\">\n            <div class=\"title container\">\n              <h3>Qualfikationen</h3>\n            </div>\n            <ion-list>\n              <!-- personal qualifications -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Persönliche Qualifikation</ion-label>\n                <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\" formControlName=\"qualifikation\">\n                  <ion-select-option value=\"SANITAETSHELFER\">Sanitätshelfer</ion-select-option>\n                  <ion-select-option value=\"RETTUNGSHELFER\">Rettungshelfer</ion-select-option>\n                  <ion-select-option value=\"RETTUNGSSANITAETER\">Rettungssanitäter</ion-select-option>\n                  <ion-select-option value=\"RETTUNGSASSISTENT\">Rettungsassistent</ion-select-option>\n                  <ion-select-option value=\"NOTFALLSANITAETER\">Notfallsanitäter</ion-select-option>\n                  <ion-select-option value=\"ARZT\">Arzt</ion-select-option>\n                  <ion-select-option value=\"ARZTRETTUNGSDIENST\">Arzt im Rettungsdienst</ion-select-option>\n                </ion-select>\n\n                <!-- qualification certificate -->\n                <ion-input type=\"file\" (change)=\"uploadFile($event, 2)\" placeholder=\"Qualifikationsnachweis hochladen\"></ion-input>\n\n                <!-- training certificate -->\n                <ion-input type=\"file\" (change)=\"uploadFile($event, 3)\" placeholder=\"Fortbildungsnachweis hochladen\"></ion-input>\n              </ion-item>\n\n              <!-- driving license -->\n              <ion-item lines=\"none\">\n                <ion-label position=\"stacked\">Führerscheinklasse</ion-label>\n                <ion-select cancelText=\"Abbrechen\" okText=\"Fertig\" formControlName=\"führerscheinklasse\">\n                  <ion-select-option value=\"NO\">Kein Führerschein</ion-select-option>\n                  <ion-select-option value=\"BENEFICIAL\">Führerschein vorteilhaft</ion-select-option>\n                  <ion-select-option value=\"B\">B</ion-select-option>\n                  <ion-select-option value=\"B1\">B1</ion-select-option>\n                </ion-select> \n  \n                <!-- Show only if first option is not selected, driving license certificate -->\n                <ion-input type=\"file\" (change)=\"uploadFile($event, 4)\" placeholder=\"Führerschein Vorderseite hochladen\"></ion-input>\n                <ion-input type=\"file\" (change)=\"uploadFile($event, 5)\" placeholder=\"Führerschein Rückseite hochladen\"></ion-input>\n              </ion-item>\n              \n              <!-- other qualification -->\n              <ion-item lines=\"none\" *ngFor=\"let item of field; let i = index;\">\n                <ion-label position=\"stacked\">Sonstige Qualifikation (optional)</ion-label>\n\n                <!-- name of qualification -->\n                <ion-input type=\"text\" clearInput [(ngModel)]=\"item.text\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n\n                <!-- other qualification certificate -->\n                <ion-input type=\"file\" (change)=\"uploadFile($event, 6, i)\" placeholder=\"Qualifikationsnachweis\"></ion-input>\n              </ion-item>\n\n              <!-- add another other qualification -->\n              <div class=\"add-new container\" (click)=\"addNewfield()\">\n                <ion-icon name=\"add\"></ion-icon><p>Weitere sonstige Qualifikation hinzufügen</p>\n              </div>\n            </ion-list>\n          </div>\n          \n          <!-- finish onboarding -->\n          <div class=\"container\">\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"submit(form)\">Einrichtung abschließen</ion-button>\n          </div>\n          \n        </form>\n      </div>\n      \n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employee/onboarding/onboarding.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/employee/onboarding/onboarding.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\n  margin-bottom: 12px;\n  width: 100%; }\n  .profile-image img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 124px;\n    width: 124px;\n    max-width: unset;\n    border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvb25ib2FyZGluZy9EOlxcS29kZUFscGhhXFxXb3Jrc3BhY2VcXFByb2plY3RzXFxEQUhNU1xcVGVzdFxcU2FhZC9zcmNcXGFwcFxcZW1wbG95ZWVcXG9uYm9hcmRpbmdcXG9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtFQUZiO0lBS0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL29uYm9hcmRpbmcvb25ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgaGVpZ2h0OiAxMjRweDtcbiAgICB3aWR0aDogMTI0cHg7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB9XG59Il19 */"

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
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
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
    function OnboardingPage(navController, helper, fb, fireStorage, router, api) {
        this.navController = navController;
        this.helper = helper;
        this.fb = fb;
        this.fireStorage = fireStorage;
        this.router = router;
        this.api = api;
        this.image = 'assets/profile.jpg';
        this.fileArr = [];
        this.field = [];
        // navigateHome() {
        //   this.navController.navigateRoot("/employee/appointments");
        // }
        this.promises = [];
        this.urls = [];
    }
    OnboardingPage.prototype.ngOnInit = function () {
        var x;
        this.field.push({
            text: '',
            file: x
        });
        this.form = this.fb.group({
            adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            telefonnumer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zugehörigkeit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Einsatzradius: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qualifikation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            führerscheinklasse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    OnboardingPage.prototype.submit = function (form) {
        var _this = this;
        console.log(form);
        this.data = {
            adresse: form.value.adresse,
            telefonnumer: form.value.telefonnumer,
            zugehörigkeit: form.value.zugehörigkeit,
            Einsatzradius: form.value.Einsatzradius,
            qualifikation: form.value.qualifikation,
            führerscheinklasse: form.value.führerscheinklasse,
            sonstige: this.field[0].text,
            imageURL: '',
            imageId: '',
            files: [],
            qualification: []
        };
        this.helper.presentToast('');
        // this.helper.presentLoading();
        console.log(this.field);
        console.log(this.fileArr);
        this.field.forEach(function (a) {
            _this.data.qualification.push(a.text);
            if (a.file) {
                _this.fileArr.push(a.file);
            }
        });
        this.fileArr.forEach(function (a, i) {
            _this.fileID = Math.floor(Date.now());
            _this.ref = _this.fireStorage.ref('Files/' + _this.fileID);
            _this.task = _this.ref.put(a);
            _this.promises.push(_this.task);
            _this.urls.push({ ref: _this.ref, index: i, fileId: _this.fileID, name: a.name });
            localStorage.setItem('fID', _this.fileID);
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
            _this.uploadImage();
        })
            .catch(function (error) {
            console.log("Some failed: ", error.message);
        });
    };
    OnboardingPage.prototype.choosePicture = function () {
        var element = document.querySelector('input[type="file"]');
        element.click();
    };
    OnboardingPage.prototype.upload = function (event) {
        var x = document.getElementById('profileImage');
        x.src = URL.createObjectURL(event.target.files[0]);
        this.convert(event.target.files[0]);
    };
    OnboardingPage.prototype.convert = function (file) {
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
    OnboardingPage.prototype.uploadImage = function () {
        var _this = this;
        this.uploadImageId = Math.floor(Date.now());
        this.ref = this.fireStorage.ref("Thumbnails/" + this.uploadImageId);
        var task = this.ref.putString('data:image/jpeg;base64,' + this.base64Image, 'data_url');
        task.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.ref.getDownloadURL().subscribe(function (url) {
                _this.image = url;
                if (_this.image !== '') {
                    _this.data.imageURL = _this.image;
                    _this.data.imageId = _this.uploadImageId;
                    localStorage.setItem('imgid', _this.data.imageId);
                    _this.createEmplyee();
                }
            });
        })).subscribe();
    };
    OnboardingPage.prototype.uploadFile = function (event, val, i) {
        // this.fileID = Math.floor(Date.now());
        if (i && i > 0) {
            this.field[i].file = event.target.files[0];
            return;
        }
        else {
            this.fileArr[val] = event.target.files[0];
        }
        // this.filepath=(`files'/${this.fileID}`);
        // this.ref=this.fireStorage.ref(this.filepath);
        // this.task= this.ref.put(this.file);
    };
    // async uploadAllFiles(item,i){
    //   this.fileID = Math.floor(Date.now());
    //   this.ref = this.fireStorage.ref('Files/'+this.fileID);
    //   this.task = this.ref.put(item);
    //   await this.task.snapshotChanges().pipe(
    //     finalize( async() => {
    //      await this.ref.getDownloadURL().subscribe( (url) => {
    //        this.urls[i] =url;
    //        console.log(url);
    //        return Promise.resolve(url);
    //       });
    //     })
    //   ).subscribe();
    // }
    OnboardingPage.prototype.createEmplyee = function () {
        var _this = this;
        this.api.updateEmployee(localStorage.getItem('uid'), this.data)
            .then(function (after) {
            _this.router.navigate(['employee/appointments']);
        });
    };
    OnboardingPage.prototype.addNewfield = function () {
        this.field.push({
            text: '',
            file: ''
        });
    };
    OnboardingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onboarding',
            template: __webpack_require__(/*! ./onboarding.page.html */ "./src/app/employee/onboarding/onboarding.page.html"),
            styles: [__webpack_require__(/*! ./onboarding.page.scss */ "./src/app/employee/onboarding/onboarding.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])
    ], OnboardingPage);
    return OnboardingPage;
}());

/*
[
  {
    text: '',
    file: ''
  }
]
*/


/***/ })

}]);
//# sourceMappingURL=employee-onboarding-onboarding-module.js.map