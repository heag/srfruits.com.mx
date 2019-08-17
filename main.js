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
/* harmony import */ var _components_forms_requests_calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/forms/requests/calculator/calculator-result/calculator-result.component */ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.ts");
/* harmony import */ var _components_forms_home_process_steps_process_steps_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/forms/home/process-steps/process-steps.component */ "./src/app/components/forms/home/process-steps/process-steps.component.ts");
/* harmony import */ var _components_forms_home_extra_add_info_extra_add_info_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/forms/home/extra-add-info/extra-add-info.component */ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.ts");
/* harmony import */ var _components_forms_about_us_our_company_our_company_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/forms/about-us/our-company/our-company.component */ "./src/app/components/forms/about-us/our-company/our-company.component.ts");
/* harmony import */ var _components_shell_components_tittle_header_tittle_header_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/shell/components/tittle-header/tittle-header.component */ "./src/app/components/shell/components/tittle-header/tittle-header.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var materialModules = [_angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__["FlexLayoutModule"]];
var angularCoreModules = [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]];
var appComponents = [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _components_shell_components_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_14__["AppShellComponent"], _components_shell_components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_16__["SocialNetworkComponent"], _components_forms_benefits_for_company_benefits_company__WEBPACK_IMPORTED_MODULE_25__["BenefitsCompanyComponent"],
    _components_forms_benefits_for_employee_benefits_employee__WEBPACK_IMPORTED_MODULE_24__["BenefitsEmployeeComponent"], _components_forms_about_us_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_22__["MisionVisionComponent"], _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _components_forms_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_18__["OfferComponent"], _components_shell_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _components_forms_about_us_advantages_advantages_component__WEBPACK_IMPORTED_MODULE_21__["AdvantagesComponent"],
    _components_forms_about_us_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_23__["AchievementsComponent"], _components_forms_requests_request_request_component__WEBPACK_IMPORTED_MODULE_26__["RequestComponent"], _components_forms_requests_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_27__["CalculatorComponent"], _components_forms_requests_payment_payment_component__WEBPACK_IMPORTED_MODULE_28__["PaymentComponent"], _components_forms_contact_questions_questions_component__WEBPACK_IMPORTED_MODULE_29__["QuestionsComponent"], _components_forms_requests_calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_30__["CalculatorResultComponent"],
    _components_forms_home_process_steps_process_steps_component__WEBPACK_IMPORTED_MODULE_31__["ProcessStepsComponent"], _components_forms_home_extra_add_info_extra_add_info_component__WEBPACK_IMPORTED_MODULE_32__["ExtraAddInfoComponent"], _components_forms_about_us_our_company_our_company_component__WEBPACK_IMPORTED_MODULE_33__["OurCompanyComponent"], _components_shell_components_tittle_header_tittle_header_component__WEBPACK_IMPORTED_MODULE_34__["TittleHeaderComponent"]];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
var routes = [
    { path: 'home', component: _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
    { path: 'contact', component: _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"] },
    { path: 'porque-nosotros', component: _components_forms_about_us_our_company_our_company_component__WEBPACK_IMPORTED_MODULE_33__["OurCompanyComponent"] },
    { path: 'mision-vision', component: _components_forms_about_us_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_22__["MisionVisionComponent"] },
    { path: 'logros', component: _components_forms_about_us_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_23__["AchievementsComponent"] },
    { path: 'beneficios-empleado', component: _components_forms_benefits_for_employee_benefits_employee__WEBPACK_IMPORTED_MODULE_24__["BenefitsEmployeeComponent"] },
    { path: 'beneficios-empresa', component: _components_forms_benefits_for_company_benefits_company__WEBPACK_IMPORTED_MODULE_25__["BenefitsCompanyComponent"] },
    { path: 'oferta', component: _components_forms_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_18__["OfferComponent"] },
    { path: 'pedido', component: _components_forms_requests_request_request_component__WEBPACK_IMPORTED_MODULE_26__["RequestComponent"] },
    { path: 'calculo', component: _components_forms_requests_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_27__["CalculatorComponent"] },
    { path: 'pago', component: _components_forms_requests_payment_payment_component__WEBPACK_IMPORTED_MODULE_28__["PaymentComponent"] },
    { path: 'contacto', component: _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"] },
    { path: 'preguntas', component: _components_forms_contact_questions_questions_component__WEBPACK_IMPORTED_MODULE_29__["QuestionsComponent"] },
    { path: 'resultado', component: _components_forms_requests_calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_30__["CalculatorResultComponent"] },
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

module.exports = "<div class=\"main\" style=\"background-image: url('assets/bg-fresh-fruits.jpg');\">\r\n  <div class=\"inside-div\">\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/free-truck.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Entrega sin costo</span>\r\n          <p>Su pedido le será entregado hasta sus instalaciones de manera gratuita</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/handshake.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Trato personal</span>\r\n          <p>Le atendemos de manera personal y en nuestras redes sociales</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/quality.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Garantizamos calidad</span>\r\n          <p>En caso de no entregar productos de excelente calidad el producto es gratis</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/mejor-seleccion.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Mejor seleccion</span>\r\n          <p>Solo entregamos fruta fresca cuidadosamente seleccionada para usted</p><br />\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/hygiene.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Higiene y Seguridad</span>\r\n          <p>El producto se inspecciona de manera que se entregue lista para su consumo</p><br />\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/eco-friendly.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Cuidamos el ambiente</span>\r\n          <p>Usamos cajas retornables para reducir el impacto ambiental y los desechos</p><br />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/about-us/advantages/advantages.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/forms/about-us/advantages/advantages.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 800px;\n  background-size: cover;\n  width: 100%;\n  text-align: center; }\n\n.inside-div {\n  background-color: white;\n  border-top-left-radius: 150px;\n  border-bottom-right-radius: 150px;\n  border-bottom-left-radius: 20px;\n  border-top-right-radius: 20px;\n  margin-top: 50px;\n  display: inline-block;\n  height: 650px;\n  min-width: 1100px;\n  margin: 75px; }\n\n.cards {\n  display: block;\n  text-align: center;\n  padding-top: 35px; }\n\n.card {\n  display: inline-block;\n  width: 300px;\n  height: 280px;\n  margin: 5px;\n  background-color: transparent;\n  text-align: center;\n  border: transparent; }\n\n.card-img {\n  height: 60%; }\n\n.card-info {\n  border-radius: 10px;\n  width: 100%;\n  margin: 5px auto;\n  margin-top: 5px; }\n\n.card-info span {\n    font-size: 20px;\n    font-weight: bold;\n    color: #fc7a00; }\n\n.card-info p {\n    margin: 2px;\n    font-size: 16px;\n    color: green;\n    text-align: center;\n    margin: 1px; }\n\n.benefits {\n  padding-top: 3px;\n  padding-left: 10%;\n  padding-right: 10%;\n  text-align: justify;\n  word-wrap: break-word; }\n\n.benefits mat-card {\n    min-height: 150px;\n    border-radius: 20px; }\n\n.benefit-card {\n  overflow: hidden; }\n\n.benefit-photo {\n  float: left;\n  min-height: 110px;\n  min-width: 110px;\n  border-radius: 85px;\n  background-size: cover; }\n\n.benefit-info {\n  padding-left: 135px; }\n\n.benefit-info span {\n    font-weight: bold;\n    font-size: 21px; }\n\n.benefit-info p {\n    font-size: 13px; }\n\n.green {\n  margin-top: 25px; }\n\n.green .benefit-photo {\n    border: 4px solid #03602a; }\n\n.green .benefit-info {\n    color: #03602a; }\n\n.green mat-card {\n    border-left: 8px solid #03602a;\n    background-color: rgba(3, 96, 42, 0.2); }\n\n.orange {\n  margin-top: 25px; }\n\n.orange .benefit-photo {\n    border: 4px solid #fc7a00; }\n\n.orange .benefit-info {\n    color: #962f03; }\n\n.orange mat-card {\n    border-right: 8px solid #fc7a00;\n    background-color: rgba(255, 98, 7, 0.1); }\n\n.red {\n  margin-top: 25px; }\n\n.red .benefit-photo {\n    border: 4px solid #ce0c0c; }\n\n.red .benefit-info {\n    color: #ce0c0c; }\n\n.red mat-card {\n    border-right: 8px solid #ce0c0c;\n    background-color: rgba(232, 0, 0, 0.1); }\n\n.advantages {\n  color: #03602a; }\n\n.disadvantages {\n  color: #ce0c0c; }\n\n@media (max-width: 601px) {\n  .image-div {\n    display: none; }\n  .benefit-photo {\n    display: none; }\n  .benefit-info {\n    padding-left: 15px; }\n  .benefit-card {\n    display: hidden; } }\n"

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

/***/ "./src/app/components/forms/about-us/our-company/our-company.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/about-us/our-company/our-company.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div fxLayout=\"column\">\r\n    <div class=\"bar-header\">\r\n      <div class=\"bar-text\">\r\n        ¿Por qué Señor Fruits?\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"encabezado\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"start center\">\r\n      <div class=\"imagen\" fxFlex=\"25\">\r\n        <img src='assets/logo.png'>\r\n      </div>\r\n\r\n      <div fxFlex=\"65\">\r\n        <div class=\"titulo\" fxLayoutAlign=\"center center\">\r\n          <span translate>ABOUT_US.WHO_WE_ARE.Description</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-advantages></app-advantages>"

/***/ }),

/***/ "./src/app/components/forms/about-us/our-company/our-company.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/about-us/our-company/our-company.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  padding-top: 60px; }\n\n.encabezado {\n  height: 250px; }\n\n.imagen img {\n  height: 180px; }\n\n.titulo {\n  background-color: #ffb100;\n  border-radius: 35px;\n  color: #646464;\n  height: 150px;\n  font-weight: bold;\n  font-style: italic; }\n\n.bar-header {\n  height: 65px;\n  background-color: #ffb100; }\n\n.bar-text {\n  font-size: 30px;\n  color: white;\n  font-weight: 500;\n  padding-top: 8px; }\n\n.content-card {\n  background-color: #a1ce1c; }\n"

/***/ }),

/***/ "./src/app/components/forms/about-us/our-company/our-company.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/about-us/our-company/our-company.component.ts ***!
  \********************************************************************************/
/*! exports provided: OurCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurCompanyComponent", function() { return OurCompanyComponent; });
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

var OurCompanyComponent = /** @class */ (function () {
    function OurCompanyComponent() {
    }
    OurCompanyComponent.prototype.ngOnInit = function () {
    };
    OurCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'our-company',
            template: __webpack_require__(/*! ./our-company.component.html */ "./src/app/components/forms/about-us/our-company/our-company.component.html"),
            styles: [__webpack_require__(/*! ./our-company.component.scss */ "./src/app/components/forms/about-us/our-company/our-company.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurCompanyComponent);
    return OurCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/benefits/for-company/benefits-company.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-company/benefits-company.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"benefits-div\">\r\n\r\n  <div fxLayout=\"column\">\r\n    <!-- TOP -->\r\n    <div class=\"header\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"center center\">\r\n      <div class=\"imagen\" fxFlex=\"25\">\r\n        <img src='assets/empresa.png'>\r\n      </div>\r\n\r\n      <div fxFlex=\"50\">\r\n        <div class=\"titulo\" fxLayoutAlign=\"center center\">\r\n          Beneficios para tu empresa\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"beneficios\" fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start center\">\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"naranja\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/imagen-moderna.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt\">\r\n            <h4>Una imagen moderna a la empresa</h4>\r\n            <p>Las empresas están tratando de distinguirse en el mercado laboral\r\n              para que los mejores candidatos las encuentren. Lo hacen de diferentes\r\n              maneras. Creemos que crear un lugar de trabajo saludable y amigable y,\r\n              al mismo tiempo, cuidar la salud de los empleados es un elemento muy importante\r\n              que afecta la imagen del empleador.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"azul\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/mayor-disposicion.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt\">\r\n            <h4>Satisfacción y mayor disposición al trabajo.</h4>\r\n            <p>Al preparar un bocadillo saludable, demuestra que la salud y\r\n              el bienestar de su equipo son importantes para usted y que desea cuidarlo con él.\r\n              Los empleados satisfechos están más dispuestos a realizar sus tareas, obtener una\r\n              mayor satisfacción en el trabajo y, por lo tanto, son más eficaces en la realización\r\n              de diversas tareas.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"verde\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/ambiente-amigable.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt\">\r\n            <h4>Un ambiente de trabajo amigable y saludable.</h4>\r\n            <p>Una merienda saludable para los empleados es una muy buena distinción para el empleador\r\n              en el mercado laboral. Para las personas empleadas, es una razón para sentirse orgulloso\r\n              del lugar donde trabajan y de los talentos potenciales, un activo adicional que pone a su\r\n              empresa a la luz de un lugar de trabajo moderno, apreciando el capital de las personas que\r\n              trabajan en ella.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"melon\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/menor-ausentismo.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt\">\r\n            <h4>Menos ausentismo de los empleados.</h4>\r\n            <p>La fruta para el trabajo es para muchas personas la única fuente de\r\n              vitaminas durante todo el día. Entregarlos a sus empleados y mejorar\r\n              su resistencia a muchas enfermedades. Cuide la salud de su equipo y\r\n              reduzca el ausentismo debido a resfriados / gripe y otras enfermedades en su empresa.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- <div class=\"main-card\">\r\n    <mat-card>\r\n      <div class=\"image-container\" style=\"margin-top: -74px;\">\r\n        <img class=\"image\" mat-card-image alt=\"employee\" src='assets/beneficios-empresa.png'>\r\n      </div>\r\n      <div class=\"content-info\">\r\n        <span>Beneficios para la empresa</span>\r\n        <p>\r\n          Cuidando la salud de sus colaboradores, usted cuida de su empresa.\r\n        </p>\r\n      </div>\r\n    </mat-card>\r\n  </div> -->\r\n</div>\r\n\r\n<benefits-employee></benefits-employee>"

/***/ }),

/***/ "./src/app/components/forms/benefits/for-company/benefits-company.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-company/benefits-company.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".beneficios {\n  padding-top: 50px; }\n  .beneficios .item {\n    border-radius: 15px; }\n  .beneficio-txt {\n  height: 165px;\n  border-top-right-radius: 35px;\n  border-bottom-right-radius: 35px; }\n  .beneficio-txt > * {\n    margin: 0 20px 0 20px; }\n  .beneficio-txt p {\n    text-align: justify;\n    font-size: 17px; }\n  .verde .beneficio-img {\n  background-color: #a1ce1c; }\n  .verde .beneficio-txt {\n  color: #568829;\n  border: 4px solid #a1ce1c; }\n  .naranja .beneficio-img {\n  background-color: #fc7303; }\n  .naranja .beneficio-txt {\n  color: #fc7303;\n  border: 4px solid #fc7303; }\n  .azul .beneficio-img {\n  background-color: #337acc; }\n  .azul .beneficio-txt {\n  color: #337acc;\n  border: 4px solid #337acc; }\n  .melon .beneficio-img {\n  background-color: #d94545; }\n  .melon .beneficio-txt {\n  color: #d94545;\n  border: 4px solid #d94545; }\n  .beneficio-img {\n  height: 165px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px; }\n  .beneficio-img img {\n    height: 130px;\n    width: 130px;\n    border-radius: 85px;\n    background-size: cover; }\n  .benefits-div {\n  padding-top: 96px; }\n  .imagen img {\n  height: 270px; }\n  .header {\n  background-color: rgba(1, 116, 122, 0.48); }\n  .titulo {\n  background-color: #ffb100;\n  border-radius: 35px;\n  color: #646464;\n  height: 80px;\n  font-size: 35px;\n  font-style: italic; }\n"

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

module.exports = "<div class=\"benefits-div\">\r\n  <div fxLayout=\"column\">\r\n    <!-- TOP -->\r\n    <div class=\"header\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"center center\">\r\n      <div class=\"imagen\" fxFlex=\"25\">\r\n        <img src='assets/empleado.png'>\r\n      </div>\r\n\r\n      <div fxFlex=\"52\">\r\n        <div class=\"titulo\" fxLayoutAlign=\"center center\">\r\n          Beneficios para el personal\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- BENEFICIOS -->\r\n    <div class=\"beneficios\" fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\" fxLayoutAlign=\"start center\">\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"naranja\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/salud-inmunidad.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt\">\r\n            <h4>Salud e inmunidad.</h4>\r\n            <p>Los ingleses dicen \"Una manzana al día mantiene alejado al médico\".\r\n              Esto es confirmado por numerosos estudios. El consumo diario de frutas y\r\n              verduras tiene un efecto positivo en nuestra salud. Las vitaminas y los\r\n              minerales que contienen las frutas aumentan nuestra inmunidad y nos hacen\r\n              sentir más saludables y llenos de energía.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"azul\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/mayor-voluntad.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt\">\r\n            <h4>Mayor voluntad al trabajar.</h4>\r\n            <p>Los minerales contenidos en las frutas afectan positivamente nuestro estado de ánimo\r\n              y nos dan energía que, en efecto, se traduce en una mayor disposición para hacer ...\r\n              cualquier cosa. La investigación confirma que comer productos saludables en el trabajo\r\n              puede aumentar nuestra eficiencia hasta en un 20%.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"verde\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/sabrosos-aperitivos.jpg\" alt=\"sabrosos\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt\">\r\n            <h4>Sabrosos aperitivos en el trabajo.</h4>\r\n            <p>A todos les gusta comer bocadillos en el trabajo, desafortunadamente los chips y\r\n              barras que se encuentran en las máquinas contienen mucha azúcar, grasas trans,\r\n              endurecedores y conservantes. A veces es difícil eliminarlos porque el acceso a\r\n              frutas y verduras frescas no está disponible en todas partes.\r\n              Es por eso que los entregamos directamente a la cocina de la compañía, para que\r\n              pueda comunicarse con ellos en cualquier momento.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" class=\"item\">\r\n        <div fxFlex=\"1100px\" fxLayoutAlign=\"center center\" class=\"melon\">\r\n          <div fxFlex=\"16\" class=\"beneficio-img\" fxLayoutAlign=\"center center\">\r\n            <img src=\"assets/mejor-humor.jpg\">\r\n          </div>\r\n          <div fxFlex=\"84\" fxLayout=\"column\" fxLayoutAlign=\"center start\" class=\"beneficio-txt\">\r\n            <h4>Mejor humor.</h4>\r\n            <p>Las frutas contienen vitaminas que producen serotonina y endorfina, químicos naturales\r\n              encargados de inducir la sensación de felicidad. Un estudio realizado por la Universidad\r\n              de Otago (Nueva Zelanda) indica que el aumento de la ingesta de frutas y verduras puede\r\n              conducir a beneficios rápidos para el bienestar psicológico. Por la tanto, la fruta en la\r\n              oficina se traduce en mejor humor.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/benefits/for-employee/benefits-employee.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-employee/benefits-employee.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".beneficios {\n  padding-top: 50px; }\n  .beneficios .item {\n    border-radius: 15px; }\n  .beneficio-txt {\n  height: 165px;\n  border-top-right-radius: 35px;\n  border-bottom-right-radius: 35px; }\n  .beneficio-txt > * {\n    margin: 0 20px 0 20px; }\n  .beneficio-txt p {\n    text-align: justify;\n    font-size: 17px; }\n  .verde .beneficio-img {\n  background-color: #a1ce1c; }\n  .verde .beneficio-txt {\n  color: #568829;\n  border: 4px solid #a1ce1c; }\n  .naranja .beneficio-img {\n  background-color: #fc7303; }\n  .naranja .beneficio-txt {\n  color: #fc7303;\n  border: 4px solid #fc7303; }\n  .azul .beneficio-img {\n  background-color: #337acc; }\n  .azul .beneficio-txt {\n  color: #337acc;\n  border: 4px solid #337acc; }\n  .melon .beneficio-img {\n  background-color: #d94545; }\n  .melon .beneficio-txt {\n  color: #d94545;\n  border: 4px solid #d94545; }\n  .beneficio-img {\n  height: 165px;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px; }\n  .beneficio-img img {\n    height: 130px;\n    width: 130px;\n    border-radius: 85px;\n    background-size: cover; }\n  .benefits-div {\n  padding-top: 96px; }\n  .imagen img {\n  height: 270px; }\n  .header {\n  background-color: rgba(1, 116, 122, 0.48); }\n  .titulo {\n  background-color: #ffb100;\n  border-radius: 35px;\n  color: #646464;\n  height: 80px;\n  font-size: 35px;\n  font-style: italic; }\n"

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

module.exports = "<div class=\"contact-form\" fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n  <div fxLayout=\"row\" fxFlex=\"70\" class=\"contact\" fxLayoutAlign=\"start center\">\r\n\r\n    <div fxFlex=\"35\" fxFlexOffset=\"15\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"45px\" class=\"contact-details\">\r\n\r\n        <div><img class=\"logo\" src=\"assets/logo.png\"></div>\r\n\r\n        <div  fxLayoutGap=\"45px\" class=\"phone\">\r\n          <mat-icon>call</mat-icon> 333 333 3333\r\n        </div>\r\n\r\n        <div>\r\n          <span> srfruits@srfruits.com.mx</span>\r\n        </div>\r\n\r\n        <div class=\"social-network\">\r\n          <a href=\"http://www.instagram.com/srfruits_mx\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>&nbsp;&nbsp;&nbsp;\r\n          <a href=\"https://www.facebook.com/srfruitsmx\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>&nbsp;&nbsp;&nbsp;\r\n          <a href=\"https://twitter.com/srfruitsmx\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"38\">\r\n      <div class=\"jot-form\">\r\n        <iframe id=\"JotFormIFrame-90997349015871\" onload=\"window.parent.scrollTo(0,0)\" allowtransparency=\"true\"\r\n          allowfullscreen=\"true\" allow=\"geolocation; microphone; camera\" src=\"https://form.jotform.co/90997349015871\"\r\n          frameborder=\"0\" style=\"width: 1px;\r\n            min-width: 100%;\r\n            height:650px;\r\n            border:none;\"\r\n          scrolling=\"no\">\r\n        </iframe>\r\n        <script type=\"text/javascript\">\r\n          var ifr = document.getElementById(\"JotFormIFrame-90997349015871\");\r\n          if (window.location.href && window.location.href.indexOf(\"?\") > -1) {\r\n            var get = window.location.href.substr(window.location.href.indexOf(\"?\") + 1);\r\n            if (ifr && get.length > 0) {\r\n              var src = ifr.src;\r\n              src = src.indexOf(\"?\") > -1 ? src + \"&\" + get : src + \"?\" + get;\r\n              ifr.src = src;\r\n            }\r\n          }\r\n          window.handleIFrameMessage = function (e) {\r\n            if (typeof e.data === 'object') { return; }\r\n            var args = e.data.split(\":\");\r\n            if (args.length > 2) { iframe = document.getElementById(\"JotFormIFrame-\" + args[(args.length - 1)]); } else { iframe = document.getElementById(\"JotFormIFrame\"); }\r\n            if (!iframe) { return; }\r\n            switch (args[0]) {\r\n              case \"scrollIntoView\":\r\n                iframe.scrollIntoView();\r\n                break;\r\n              case \"setHeight\":\r\n                iframe.style.height = args[1] + \"px\";\r\n                break;\r\n              case \"collapseErrorPage\":\r\n                if (iframe.clientHeight > window.innerHeight) {\r\n                  iframe.style.height = window.innerHeight + \"px\";\r\n                }\r\n                break;\r\n              case \"reloadPage\":\r\n                window.location.reload();\r\n                break;\r\n              case \"loadScript\":\r\n                var src = args[1];\r\n                if (args.length > 3) {\r\n                  src = args[1] + ':' + args[2];\r\n                }\r\n                var script = document.createElement('script');\r\n                script.src = src;\r\n                script.type = 'text/javascript';\r\n                document.body.appendChild(script);\r\n                break;\r\n              case \"exitFullscreen\":\r\n                if (window.document.exitFullscreen) window.document.exitFullscreen();\r\n                else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();\r\n                else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();\r\n                else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();\r\n                else if (window.document.msExitFullscreen) window.document.msExitFullscreen();\r\n                break;\r\n            }\r\n            var isJotForm = (e.origin.indexOf(\"jotform\") > -1) ? true : false;\r\n            if (isJotForm && \"contentWindow\" in iframe && \"postMessage\" in iframe.contentWindow) {\r\n              var urls = { \"docurl\": encodeURIComponent(document.URL), \"referrer\": encodeURIComponent(document.referrer) };\r\n              iframe.contentWindow.postMessage(JSON.stringify({ \"type\": \"urls\", \"value\": urls }), \"*\");\r\n            }\r\n          };\r\n          if (window.addEventListener) {\r\n            window.addEventListener(\"message\", handleIFrameMessage, false);\r\n          } else if (window.attachEvent) {\r\n            window.attachEvent(\"onmessage\", handleIFrameMessage);\r\n          }\r\n        </script>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/contact/contact/contact.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/contact/contact/contact.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\n  padding-top: 135px; }\n\n.contact {\n  background-color: #a1ce1c;\n  border-radius: 30px; }\n\n.contact .titulo {\n    margin-top: 25px; }\n\n.logo {\n  width: 100px;\n  margin-top: 35px; }\n\n.jot-form {\n  margin-top: 45px; }\n\n.social-network {\n  font-size: 35px; }\n\n.social-network i {\n    color: #515151; }\n\n.contact-details {\n  background-color: #ffce0c;\n  height: 450px;\n  margin-top: -65px;\n  color: #515151;\n  font-size: 22px;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px; }\n"

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

module.exports = "<div class=\"content\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n  <div fxFlex=\"80\" fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n    <div class=\"titulo\">\r\n      Preguntas frecuentes\r\n    </div>\r\n\r\n    <div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex=\"80\">\r\n          <mat-accordion id=\"questions\">\r\n\r\n            <mat-expansion-panel [expanded]=\"true\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿De donde proviene la fruta?\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  {{panelOpenState ? '' : ''}}\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">\r\n                Nuestra fruta tiene su origen en el campo mexicano.\r\n                Confiamos en la calidad del producto nacional, y así nos aseguramos de\r\n                garantizar su frescura, con precios competitivos y justos.\r\n              </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Como puedo ponerme en contacto?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Puedes llamarnos al teléfono: 01 (33) 33 12 34 56.<br />\r\n                Si lo prefieres, puedes escribirnos al correo electrónico: srfruits@srfruits.com.mx.<br />\r\n                Además, estamos atentos a tus dudas y comentarios en nuestras redes sociales, en\r\n                <a href=\"https://www.facebook.com/srfruitsmx\" target=\"_blank\">Facebook</a>,\r\n                <a href=\"https://twitter.com/srfruitsmx\" target=\"_blank\">Twitter</a> e\r\n                <a href=\"http://www.instagram.com/srfruits_mx\" target=\"_blank\">Instagram</a>.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header class=\"panel-head\">\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Cómo puedo calcular la cantidad de porciones que requiere mi empresa?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Es muy sencillo: usa nuestra <a routerLink=\"/calculo\" routerLinkActive=\"active\">Calculadora\r\n                  de Cantidades</a></div>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Cuál es el límite de paquetes que puedo solicitar?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Con gusto te podemos entregar desde un paquete, hasta la cantidad de fruta que\r\n                necesites.</div>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Con qué frecuencia y en qué horario se entregan los pedidos?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Las entregas se realizan los días lunes y/o miércoles\r\n                (dependiendo del número de entregas solicitadas), en un horario de 7:00 a 12:00 horas.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿En qué lugares realizan entregas?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Nuestro servicio está disponible dentro de la Zona Metropolitana de\r\n                Guadalajara: Guadalajara, Zapopan, Tlaquepaque, Tlajomulco y Tonalá.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Es posible cambiar la frecuencia o cantidad de mi pedido?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">¡Por supuesto! Conforme tu empresa crezca, nos dará mucho gusto\r\n                visitarte con más frecuencia para entregarte más fruta fresca para tu nuevo personal.\r\n                Si deseas una nueva cotización, por favor ponte en contacto con nosotros y te ayudaremos en\r\n                el proceso.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Cuáles son las formas de pago?\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  {{panelOpenState ? '' : ''}}\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Puedes realizar tus pagos mediante una transferencia electrónica\r\n                o un depósito bancario.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Realizan facturas?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Sí. Te enviaremos la factura a tu correo electrónico.\r\n                Además, tus compras son deducibles de impuestos.</div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿Cual es la duación del contrato?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Confiamos en la calidad de nuestro servicio por lo tanto\r\n                no manejamos contratos para nuestros clientes\r\n              </div>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title class=\"pregunta\">\r\n                  ¿No encontraste la respuesta que necesitas?\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div class=\"respuesta\">Ponte en <a routerLink=\"/contacto\" routerLinkActive=\"active\">contacto</a> con\r\n                nosotros y\r\n                con gusto te\r\n                atenderemos rápidamente.</div>\r\n            </mat-expansion-panel>\r\n\r\n          </mat-accordion>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/contact/questions/questions.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/contact/questions/questions.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pregunta {\n  font-size: 20px;\n  color: #568829; }\n\n.respuesta {\n  font-size: 16px;\n  color: #515151; }\n\n#questions mat-expansion-panel {\n  border-left: 5px solid #6A9B31;\n  margin: 10px; }\n\n.titulo {\n  background-color: #a1ce1c;\n  border-radius: 15px;\n  margin: 30px 0 35px 0;\n  font-size: 65px;\n  color: #346618;\n  text-align: center; }\n"

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

module.exports = "<div class=\"main\">\r\n\r\n  <div class=\"left-div\">\r\n    <span>¿Alguna pregunta?</span>\r\n    <p>\r\n      En nuestra sección de preguntas frecuentes encontrará respuestas\r\n    </p>\r\n    <button mat-button routerLink=\"/preguntas\" routerLinkActive=\"active\">Ver preguntas</button>\r\n  </div>\r\n\r\n  <div class=\"right-div\">\r\n    <img src=\"assets/banana.png\" class=\"banana\" alt=\"banana\">\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/home/extra-add-info/extra-add-info.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\n  .right-div {\n    float: right;\n    width: 30%; }\n  .left-div {\n    float: left;\n    width: 65%;\n    padding-top: 20px;\n    color: #333333; }\n    .left-div span {\n      opacity: .9;\n      font-size: 25px; }\n    .left-div p {\n      font-size: 16px; }\n    .left-div button {\n      background-color: #ffce0c;\n      border-radius: 15px; } }\n\n@media (max-width: 600px) {\n  .right-div {\n    display: none; }\n  .left-div {\n    width: 92%;\n    padding-left: 4%;\n    padding-top: 15px;\n    color: #333333; }\n    .left-div span {\n      opacity: .9;\n      font-size: 25px; }\n    .left-div p {\n      font-size: 15px;\n      opacity: .9; }\n    .left-div button {\n      background-color: #ffce0c;\n      border-radius: 15px; } }\n\n.main {\n  overflow: hidden;\n  background-color: #a1ce1c;\n  height: 160px;\n  margin-bottom: 30px;\n  margin-top: 65px; }\n\n.banana {\n  height: 140px;\n  min-width: 150px;\n  float: right;\n  padding-top: 10px;\n  padding-right: 8%; }\n"

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

module.exports = "<div class=\"carousel-top center\">\r\n\r\n  <!-- SECCION  CARRUSEL -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <ngb-carousel>\r\n        <ng-template ngbSlide>\r\n          <img src='assets/carrusel-beneficios.jpg' routerLink=\"/beneficios-empresa\" routerLinkActive=\"active\" style=\"width: 100%\" alt=\"fruta 1\" class=\"imagen\">\r\n          <div class=\"carousel-caption mensaje\">\r\n            <span>Conoce los beneficios de Señor Fruits</span>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src='assets/carrusel-seleccion.jpg' class=\"imagen\" routerLink=\"/oferta\" routerLinkActive=\"active\" style=\"width: 100%\" alt=\"fruta 3\">\r\n          <div class=\"carousel-caption mensaje\">\r\n            <span>Visita nuestro catálogo de productos.</span>\r\n          </div>\r\n        </ng-template>        \r\n        <ng-template ngbSlide>\r\n            <img src='assets/carrusel-pedido.jpg' routerLink=\"/pedido\" routerLinkActive=\"active\" style=\"width: 100%\" alt=\"fruta 2\" class=\"imagen\">\r\n            <div class=\"carousel-caption mensaje\">\r\n              <span>Realizar tu pedido.</span>\r\n            </div>\r\n          </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SECCION TARJETAS -->\r\n  <div class=\"center\" id=\"offer\">\r\n    <div class=\"card offer-card\" id=\"card1\" style=\"width: 18rem;\">\r\n      <img class=\"card-img-top\" src=\"assets/our-products.jpg\" alt=\"Campesinos\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Nuestros productos</h5>\r\n        <p class=\"card-text\">\r\n            Consulta nuestros paquetes que ofrecen la mejor selección y variedad de \r\n            nuestros productos.            \r\n        </p>\r\n      </div>\r\n      <div class=\"btn-link\">\r\n        <a routerLink=\"/oferta\" routerLinkActive=\"active\"><button mat-button>Ver productos</button></a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card offer-card\" id=\"card2\" style=\"width: 18rem;\">\r\n      <img class=\"card-img-top\" src=\"assets/personal-attention.jpg\" alt=\"Frutas\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Atención personal</h5>\r\n        <p class=\"card-text\">\r\n            ¿Alguna pregunta? No dude en visitar nuestra sección de contacto, \r\n            estamos disponibles las 24 horas de lunes a viernes\r\n        </p>\r\n      </div>\r\n      <div class=\"btn-link\">\r\n        <a routerLink=\"/contacto\" routerLinkActive=\"active\"><button mat-button>Contacto</button></a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card offer-card\" id=\"card3\" style=\"width: 18rem;\">\r\n      <img class=\"card-img-top\" src=\"assets/calculate-request.jpg\" alt=\"Campo mexicano\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Calcula tu pedido</h5>\r\n        <p class=\"card-text\">\r\n            Con la calculadora de cantidad puedes realizar un mejor presupuesto \r\n            de la cantidad de fruta necesaria para tus colaboradores           \r\n        </p>\r\n      </div>\r\n      <div class=\"btn-link\">\r\n        <a routerLink=\"/calculo\" routerLinkActive=\"active\"><button mat-button>Calculadora</button></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SECCION PROCESO -->\r\n\r\n  <process-steps></process-steps>\r\n\r\n  <our-company></our-company>\r\n\r\n  <extra-add-info></extra-add-info>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#offer {\n  overflow: auto;\n  padding-top: 50px; }\n  #offer .offer-card {\n    display: inline-block;\n    margin: 5px; }\n  #offer #offer > img {\n    height: 50px; }\n  .center {\n  text-align: center;\n  margin-bottom: 65px; }\n  .center .card-body {\n    background-color: rgba(255, 191, 0, 0.9);\n    opacity: .9;\n    height: 150px;\n    font-size: 15px; }\n  .center .card-title {\n    color: black; }\n  .center .btn-link {\n    background-color: #7eaf3b; }\n  .center .btn-link button {\n      width: 100%;\n      color: whitesmoke;\n      font-size: 18px; }\n  mat-grid-tile {\n  text-align: center;\n  border: 1px solid #dce0e8; }\n  mat-grid-tile p {\n    font-size: 13px; }\n  mat-grid-tile mat-icon {\n    font-size: 35px;\n    text-align: center !important; }\n  @media (min-width: 600px) {\n  #process {\n    padding-top: 10px;\n    margin: 1%; }\n    #process span {\n      padding-top: 15px; }\n    #process mat-icon {\n      margin-top: 10px; }\n  .carousel-top {\n    padding-top: 96px; } }\n  @media (max-width: 600px) {\n  #process {\n    padding-top: 20px;\n    margin: 1%; }\n    #process p {\n      font-size: 10px; }\n    #process h6 {\n      display: none; }\n    #process mat-icon {\n      font-size: 25px; }\n  .center {\n    padding-top: 96px; }\n  .row h3 {\n    display: none; }\n  .row p {\n    font-size: 15px; } }\n  .carrusel-link {\n  color: white;\n  font-size: 20px; }\n  .imagen {\n  cursor: pointer; }\n  .mensaje span {\n  font-size: 40px; }\n"

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

module.exports = "<div class=\"main-process\">\r\n    <tittle-header color='verde' text='¿Como funciona?'></tittle-header>\r\n\r\n    <div class=\"step-card\" id=\"calculate\">\r\n        <div class=\"image-card\" style=\"background-image: url('assets/step-calculate.png')\"></div>\r\n        <div class=\"description\">\r\n            <p>CALCULA TU PEDIDO</p>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            Con la calculadora de cantidad puedes realizar un mejor presupuesto de la cantidad \r\n            de fruta necesaria para tus colaboradores.<br /><br /><br />\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"step-card\" id=\"order\">\r\n        <div class=\"image-card\" style=\"background-image: url('assets/step-order.png')\"></div>\r\n        <div class=\"description\">\r\n            <p>ORDENA</p>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            Elige el paquete que deseas, la cantidad de porciones y días de entrega: lunes y/o miércoles. \r\n            Inmediatamente nos pondremos en contacto contigo para concluir el proceso de compra.\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"step-card\" id=\"receive\">\r\n        <div class=\"image-card\" style=\"background-image: url('assets/step-receive.png')\"></div>\r\n        <div class=\"description\">\r\n            <div class=\"description\">\r\n                <p>RECIBE TU PEDIDO</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            Las entregas se realizan en las primeras horas laborales de los días lunes y miércoles. \r\n            Así garantizamos que la fruta que recibas sea la más fresca. Nuestro servicio está disponible \r\n            dentro de la ZMG.\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"step-card\" id=\"payment\">\r\n        <div class=\"image-card\" style=\"background-image: url('assets/step-pay.png')\"></div>\r\n        <div class=\"description\">\r\n            <p>PAGOS FLEXIBLES</p>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            Una vez entregado tu pedido, te enviaremos la factura correspondiente para que \r\n            realices el pago dentro de los siguientes 7 días hábiles, mediante una  transferencia \r\n            electrónica o un depósito bancario.\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/home/process-steps/process-steps.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/home/process-steps/process-steps.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-card {\n  height: 445px;\n  width: 260px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 25px;\n  margin: 15px; }\n\n.image-card {\n  background-size: cover;\n  height: 190px;\n  width: 185px;\n  margin: 0 auto; }\n\n.description {\n  text-align: center;\n  width: 190px;\n  height: 35px;\n  color: white;\n  border-radius: 15px;\n  font-weight: 500;\n  font-size: 18px;\n  margin: 0 auto;\n  margin-top: 15px;\n  vertical-align: middle; }\n\n.description p {\n    padding-top: 4px; }\n\n.card-text {\n  padding-top: 15px;\n  font-size: 15px;\n  margin: 5px;\n  font-weight: 500; }\n\n.main-process {\n  padding-top: 10px;\n  margin-top: 40px;\n  background-color: transparent;\n  display: block; }\n\n.main-process #order {\n    color: #f40000;\n    opacity: .9;\n    border: 2px solid #f40000; }\n\n.main-process #order .description {\n      background-color: #f40000; }\n\n.main-process #receive {\n    color: #62912b;\n    border: 2px solid #a1ce1c; }\n\n.main-process #receive .description {\n      background-color: #a1ce1c; }\n\n.main-process #payment {\n    color: #ff7404;\n    border: 2px solid #ffb100; }\n\n.main-process #payment .description {\n      background-color: #ffb100; }\n\n.main-process #calculate {\n    color: #42a4f5;\n    border: 2px solid #42a4f5; }\n\n.main-process #calculate .description {\n      background-color: #42a4f5; }\n"

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

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"center\">\r\n    <!-- SECCION TARJETAS -->\r\n    <div class=\"center\" id=\"offer\">\r\n      <div class=\"card offer-card\" style=\"width: 18rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/wood-box.png\" alt=\"Campesinos\">\r\n        <div>\r\n          <div class=\"pkg-description card-body\">\r\n            <span>Estándar</span>\r\n            <p>\r\n              5 kg Platano<br />\r\n              5 kg Mango<br />\r\n              2 kg Fruta de temporada\r\n            </p>\r\n          </div>\r\n          <div class=\"capacity\">\r\n            <span>\r\n              <mat-icon>person</mat-icon> Hasta 35 porciones\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card offer-card\" style=\"width: 18rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/wood-box.png\" alt=\"Frutas\">\r\n        <div>\r\n          <div class=\"pkg-description card-body\">\r\n            <span>Básico</span>\r\n            <p>\r\n              3 kg Platano<br />\r\n              3 kg Mango<br />\r\n              3 kg Fruta de temporada\r\n            </p>\r\n          </div>\r\n          <div class=\"capacity\">\r\n            <span>\r\n              <mat-icon>person</mat-icon> Hasta 35 porciones\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card offer-card\" style=\"width: 18rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/wood-box.png\" alt=\"Campo mexicano\">\r\n        <div>\r\n          <div class=\"pkg-description card-body\">\r\n            <span>Mezcla +2</span>\r\n            <p>\r\n              2 kg Platano<br />\r\n              3 kg Mango<br />\r\n              3 kg Fruta de temporada<br />\r\n              1 kg de uva/kiwi\r\n            </p>\r\n          </div>\r\n          <div class=\"capacity\">\r\n            <span>\r\n              <mat-icon>person</mat-icon> Hasta 35 porciones\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"advantages\">\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Flexibilidad -</strong> Posibilidad de cambiar el producto cuando se deseé\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Accesible -</strong> Paquetes para cualquier presupuesto\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Capacidad -</strong> Podemos proveer a empresas de cualquier tamaño\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Entrega -</strong> Llevamos el producto hasta su oficina sin costo\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Frescura -</strong> Trabajamos con las frutas de la mejor calidad garantizada\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Atención -</strong> Con gusto atenderemos cualquier aclaración que necesite 24/7\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Presentacion -</strong> Contenedores diseñados especialmente para el producto\r\n      </ngb-alert>\r\n    </p>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/products/offer/offer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/forms/products/offer/offer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#offer {\n  overflow: auto; }\n  #offer .offer-card {\n    display: inline-block;\n    margin: 5px; }\n  #offer #offer > img {\n    height: 50px; }\n  .center {\n  text-align: center; }\n  .center .card-body {\n    background-color: #ffce0c;\n    opacity: .9;\n    font-size: 15px;\n    text-align: center;\n    padding: 0.25rem; }\n  .center .card-body span {\n      font-size: 22px;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      color: #004700; }\n  .center .card-body p {\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      color: rgba(0, 71, 0, 0.9); }\n  .center .btn-link {\n    background-color: #7eaf3b;\n    height: 36px; }\n  .center .btn-link button {\n      width: 100%;\n      height: 100%;\n      color: whitesmoke;\n      font-size: 20px;\n      padding-top: 0px; }\n  .card-img-top {\n  height: 200px;\n  width: 240px; }\n  .pkg-description {\n  height: 155px; }\n  .capacity {\n  font-size: 15px;\n  background-color: #ffb100; }\n  .capacity span {\n    color: black;\n    opacity: .6; }\n  @media (min-width: 600px) {\n  .margin-top {\n    margin-top: 25px; }\n  #advantages {\n    padding-top: 25px;\n    width: 55%;\n    margin: auto; } }\n  @media (max-width: 600px) {\n  .margin-top {\n    margin-top: 0px; }\n  #advantages {\n    padding-top: 25px;\n    width: 98%;\n    margin: auto; } }\n"

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

/***/ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-card class=\"background green-color\">\r\n    <h5 class=\"send-title\"><b>Calculo de fruta necesaria:</b></h5>\r\n    <mat-card-content>\r\n      <p #info>Una caja puede proveer a <b>{{peoplePerBox}}</b> colaboradores <br>durante un periodo de <strong>3 dias</strong> aproximadamente</p>\r\n      <br>\r\n      <p>\r\n        <mat-icon>group</mat-icon><b> Colaboradores:</b> <b> {{employees}}</b>&nbsp;\r\n        &nbsp;<mat-icon>local_shipping</mat-icon><b> Entregas semanales: {{deliveries}}</b>\r\n      </p>\r\n      <p>\r\n        <!-- <mat-icon>shopping_basket</mat-icon><b> Porciones: {{employees * deliveries}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\r\n        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\r\n        <mat-icon>inbox</mat-icon><b> Cajas semanales:  {{boxes}}</b> \r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"top-s\" id=\"buttons\">\r\n  <div id=\"left-btn\">\r\n    <button mat-button color=\"\" [mat-dialog-close]=\"true\" class=\"\">\r\n      <span class=\"text\">Cerrar</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div id=\"right-btn\">\r\n    <button mat-button color=\"primary\" (click)=\"redirectToRequest()\" [mat-dialog-close]=\"true\" class=\"green-btn\">\r\n      <span class=\"text\">Realizar pedido</span>\r\n    </button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#right-btn {\n  float: right; }\n\n#left-btn {\n  float: left; }\n\n.boxes {\n  padding-left: 28px; }\n\n#info {\n  color: black !important; }\n\n#buttons {\n  overflow: auto; }\n\n.card-buttom {\n  padding-top: 10px; }\n\n.send-title {\n  color: green; }\n"

/***/ }),

/***/ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CalculatorResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorResultComponent", function() { return CalculatorResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var CalculatorResultComponent = /** @class */ (function () {
    // 14 empleados/1 caja/1 entrega
    function CalculatorResultComponent(data, router) {
        this.data = data;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.telephone = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.peoplePerBox = 14;
        this.employees = data.employees;
        this.deliveries = data.deliveries;
        this.boxes = Math.round((data.employees / this.peoplePerBox) * data.deliveries); // TODO
        if (this.boxes === 0) {
            this.boxes = 1;
        }
    }
    CalculatorResultComponent.prototype.ngOnInit = function () {
    };
    CalculatorResultComponent.prototype.redirectToRequest = function () {
        var navigationParams = {
            queryParams: {
                'employees': this.employees,
                'deliveries': this.deliveries
            }
        };
        this.router.navigate(['pedido'], navigationParams);
    };
    CalculatorResultComponent.prototype.getErrorMessages = function (controlName) {
        switch (controlName) {
            case 'email':
                return this.email.hasError('required') ? 'Ingresa un correo electrónico' :
                    this.email.hasError('email') ? 'Correo electrónico inválido' :
                        '';
            case 'name':
                return this.name.hasError('required'), 'Ingresa un nombre';
            case 'tel':
                return this.name.hasError('required'), 'Ingresa un número telefónico  ';
            default:
                break;
        }
    };
    CalculatorResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calculator-result',
            template: __webpack_require__(/*! ./calculator-result.component.html */ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.html"),
            styles: [__webpack_require__(/*! ./calculator-result.component.scss */ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CalculatorResultComponent);
    return CalculatorResultComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/requests/calculator/calculator.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <tittle-header color='verde' text='Calcula tu pedido'></tittle-header>\r\n\r\n  <div fxLayout=\"row\" class=\"calculator\" fxLayoutAlign=\"center center\">\r\n    <div fxFlex=\"580px\" class=\"calculador\">\r\n      <div fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"titulo\" fxLayoutAlign=\"center\">\r\n            ¿Cuanta fruta necesita mi empresa?\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n          <div fxFlex=\"80\" class=\"descripcion\">\r\n            La dosis recomendada segun la OMS es de 5 porciones al dia. Inserta la cantidad\r\n            de colaboradores de tu empresa y la cantidad de entregas semanales y calcula\r\n            cuanta fruta necesitas semanalmente\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayoutAlign=\"center\">\r\n          <mat-form-field>\r\n            <input matInput #employees type=\"number\" value=\"1\" max=\"1500\" placeholder=\"Empleados\"\r\n              (keyup)=\"setColaborators(employees.value)\">\r\n            <mat-hint align=\"start\"><strong>De 1 a 1500</strong></mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayoutAlign=\"center\">\r\n          <mat-form-field>\r\n            <mat-label>Entregas semanales</mat-label>\r\n            <mat-select #deliveries value=\"1\" (selectionChange)=\"setDeliveries(deliveries.value)\">\r\n              <mat-option value=\"1\">1 vez</mat-option>\r\n              <mat-option value=\"2\">2 veces</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayoutAlign=\"center\" class=\"btn-calcular\">\r\n          <button (click)=\"calculate()\">Calcular</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/calculator/calculator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulo {\n  font-size: 28px;\n  color: #333333;\n  margin-top: 10px;\n  font-weight: 500; }\n\n.descripcion {\n  font-size: 16px;\n  text-align: justify;\n  color: #333333; }\n\n.entregas {\n  padding-left: 65px; }\n\n.calculador {\n  background-color: #a1ce1c;\n  border-radius: 15px; }\n\n.btn-calcular {\n  padding-bottom: 20px; }\n\n.btn-calcular button {\n    background-color: #ffb100;\n    border: none;\n    border-radius: 5px;\n    color: #333333;\n    width: 120px;\n    margin: 6px; }\n\ninput {\n  width: 110px; }\n"

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../calculator/calculator-result/calculator-result.component */ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.ts");
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
    function CalculatorComponent(dialog) {
        this.dialog = dialog;
        this.deliveries = 1;
        this.employees = 1;
    }
    CalculatorComponent.prototype.calculate = function () {
        if (this.employees > 0 && this.employees < 1501) {
            this.dialog.open(_calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorResultComponent"], {
                data: {
                    employees: this.employees,
                    deliveries: this.deliveries
                }
            });
        }
        else {
            alert('Cantidad de empleados permitidos: entre 1 y 1500');
        }
    };
    CalculatorComponent.prototype.setColaborators = function (value) {
        this.employees = value;
        console.log('Empleados', this.employees);
    };
    CalculatorComponent.prototype.setDeliveries = function (value) {
        this.deliveries = value;
        console.log('Veces por semama', this.deliveries);
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/components/forms/requests/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.scss */ "./src/app/components/forms/requests/calculator/calculator.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
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

module.exports = "<div class=\"content\">\r\n  <div class=\"main-card\">\r\n    <mat-card>\r\n      <div class=\"content-info\">\r\n        <p>\r\n          La cantidad de fruta necesaria para su empresa depende de distintos factores como cantidad de empleados,\r\n          numero de oficinas, pisos o cocinas de su empresa, frecuencias de entrega, etc. Es por eso que\r\n          para proveer un mejor servicio y buscando su completa satisfacción usted puede contactarnos\r\n          mediante nuestro número telefónico o email y nos comunicamos con usted en un periodo menor a 1 hora\r\n          donde le brindaremos toda la información necesaria.\r\n        </p>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <!-- CONTANCT CARD -->\r\n  <div class=\"contact\">\r\n    <!-- logo -->\r\n    <div class=\"logo\">\r\n      <div class=\"visual\">\r\n          <div>\r\n              <img class=\"image\"  src=\"assets/logo.png\" alt=\"calidad\">\r\n          </div>\r\n          <div class=\"slogan\">\r\n            Salud en la oficina.\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- company info -->\r\n    <div class=\"company-info\">\r\n      <div id=\"contact-details\">\r\n        <mat-icon>phone</mat-icon><span>   336 059 8886</span><br>\r\n        <mat-icon>mail</mat-icon><span>   srfruits@srfruits.com.mx</span><br>\r\n        <p>\r\n            Avenida Siempreviva 742,<br>\r\n            Zapopan, Jalisco México.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/request/request.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/requests/request/request.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\n  .main-card {\n    padding-left: 5%;\n    padding-right: 5%;\n    overflow: hidden;\n    text-align: center; }\n    .main-card mat-card {\n      border-radius: 50px;\n      background-color: #a1ce1c; }\n  .logo {\n    text-align: center;\n    float: left;\n    width: 50%; }\n  .company-info {\n    float: right;\n    border-left: 2px solid #a1ce1c;\n    color: #a1ce1c;\n    height: 160px;\n    width: 50%; }\n    .company-info .mat-icon {\n      font-size: 22px; }\n    .company-info #contact-details {\n      font-size: 20px;\n      padding-left: 50px;\n      padding-top: 30px; }\n      .company-info #contact-details p {\n        font-size: 14px;\n        font-style: italic;\n        padding-top: 5px; }\n  .image {\n    height: 130px;\n    border-radius: 25px;\n    background-size: auto;\n    border: 3px solid #a1ce1c; }\n  .slogan {\n    padding-top: 8px;\n    font-size: 18px;\n    font-style: italic;\n    color: #a1ce1c; }\n  .content-info {\n    color: #FFFFFF;\n    font-size: 16px;\n    text-align: justify; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.85;\n      color: #333333; } }\n\n@media (max-width: 600px) {\n  .main-card {\n    padding-left: 3%;\n    padding-right: 3%;\n    overflow: hidden; }\n    .main-card mat-card {\n      border-radius: 20px;\n      background-color: #a1ce1c; }\n  .logo {\n    display: none; }\n  .company-info {\n    float: right;\n    color: #a1ce1c;\n    height: 160px;\n    width: 100%;\n    text-align: center; }\n    .company-info .mat-icon {\n      font-size: 17px; }\n    .company-info #contact-details {\n      font-size: 16px;\n      padding-left: 10px;\n      padding-top: 10px; }\n      .company-info #contact-details p {\n        color: #6A9B31;\n        opacity: .7;\n        font-size: 15px;\n        font-style: italic;\n        padding-top: 2px; }\n  .image {\n    height: 70px;\n    border-radius: 15px;\n    background-size: auto;\n    border: 2px solid #a1ce1c; }\n  .slogan {\n    padding-top: 8px;\n    font-size: 13px;\n    font-style: italic;\n    color: #a1ce1c; }\n  .content-info {\n    color: #FFFFFF;\n    padding-left: 10px;\n    text-align: center;\n    font-size: 13px; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.85;\n      text-align: justify;\n      color: #333333; } }\n\n.contact {\n  padding-top: 45px;\n  padding-left: 10%;\n  padding-right: 10%; }\n\n.visual {\n  float: right;\n  padding-right: 60px; }\n"

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
    function RequestComponent(route) {
        var _this = this;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.employees = params['employees'];
            _this.deliveries = params['deliveries'];
        });
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/components/forms/requests/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/components/forms/requests/request/request.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top  navigation\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n        <div class=\"header-logo\">\r\n            <img src=\"assets/logo.png\">\r\n        </div>\r\n\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\r\n        aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n        <ul class=\"navbar-nav navbar-items\">\r\n\r\n            <li class=\"nav-item link-item\">\r\n                <a class=\"nav-link\" routerLink=\"/beneficios-empresa\" routerLinkActive=\"active\"\r\n                    translate>COMMON.BENEFITS</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item link-item\">\r\n                <a class=\"nav-link\" routerLink=\"/oferta\" routerLinkActive=\"active\" translate>COMMON.OFFER</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <span translate>COMMON.REQUEST</span>\r\n                </a>\r\n                <div class=\"dropdown-menu drop-background\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" routerLink=\"/calculo\" routerLinkActive=\"active\"\r\n                        translate>COMMON.CALCULATE_QTY</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/pedido\" routerLinkActive=\"active\"\r\n                        translate>COMMON.REQUEST_A_QUOTE</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/pago\" routerLinkActive=\"active\" translate>COMMON.PAYMENT</a>\r\n                </div>\r\n            </li>\r\n\r\n            <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\"><span translate>COMMON.CONTACT</span>\r\n                </a>\r\n                <div class=\"dropdown-menu drop-background\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" routerLink=\"/contact\" routerLinkActive=\"active\"\r\n                        translate>COMMON.CONTACT_US</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/preguntas\" routerLinkActive=\"active\" translate>COMMON.FAQ</a>\r\n                </div>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse social-network\">\r\n        <mat-icon>phone</mat-icon><span class=\"telephone\">&nbsp;XXX-XXX-XXXX</span>\r\n    </div>\r\n\r\n    <!-- <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav color-white\">\r\n            <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\">\r\n                    <mat-icon>language</mat-icon>\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"\">\r\n                    <a class=\"dropdown-item\"><button (click)=\"switchLanguage('es')\">Español</button></a>\r\n                    <a class=\"dropdown-item\"><button (click)=\"switchLanguage('en')\">English</button></a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div> -->\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/components/shell/components/app-shell/app-shell.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/shell/components/app-shell/app-shell.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  text-align: center; }\n  .header-logo img {\n    display: block;\n    height: 80px;\n    padding-left: 8px;\n    margin: 0 auto; }\n  .navigation {\n  background-color: #ffce0c;\n  height: 96px;\n  top: 0; }\n  .bar-items-text {\n  padding-bottom: 5px; }\n  .telephone {\n  padding-left: 5px;\n  font-size: 30px; }\n  .navbar-items {\n  padding-top: 10px; }\n  .social-network {\n  padding-left: 100px;\n  color: rgba(0, 0, 0, 0.5); }\n  .social-network mat-icon {\n    font-size: 28px; }\n  .icon {\n  font-size: 26px;\n  padding-left: 8px;\n  color: white; }\n  .link-item > * {\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  font-size: 18px;\n  opacity: .9;\n  background-color: #ffce0c; }\n  .drop-background {\n  background-color: #bed932; }\n"

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

module.exports = "<div class=\"footer-distributed\">\r\n\r\n  <div class=\"footer-right\">\r\n    <a href=\"http://www.instagram.com/srfruits_mx\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\r\n    <a href=\"https://www.facebook.com/srfruitsmx\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\r\n    <a href=\"https://twitter.com/srfruitsmx\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\r\n  </div>\r\n\r\n  <div class=\"footer-left\">\r\n\r\n    <p class=\"footer-links\">\r\n      <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n      ·\r\n      <a routerLink=\"/porque-nosotros\" routerLinkActive=\"active\">Nosotros</a>\r\n      ·\r\n      <a routerLink=\"/beneficios-empresa\" routerLinkActive=\"active\">Beneficios</a>\r\n      ·\r\n      <a routerLink=\"/oferta\" routerLinkActive=\"active\">Oferta</a>\r\n      ·\r\n      <a routerLink=\"/pedido\" routerLinkActive=\"active\">Pedidos</a>\r\n      ·\r\n      <a routerLink=\"/contacto\" routerLinkActive=\"active\">Contacto</a>\r\n    </p>\r\n\r\n    <p>Señor Fruits &copy; {{currentYear}}</p>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/shell/components/footer/footer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shell/components/footer/footer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\");\n.footer-distributed {\n  background-color: #ffbf00;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: normal 16px sans-serif;\n  padding: 10px 50px;\n  margin-top: 80px;\n  bottom: 0; }\n.footer-distributed .footer-left p {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 12px;\n  margin: 0; }\n/* Footer links */\n.footer-distributed p.footer-links {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0 0 10px;\n  padding: 0; }\n.footer-distributed p.footer-links a {\n  display: inline-block;\n  line-height: 1.8;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.5); }\n.footer-distributed .footer-right {\n  float: right;\n  margin-top: 6px;\n  max-width: 180px; }\n.footer-distributed .footer-right a {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  background-color: #33383b;\n  border-radius: 2px;\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n  line-height: 35px;\n  margin-left: 3px; }\n/* If you don't want the footer to be responsive, remove these media queries */\n@media (max-width: 600px) {\n  .footer-distributed .footer-left,\n  .footer-distributed .footer-right {\n    text-align: center; }\n  .footer-distributed .footer-right {\n    float: none;\n    margin: 0 auto 20px; }\n  .footer-distributed .footer-left p.footer-links {\n    line-height: 1.8; } }\n* {\n  padding: 0;\n  margin: 0; }\nhtml {\n  background-color: #eaf0f2; }\nbody {\n  font: 14px/1.5 Arial, Helvetica, sans-serif; }\nheader {\n  text-align: center;\n  padding-top: 100px;\n  margin-bottom: 200px; }\nheader h1 {\n  font: normal 32px/1.5 'Open Sans', sans-serif;\n  color: #3F71AE;\n  padding-bottom: 16px; }\nheader h2 {\n  color: #F05283; }\nheader h2 a {\n  color: inherit;\n  text-decoration: none;\n  display: inline-block;\n  border: 1px solid #F05283;\n  padding: 10px 15px;\n  border-radius: 3px;\n  font: bold 14px/1 'Open Sans', sans-serif;\n  text-transform: uppercase; }\nheader h2 a:hover {\n  background-color: #F05283;\n  transition: 0.2s;\n  color: #fff; }\nheader ul {\n  max-width: 600px;\n  margin: 60px auto 0; }\nheader ul a {\n  text-decoration: none;\n  color: #FFF;\n  text-align: left;\n  background-color: #B9C1CA;\n  padding: 10px 16px;\n  border-radius: 2px;\n  opacity: 0.8;\n  font-size: 16px;\n  display: inline-block;\n  margin: 4px;\n  line-height: 1;\n  outline: none;\n  transition: 0.2s ease; }\nheader ul li a.active {\n  background-color: #66B650;\n  pointer-events: none; }\nheader ul li a:hover {\n  opacity: 1; }\nheader ul {\n  list-style: none;\n  padding: 0; }\nheader ul li {\n  display: inline-block; }\n/* In our demo, the footers are fixed to the bottom of the page */\nfooter {\n  position: fixed;\n  bottom: 0; }\n@media (max-height: 600px) {\n  footer {\n    position: static; }\n  header {\n    padding-top: 40px; } }\n"

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

module.exports = ".header-container {\n  width: 100%;\n  min-height: 70px;\n  vertical-align: middle;\n  display: inline-block;\n  margin-bottom: 35px; }\n\n.logo {\n  float: left; }\n\n.logo img {\n    height: 60px; }\n\n.tittle-text {\n  font-size: 35px;\n  color: white;\n  padding-top: 5px;\n  text-align: center; }\n\n.verde {\n  background-color: #a1ce1c; }\n\n.amarillo {\n  background-color: #ffce0c; }\n\n.naranja {\n  background-color: #ffb100; }\n\n.rojo {\n  background-color: #f40000; }\n\n.gris {\n  background-color: #41444d; }\n\n.crema {\n  background-color: #f5f4e2; }\n"

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