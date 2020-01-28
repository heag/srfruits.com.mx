(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-shell class=\"header\"></app-shell>\r\n<router-outlet class=\"outlet\"></router-outlet>\r\n<footer></footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/common */ "./src/environments/common.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(environment, router) {
        this.environment = environment;
        this.router = router;
        this.title = 'sr-fruits';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_environments_common__WEBPACK_IMPORTED_MODULE_1__["ENVIRONMENT"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _environments_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/common */ "./src/environments/common.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shell_components_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shell/components/app-shell/app-shell.component */ "./src/app/components/shell/components/app-shell/app-shell.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_shell_components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shell/components/social-network/social-network.component */ "./src/app/components/shell/components/social-network/social-network.component.ts");
/* harmony import */ var _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/forms/contact/contact/contact.component */ "./src/app/components/forms/contact/contact/contact.component.ts");
/* harmony import */ var _components_forms_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/forms/products/offer/offer.component */ "./src/app/components/forms/products/offer/offer.component.ts");
/* harmony import */ var _components_shell_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shell/components/footer/footer.component */ "./src/app/components/shell/components/footer/footer.component.ts");
/* harmony import */ var _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/forms/home/home.component */ "./src/app/components/forms/home/home.component.ts");
/* harmony import */ var _components_forms_about_us_advantages_advantages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/forms/about-us/advantages/advantages.component */ "./src/app/components/forms/about-us/advantages/advantages.component.ts");
/* harmony import */ var _components_forms_about_us_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/forms/about-us/mision-vision/mision-vision.component */ "./src/app/components/forms/about-us/mision-vision/mision-vision.component.ts");
/* harmony import */ var _components_forms_about_us_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/forms/about-us/achievements/achievements.component */ "./src/app/components/forms/about-us/achievements/achievements.component.ts");
/* harmony import */ var _components_forms_benefits_for_employee_benefits_employee__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/forms/benefits/for-employee/benefits-employee */ "./src/app/components/forms/benefits/for-employee/benefits-employee.ts");
/* harmony import */ var _components_forms_benefits_for_company_benefits_company__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/forms/benefits/for-company/benefits-company */ "./src/app/components/forms/benefits/for-company/benefits-company.ts");
/* harmony import */ var _components_forms_requests_request_request_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/forms/requests/request/request.component */ "./src/app/components/forms/requests/request/request.component.ts");
/* harmony import */ var _components_forms_requests_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/forms/requests/calculator/calculator.component */ "./src/app/components/forms/requests/calculator/calculator.component.ts");
/* harmony import */ var _components_forms_requests_payment_payment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/forms/requests/payment/payment.component */ "./src/app/components/forms/requests/payment/payment.component.ts");
/* harmony import */ var _components_forms_contact_questions_questions_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/forms/contact/questions/questions.component */ "./src/app/components/forms/contact/questions/questions.component.ts");
/* harmony import */ var _components_forms_home_process_steps_process_steps_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/forms/home/process-steps/process-steps.component */ "./src/app/components/forms/home/process-steps/process-steps.component.ts");
/* harmony import */ var _components_forms_home_extra_add_info_extra_add_info_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/forms/home/extra-add-info/extra-add-info.component */ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.ts");
/* harmony import */ var _components_shell_components_tittle_header_tittle_header_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/shell/components/tittle-header/tittle-header.component */ "./src/app/components/shell/components/tittle-header/tittle-header.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_forms_products_products_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/forms/products/products.component */ "./src/app/components/forms/products/products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var materialModules = [_angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_33__["FlexLayoutModule"]];
var angularCoreModules = [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]];
var appComponents = [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _components_shell_components_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_14__["AppShellComponent"], _components_shell_components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_16__["SocialNetworkComponent"], _components_forms_benefits_for_company_benefits_company__WEBPACK_IMPORTED_MODULE_25__["BenefitsCompanyComponent"],
    _components_forms_benefits_for_employee_benefits_employee__WEBPACK_IMPORTED_MODULE_24__["BenefitsEmployeeComponent"], _components_forms_about_us_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_22__["MisionVisionComponent"], _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _components_forms_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_18__["OfferComponent"], _components_shell_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _components_forms_about_us_advantages_advantages_component__WEBPACK_IMPORTED_MODULE_21__["AdvantagesComponent"],
    _components_forms_about_us_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_23__["AchievementsComponent"], _components_forms_requests_request_request_component__WEBPACK_IMPORTED_MODULE_26__["RequestComponent"], _components_forms_requests_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_27__["CalculatorComponent"], _components_forms_requests_payment_payment_component__WEBPACK_IMPORTED_MODULE_28__["PaymentComponent"], _components_forms_contact_questions_questions_component__WEBPACK_IMPORTED_MODULE_29__["QuestionsComponent"], _components_forms_home_process_steps_process_steps_component__WEBPACK_IMPORTED_MODULE_30__["ProcessStepsComponent"],
    _components_forms_home_extra_add_info_extra_add_info_component__WEBPACK_IMPORTED_MODULE_31__["ExtraAddInfoComponent"], _components_shell_components_tittle_header_tittle_header_component__WEBPACK_IMPORTED_MODULE_32__["TittleHeaderComponent"], _components_forms_products_products_component__WEBPACK_IMPORTED_MODULE_34__["ProductsComponent"]];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
var routes = [
    { path: 'home', component: _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
    { path: 'contact', component: _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"] },
    { path: 'mision-vision', component: _components_forms_about_us_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_22__["MisionVisionComponent"] },
    { path: 'logros', component: _components_forms_about_us_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_23__["AchievementsComponent"] },
    { path: 'beneficios-empleado', component: _components_forms_benefits_for_employee_benefits_employee__WEBPACK_IMPORTED_MODULE_24__["BenefitsEmployeeComponent"] },
    { path: 'beneficios-empresa', component: _components_forms_benefits_for_company_benefits_company__WEBPACK_IMPORTED_MODULE_25__["BenefitsCompanyComponent"] },
    { path: 'oferta', component: _components_forms_products_products_component__WEBPACK_IMPORTED_MODULE_34__["ProductsComponent"] },
    { path: 'pedido', component: _components_forms_requests_request_request_component__WEBPACK_IMPORTED_MODULE_26__["RequestComponent"] },
    { path: 'calculo', component: _components_forms_requests_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_27__["CalculatorComponent"] },
    { path: 'pago', component: _components_forms_requests_payment_payment_component__WEBPACK_IMPORTED_MODULE_28__["PaymentComponent"] },
    { path: 'contacto', component: _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"] },
    { path: 'preguntas', component: _components_forms_contact_questions_questions_component__WEBPACK_IMPORTED_MODULE_29__["QuestionsComponent"] },
    { path: '**', component: _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] } // siempre al final
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: appComponents.slice(),
            imports: angularCoreModules.concat([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]], materialModules, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes, { useHash: false }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })]),
            exports: [],
            entryComponents: [_components_forms_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_18__["OfferComponent"]],
            providers: [
                {
                    provide: _services_email_service__WEBPACK_IMPORTED_MODULE_8__["EmailRestService"],
                    useClass: _services_email_service__WEBPACK_IMPORTED_MODULE_8__["EmailRestService"]
                },
                {
                    provide: _environments_common__WEBPACK_IMPORTED_MODULE_11__["ENVIRONMENT"],
                    useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"]
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/forms/about-us/achievements/achievements.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/about-us/achievements/achievements.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  Logros\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/about-us/achievements/achievements.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/about-us/achievements/achievements.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 100px; }\n"

/***/ }),

/***/ "./src/app/components/forms/about-us/achievements/achievements.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/about-us/achievements/achievements.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent() {
    }
    AchievementsComponent.prototype.ngOnInit = function () {
    };
    AchievementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'achievements',
            template: __webpack_require__(/*! ./achievements.component.html */ "./src/app/components/forms/about-us/achievements/achievements.component.html"),
            styles: [__webpack_require__(/*! ./achievements.component.scss */ "./src/app/components/forms/about-us/achievements/achievements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/about-us/advantages/advantages.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/forms/about-us/advantages/advantages.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdvantagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvantagesComponent", function() { return AdvantagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvantagesComponent = /** @class */ (function () {
    function AdvantagesComponent() {
    }
    AdvantagesComponent.prototype.ngOnInit = function () {
    };
    AdvantagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advantages',
            template: __webpack_require__(/*! ./advantages.html */ "./src/app/components/forms/about-us/advantages/advantages.html"),
            styles: [__webpack_require__(/*! ./advantages.scss */ "./src/app/components/forms/about-us/advantages/advantages.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvantagesComponent);
    return AdvantagesComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/about-us/advantages/advantages.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/forms/about-us/advantages/advantages.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" id=\"advantages\" fxFlex style=\"background-image: url('assets/circle-yellow.png'); background-repeat: repeat-y;\"\r\n  fxLayoutGap=\"40px\" fxLayoutAlign=\"start center\">\r\n  <div class=\"titulo\">¿Por qué elegir Señor Fruits?</div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <div fxLayout=\"row\" fxLayoutGap=\"75px\" fxLayoutAlign=\"center center\">\r\n      <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n        <div>\r\n          <img src=\"assets/free-truck.png\" alt=\"step1\">\r\n        </div>\r\n        <div class=\"subtitulo\">Entrega sin costo</div>\r\n        <div class=\"parrafo \">\r\n          Su pedido le será entregado hasta sus instalaciones de manera gratuita\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n        <div>\r\n          <img src=\"assets/handshake.png\" alt=\"step1\">\r\n        </div>\r\n        <div class=\"subtitulo\">Trato personal</div>\r\n        <div class=\"parrafo \">\r\n          Le atendemos de manera personal y en nuestras redes sociales\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n        <div>\r\n          <img src=\"assets/quality.png\" alt=\"step1\">\r\n        </div>\r\n        <div class=\"subtitulo\">Garantizamos calidad</div>\r\n        <div class=\"parrafo \">\r\n          En caso de no entregar productos de excelente calidad el producto es gratis\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" class=\"second-row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"center center\">\r\n    <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n      <div>\r\n        <img src=\"assets/mejor-seleccion.png\" alt=\"step1\">\r\n      </div>\r\n      <div class=\"subtitulo\">Entrega sin costo</div>\r\n      <div class=\"parrafo \">\r\n        Su pedido le será entregado hasta sus instalaciones de manera gratuita\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n      <div>\r\n        <img src=\"assets/hygiene.png\" alt=\"step1\">\r\n      </div>\r\n      <div class=\"subtitulo\">Trato personal</div>\r\n      <div class=\"parrafo \">\r\n        Le atendemos de manera personal y en nuestras redes sociales\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n      <div>\r\n        <img src=\"assets/eco-friendly.png\" alt=\"step1\">\r\n      </div>\r\n      <div class=\"subtitulo\">Garantizamos calidad</div>\r\n      <div class=\"parrafo \">\r\n        En caso de no entregar productos de excelente calidad el producto es gratis\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/about-us/advantages/advantages.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/forms/about-us/advantages/advantages.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1180px) and (max-width: 1920px) {\n  .parrafo {\n    width: 320px; }\n  .titulo {\n    padding-top: 50px; }\n  .second-row {\n    padding-bottom: 40px; } }\n"

/***/ }),

/***/ "./src/app/components/forms/about-us/mision-vision/mision-vision.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/forms/about-us/mision-vision/mision-vision.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  Mision y vision\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/about-us/mision-vision/mision-vision.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/forms/about-us/mision-vision/mision-vision.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 100px; }\n"

/***/ }),

/***/ "./src/app/components/forms/about-us/mision-vision/mision-vision.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/about-us/mision-vision/mision-vision.component.ts ***!
  \************************************************************************************/
/*! exports provided: MisionVisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisionVisionComponent", function() { return MisionVisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MisionVisionComponent = /** @class */ (function () {
    function MisionVisionComponent() {
    }
    MisionVisionComponent.prototype.ngOnInit = function () {
    };
    MisionVisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mision-vision',
            template: __webpack_require__(/*! ./mision-vision.component.html */ "./src/app/components/forms/about-us/mision-vision/mision-vision.component.html"),
            styles: [__webpack_require__(/*! ./mision-vision.component.scss */ "./src/app/components/forms/about-us/mision-vision/mision-vision.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MisionVisionComponent);
    return MisionVisionComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/benefits/for-company/benefits-company.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-company/benefits-company.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"beneficios\">\r\n  <div fxLayout=\"column\" fxLayoutGap=\"35px\" fxLayoutAlign=\"center center\">\r\n    <div class=\"titulo\" fxLayoutAlign=\"center center\">¿Por qué elegir Señor Fruits?</div>\r\n    <div style=\"background-image: url('assets/circle-yellow.png'); background-repeat: no-repeat;\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxLayout=\"column\" class=\"beneficio\" fxFlex=\"35\">\r\n          <div><img src=\"assets/imagen-moderna.jpg\"></div>\r\n          <div class=\"subtitulo\">Una imagen moderna a la empresa</div>\r\n          <div class=\"parrafo\">Las empresas están tratando de distinguirse en el mercado laboral\r\n            para que los mejores candidatos las encuentren. Lo hacen de diferentes\r\n            maneras. Creemos que crear un lugar de trabajo saludable y amigable y,\r\n            al mismo tiempo, cuidar la salud de los empleados es un elemento muy importante\r\n            que afecta la imagen del empleador.</div>\r\n        </div>\r\n        <div fxFlex=\"10\"></div>\r\n        <div fxLayout=\"column\" class=\"beneficio\" fxFlex=\"35\">\r\n          <div><img src=\"assets/mayor-disposicion.jpg\"></div>\r\n          <div class=\"subtitulo\">Satisfacción y mayor disposición al trabajo</div>\r\n          <div class=\"parrafo\">Al preparar un bocadillo saludable, demuestra que la salud y\r\n            el bienestar de su equipo son importantes para usted y que desea cuidarlo con él.\r\n            Los empleados satisfechos están más dispuestos a realizar sus tareas, obtener una\r\n            mayor satisfacción en el trabajo y, por lo tanto, son más eficaces en la realización\r\n            de diversas tareas.</div>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" class=\"fila-dos\" fxLayoutAlign=\"center center\">\r\n        <div fxLayout=\"column\" class=\"beneficio\" fxFlex=\"35\">\r\n          <div><img src=\"assets/ambiente-amigable.jpg\"></div>\r\n          <div class=\"subtitulo\">Un ambiente de trabajo amigable y saludable.</div>\r\n          <div class=\"parrafo\">Una merienda saludable para los empleados es una \r\n            muy buena distinción para el empleador en el mercado laboral. Para \r\n            las personas empleadas, es una razón para sentirse orgulloso del lugar \r\n            donde trabajan y de los talentos potenciales, un activo adicional que \r\n            pone a su empresa a la luz de un lugar de trabajo moderno, apreciando \r\n            el capital de las personas que trabajan en ella.</div>\r\n        </div>\r\n        <div fxFlex=\"10\"></div>\r\n        <div fxLayout=\"column\" class=\"beneficio\" fxFlex=\"35\">\r\n          <div><img src=\"assets/menor-ausentismo.jpg\"></div>\r\n          <div class=\"subtitulo\">Menor ausentismo.</div>\r\n          <div class=\"parrafo\">La fruta para el trabajo es para muchas personas la única fuente de\r\n            vitaminas durante todo el día. Entregarlos a sus empleados y mejorar\r\n            su resistencia a muchas enfermedades. Cuide la salud de su equipo y\r\n            reduzca el ausentismo debido a resfriados / gripe y otras enfermedades en su empresa.</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"titulo\" fxLayoutAlign=\"center center\">Beneficios para el personal</div>\r\n    <div style=\"background-image: url('assets/circle-green.png'); background-repeat: no-repeat; background-position: right;\">\r\n      <div fxLayout=\"row\" class=\"empleados\" fxLayoutAlign=\"center center\">\r\n        <div fxLayout=\"column\" class=\"beneficio\" fxFlex=\"35\">\r\n          <div><img src=\"assets/salud-inmunidad.jpg\"></div>\r\n          <div class=\"subtitulo\">Salud e inmunidad.</div>\r\n          <div class=\"parrafo\">Los ingleses dicen \"Una manzana al día mantiene alejado al médico\".\r\n            Esto es confirmado por numerosos estudios. El consumo diario de frutas y\r\n            verduras tiene un efecto positivo en nuestra salud. Las vitaminas y los\r\n            minerales que contienen las frutas aumentan nuestra inmunidad y nos hacen\r\n            sentir más saludables y llenos de energía.</div>\r\n        </div>\r\n        <div fxFlex=\"10\"></div>\r\n        <div fxLayout=\"column\" class=\"beneficio\" fxFlex=\"35\">\r\n          <div><img src=\"assets/mayor-voluntad.jpg\"></div>\r\n          <div class=\"subtitulo\">Mayor voluntad al trabajar.</div>\r\n          <div class=\"parrafo\">Los minerales contenidos en las frutas afectan positivamente nuestro estado de ánimo\r\n            y nos dan energía que, en efecto, se traduce en una mayor disposición para hacer ...\r\n            cualquier cosa. La investigación confirma que comer productos saludables en el trabajo\r\n            puede aumentar nuestra eficiencia hasta en un 20%.</div>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" class=\"empleados\" fxLayoutAlign=\"center center\">\r\n        <div fxLayout=\"column\" class=\"beneficio\" fxFlex=\"35\">\r\n          <div><img src=\"assets/sabrosos-aperitivos.jpg\"></div>\r\n          <div class=\"subtitulo\">Sabrosos aperitivos en el trabajo.</div>\r\n          <div class=\"parrafo\">A todos les gusta comer bocadillos en el trabajo, desafortunadamente los chips y\r\n            barras que se encuentran en las máquinas contienen mucha azúcar, grasas trans,\r\n            endurecedores y conservantes. A veces es difícil eliminarlos porque el acceso a\r\n            frutas y verduras frescas no está disponible en todas partes.\r\n            Es por eso que los entregamos directamente a la cocina de la compañía, para que\r\n            pueda comunicarse con ellos en cualquier momento.</div>\r\n        </div>\r\n        <div fxFlex=\"10\"></div>\r\n        <div fxLayout=\"column\" class=\"beneficio\" fxFlex=\"35\">\r\n          <div><img src=\"assets/mejor-humor.jpg\"></div>\r\n          <div class=\"subtitulo\">Mejor humor.</div>\r\n          <div class=\"parrafo\">Las frutas contienen vitaminas que producen serotonina y endorfina, químicos naturales\r\n            encargados de inducir la sensación de felicidad. Un estudio realizado por la Universidad\r\n            de Otago (Nueva Zelanda) indica que el aumento de la ingesta de frutas y verduras puede\r\n            conducir a beneficios rápidos para el bienestar psicológico. Por la tanto, la fruta en la\r\n            oficina se traduce en mejor humor.</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"beneficios-movil\">\r\n  <div fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"center center\">\r\n    <div class=\"titulo-movil\">¿Por qué elegir Señor Fruits?</div>\r\n    <div class=\"beneficio\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n      <div>\r\n        <img src=\"assets/imagen-moderna.jpg\">\r\n      </div>\r\n      <div class=\"subtitulo-movil\">Una imagen moderna a la empresa</div>\r\n      <div class=\"parrafo-movil\">Las empresas están tratando de distinguirse en el mercado laboral\r\n        para que los mejores candidatos las encuentren. Lo hacen de diferentes\r\n        maneras. Creemos que crear un lugar de trabajo saludable y amigable y,\r\n        al mismo tiempo, cuidar la salud de los empleados es un elemento muy importante\r\n        que afecta la imagen del empleador.</div>\r\n    </div>\r\n\r\n    <div class=\"beneficio\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n      <div>\r\n        <img src=\"assets/mayor-disposicion.jpg\">\r\n      </div>\r\n      <div class=\"subtitulo-movil\">Satisfacción y mayor disposición al trabajo</div>\r\n      <div class=\"parrafo-movil\">Al preparar un bocadillo saludable, demuestra que la salud y\r\n        el bienestar de su equipo son importantes para usted y que desea cuidarlo con él.\r\n        Los empleados satisfechos están más dispuestos a realizar sus tareas, obtener una\r\n        mayor satisfacción en el trabajo y, por lo tanto, son más eficaces en la realización\r\n        de diversas tareas.</div>\r\n    </div>\r\n\r\n    <div class=\"beneficio\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n      <div>\r\n        <img src=\"assets/ambiente-amigable.jpg\">\r\n      </div>\r\n      <div class=\"subtitulo-movil\">Un ambiente de trabajo amigable y saludable</div>\r\n      <div class=\"parrafo-movil\">Una merienda saludable para los empleados es una \r\n          muy buena distinción para el empleador en el mercado laboral. Para \r\n          las personas empleadas, es una razón para sentirse orgulloso del lugar \r\n          donde trabajan y de los talentos potenciales, un activo adicional que \r\n          pone a su empresa a la luz de un lugar de trabajo moderno, apreciando \r\n          el capital de las personas que trabajan en ella.</div>\r\n    </div>\r\n\r\n    <div class=\"beneficio\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n      <div>\r\n        <img src=\"assets/menor-ausentismo.jpg\">\r\n      </div>\r\n      <div class=\"subtitulo-movil\">Menor ausentismo.</div>\r\n      <div class=\"parrafo-movil\">La fruta para el trabajo es para muchas personas la única fuente de\r\n        vitaminas durante todo el día. Entregarlos a sus empleados y mejorar\r\n        su resistencia a muchas enfermedades. Cuide la salud de su equipo y\r\n        reduzca el ausentismo debido a resfriados / gripe y otras enfermedades en su empresa.</div>\r\n    </div>\r\n\r\n    <div class=\"titulo-movil\">Beneficios para el personal</div>\r\n\r\n    <div class=\"beneficio\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n      <div>\r\n        <img src=\"assets/salud-inmunidad.jpg\">\r\n      </div>\r\n      <div class=\"subtitulo-movil\">Salud e inmunidad.</div>\r\n      <div class=\"parrafo-movil\">Los ingleses dicen \"Una manzana al día mantiene alejado al médico\".\r\n          Esto es confirmado por numerosos estudios. El consumo diario de frutas y\r\n          verduras tiene un efecto positivo en nuestra salud. Las vitaminas y los\r\n          minerales que contienen las frutas aumentan nuestra inmunidad y nos hacen\r\n          sentir más saludables y llenos de energía.</div>\r\n    </div>\r\n\r\n    <div class=\"beneficio\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n      <div>\r\n        <img src=\"assets/mayor-voluntad.jpg\">\r\n      </div>\r\n      <div class=\"subtitulo-movil\">Mayor voluntad al trabajar.</div>\r\n      <div class=\"parrafo-movil\">Los minerales contenidos en las frutas afectan positivamente nuestro estado de ánimo\r\n          y nos dan energía que, en efecto, se traduce en una mayor disposición para hacer ...\r\n          cualquier cosa. La investigación confirma que comer productos saludables en el trabajo\r\n          puede aumentar nuestra eficiencia hasta en un 20%.</div>\r\n    </div>\r\n\r\n    <div class=\"beneficio\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n      <div>\r\n        <img src=\"assets/sabrosos-aperitivos.jpg\">\r\n      </div>\r\n      <div class=\"subtitulo-movil\">Sabrosos aperitivos en el trabajo.</div>\r\n      <div class=\"parrafo-movil\">A todos les gusta comer bocadillos en el trabajo, desafortunadamente los chips y\r\n          barras que se encuentran en las máquinas contienen mucha azúcar, grasas trans,\r\n          endurecedores y conservantes. A veces es difícil eliminarlos porque el acceso a\r\n          frutas y verduras frescas no está disponible en todas partes.\r\n          Es por eso que los entregamos directamente a la cocina de la compañía, para que\r\n          pueda comunicarse con ellos en cualquier momento.</div>\r\n    </div>\r\n\r\n    <div class=\"beneficio\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n      <div>\r\n        <img src=\"assets/mejor-humor.jpg\">\r\n      </div>\r\n      <div class=\"subtitulo-movil\">Mejor humor</div>\r\n      <div class=\"parrafo-movil\">Las frutas contienen vitaminas que producen serotonina y endorfina, químicos naturales\r\n          encargados de inducir la sensación de felicidad. Un estudio realizado por la Universidad\r\n          de Otago (Nueva Zelanda) indica que el aumento de la ingesta de frutas y verduras puede\r\n          conducir a beneficios rápidos para el bienestar psicológico. Por la tanto, la fruta en la\r\n          oficina se traduce en mejor humor.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <app-calculator></app-calculator>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/benefits/for-company/benefits-company.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-company/benefits-company.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 360px) and (max-width: 480px) {\n  #beneficios-movil {\n    padding-top: 100px; }\n  #beneficios {\n    display: none; }\n  .beneficio {\n    width: 316px;\n    padding-top: 20px; }\n  .titulo-movil {\n    border-bottom: 2px solid #FFB100;\n    padding: 15px 0 25px 0; } }\n\n@media (min-width: 1180px) and (max-width: 1920px) {\n  .empleados {\n    padding: 30px 0 0px 0; }\n  .titulo {\n    padding: 40px 0 40px 0;\n    width: 100%;\n    border-bottom: 2px solid #FFB100; }\n  .fila-dos {\n    padding: 40px 0 50px 0; }\n  #beneficios-movil {\n    display: none; } }\n\n#beneficios {\n  padding: 100px 0 50px 0; }\n\n.beneficio img {\n  width: 124px;\n  height: 124px; }\n"

/***/ }),

/***/ "./src/app/components/forms/benefits/for-company/benefits-company.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-company/benefits-company.ts ***!
  \***************************************************************************/
/*! exports provided: BenefitsCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsCompanyComponent", function() { return BenefitsCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BenefitsCompanyComponent = /** @class */ (function () {
    function BenefitsCompanyComponent() {
    }
    BenefitsCompanyComponent.prototype.ngOnInit = function () {
    };
    BenefitsCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'benefits-company',
            template: __webpack_require__(/*! ./benefits-company.html */ "./src/app/components/forms/benefits/for-company/benefits-company.html"),
            styles: [__webpack_require__(/*! ./benefits-company.scss */ "./src/app/components/forms/benefits/for-company/benefits-company.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BenefitsCompanyComponent);
    return BenefitsCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/benefits/for-employee/benefits-employee.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-employee/benefits-employee.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"benefits-div\">\r\n  <div fxLayout=\"column\" class=\"columna\">\r\n    <!-- TOP -->\r\n    <div class=\"header\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"center center\">\r\n      <div class=\"imagen\" fxFlex=\"25\">\r\n        <img src='assets/empleado.png'>\r\n      </div>\r\n\r\n      <div fxFlex=\"52\">\r\n        <div class=\"titulo\" fxLayoutAlign=\"center center\">\r\n          Beneficios para el personal\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- BENEFICIOS -->\r\n    <div class=\"beneficios columna\" fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start center\">\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"naranja\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/salud-inmunidad.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt columna\">\r\n            <h4>Salud e inmunidad.</h4>\r\n            <p>Los ingleses dicen \"Una manzana al día mantiene alejado al médico\".\r\n              Esto es confirmado por numerosos estudios. El consumo diario de frutas y\r\n              verduras tiene un efecto positivo en nuestra salud. Las vitaminas y los\r\n              minerales que contienen las frutas aumentan nuestra inmunidad y nos hacen\r\n              sentir más saludables y llenos de energía.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"azul\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/mayor-voluntad.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt columna\">\r\n            <h4>Mayor voluntad al trabajar.</h4>\r\n            <p>Los minerales contenidos en las frutas afectan positivamente nuestro estado de ánimo\r\n              y nos dan energía que, en efecto, se traduce en una mayor disposición para hacer ...\r\n              cualquier cosa. La investigación confirma que comer productos saludables en el trabajo\r\n              puede aumentar nuestra eficiencia hasta en un 20%.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"verde\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/sabrosos-aperitivos.jpg\" alt=\"sabrosos\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt columna\">\r\n            <h4>Sabrosos aperitivos en el trabajo.</h4>\r\n            <p>A todos les gusta comer bocadillos en el trabajo, desafortunadamente los chips y\r\n              barras que se encuentran en las máquinas contienen mucha azúcar, grasas trans,\r\n              endurecedores y conservantes. A veces es difícil eliminarlos porque el acceso a\r\n              frutas y verduras frescas no está disponible en todas partes.\r\n              Es por eso que los entregamos directamente a la cocina de la compañía, para que\r\n              pueda comunicarse con ellos en cualquier momento.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"melon\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/mejor-humor.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt columna\">\r\n            <h4>Mejor humor.</h4>\r\n            <p>Las frutas contienen vitaminas que producen serotonina y endorfina, químicos naturales\r\n              encargados de inducir la sensación de felicidad. Un estudio realizado por la Universidad\r\n              de Otago (Nueva Zelanda) indica que el aumento de la ingesta de frutas y verduras puede\r\n              conducir a beneficios rápidos para el bienestar psicológico. Por la tanto, la fruta en la\r\n              oficina se traduce en mejor humor.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/benefits/for-employee/benefits-employee.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-employee/benefits-employee.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".beneficios {\n  padding-top: 50px; }\n  .beneficios .item {\n    border-radius: 15px; }\n  .beneficio-txt {\n  height: 165px;\n  border-top-right-radius: 35px;\n  border-bottom-right-radius: 35px; }\n  .beneficio-txt > * {\n    margin: 0 20px 0 20px; }\n  .beneficio-txt p {\n    text-align: justify;\n    font-size: 17px; }\n  .verde .beneficio-img {\n  background-color: #7EAF3B; }\n  .verde .beneficio-txt {\n  color: #568829;\n  border: 4px solid #7EAF3B; }\n  .naranja .beneficio-img {\n  background-color: #fc7303; }\n  .naranja .beneficio-txt {\n  color: #fc7303;\n  border: 4px solid #fc7303; }\n  .azul .beneficio-img {\n  background-color: #337acc; }\n  .azul .beneficio-txt {\n  color: #337acc;\n  border: 4px solid #337acc; }\n  .melon .beneficio-img {\n  background-color: #d94545; }\n  .melon .beneficio-txt {\n  color: #d94545;\n  border: 4px solid #d94545; }\n  .beneficio-img {\n  height: 165px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px; }\n  .beneficio-img img {\n    height: 130px;\n    width: 130px;\n    border-radius: 85px;\n    background-size: cover; }\n  .benefits-div {\n  padding-top: 96px;\n  height: 100%; }\n  .imagen img {\n  height: 270px; }\n  .columna {\n  height: 100%; }\n  .header {\n  background-color: #8DBF43; }\n  .titulo {\n  background-color: #ffb100;\n  border-radius: 35px;\n  color: #646464;\n  height: 80px;\n  font-size: 35px;\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/components/forms/benefits/for-employee/benefits-employee.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-employee/benefits-employee.ts ***!
  \*****************************************************************************/
/*! exports provided: BenefitsEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsEmployeeComponent", function() { return BenefitsEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BenefitsEmployeeComponent = /** @class */ (function () {
    function BenefitsEmployeeComponent() {
    }
    BenefitsEmployeeComponent.prototype.ngOnInit = function () {
    };
    BenefitsEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'benefits-employee',
            template: __webpack_require__(/*! ./benefits-employee.html */ "./src/app/components/forms/benefits/for-employee/benefits-employee.html"),
            styles: [__webpack_require__(/*! ./benefits-employee.scss */ "./src/app/components/forms/benefits/for-employee/benefits-employee.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BenefitsEmployeeComponent);
    return BenefitsEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/contact/contact/contact.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/contact/contact/contact.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-form\" fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n  <div fxLayout=\"row\" fxFlex=\"950px\" class=\"contact\" fxLayoutAlign=\"start center\">\r\n    <div fxFlex=\"280px\" fxFlexOffset=\"10\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"25px\" class=\"contact-details\">\r\n\r\n        <div><img class=\"logo\" src=\"assets/logo.png\"></div>\r\n        <div fxLayoutGap=\"45px\" class=\"phone\">\r\n          <mat-icon>call</mat-icon> 333 333 3333\r\n        </div>\r\n\r\n        <div>\r\n          <span> srfruits@srfruits.com.mx</span>\r\n        </div>\r\n\r\n        <div class=\"social-network\">\r\n          <a href=\"http://www.instagram.com/srfruits_mx\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>&nbsp;&nbsp;&nbsp;\r\n          <a href=\"https://www.facebook.com/srfruitsmx\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>&nbsp;&nbsp;&nbsp;\r\n          <a href=\"https://twitter.com/srfruitsmx\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"400px\">\r\n      <div class=\"imagen\">\r\n        <img src=\"assets/contacto.png\" alt=\"contacto\">\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/contact/contact/contact.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/contact/contact/contact.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\n  padding-top: 135px; }\n\n.contact {\n  background-color: #7EAF3B;\n  border-radius: 30px;\n  min-height: 650px; }\n\n.imagen img {\n  width: 625px; }\n\n.logo {\n  width: 100px;\n  margin-top: 35px; }\n\n.social-network {\n  font-size: 35px; }\n\n.social-network i {\n    color: #515151; }\n\n.contact-details {\n  background-color: #FFB100;\n  height: 375px;\n  margin-top: -65px;\n  color: #515151;\n  font-size: 22px;\n  border-radius: 25px; }\n"

/***/ }),

/***/ "./src/app/components/forms/contact/contact/contact.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/forms/contact/contact/contact.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.telephone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]);
    }
    ContactComponent.prototype.ngOnInit = function () {
        // const s = document.getElementById('formFooter').setAttribute('style', 'display: none');
        // s.setAttribute('type', 'text/javascript');
        // s.src = 'https://form.jotform.co/jsform/90997349015871';
        // document.getElementById('formw').appendChild(s);
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        // const s = document.getElementById('formFooter').setAttribute('style', 'display: none');
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/forms/contact/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/forms/contact/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/contact/questions/questions.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/contact/questions/questions.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n  <div fxFlex=\"80\" fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n    <div class=\"titulo\" fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"center center\">\r\n      <div fxFlex=\"200px\">\r\n        <img src=\"assets/faq.png\" alt=\"faq\">\r\n      </div>\r\n      <div fxFlex=\"800px\" fxLayout=\"column\" fxLayoutGap=\"25px\">\r\n        <div id=\"text\">\r\n            Preguntas frecuentes\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex=\"80\">\r\n          <mat-accordion id=\"questions\">\r\n\r\n            <mat-expansion-panel [expanded]=\"true\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿De donde proviene la fruta?\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  {{panelOpenState ? '' : ''}}\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">\r\n                Nuestra fruta tiene su origen en el campo mexicano.\r\n                Confiamos en la calidad del producto nacional, y así nos aseguramos de\r\n                garantizar su frescura, con precios competitivos y justos.\r\n              </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Como puedo ponerme en contacto?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Puedes llamarnos al teléfono: 01 (33) 33 12 34 56.<br />\r\n                Si lo prefieres, puedes escribirnos al correo electrónico: srfruits@srfruits.com.mx.<br />\r\n                Además, estamos atentos a tus dudas y comentarios en nuestras redes sociales, en\r\n                <a href=\"https://www.facebook.com/srfruitsmx\" target=\"_blank\">Facebook</a>,\r\n                <a href=\"https://twitter.com/srfruitsmx\" target=\"_blank\">Twitter</a> e\r\n                <a href=\"http://www.instagram.com/srfruits_mx\" target=\"_blank\">Instagram</a>.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header class=\"panel-head\">\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Cómo puedo calcular la cantidad de porciones que requiere mi empresa?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Es muy sencillo: usa nuestra <a routerLink=\"/calculo\" routerLinkActive=\"active\">Calculadora\r\n                  de Cantidades</a></div>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Cuál es el límite de paquetes que puedo solicitar?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Con gusto te podemos entregar desde un paquete, hasta la cantidad de fruta que\r\n                necesites.</div>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Con qué frecuencia y en qué horario se entregan los pedidos?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Las entregas se realizan los días lunes y/o miércoles\r\n                (dependiendo del número de entregas solicitadas), en un horario de 7:00 a 12:00 horas.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿En qué lugares realizan entregas?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Nuestro servicio está disponible dentro de la Zona Metropolitana de\r\n                Guadalajara: Guadalajara, Zapopan, Tlaquepaque, Tlajomulco y Tonalá.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Es posible cambiar la frecuencia o cantidad de mi pedido?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">¡Por supuesto! Conforme tu empresa crezca, nos dará mucho gusto\r\n                visitarte con más frecuencia para entregarte más fruta fresca para tu nuevo personal.\r\n                Si deseas una nueva cotización, por favor ponte en contacto con nosotros y te ayudaremos en\r\n                el proceso.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Cuáles son las formas de pago?\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  {{panelOpenState ? '' : ''}}\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Puedes realizar tus pagos mediante una transferencia electrónica\r\n                o un depósito bancario.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Realizan facturas?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Sí. Te enviaremos la factura a tu correo electrónico.\r\n                Además, tus compras son deducibles de impuestos.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Cual es la duación del contrato?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Confiamos en la calidad de nuestro servicio por lo tanto\r\n                no manejamos contratos para nuestros clientes\r\n              </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿No encontraste la respuesta que necesitas?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Ponte en <a routerLink=\"/contacto\" routerLinkActive=\"active\">contacto</a> con\r\n                nosotros y\r\n                con gusto te\r\n                atenderemos rápidamente.</div>\r\n            </mat-expansion-panel>\r\n\r\n          </mat-accordion>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/contact/questions/questions.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/contact/questions/questions.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pregunta {\n  font-size: 20px;\n  color: #568829; }\n\n.respuesta {\n  font-size: 16px;\n  color: #515151; }\n\n#questions mat-expansion-panel {\n  border-left: 5px solid #7EAF3B;\n  margin: 10px; }\n\n.titulo {\n  border-radius: 15px;\n  margin: 30px 0 35px 0;\n  font-size: 65px;\n  color: #346618;\n  text-align: center; }\n\n.titulo img {\n    height: 200px;\n    border-radius: 25px; }\n\n.titulo #text {\n    background-color: #7EAF3B;\n    height: 100px;\n    border-radius: 30px; }\n"

/***/ }),

/***/ "./src/app/components/forms/contact/questions/questions.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/contact/questions/questions.component.ts ***!
  \***************************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent() {
        this.panelOpenState = true;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/components/forms/contact/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/components/forms/contact/questions/questions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/home/extra-add-info/extra-add-info.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\r\n  <div class=\"left-div\">\r\n    <span>¿Alguna pregunta?</span>\r\n    <p>\r\n      Visita nuestra sección de preguntas frecuentes\r\n    </p>\r\n    <button mat-button routerLink=\"/preguntas\" routerLinkActive=\"active\">Visitar</button>\r\n  </div>\r\n\r\n  <div class=\"right-div\">\r\n    <img src=\"assets/banana.png\" class=\"banana\" alt=\"banana\">\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/home/extra-add-info/extra-add-info.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\n  .right-div {\n    float: right;\n    width: 30%; }\n  .left-div {\n    float: left;\n    width: 65%;\n    padding-top: 20px; }\n    .left-div span {\n      opacity: .9;\n      font-size: 25px;\n      color: #F7F7F7; }\n    .left-div p {\n      font-size: 17px;\n      font-weight: 400;\n      color: #F7F7F7; }\n    .left-div button {\n      background-color: #ffb100;\n      border-radius: 15px;\n      color: #515151;\n      font-size: 17px; } }\n\n@media (max-width: 600px) {\n  .right-div {\n    display: none; }\n  .left-div {\n    width: 92%;\n    padding-left: 4%;\n    padding-top: 15px;\n    color: #333333; }\n    .left-div span {\n      opacity: .9;\n      font-size: 25px; }\n    .left-div p {\n      font-size: 15px;\n      opacity: .9; }\n    .left-div button {\n      background-color: #ffce0c;\n      border-radius: 15px;\n      color: #333333;\n      font-weight: bold; } }\n\n.main {\n  overflow: hidden;\n  background-color: #fc7303;\n  height: 160px;\n  margin-bottom: 30px;\n  margin-top: 65px; }\n\n.banana {\n  height: 140px;\n  min-width: 150px;\n  float: right;\n  padding-top: 10px;\n  padding-right: 8%; }\n"

/***/ }),

/***/ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/home/extra-add-info/extra-add-info.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExtraAddInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraAddInfoComponent", function() { return ExtraAddInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExtraAddInfoComponent = /** @class */ (function () {
    function ExtraAddInfoComponent(router) {
    }
    ExtraAddInfoComponent.prototype.ngOnInit = function () {
    };
    ExtraAddInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'extra-add-info',
            template: __webpack_require__(/*! ./extra-add-info.component.html */ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.html"),
            styles: [__webpack_require__(/*! ./extra-add-info.component.scss */ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ExtraAddInfoComponent);
    return ExtraAddInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex id=\"home-container\">\r\n  <div>\r\n    <div id=\"carrusel\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n          <ngb-carousel>\r\n            <ng-template ngbSlide>\r\n              <div class=\"slide-container\">\r\n                <div class=\"slide-content\">\r\n                  <div class=\"slide-text fuente\">\r\n                    <p>Conoce los beneficios de Señor Fruits</p>\r\n                    <button class=\"boton font\" routerLink=\"/beneficios-empresa\" routerLinkActive=\"active\">Ordenar</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"slide-img\">\r\n                  <img src='assets/carrusel-beneficios.jpg' style=\"width: 100%\" alt=\"fruta 1\" class=\"imagen\">\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template ngbSlide>\r\n              <div class=\"slide-container\">\r\n                <div class=\"slide-content\">\r\n                  <div class=\"slide-text fuente\">\r\n                    <p>Checa nuestros productos</p>\r\n                    <button class=\"boton font\" routerLink=\"/oferta\" routerLinkActive=\"active\">Ver</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"slide-img\">\r\n                  <img src='assets/carrusel-seleccion.jpg' style=\"width: 100%\" alt=\"fruta 1\" class=\"imagen\">\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n          </ngb-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"50\">\r\n      <img src='assets/our-products-home.png' alt=\"products\">\r\n    </div>\r\n    <div fxFlex=\"50\">\r\n      <div class=\"contenido\">\r\n        <p class=\"titulo-home\">Nuestros productos</p>\r\n        <p class=\"parrafo\">Consulta nuestros paquetes que ofrecen la mejor selección y variedad de nuestros productos.</p>\r\n        <button class=\"boton\" routerLink=\"/oferta\" routerLinkActive=\"active\">Catálogo</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <process-steps></process-steps>\r\n  </div>\r\n  <div>\r\n    <app-advantages></app-advantages>\r\n  </div>\r\n\r\n  <div>\r\n    <app-calculator></app-calculator>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"50\" fxLayoutAlign=\"center start\">\r\n      <div class=\"contenido\">\r\n        <p class=\"titulo-home\">Atención inmediata</p>\r\n        <p class=\"parrafo\">¿Alguna pregunta? contacta Señor Fruits por cualquiera de sus canales</p>\r\n        <button class=\"boton\" routerLink=\"/contacto\" routerLinkActive=\"active\">Contacto</button>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"50\" fxLayoutAlign=\"end end\">\r\n      <img src='assets/atencion-personal.png' alt=\"atencion\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 360px) and (max-width: 480px) {\n  #home-container {\n    padding-top: 96px; }\n  .slide-container {\n    position: relative; }\n  .slide-content {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 177, 0, 0.51); }\n  .slide-img {\n    z-index: 9; }\n  .slide-text {\n    display: none; }\n  .contenido {\n    display: none; } }\n\n@media (min-width: 1180px) and (max-width: 1920px) {\n  #home-container {\n    padding-top: 96px; }\n  .slide-container {\n    position: relative; }\n  .slide-content {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 177, 0, 0.51); }\n  .slide-img {\n    z-index: 9; }\n  .slide-text {\n    top: 55px;\n    left: 250px;\n    width: 408px;\n    height: 240px;\n    position: relative; }\n    .slide-text p {\n      font-size: 54px;\n      font-weight: bold;\n      color: white; }\n    .slide-text button {\n      width: 180px;\n      background-color: white;\n      color: #FFB100; }\n  .contenido {\n    top: 180px;\n    left: 100px;\n    width: 350px;\n    position: relative; }\n    .contenido button {\n      background-color: #7EAF3B;\n      width: 180px;\n      color: white; } }\n"

/***/ }),

/***/ "./src/app/components/forms/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/forms/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(config) {
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/forms/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/forms/home/home.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/home/process-steps/process-steps.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/home/process-steps/process-steps.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" fxLayout=\"column\" fxLayoutGap=\"15px\" fxFlex fxLayoutAlign=\"start center\">\r\n    <div class=\"titulo\">¿Como funciona?</div>\r\n    <div id=\"outer-flex-container\">\r\n        <div id=\"inner-flex-container\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"25px\" class=\"tarjeta fuente\">\r\n                <div>\r\n                    <img src=\"assets/step1.png\" alt=\"step1\">\r\n                </div>\r\n                <div class=\"subtitulo\">Calcula tu pedido</div>\r\n                <div class=\"paso-texto\">Con la calculadora de cantidad puedes realizar\r\n                    un mejor presupuesto de la cantidad de fruta necesaria para tus\r\n                    colaboradores.\r\n                </div>\r\n            </div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"25px\" class=\"tarjeta fuente\">\r\n                <div>\r\n                    <img src=\"assets/step2.png\" alt=\"step2\">\r\n                </div>\r\n                <div class=\"subtitulo\">Ordena</div>\r\n                <div class=\"paso-texto\">Elige el paquete que deseas, la cantidad de \r\n                    porciones y días de entrega: lunes y/o miércoles. Inmediatamente nos \r\n                    pondremos en contacto contigo para concluir el proceso de compra.\r\n                </div>\r\n            </div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"25px\" class=\"tarjeta fuente\">\r\n                <div>\r\n                    <img src=\"assets/step3.png\" alt=\"step3\">\r\n                </div>\r\n                <div class=\"subtitulo\">Recibe tu pedido</div>\r\n                <div class=\"paso-texto\">Las entregas se realizan en las primeras horas \r\n                    laborales de los días lunes y miércoles. Así garantizamos que la fruta que \r\n                    recibas sea la más fresca. Nuestro servicio está disponible dentro de la ZMG.\r\n                </div>\r\n            </div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"25px\" class=\"tarjeta fuente\">\r\n                <div>\r\n                    <img src=\"assets/step4.png\" alt=\"step4\">\r\n                </div>\r\n                <div class=\"subtitulo\">Pagos flexibles</div>\r\n                <div class=\"paso-texto\">Una vez entregado tu pedido, te enviaremos la factura \r\n                    correspondiente para que realices el pago dentro de los siguientes 7 días \r\n                    hábiles, mediante una transferencia electrónica o un depósito bancario.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/home/process-steps/process-steps.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/home/process-steps/process-steps.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 360px) and (max-width: 480px) {\n  #inner-flex-container {\n    flex-direction: column; }\n  .tarjeta {\n    width: 230px;\n    margin: 0 0 0 0; }\n  .titulo-gris {\n    width: 250px; }\n  #container {\n    width: 100%; } }\n\n@media (min-width: 1180px) and (max-width: 1920px) {\n  .titulo {\n    padding-top: 65px; }\n  #outer-flex-container {\n    display: inline-block;\n    flex-direction: column;\n    height: 100%; }\n  #inner-flex-container {\n    display: flex;\n    height: calc(100% - 40px); }\n  #container {\n    height: 730px; }\n  .tarjeta {\n    width: 230px;\n    margin: 0 25px 0 25px; } }\n\n#outer-flex-container {\n  display: inline-block;\n  flex-direction: column;\n  height: 100%; }\n\n.paso-texto {\n  font-size: 15px;\n  width: 100%; }\n\n#inner-flex-container {\n  display: flex;\n  height: calc(100% - 40px); }\n\n#container {\n  background-color: #F5F5F5; }\n\n#container div {\n    background-color: #F5F5F5; }\n"

/***/ }),

/***/ "./src/app/components/forms/home/process-steps/process-steps.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/home/process-steps/process-steps.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProcessStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessStepsComponent", function() { return ProcessStepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProcessStepsComponent = /** @class */ (function () {
    function ProcessStepsComponent() {
    }
    ProcessStepsComponent.prototype.ngOnInit = function () {
    };
    ProcessStepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'process-steps',
            template: __webpack_require__(/*! ./process-steps.component.html */ "./src/app/components/forms/home/process-steps/process-steps.component.html"),
            styles: [__webpack_require__(/*! ./process-steps.component.scss */ "./src/app/components/forms/home/process-steps/process-steps.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessStepsComponent);
    return ProcessStepsComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/products/offer/offer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/forms/products/offer/offer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"60px\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"45px\">\r\n\r\n    <div fxLayout=\"column\" fxFlex=\"250px\" class=\"verde\" fxLayoutAlign=\"center center\">\r\n      <div class=\"imagen\" fxFlex=\"180px\" fxLayoutAlign=\"center center\">\r\n        <img src=\"assets/wood-box.png\" alt=\"Campesinos\">\r\n      </div>\r\n      <div fxFlex=\"150px\" fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"contenido\">\r\n        <div>\r\n          <h3>Standar</h3>\r\n        </div>\r\n        <div>5 kg platano</div>\r\n        <div>2 kg manzana</div>\r\n        <div fxLayout=\"row\" class=\"temporada\" matTooltip=\"Puede ser guayaba, mango, kiwi, pera\">\r\n          <div>2 kg Fruta de temporada&nbsp;</div>\r\n          <div>\r\n            <mat-icon>info</mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxFlex=\"250px\" class=\"amarillo\" fxLayoutAlign=\"center center\">\r\n      <div class=\"imagen\" fxFlex=\"180px\" fxLayoutAlign=\"center center\">\r\n        <img src=\"assets/wood-box.png\" alt=\"Campesinos\">\r\n      </div>\r\n      <div fxFlex=\"150px\" fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"contenido\">\r\n        <div>\r\n          <h3>Standar</h3>\r\n        </div>\r\n        <div>5 kg platano</div>\r\n        <div>2 kg manzana</div>\r\n        <div fxLayout=\"row\" class=\"temporada\" matTooltip=\"Puede ser guayaba, mango, kiwi, pera\">\r\n          <div>2 kg Fruta de temporada&nbsp;</div>\r\n          <div>\r\n            <mat-icon>info</mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxFlex=\"250px\" class=\"naranja\" fxLayoutAlign=\"center center\">\r\n      <div class=\"imagen\" fxFlex=\"180px\" fxLayoutAlign=\"center center\">\r\n        <img src=\"assets/wood-box.png\" alt=\"Campesinos\">\r\n      </div>\r\n      <div fxFlex=\"150px\" fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"contenido\">\r\n        <div>\r\n          <h3>Standar</h3>\r\n        </div>\r\n        <div>5 kg platano</div>\r\n        <div>2 kg manzana</div>\r\n        <div fxLayout=\"row\" class=\"temporada\" matTooltip=\"Puede ser guayaba, mango, kiwi, pera\">\r\n          <div>2 kg Fruta de temporada&nbsp;</div>\r\n          <div>\r\n            <mat-icon>info</mat-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/products/offer/offer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/forms/products/offer/offer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verde {\n  border: 2px solid #8DBF43; }\n  .verde .contenido {\n    background-color: #8DBF43;\n    color: #333333; }\n  .amarillo {\n  border: 2px solid #FFB100; }\n  .amarillo .contenido {\n    background-color: #FFB100;\n    color: #515151; }\n  .contenido {\n  width: 100%; }\n  .contenido h3 {\n    padding-top: 8px; }\n  .naranja {\n  border: 2px solid #fc7303; }\n  .naranja .contenido {\n    background-color: #fc7303;\n    color: #515151; }\n  .imagen img {\n  height: 200px; }\n  .temporada mat-icon {\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/components/forms/products/offer/offer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/forms/products/offer/offer.component.ts ***!
  \********************************************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OfferComponent = /** @class */ (function () {
    function OfferComponent() {
    }
    OfferComponent.prototype.ngOnInit = function () {
    };
    OfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'offer',
            template: __webpack_require__(/*! ./offer.component.html */ "./src/app/components/forms/products/offer/offer.component.html"),
            styles: [__webpack_require__(/*! ./offer.component.scss */ "./src/app/components/forms/products/offer/offer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OfferComponent);
    return OfferComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/products/products.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/forms/products/products.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" fxFlexLayout=\"column\">\r\n    <div>\r\n        <offer></offer>\r\n    </div>\r\n    <div fxLayoutAlign=\"center center\" class=\"tarjeta tarjetas\">\r\n        <div fxFlex=\"550px\" fxLayoutAlign=\"start center\" class=\"alert alert-primary\" role=\"alert\">\r\n            <mat-icon>person</mat-icon>Cada caja rinde aproximadamente para 35 personas\r\n        </div>\r\n    </div>\r\n    <div  fxLayoutAlign=\"center center\"  class=\"tarjeta\">\r\n        <div fxFlex=\"550px\" fxLayoutAlign=\"start center\" class=\"alert alert-primary\" role=\"alert\">\r\n            <mat-icon>local_shipping</mat-icon>La entrega es hasta la puerta de su oficina y de manera gratuita\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/products/products.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/forms/products/products.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tarjetas {\n  padding-top: 32px; }\n\n.tarjeta mat-icon {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/components/forms/products/products.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/forms/products/products.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/forms/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/forms/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/requests/calculator/calculator.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"grande\">\r\n  <div fxLayout=\"column\" fxLayoutGap=\"35px\" fxLayoutAlign=\"center center\">\r\n    <div class=\"titulo\">Calcula tu pedido</div>\r\n    <div fxLayout=\"row\" fxLayoutGap=\"1px\" fxLayoutAlign=\"center center\">\r\n\r\n      <!-- EXPERIMENT TO FIX IE\r\n          <div fxFlex=\"50\">test1</div>\r\n          <div fxFlex=\"50\">test2</div> -->\r\n\r\n      <div fxLayoutAlign=\"center center\" fxFlex=\"50\">\r\n        <div fxLayout=\"column\" fxFlex=\"50\">\r\n          <div class=\"subtitulo\">¿Cuanta fruta necesita mi empresa?</div>\r\n          <div class=\"fuente\">\r\n            La dosis recomendada segun la OMS es de 5 porciones al dia.\r\n            Inserta la cantidad de colaboradores en tu oficina y la cantidad\r\n            de entregas semanales que necesitas y calcula\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"tarjeta\" fxFlex=\"50\">\r\n        <mat-card>\r\n          <div [formGroup]=\"tarjetaForm\">\r\n            <div fxLayout=\"row\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center center\">\r\n              <div fxLayout=\"column\" class=\"valores\" fxLayoutGap=\"15px\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\r\n                <div>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"personasControl\" min=\"5\" (input)=\"calcularCajas()\" type=\"number\" matInput\r\n                      placeholder=\"Personas\" max=\"2000\">\r\n                    <mat-hint align=\"end\">Mínimo 5 personas</mat-hint>\r\n                    <mat-error align=\"end\" *ngIf=\"personasControl.hasError('min') || personasControl.hasError('max')\">\r\n                      Insertar valor entre 5 y 2000\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input formControlName=\"entregasControl\" min=\"1\" (input)=\"calcularCajas()\" type=\"number\" matInput\r\n                      placeholder=\"Entregas semanales\" max=\"5\">\r\n                    <mat-error align=\"end\" *ngIf=\"entregasControl.hasError('min') || entregasControl.hasError('max')\">\r\n                      Máximo 5 entregas\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div fxLayout=\"row\">\r\n                  <div class=\"telefono\"><img src=\"assets/phone.png\" alt=\"phone\"> 333-333-3365</div>\r\n                </div>\r\n              </div>\r\n              <div fxLayout=\"column\" class=\"fuente\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center start\" fxFlex=\"50\">\r\n                <div class=\"subtitulo\">Tu pedido:</div>\r\n                <div fxLayoutGap=\"10px\" fxLayout=\"row\">\r\n                  <div class=\"item\">Colaboradores . . . .</div>\r\n                  <div class=\"valor\"> {{personasControl.value}}</div>\r\n                </div>\r\n                <div fxLayoutGap=\"10px\" fxLayout=\"row\">\r\n                  <div class=\"item\">Entregas . . . . . .</div>\r\n                  <div class=\"valor\">{{entregasControl.value}}</div>\r\n                </div>\r\n                <div fxLayoutGap=\"10px\" fxLayout=\"row\">\r\n                  <div class=\"cajas\">Cajas por semana . . .</div>\r\n                  <div class=\"cajas-resultado\">{{boxes}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n\r\n    </div>\r\n    <div fxFlex=\"30px\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"movil\">\r\n  <div fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n    <div class=\"titulo-movil\">\r\n      Calcula tu pedido\r\n    </div>\r\n\r\n    <div class=\"subtitulo-movil\">¿Cuanta fruta necesita mi empresa?</div>\r\n    <div class=\"parrafo-movil\">\r\n      La dosis recomendada segun la OMS es de 5 porciones al dia.\r\n      Inserta la cantidad de colaboradores en tu oficina y la cantidad\r\n      de entregas semanales que necesitas y calcula\r\n    </div>\r\n    <div>\r\n      <mat-card>\r\n        <div [formGroup]=\"tarjetaForm\">\r\n          <mat-form-field>\r\n            <input formControlName=\"personasControl\" min=\"5\" (input)=\"calcularCajas()\" type=\"number\" matInput\r\n              placeholder=\"Personas\" max=\"2000\">\r\n            <mat-hint align=\"end\">Mínimo 5 personas</mat-hint>\r\n            <mat-error align=\"end\" *ngIf=\"personasControl.hasError('min') || personasControl.hasError('max')\">\r\n              Insertar valor entre 5 y 2000\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input formControlName=\"entregasControl\" min=\"1\" (input)=\"calcularCajas()\" type=\"number\" matInput\r\n              placeholder=\"Entregas semanales\" max=\"5\">\r\n            <mat-error align=\"end\" *ngIf=\"entregasControl.hasError('min') || entregasControl.hasError('max')\">\r\n              Máximo 5 entregas\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <div class=\"items-titulo\">Tu pedido:</div>\r\n          <div fxLayoutGap=\"10px\" fxLayout=\"row\">\r\n            <div class=\"item\">Colaboradores . . . . . . . . . . .</div>\r\n            <div class=\"valor\">{{personasControl.value}}</div>\r\n          </div>\r\n          <div fxLayoutGap=\"10px\" fxLayout=\"row\">\r\n            <div class=\"item\">Entregas . . . . . . . . . . . . . . . . . . .</div>\r\n            <div class=\"valor\">{{entregasControl.value}}</div>\r\n          </div>\r\n          <div fxLayoutGap=\"10px\" fxLayout=\"row\">\r\n            <div class=\"item\">Cajas por semana . . . . . . .</div>\r\n            <div class=\"cajas-resultado\">{{boxes}}</div>\r\n          </div>\r\n          <div fxLayoutAlign=\"center center\" class=\"boton-verde\">\r\n            <button><a href=\"tel:+521{{numeroDeTelefono}}\">Ordenar</a></button>\r\n          </div>\r\n          <div fxLayoutAlign=\"center center\" class=\"telefono\">\r\n            <img src=\"assets/phone.png\" alt=\"phone\"> {{numeroDeTelefono}}\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50px\"></div>\r\n  </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/calculator/calculator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 360px) and (max-width: 480px) {\n  #grande {\n    display: none; }\n  .telefono {\n    width: 100%; }\n    .telefono img {\n      padding-right: 10px; }\n  #movil {\n    width: 100%; }\n    #movil mat-card {\n      border-radius: 5px;\n      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);\n      width: 316px; }\n      #movil mat-card .subtitulo-movil {\n        padding-top: 20px; }\n    #movil mat-form-field {\n      width: 100%; }\n  .items-titulo {\n    padding: 22px 0 10px 0;\n    font-weight: bolder;\n    font-size: 21px;\n    font-family: 'Poppins';\n    color: #4F4F4F; }\n  .titulo-movil {\n    padding: 50px 0 30px 0;\n    width: 250px;\n    text-align: center; }\n  .telefono {\n    padding-bottom: 20px; }\n  .boton-verde {\n    padding: 40px 0 33px 0px; }\n    .boton-verde button {\n      background-color: #7EAF3B;\n      width: 183px;\n      border-radius: 40px;\n      height: 53px;\n      border: none; }\n    .boton-verde a {\n      color: white;\n      font-size: 18px;\n      font-weight: bold; } }\n\n#movil {\n  max-width: 480px; }\n\n@media (min-width: 1180px) and (max-width: 1920px) {\n  #movil {\n    display: none !important; }\n  .parrafo {\n    width: 320px; }\n  .titulo {\n    padding-top: 50px; }\n  .valores {\n    padding-top: 25px; }\n    .valores label {\n      color: #7EAF3B; }\n  .second-row {\n    padding-bottom: 40px; }\n  #tarjeta mat-card {\n    width: 600px;\n    height: 330px;\n    border-radius: 5px;\n    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3); }\n  .subtitulo {\n    padding-bottom: 10px;\n    color: #4F4F4F; }\n  .item {\n    font-size: 15px;\n    font-weight: bold;\n    font-family: 'Poppins';\n    color: #4F4F4F; }\n  .valor {\n    font-size: 16px;\n    font-weight: bold;\n    font-family: 'Poppins';\n    color: #7EAF3B; }\n  .cajas {\n    font-size: 18px;\n    font-weight: bold;\n    font-family: 'Poppins';\n    color: #4F4F4F; }\n  .boton-verde {\n    padding: 50px 0 0 20px; }\n    .boton-verde button {\n      color: white;\n      background-color: #7EAF3B;\n      width: 183px;\n      border-radius: 40px;\n      font-size: 18px;\n      font-weight: bold;\n      height: 53px;\n      border: none; } }\n\n.telefono {\n  color: #7EAF3B;\n  font-size: 26px;\n  font-weight: bold;\n  padding-top: 10px; }\n\n.item {\n  font-size: 15px;\n  font-weight: bold;\n  font-family: 'Poppins';\n  color: #4F4F4F; }\n\n.valor {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: 'Poppins';\n  color: #7EAF3B; }\n\n.cajas-resultado {\n  font-size: 19px;\n  font-weight: bold;\n  font-family: 'Poppins';\n  color: #7EAF3B; }\n\n#grande {\n  background-color: #FFB100; }\n\n#movil {\n  background-color: #FFB100; }\n\n.fuente {\n  font-size: 18px;\n  text-align: justify; }\n"

/***/ }),

/***/ "./src/app/components/forms/requests/calculator/calculator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator.component.ts ***!
  \******************************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.boxes = 1;
        this.numeroDeTelefono = '3360598886';
        this.tarjetaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            personasControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](5, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2000),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            entregasControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(5)])
        });
    }
    Object.defineProperty(CalculatorComponent.prototype, "personasControl", {
        get: function () {
            return this.tarjetaForm.get('personasControl');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorComponent.prototype, "entregasControl", {
        get: function () {
            return this.tarjetaForm.get('entregasControl');
        },
        enumerable: true,
        configurable: true
    });
    CalculatorComponent.prototype.calcularCajas = function () {
        if ((this.personasControl.value > 2000 || this.personasControl.value < 5) ||
            (this.entregasControl.value > 5 || this.entregasControl.value < 1)) {
            return;
        }
        var cajas = Math.ceil((this.personasControl.value / 35) * this.entregasControl.value);
        this.boxes = cajas;
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/components/forms/requests/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.scss */ "./src/app/components/forms/requests/calculator/calculator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/requests/payment/payment.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/requests/payment/payment.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pago\">\r\n\r\n  <div fxLayout=\"row\" class=\"datos-banco\" fxLayoutGap=\"50px\" fxLayoutAlign=\"center center\">\r\n    <div>\r\n      <img src=\"assets/pago.png\">\r\n    </div>\r\n    <div fxFlex=\"500px\">\r\n      <mat-card>\r\n        <div fxLayout=\"row\" id=\"card\">\r\n          <div fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n            <img id=\"logo\" src=\"assets/logo.png\">\r\n          </div>\r\n          <div fxLayout=\"column\">\r\n            <div id=\"titulo\">\r\n              Sr. Fruits\r\n            </div>\r\n            <div id=\"cuenta\">\r\n              5555 5555 5555 5555\r\n            </div>\r\n            <div id=\"nombre\">\r\n              Bancomer\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"column\" class=\"detalles\" fxLayoutGap=\"40px\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n      <div fxFlex=\"700px\">\r\n        <p id=\"texto\">\r\n          Le enviaremos una factura a su correo en el último día laboral del mes\r\n          y podrá realizar el pago en los siguientes 14 días naturales de recibir su factura.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"120px\" fxLayoutAlign=\"start start\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxFlex=\"350px\" fxLayoutAlign=\"start start\">\r\n          <div id=\"metodo-pago\">\r\n            Pago semanal\r\n          </div>\r\n          <div id=\"descripcion\">\r\n            Las entregas individuales se cobran al momento de la entrega, \r\n            se acepta tarjeta de crédito/débito o transferencia bancaria.\r\n          </div>\r\n          <div id=\"ventaja\">\r\n            Mayor control de gasto\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"80px\">\r\n          <mat-icon>calendar_today</mat-icon>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxFlex=\"350px\" fxLayoutAlign=\"start start\">\r\n          <div id=\"metodo-pago\">\r\n            Pago mensual\r\n          </div>\r\n          <div id=\"descripcion\">\r\n            Al tener entrgas de manera regular no se cobra nada al momento de la entrega, \r\n            se reliza el pago mediante transferencia bancaria.\r\n          </div>\r\n          <div id=\"ventaja\">\r\n            Mayor control con menos documentos\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"80px\">\r\n          <mat-icon>forward_30</mat-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/payment/payment.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/requests/payment/payment.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detalles {\n  background: #EEEEEE;\n  padding: 25px 25px 0 25px;\n  margin-top: 50px;\n  text-align: center;\n  height: 300px; }\n  .detalles mat-icon {\n    font-size: 85px;\n    color: #6A9B31; }\n  .detalles #texto {\n    font-size: 20px;\n    color: #568829;\n    font-style: italic; }\n  .detalles #metodo-pago {\n    color: #568829;\n    font-size: 22px;\n    font-weight: 500; }\n  .detalles #ventaja {\n    font-size: 18px;\n    font-weight: bold;\n    font-size: 14px;\n    color: #346618; }\n  .detalles #descripcion {\n    font-size: 14px;\n    text-align: justify;\n    font-style: italic; }\n  .datos-banco {\n  padding-top: 50px; }\n  .datos-banco mat-card {\n    border-radius: 20px;\n    height: 186px;\n    background: #EEEEEE; }\n  .datos-banco #titulo {\n    color: #568829;\n    font-size: 25px; }\n  .datos-banco #cuenta {\n    font-weight: bold;\n    font-size: 18px; }\n  .datos-banco #nombre {\n    font-size: 18px; }\n  .datos-banco #logo {\n    height: 80px; }\n  .datos-banco #card {\n    padding-top: 20px; }\n  .pago {\n  padding: 115px 0 30px 0; }\n"

/***/ }),

/***/ "./src/app/components/forms/requests/payment/payment.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/forms/requests/payment/payment.component.ts ***!
  \************************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/forms/requests/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/components/forms/requests/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/requests/request/request.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/requests/request/request.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div fxFlex fxLayout=\"column\">\r\n\r\n    <div fxFlex fxLayout=\"row\" *ngIf=\"!employees && !deliveries\" fxLayoutAlign=\"center center\">\r\n      <div fxFlex=\"550px\" id=\"sugerencia\">\r\n        <div fxFlex=\"14\" fxLayoutAlign=\"center center\">\r\n          <mat-icon>add_circle_outlet</mat-icon>\r\n        </div>\r\n        <div fxFlex=\"61\" fxLayoutAlign=\"start center\">\r\n          Utiliza nuestra Calculadora para saber cuanta fruta necesitas en tu empresa\r\n        </div>\r\n        <div fxFlex=\"25\" fxLayoutAlign=\"center center\">\r\n          <button routerLink=\"/calculo\" routerLinkActive=\"active\">Calcular</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex id=\"result\" fxLayout=\"row\" *ngIf=\"employees && deliveries\" fxLayoutAlign=\"center center\">\r\n      <div fxLayout=\"column\" fxFlex=\"600px\">\r\n        <div fxLayout=\"row\" fxFlex=\"75px\" class=\"titulo-img\">\r\n          <div fxFlex=\"40\" fxLayoutAlign=\"center center\">\r\n            Tu pedido:\r\n          </div>\r\n          <div fxFlex=\"17\"></div>\r\n          <div fxFlex=\"20\" fxLayoutAlign=\"center center\">\r\n              <button mat-button routerLink=\"/calculo\" routerLinkActive=\"active\">\r\n                <mat-icon>edit</mat-icon><span>Editar</span>\r\n              </button>\r\n          </div>\r\n          <div fxFlex=\"25\" fxLayoutAlign=\"center center\">\r\n            <button mat-button (click)=\"showProducts()\">\r\n              <mat-icon>shopping_cart</mat-icon><span>Productos</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxFlex=\"150px\" class=\"resumen\">\r\n          <div fxLayout=\"column\" class=\"datos borde\" fxLayoutAlign=\"start center\" fxFlex=\"33\">\r\n            <div>\r\n              <mat-icon class=\"icono\">face</mat-icon>\r\n            </div>\r\n            <div>Colaboradores: <b>{{employees}}</b></div>\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"34\" class=\"datos borde\">\r\n            <div>\r\n              <mat-icon class=\"icono\">local_shipping</mat-icon>\r\n            </div>\r\n            <div>Entregas: <b>{{deliveries}}</b></div>\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" class=\"datos\" fxLayoutAlign=\"start center\" fxFlex=\"33\">\r\n            <div>\r\n              <mat-icon class=\"icono\">inbox</mat-icon>\r\n            </div>\r\n            <div matTooltip=\"El promedio de rendimiento por caja es de 35 personas\">Cajas por entrega: <b>{{boxes}}</b></div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"seccion\">\r\n      <div fxLayout=\"row\" fxFlex=\"1000px\" id=\"instrucciones\">\r\n        <div fxFlex=\"7\" fxLayoutAlign=\"center center\">\r\n          <mat-icon>headset_mic</mat-icon>\r\n        </div>\r\n        <div fxFlex=\"93\" fxLayoutAlign=\"start center\">\r\n          Contáctate con nosotros para poder realizar tu pedido y no tengas que esperar, te atenderemos de inmediato\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- CONTANCT CARD -->\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"seccion\">\r\n      <div fxLayout=\"row\" fxFlex=\"750px\" id=\"tarjeta\">\r\n        <div fxFlex=\"30\" fxLayout=\"column\" class=\"izquierda\" fxLayoutAlign=\"center center\">\r\n          <div>\r\n            <img class=\"image\" src=\"assets/logo.png\" alt=\"calidad\">\r\n          </div>\r\n          <div id=\"slogan\">\"Por un trabajo fructífero\"</div>\r\n        </div>\r\n        <div fxFlex=\"70\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"derecha\">\r\n          <div>\r\n            <mat-icon>phone</mat-icon><span> 336 059 8886</span>\r\n          </div>\r\n          <div>\r\n            <mat-icon>mail</mat-icon><span> srfruits@srfruits.com.mx</span>\r\n          </div>\r\n          <div>\r\n            <br>\r\n            <p>Avenida Siempreviva 742,<br>Zapopan, Jalisco México.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/request/request.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/requests/request/request.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tarjeta {\n  border-radius: 25px;\n  background-color: #ffb100; }\n  #tarjeta .izquierda {\n    margin: 60px;\n    border-right: 2px solid #346618; }\n  #tarjeta .derecha {\n    color: #346618;\n    font-size: 20px; }\n  #tarjeta #slogan {\n    color: #346618;\n    font-style: italic; }\n  #sugerencia {\n  background-color: #d94545;\n  color: #F7F7F7;\n  font-size: 18px;\n  border-radius: 15px;\n  height: 100px; }\n  #sugerencia mat-icon {\n    font-size: 35px; }\n  #sugerencia button {\n    border-radius: 4px;\n    background-color: #F7F7F7;\n    color: #d94545;\n    border: none;\n    height: 50px;\n    width: 100px;\n    cursor: pointer;\n    font-weight: 500; }\n  .titulo-img {\n  border-right: solid 2px #568829;\n  border-top: solid 2px #568829;\n  border-left: solid 2px #568829;\n  background-color: #ffb100;\n  color: #346618;\n  font-size: 25px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px; }\n  .titulo-img mat-icon {\n    font-size: 40px; }\n  .titulo-img button {\n    border-radius: 6px;\n    cursor: pointer;\n    border: 1px solid #568829;\n    background-color: #568829;\n    color: #F7F7F7;\n    font-size: 15px;\n    font-weight: 500;\n    height: 36px; }\n  .titulo-img mat-icon {\n    font-size: 24px;\n    margin-right: 3px; }\n  .resumen {\n  border: solid 2px #568829;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px; }\n  .datos {\n  color: #568829;\n  font-size: 16px; }\n  .datos .icono {\n    font-size: 45px;\n    padding-top: 25px;\n    color: #568829; }\n  .borde {\n  border-right: solid 2px #568829; }\n  #result {\n  margin-top: 20px; }\n  .info {\n  font-size: 15px; }\n  #instrucciones {\n  height: 80px;\n  font-size: 18px;\n  background-color: #ffb100;\n  border: 2px solid #568829;\n  color: #346618;\n  border-radius: 20px; }\n  #instrucciones mat-icon {\n    font-size: 35px; }\n  .image {\n  height: 150px; }\n  .seccion {\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/components/forms/requests/request/request.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/forms/requests/request/request.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _products_offer_offer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/offer/offer.component */ "./src/app/components/forms/products/offer/offer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestComponent = /** @class */ (function () {
    function RequestComponent(route, dialog) {
        var _this = this;
        this.route = route;
        this.dialog = dialog;
        this.peoplePerBox = 35;
        this.route.queryParams.subscribe(function (params) {
            _this.employees = params['employees'];
            _this.deliveries = params['deliveries'];
        });
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.boxes = Math.round((this.employees / this.peoplePerBox) * this.deliveries);
        if (!this.boxes && this.boxes === 0) {
            this.boxes = 1;
        }
    };
    RequestComponent.prototype.showProducts = function () {
        this.dialog.open(_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_3__["OfferComponent"], {
            maxHeight: '450px',
            data: {
                employees: this.employees,
                deliveries: this.deliveries
            }
        });
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/components/forms/requests/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/components/forms/requests/request/request.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/components/shell/components/app-shell/app-shell.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/shell/components/app-shell/app-shell.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top  navigation\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n        <div class=\"header-logo\">\r\n            <img src=\"assets/logo.png\">\r\n        </div>\r\n\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n        <ul class=\"navbar-nav navbar-items\">\r\n\r\n            <li class=\"nav-item link-item\">\r\n                <a class=\"nav-link\" routerLink=\"/beneficios-empresa\" routerLinkActive=\"active\" translate>COMMON.BENEFITS</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item link-item\">\r\n                <a class=\"nav-link\" routerLink=\"/oferta\" routerLinkActive=\"active\" translate>COMMON.OFFER</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item link-item\">\r\n                <a class=\"nav-link\" routerLink=\"/pago\" routerLinkActive=\"active\" translate>COMMON.PAYMENT</a>\r\n            </li>\r\n\r\n            <!-- <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <span translate>COMMON.REQUEST</span>\r\n                </a>\r\n                <div class=\"dropdown-menu drop-background\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" routerLink=\"/calculo\" routerLinkActive=\"active\"\r\n                        translate>COMMON.CALCULATE_QTY</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/pedido\" routerLinkActive=\"active\"\r\n                        translate>COMMON.REQUEST_A_QUOTE</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/pago\" routerLinkActive=\"active\" translate>COMMON.PAYMENT</a>\r\n                </div>\r\n            </li> -->\r\n\r\n            <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\"><span translate>COMMON.CONTACT</span>\r\n                </a>\r\n                <div class=\"dropdown-menu drop-background\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" routerLink=\"/contact\" routerLinkActive=\"active\" translate>COMMON.CONTACT_US</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/preguntas\" routerLinkActive=\"active\" translate>COMMON.FAQ</a>\r\n                </div>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse social-network\">\r\n        <mat-icon>phone</mat-icon><span class=\"telephone\">&nbsp;336-333-3333</span>\r\n    </div>\r\n\r\n    <!-- <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav color-white\">\r\n            <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\">\r\n                    <mat-icon>language</mat-icon>\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"\">\r\n                    <a class=\"dropdown-item\"><button (click)=\"switchLanguage('es')\">Español</button></a>\r\n                    <a class=\"dropdown-item\"><button (click)=\"switchLanguage('en')\">English</button></a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div> -->\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/components/shell/components/app-shell/app-shell.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/shell/components/app-shell/app-shell.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  text-align: center; }\n  .header-logo img {\n    display: block;\n    height: 80px;\n    padding-left: 8px;\n    margin: 0 auto; }\n  .navigation {\n  background-color: #ffb100;\n  height: 96px;\n  top: 0; }\n  .bar-items-text {\n  padding-bottom: 5px; }\n  .telephone {\n  padding-left: 5px;\n  font-size: 30px; }\n  .navbar-items {\n  padding-top: 10px; }\n  .social-network {\n  padding-left: 100px;\n  color: rgba(0, 0, 0, 0.5); }\n  .social-network mat-icon {\n    font-size: 28px; }\n  .icon {\n  font-size: 26px;\n  padding-left: 8px;\n  color: white; }\n  .link-item > * {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 21px;\n  color: #568829;\n  background-color: #ffb100;\n  font-weight: 500;\n  cursor: pointer; }\n  .drop-background {\n  background-color: #bed932; }\n"

/***/ }),

/***/ "./src/app/components/shell/components/app-shell/app-shell.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shell/components/app-shell/app-shell.component.ts ***!
  \******************************************************************************/
/*! exports provided: AppShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShellComponent", function() { return AppShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppShellComponent = /** @class */ (function () {
    function AppShellComponent(translate) {
        this.translate = translate;
        translate.setDefaultLang('es');
    }
    AppShellComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    AppShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./app-shell.component.html */ "./src/app/components/shell/components/app-shell/app-shell.component.html"),
            styles: [__webpack_require__(/*! ./app-shell.component.scss */ "./src/app/components/shell/components/app-shell/app-shell.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppShellComponent);
    return AppShellComponent;
}());



/***/ }),

/***/ "./src/app/components/shell/components/footer/footer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/shell/components/footer/footer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-distributed\">\r\n\r\n  <div class=\"footer-right\">\r\n    <a href=\"http://www.instagram.com/srfruits_mx\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\r\n    <a href=\"https://www.facebook.com/srfruitsmx\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\r\n    <a href=\"https://twitter.com/srfruitsmx\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\r\n  </div>\r\n\r\n  <div class=\"footer-left\">\r\n\r\n    <p class=\"footer-links\">\r\n      <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n      ·\r\n      <a routerLink=\"/beneficios-empresa\" routerLinkActive=\"active\">Beneficios</a>\r\n      ·\r\n      <a routerLink=\"/oferta\" routerLinkActive=\"active\">Oferta</a>\r\n      ·\r\n      <a routerLink=\"/pedido\" routerLinkActive=\"active\">Pedidos</a>\r\n      ·\r\n      <a routerLink=\"/contacto\" routerLinkActive=\"active\">Contacto</a>\r\n    </p>\r\n\r\n    <p>Señor Fruits &copy; {{currentYear}}</p>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/shell/components/footer/footer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shell/components/footer/footer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\");\n.footer-distributed {\n  background-color: #ffb100;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: normal 16px sans-serif;\n  padding: 10px 50px;\n  margin-top: 80px;\n  bottom: 0; }\n.footer-distributed .footer-left p {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 12px;\n  margin: 0; }\n/* Footer links */\n.footer-distributed p.footer-links {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0 0 10px;\n  padding: 0; }\n.footer-distributed p.footer-links a {\n  display: inline-block;\n  line-height: 1.8;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.5); }\n.footer-distributed .footer-right {\n  float: right;\n  margin-top: 6px;\n  max-width: 180px; }\n.footer-distributed .footer-right a {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  background-color: #33383b;\n  border-radius: 2px;\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 35px;\n  margin-left: 3px; }\n/* If you don't want the footer to be responsive, remove these media queries */\n@media (max-width: 600px) {\n  .footer-distributed .footer-left,\n  .footer-distributed .footer-right {\n    text-align: center; }\n  .footer-distributed .footer-right {\n    float: none;\n    margin: 0 auto 20px; }\n  .footer-distributed .footer-left p.footer-links {\n    line-height: 1.8; } }\n* {\n  padding: 0;\n  margin: 0; }\nhtml {\n  background-color: #eaf0f2; }\nbody {\n  font: 14px/1.5 Arial, Helvetica, sans-serif; }\nheader {\n  text-align: center;\n  padding-top: 100px;\n  margin-bottom: 200px; }\nheader h1 {\n  font: normal 32px/1.5 'Open Sans', sans-serif;\n  color: #3F71AE;\n  padding-bottom: 16px; }\nheader h2 {\n  color: #F05283; }\nheader h2 a {\n  color: inherit;\n  text-decoration: none;\n  display: inline-block;\n  border: 1px solid #F05283;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font: bold 14px/1 'Open Sans', sans-serif;\n  text-transform: uppercase; }\nheader h2 a:hover {\n  background-color: #F05283;\n  transition: 0.2s;\n  color: #fff; }\nheader ul {\n  max-width: 600px;\n  margin: 60px auto 0; }\nheader ul a {\n  text-decoration: none;\n  color: #FFF;\n  text-align: left;\n  background-color: #B9C1CA;\n  padding: 10px 16px;\n  border-radius: 2px;\n  opacity: 0.8;\n  font-size: 16px;\n  display: inline-block;\n  margin: 4px;\n  line-height: 1;\n  outline: none;\n  transition: 0.2s ease; }\nheader ul li a.active {\n  background-color: #66B650;\n  pointer-events: none; }\nheader ul li a:hover {\n  opacity: 1; }\nheader ul {\n  list-style: none;\n  padding: 0; }\nheader ul li {\n  display: inline-block; }\n/* In our demo, the footers are fixed to the bottom of the page */\nfooter {\n  position: fixed;\n  bottom: 0; }\n@media (max-height: 600px) {\n  footer {\n    position: static; }\n  header {\n    padding-top: 40px; } }\n"

/***/ }),

/***/ "./src/app/components/shell/components/footer/footer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/shell/components/footer/footer.component.ts ***!
  \************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.initialSetup();
    };
    FooterComponent.prototype.initialSetup = function () {
        var date = new Date();
        this.currentYear = date.getFullYear();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shell/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/shell/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shell/components/social-network/social-network.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shell/components/social-network/social-network.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-network\">\r\n    <a href=\"facebook.com\" target=\"_blank\"><i class=\"fa fa-facebook-square icon\"></i></a>\r\n    <a href=\"instagram.com\" target=\"_blank\"><i class=\"fa fa-instagram icon\"></i></a>\r\n    <a href=\"twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter icon\"></i></a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shell/components/social-network/social-network.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shell/components/social-network/social-network.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-network {\n  background-color: #7EAF3B; }\n\n.icon {\n  font-size: 36px;\n  padding-left: 15px;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/shell/components/social-network/social-network.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shell/components/social-network/social-network.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SocialNetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNetworkComponent", function() { return SocialNetworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialNetworkComponent = /** @class */ (function () {
    function SocialNetworkComponent() {
    }
    SocialNetworkComponent.prototype.ngOnInit = function () {
    };
    SocialNetworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'social-network',
            template: __webpack_require__(/*! ./social-network.component.html */ "./src/app/components/shell/components/social-network/social-network.component.html"),
            styles: [__webpack_require__(/*! ./social-network.component.scss */ "./src/app/components/shell/components/social-network/social-network.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialNetworkComponent);
    return SocialNetworkComponent;
}());



/***/ }),

/***/ "./src/app/components/shell/components/tittle-header/tittle-header.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shell/components/tittle-header/tittle-header.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\" id=\"header\">\n  <div class=\"tittle-text\">\n      <div class=\"logo\">\n          <img src=\"assets/sr-fruits-logo-blanco.png\">\n      </div>\n      <div id=\"text\">{{text}}</div>\n  </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/components/shell/components/tittle-header/tittle-header.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shell/components/tittle-header/tittle-header.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  width: 100%;\n  min-height: 70px;\n  vertical-align: middle;\n  display: inline-block;\n  margin-bottom: 35px; }\n\n.logo {\n  float: left; }\n\n.logo img {\n    height: 60px; }\n\n.tittle-text {\n  font-size: 35px;\n  color: white;\n  padding-top: 5px;\n  text-align: center; }\n\n.verde {\n  background-color: #7EAF3B; }\n\n.amarillo {\n  background-color: #FFB100; }\n\n.naranja {\n  background-color: #ffb100; }\n\n.rojo {\n  background-color: #f40000; }\n\n.gris {\n  background-color: #4F4F4F; }\n\n.crema {\n  background-color: #f5f4e2; }\n"

/***/ }),

/***/ "./src/app/components/shell/components/tittle-header/tittle-header.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shell/components/tittle-header/tittle-header.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TittleHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TittleHeaderComponent", function() { return TittleHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TittleHeaderComponent = /** @class */ (function () {
    function TittleHeaderComponent() {
    }
    TittleHeaderComponent.prototype.ngOnInit = function () {
        var container = document.getElementById('header');
        container.classList.add(this.color);
        var text = document.getElementById('text');
        text.innerText = this.text;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TittleHeaderComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TittleHeaderComponent.prototype, "text", void 0);
    TittleHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tittle-header',
            template: __webpack_require__(/*! ./tittle-header.component.html */ "./src/app/components/shell/components/tittle-header/tittle-header.component.html"),
            styles: [__webpack_require__(/*! ./tittle-header.component.scss */ "./src/app/components/shell/components/tittle-header/tittle-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TittleHeaderComponent);
    return TittleHeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRestService", function() { return EmailRestService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/common */ "./src/environments/common.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EmailRestService = /** @class */ (function () {
    function EmailRestService(httpClient, environment) {
        this.httpClient = httpClient;
        this.environment = environment;
    }
    EmailRestService.prototype.sendEmail = function (emailData) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        var url = this.environment.configuration.api.emailSenderUrl;
        return this.httpClient.post(url, emailData, { headers: headers }).subscribe(function (res) {
            //manage result
        });
    };
    EmailRestService = __decorate([
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_environments_common__WEBPACK_IMPORTED_MODULE_2__["ENVIRONMENT"])),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"], Object])
    ], EmailRestService);
    return EmailRestService;
}());



/***/ }),

/***/ "./src/environments/common.ts":
/*!************************************!*\
  !*** ./src/environments/common.ts ***!
  \************************************/
/*! exports provided: EnvironmentType, ENVIRONMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentType", function() { return EnvironmentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function() { return ENVIRONMENT; });
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType[EnvironmentType["LOCAL"] = 0] = "LOCAL";
    EnvironmentType[EnvironmentType["TEST"] = 1] = "TEST";
    EnvironmentType[EnvironmentType["STAGING"] = 2] = "STAGING";
    EnvironmentType[EnvironmentType["PRODUCTION"] = 3] = "PRODUCTION";
})(EnvironmentType || (EnvironmentType = {}));
var ENVIRONMENT = 'environment';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: config, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/environments/common.ts");

var config = {
    api: {
        emailSenderUrl: 'https://localhost:44372/email/send',
    },
    type: _common__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].LOCAL
};
var configPromise = new Promise(function (resolve, reject) {
    resolve({ config: config });
});
var environment = {
    production: false,
    init: configPromise,
    configuration: config,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Frutas\frutas-alvarez\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map