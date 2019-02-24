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
/* harmony import */ var _components_shell_components_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shell/components/profile-info/profile-info.component */ "./src/app/components/shell/components/profile-info/profile-info.component.ts");
/* harmony import */ var _components_shell_components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shell/components/social-network/social-network.component */ "./src/app/components/shell/components/social-network/social-network.component.ts");
/* harmony import */ var _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/forms/contact/contact/contact.component */ "./src/app/components/forms/contact/contact/contact.component.ts");
/* harmony import */ var _components_forms_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/forms/products/offer/offer.component */ "./src/app/components/forms/products/offer/offer.component.ts");
/* harmony import */ var _components_shell_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/shell/components/footer/footer.component */ "./src/app/components/shell/components/footer/footer.component.ts");
/* harmony import */ var _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/forms/home/home.component */ "./src/app/components/forms/home/home.component.ts");
/* harmony import */ var _components_forms_about_us_advantages_advantages_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/forms/about-us/advantages/advantages.component */ "./src/app/components/forms/about-us/advantages/advantages.component.ts");
/* harmony import */ var _components_forms_about_us_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/forms/about-us/mision-vision/mision-vision.component */ "./src/app/components/forms/about-us/mision-vision/mision-vision.component.ts");
/* harmony import */ var _components_forms_about_us_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/forms/about-us/achievements/achievements.component */ "./src/app/components/forms/about-us/achievements/achievements.component.ts");
/* harmony import */ var _components_forms_benefits_for_employee_benefits_employee__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/forms/benefits/for-employee/benefits-employee */ "./src/app/components/forms/benefits/for-employee/benefits-employee.ts");
/* harmony import */ var _components_forms_benefits_for_company_benefits_company__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/forms/benefits/for-company/benefits-company */ "./src/app/components/forms/benefits/for-company/benefits-company.ts");
/* harmony import */ var _components_forms_requests_request_request_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/forms/requests/request/request.component */ "./src/app/components/forms/requests/request/request.component.ts");
/* harmony import */ var _components_forms_requests_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/forms/requests/calculator/calculator.component */ "./src/app/components/forms/requests/calculator/calculator.component.ts");
/* harmony import */ var _components_forms_requests_payment_payment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/forms/requests/payment/payment.component */ "./src/app/components/forms/requests/payment/payment.component.ts");
/* harmony import */ var _components_forms_contact_questions_questions_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/forms/contact/questions/questions.component */ "./src/app/components/forms/contact/questions/questions.component.ts");
/* harmony import */ var _components_forms_requests_calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/forms/requests/calculator/calculator-result/calculator-result.component */ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.ts");
/* harmony import */ var _components_forms_home_process_steps_process_steps_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/forms/home/process-steps/process-steps.component */ "./src/app/components/forms/home/process-steps/process-steps.component.ts");
/* harmony import */ var _components_forms_home_extra_content_extra_content_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/forms/home/extra-content/extra-content.component */ "./src/app/components/forms/home/extra-content/extra-content.component.ts");
/* harmony import */ var _components_forms_home_extra_add_info_extra_add_info_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/forms/home/extra-add-info/extra-add-info.component */ "./src/app/components/forms/home/extra-add-info/extra-add-info.component.ts");
/* harmony import */ var _components_forms_about_us_our_company_our_company_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/forms/about-us/our-company/our-company.component */ "./src/app/components/forms/about-us/our-company/our-company.component.ts");
/* harmony import */ var _components_forms_about_us_our_company_why_us_why_us_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/forms/about-us/our-company/why-us/why-us.component */ "./src/app/components/forms/about-us/our-company/why-us/why-us.component.ts");
/* harmony import */ var _components_shell_components_tittle_header_tittle_header_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/shell/components/tittle-header/tittle-header.component */ "./src/app/components/shell/components/tittle-header/tittle-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var materialModules = [_angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"]];
var angularCoreModules = [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]];
var appComponents = [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _components_shell_components_app_shell_app_shell_component__WEBPACK_IMPORTED_MODULE_14__["AppShellComponent"], _components_shell_components_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_16__["ProfileInfoComponent"], _components_shell_components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_17__["SocialNetworkComponent"], _components_forms_benefits_for_company_benefits_company__WEBPACK_IMPORTED_MODULE_26__["BenefitsCompanyComponent"],
    _components_forms_benefits_for_employee_benefits_employee__WEBPACK_IMPORTED_MODULE_25__["BenefitsEmployeeComponent"], _components_forms_about_us_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_23__["MisionVisionComponent"], _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"], _components_forms_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_19__["OfferComponent"], _components_shell_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _components_forms_about_us_advantages_advantages_component__WEBPACK_IMPORTED_MODULE_22__["AdvantagesComponent"],
    _components_forms_about_us_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_24__["AchievementsComponent"], _components_forms_requests_request_request_component__WEBPACK_IMPORTED_MODULE_27__["RequestComponent"], _components_forms_requests_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_28__["CalculatorComponent"], _components_forms_requests_payment_payment_component__WEBPACK_IMPORTED_MODULE_29__["PaymentComponent"], _components_forms_contact_questions_questions_component__WEBPACK_IMPORTED_MODULE_30__["QuestionsComponent"], _components_forms_requests_calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_31__["CalculatorResultComponent"],
    _components_forms_home_process_steps_process_steps_component__WEBPACK_IMPORTED_MODULE_32__["ProcessStepsComponent"], _components_forms_home_extra_add_info_extra_add_info_component__WEBPACK_IMPORTED_MODULE_34__["ExtraAddInfoComponent"], _components_forms_home_extra_content_extra_content_component__WEBPACK_IMPORTED_MODULE_33__["ExtraContentComponent"], _components_forms_about_us_our_company_our_company_component__WEBPACK_IMPORTED_MODULE_35__["OurCompanyComponent"], _components_forms_about_us_our_company_why_us_why_us_component__WEBPACK_IMPORTED_MODULE_36__["WhyUsComponent"], _components_shell_components_tittle_header_tittle_header_component__WEBPACK_IMPORTED_MODULE_37__["TittleHeaderComponent"]];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
var routes = [
    { path: 'home', component: _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"] },
    { path: 'contact', component: _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"] },
    { path: 'porque-nosotros', component: _components_forms_about_us_our_company_our_company_component__WEBPACK_IMPORTED_MODULE_35__["OurCompanyComponent"] },
    { path: 'mision-vision', component: _components_forms_about_us_mision_vision_mision_vision_component__WEBPACK_IMPORTED_MODULE_23__["MisionVisionComponent"] },
    { path: 'logros', component: _components_forms_about_us_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_24__["AchievementsComponent"] },
    { path: 'beneficios-empleado', component: _components_forms_benefits_for_employee_benefits_employee__WEBPACK_IMPORTED_MODULE_25__["BenefitsEmployeeComponent"] },
    { path: 'beneficios-empresa', component: _components_forms_benefits_for_company_benefits_company__WEBPACK_IMPORTED_MODULE_26__["BenefitsCompanyComponent"] },
    { path: 'oferta', component: _components_forms_products_offer_offer_component__WEBPACK_IMPORTED_MODULE_19__["OfferComponent"] },
    { path: 'pedido', component: _components_forms_requests_request_request_component__WEBPACK_IMPORTED_MODULE_27__["RequestComponent"] },
    { path: 'calculo', component: _components_forms_requests_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_28__["CalculatorComponent"] },
    { path: 'pago', component: _components_forms_requests_payment_payment_component__WEBPACK_IMPORTED_MODULE_29__["PaymentComponent"] },
    { path: 'contacto', component: _components_forms_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"] },
    { path: 'preguntas', component: _components_forms_contact_questions_questions_component__WEBPACK_IMPORTED_MODULE_30__["QuestionsComponent"] },
    { path: 'resultado', component: _components_forms_requests_calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_31__["CalculatorResultComponent"] },
    { path: '**', component: _components_forms_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"] } // siempre al final
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

module.exports = "<tittle-header color='naranja' text='¿Por qué Señor Fruits?'>\r\n</tittle-header>\r\n\r\n<div class=\"main\" style=\"background-image: url('assets/bg-fresh-fruits.jpg');\">\r\n  <div class=\"inside-div\">\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/free-truck.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Entrega sin costo</span>\r\n          <p>Su pedido le será entregado hasta sus instalaciones de manera gratuita</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/handshake.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Trato personal</span>\r\n          <p>Para su satisfacción le atendemos de manera personal y por nuestros canales</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/quality.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Garantizamos calidad</span>\r\n          <p>En caso de no entregar productos de excelente calidad el producto es gratis</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cards\">\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/banana.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Mejor seleccion</span>\r\n          <p>La fruta entregada es seleccionada para entregar solo lo mejor a su empresa</p><br />\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/hygiene.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Higiene y Seguridad</span>\r\n          <p>El producto se inspecciona de manera que se entregue lista para su consumo</p><br />\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-img\">\r\n          <img src=\"assets/eco-friendly.png\" height=\"150px\">\r\n        </div>\r\n        <div class=\"card-info\">\r\n          <span>Cuidamos el ambiente</span>\r\n          <p>Usamos cajas retornables para reducir el impacto ambiental</p><br />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class=\"benefits\">\r\n  <div class=\"red\">\r\n    <mat-card>\r\n      <div class=\"benefit-card\">\r\n        <div class=\"benefit-photo\" style=\"background-image: url('assets/obesidad-mx.jpg')\">\r\n        </div>\r\n        <div class=\"benefit-info\">\r\n          <span>Obesidad en México</span>\r\n          <p>\r\n            El 73% de la población adulta sufre de obesidad o sobrepeso. Desafortunadamente,\r\n            México se encuentra en el 2º lugar de obesidad en adultos y 1er lugar en obesidad\r\n            infantil a nivel mundial.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"green\">\r\n    <mat-card>\r\n      <div class=\"benefit-card\">\r\n        <div class=\"benefit-photo\" style=\"background-image: url('assets/beneficios-frutas.jpg')\">\r\n        </div>\r\n\r\n        <div class=\"benefit-info\">\r\n          <span>Beneficios de las frutas</span>\r\n          <p>\r\n            Las frutas nos aportan agua, vitaminas, minerales, fibra y diferentes compuestos\r\n            beneficiosos para el organismo. Además, por sus antioxidantes, previenen el envejecimiento\r\n            prematuro de las células, nos y nos ayudan a prevenir distintas enfermedades como problemas\r\n            cardiovasculares, trastornos digestivos, algunos tipos de cáncer y enfermedades neurodegenerativas.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"red\">\r\n    <mat-card>\r\n      <div class=\"benefit-card\">\r\n        <div class=\"benefit-photo\" style=\"background-image: url('assets/evitar-enfermedades.jpg')\">\r\n        </div>\r\n\r\n        <div class=\"benefit-info\">\r\n          <span>Enfermedades</span>\r\n          <p>Sin frutas ni verduras se reducen las defensas del organismo, ya que la mayor\r\n            parte de los antioxidantes que luchan contra los radicales libres que estresan\r\n            las células de nuestro cuerpo se encuentran en estos alimentos.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"green\">\r\n    <mat-card>\r\n      <div class=\"benefit-card\">\r\n        <div class=\"benefit-photo\" style=\"background-image: url('assets/deliciosas.jpg')\">\r\n        </div>\r\n        <div class=\"benefit-info\">\r\n          <span>Deliciosas</span>\r\n          <p>\r\n            Son dulces, sabrosas, tienen pocas calorías y prácticamente nada de grasas saturadas (aquellas\r\n            más perjudiciales para el organismo), por lo que son la mejor opción a la hora de los antojos.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div> -->"

/***/ }),

/***/ "./src/app/components/forms/about-us/advantages/advantages.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/forms/about-us/advantages/advantages.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 800px;\n  background-size: cover;\n  width: 100%;\n  text-align: center; }\n\n.inside-div {\n  background-color: rgba(255, 255, 255, 0.92);\n  border-top-left-radius: 150px;\n  border-bottom-right-radius: 150px;\n  border-bottom-left-radius: 20px;\n  border-top-right-radius: 20px;\n  margin-top: 50px;\n  display: inline-block;\n  height: 650px;\n  min-width: 1100px;\n  margin: 75px; }\n\n.cards {\n  display: block;\n  text-align: center;\n  padding-top: 35px; }\n\n.card {\n  display: inline-block;\n  width: 300px;\n  height: 280px;\n  margin: 5px;\n  background-color: transparent;\n  text-align: center;\n  border: transparent; }\n\n.card-img {\n  height: 60%; }\n\n.card-info {\n  border-radius: 10px;\n  width: 100%;\n  margin: 5px auto;\n  margin-top: 5px; }\n\n.card-info span {\n    font-size: 20px;\n    font-weight: bold;\n    color: #fc7a00; }\n\n.card-info p {\n    margin: 2px;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: center;\n    margin: 1px; }\n\n.benefits {\n  padding-top: 3px;\n  padding-left: 10%;\n  padding-right: 10%;\n  text-align: justify;\n  word-wrap: break-word; }\n\n.benefits mat-card {\n    min-height: 150px;\n    border-radius: 20px; }\n\n.benefit-card {\n  overflow: hidden; }\n\n.benefit-photo {\n  float: left;\n  min-height: 110px;\n  min-width: 110px;\n  border-radius: 85px;\n  background-size: cover; }\n\n.benefit-info {\n  padding-left: 135px; }\n\n.benefit-info span {\n    font-weight: bold;\n    font-size: 21px; }\n\n.benefit-info p {\n    font-size: 13px; }\n\n.green {\n  margin-top: 25px; }\n\n.green .benefit-photo {\n    border: 4px solid #03602a; }\n\n.green .benefit-info {\n    color: #03602a; }\n\n.green mat-card {\n    border-left: 8px solid #03602a;\n    background-color: rgba(3, 96, 42, 0.2); }\n\n.orange {\n  margin-top: 25px; }\n\n.orange .benefit-photo {\n    border: 4px solid #fc7a00; }\n\n.orange .benefit-info {\n    color: #962f03; }\n\n.orange mat-card {\n    border-right: 8px solid #fc7a00;\n    background-color: rgba(255, 98, 7, 0.1); }\n\n.red {\n  margin-top: 25px; }\n\n.red .benefit-photo {\n    border: 4px solid #ce0c0c; }\n\n.red .benefit-info {\n    color: #ce0c0c; }\n\n.red mat-card {\n    border-right: 8px solid #ce0c0c;\n    background-color: rgba(232, 0, 0, 0.1); }\n\n.advantages {\n  color: #03602a; }\n\n.disadvantages {\n  color: #ce0c0c; }\n\n@media (min-width: 600px) {\n  .tittle {\n    background-color: rgba(81, 158, 45, 0.3);\n    text-align: center;\n    font-size: 28px;\n    font-family: Arial, Helvetica, sans-serif;\n    opacity: .85; } }\n\n@media (max-width: 601px) {\n  .tittle {\n    background-color: rgba(81, 158, 45, 0.3);\n    padding-top: 10px;\n    text-align: center;\n    font-size: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    opacity: .85; }\n  .image-div {\n    display: none; }\n  .benefit-photo {\n    display: none; }\n  .benefit-info {\n    padding-left: 15px; }\n  .benefit-card {\n    display: hidden; } }\n"

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

module.exports = "<div class=\"header\">\r\n  <div class=\"main-card\">\r\n    <mat-card class=\"background-faded-green\">\r\n      <div class=\"image-div\">\r\n        <img class=\"image-content\" alt=\"employee\" src=\"assets/quienes-somos.png\">\r\n      </div>\r\n      <div class=\"content-info\">\r\n        <span class=\"tittle\" translate>ABOUT_US.WHO_WE_ARE.Tittle</span><br>\r\n        <span translate>ABOUT_US.WHO_WE_ARE.Description</span>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<app-advantages></app-advantages>\r\n\r\n<why-us></why-us>"

/***/ }),

/***/ "./src/app/components/forms/about-us/our-company/our-company.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/about-us/our-company/our-company.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 820px) {\n  .main-card {\n    padding-right: 15%;\n    padding-top: 96px;\n    overflow: hidden;\n    padding-bottom: 25px; }\n    .main-card mat-card {\n      border-radius: 50px;\n      max-height: 300px; }\n  .image-div {\n    float: left;\n    padding: 0px 35px 0 0px;\n    margin-left: -25px; }\n  .image-content {\n    margin-top: -111px;\n    min-width: 270px; }\n  .content-info {\n    color: whitesmoke;\n    text-align: justify;\n    font-size: 17px;\n    font-weight: 500; }\n    .content-info p {\n      opacity: 0.9; }\n    .content-info h6 {\n      opacity: 1; }\n    .content-info .tittle {\n      font-size: 30px; }\n  .header {\n    padding-top: 86px;\n    margin-bottom: -25px; } }\n\n@media (max-width: 819px) {\n  .main-card {\n    padding-left: 3%;\n    padding-right: 3%;\n    overflow: hidden;\n    padding-bottom: 25px; }\n    .main-card mat-card {\n      border-radius: 20px; }\n  .image-div {\n    display: none; }\n  .content-info {\n    color: whitesmoke;\n    padding-left: 10px;\n    font-size: 13px;\n    text-align: justify; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.9; }\n  .header {\n    padding-top: 120px; } }\n"

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
            selector: 'app-our-company',
            template: __webpack_require__(/*! ./our-company.component.html */ "./src/app/components/forms/about-us/our-company/our-company.component.html"),
            styles: [__webpack_require__(/*! ./our-company.component.scss */ "./src/app/components/forms/about-us/our-company/our-company.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurCompanyComponent);
    return OurCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/about-us/our-company/why-us/why-us.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/about-us/our-company/why-us/why-us.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\r\n  <div class=\"tittle\">\r\n    <span>¿Por qué elegirnos?</span>\r\n  </div>\r\n  \r\n<!-- SECCION TARJETAS -->\r\n<div class=\"center\" id=\"offer\">\r\n  <div class=\"card offer-card\" id=\"card1\" style=\"width: 18rem;\">\r\n    <img class=\"card-img-top\" src=\"assets/altos-estandares.png\" alt=\"calidad\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Altos estándares de calidad</h5>\r\n      <p class=\"card-text\">\r\n        Estamos comprometidos en seleccionar y distribuir productos de la más\r\n        alta calidad, llevando hasta donde estés la mejor selección de frutas.\r\n      </p>\r\n    </div>\r\n    <div class=\"btn-link\">\r\n      <a routerLink=\"/oferta\" routerLinkActive=\"active\"><button mat-button>Visitar</button></a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card offer-card\" id=\"card2\" style=\"width: 18rem;\">\r\n    <img class=\"card-img-top\" src=\"assets/nuestros-proveedores.png\" alt=\"Frutas\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Nuestros proveedores</h5>\r\n      <p class=\"card-text\">\r\n        Seleccionamos cuidadosamente a nuestros proveedores para que la fruta\r\n        esté siempre fresca y los productos de snack cuiden la salud del consumidor desde sus\r\n        ingredientes hasta su proceso de elaboración.\r\n      </p>\r\n    </div>\r\n    <div class=\"btn-link\">\r\n      <a routerLink=\"/oferta\" routerLinkActive=\"active\"><button mat-button>Visitar</button></a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card offer-card\" id=\"card3\" style=\"width: 18rem;\">\r\n    <img class=\"card-img-top\" src=\"assets/wood-box.png\" alt=\"box\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Empaques</h5>\r\n      <p class=\"card-text\">\r\n        Nos comprometemos con el ambiente al utilizar cajas de madera reutilizables en la\r\n        distribución y almacenamientos de nuestros productos.\r\n      </p>\r\n    </div>\r\n    <div class=\"btn-link\">\r\n      <a routerLink=\"/oferta\" routerLinkActive=\"active\"><button mat-button>Visitar</button></a>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/about-us/our-company/why-us/why-us.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/forms/about-us/our-company/why-us/why-us.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#offer {\n  overflow: auto; }\n  #offer .offer-card {\n    display: inline-block;\n    margin: 5px; }\n  #offer #offer > img {\n    height: 50px; }\n  .center {\n  padding-top: 20px;\n  text-align: center; }\n  .center .card-body {\n    background-color: rgba(255, 191, 0, 0.9);\n    opacity: .9;\n    height: 178px;\n    font-size: 13px; }\n  .center .btn-link {\n    background-color: #7eaf3b; }\n  .center .btn-link button {\n      width: 100%;\n      color: whitesmoke;\n      font-size: 18px; }\n  mat-grid-tile {\n  text-align: center;\n  border: 1px solid #dce0e8; }\n  mat-grid-tile p {\n    font-size: 13px; }\n  mat-grid-tile mat-icon {\n    font-size: 35px;\n    text-align: center !important; }\n  @media (min-width: 600px) {\n  #process {\n    padding-top: 10px;\n    margin: 1%; }\n    #process span {\n      padding-top: 15px; }\n    #process mat-icon {\n      margin-top: 10px; }\n  .tittle {\n    padding-top: 10px;\n    font-size: 28px;\n    height: 60px; } }\n  @media (max-width: 600px) {\n  #process {\n    padding-top: 20px;\n    margin: 1%; }\n    #process p {\n      font-size: 10px; }\n    #process h6 {\n      display: none; }\n    #process mat-icon {\n      font-size: 25px; }\n  .tittle {\n    font-size: 20px; } }\n  .card-img-top {\n  height: 180px;\n  width: 200px;\n  background-size: cover; }\n  .main {\n  padding-top: 30px; }\n  .tittle {\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: rgba(81, 158, 45, 0.3);\n  opacity: .85; }\n"

/***/ }),

/***/ "./src/app/components/forms/about-us/our-company/why-us/why-us.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/about-us/our-company/why-us/why-us.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WhyUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyUsComponent", function() { return WhyUsComponent; });
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

var WhyUsComponent = /** @class */ (function () {
    function WhyUsComponent() {
    }
    WhyUsComponent.prototype.ngOnInit = function () {
    };
    WhyUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'why-us',
            template: __webpack_require__(/*! ./why-us.component.html */ "./src/app/components/forms/about-us/our-company/why-us/why-us.component.html"),
            styles: [__webpack_require__(/*! ./why-us.component.scss */ "./src/app/components/forms/about-us/our-company/why-us/why-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WhyUsComponent);
    return WhyUsComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/benefits/for-company/benefits-company.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-company/benefits-company.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"benefits-div\">\r\n\r\n  <!-- TOP -->\r\n  <div class=\"main-card\">\r\n    <mat-card class=\"background-faded-green\">\r\n      <div class=\"image-container\" style=\"margin-top: -74px;\">\r\n        <img class=\"image\" mat-card-image alt=\"employee\" src='assets/beneficios-empresa.png'>\r\n      </div>\r\n      <div class=\"content-info\">\r\n        <span>BENEFICIOS PARA LA EMPRESA</span>\r\n        <p>\r\n          Cuidando la salud de sus colaboradores, usted cuida de su empresa.\r\n          La fruta en el trabajo según la Organización Mundial de la Salud (OMS) es la dieta adecuada.\r\n        </p>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <tittle-header \r\n  color='naranja'\r\n  text='Lista de beneficios (algun texto aqui)'></tittle-header>\r\n\r\n  <!-- BENEFICIOS -->\r\n  <div class=\"benefits\">\r\n\r\n    <div class=\"green\">\r\n      <mat-card>\r\n        <div class=\"benefit-card\">\r\n          <div class=\"benefit-photo\" style=\"background-image: url('https://www.lumens.com/on/demandware.static/-/Sites/default/dw8d6c6ae6/images/overlay/keep-in-touch-pop-up.jpg')\">\r\n          </div>\r\n\r\n          <div class=\"benefit-info\">\r\n            <span>Una imagen moderna a la empresa</span>\r\n            <p>Las empresas están tratando de distinguirse en el mercado laboral\r\n              para que los mejores candidatos las encuentren. Lo hacen de diferentes\r\n              maneras. Creemos que crear un lugar de trabajo saludable y amigable y,\r\n              al mismo tiempo, cuidar la salud de los empleados es un elemento muy importante\r\n              que afecta la imagen del empleador.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"orange\">\r\n      <mat-card>\r\n        <div class=\"benefit-card\">\r\n          <div class=\"benefit-photo\" style=\"background-image: url('assets/mayor-disposicion.jpg')\">\r\n          </div>\r\n\r\n          <div class=\"benefit-info\">\r\n            <span>Satisfacción y mayor disposición al trabajo.</span>\r\n            <p>Al preparar un bocadillo saludable, demuestra que la salud y\r\n              el bienestar de su equipo son importantes para usted y que desea cuidarlo con él.\r\n              Los empleados satisfechos están más dispuestos a realizar sus tareas, obtener una\r\n              mayor satisfacción en el trabajo y, por lo tanto, son más eficaces en la realización\r\n              de diversas tareas.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"green\">\r\n      <mat-card>\r\n        <div class=\"benefit-card\">\r\n          <div class=\"benefit-photo\" style=\"background-image: url('assets/ambiente-amigable.jpg')\">\r\n          </div>\r\n\r\n          <div class=\"benefit-info\">\r\n            <span>Un ambiente de trabajo amigable y saludable.</span>\r\n            <p>\r\n              Una merienda saludable para los empleados es una muy buena distinción para el empleador\r\n              en el mercado laboral. Para las personas empleadas, es una razón para sentirse orgulloso\r\n              del lugar donde trabajan y de los talentos potenciales, un activo adicional que pone a su\r\n              empresa a la luz de un lugar de trabajo moderno, apreciando el capital de las personas que\r\n              trabajan en ella.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"orange\">\r\n      <mat-card>\r\n        <div class=\"benefit-card\">\r\n          <div class=\"benefit-photo\" style=\"background-image: url('assets/menor-ausentismo.jpg')\">\r\n          </div>\r\n\r\n          <div class=\"benefit-info\">\r\n            <span>Menos ausentismo de los empleados</span>\r\n            <p>\r\n              La fruta para el trabajo es para muchas personas la única fuente de\r\n              vitaminas durante todo el día. Entregarlos a sus empleados y mejorar\r\n              su resistencia a muchas enfermedades. Cuide la salud de su equipo y\r\n              reduzca el ausentismo debido a resfriados / gripe y otras enfermedades en su empresa.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <benefits-employee></benefits-employee>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/benefits/for-company/benefits-company.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-company/benefits-company.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".benefits-div {\n  padding-top: 86px; }\n\n@media (min-width: 846px) {\n  .main-card {\n    padding-right: 5%;\n    margin-bottom: -16px;\n    overflow: hidden; }\n    .main-card mat-card {\n      border-radius: 50px;\n      margin-top: 50px; }\n  .image-container {\n    float: left;\n    padding: 10px 0 0 0px; }\n  .benefit-info {\n    margin-left: 140px; }\n  .content-info {\n    color: white;\n    margin-left: 120px;\n    text-align: justify;\n    font-size: 16px;\n    font-weight: 500;\n    height: 135px;\n    padding-top: 15px; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.85; } }\n\n@media (max-width: 845px) {\n  .main-card {\n    padding-left: 3%;\n    padding-top: 50px;\n    padding-right: 3%;\n    overflow: hidden; }\n    .main-card mat-card {\n      border-radius: 20px; }\n  .image-container {\n    display: none; }\n  .benefit-photo {\n    display: none; }\n  .benefit-info {\n    margin-left: 10px; }\n  .content-info {\n    color: white;\n    padding-left: 10px;\n    padding-top: 5px; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.85;\n      font-size: 16px;\n      color: white;\n      font-weight: 500; } }\n\n.benefits {\n  padding-top: 3px;\n  padding-left: 10%;\n  padding-right: 10%; }\n\n.benefits mat-card {\n    min-height: 150px;\n    background-repeat: repeat;\n    border-radius: 20px; }\n\n.benefit-card {\n  overflow: hidden; }\n\n.benefit-photo {\n  float: left;\n  min-height: 130px;\n  min-width: 130px;\n  padding: 10px;\n  border-radius: 85px;\n  background-size: cover; }\n\n.benefit-info span {\n  font-weight: bold; }\n\n.green {\n  margin-top: 25px; }\n\n.green .benefit-photo {\n    border: 4px solid #03602a; }\n\n.green .benefit-info {\n    color: #03602a; }\n\n.green mat-card {\n    border-left: 8px solid #03602a;\n    background-color: rgba(3, 96, 42, 0.2); }\n\n.orange {\n  margin-top: 25px; }\n\n.orange .benefit-photo {\n    border: 4px solid #fc7a00; }\n\n.orange .benefit-info {\n    color: #962f03; }\n\n.orange mat-card {\n    border-right: 8px solid #fc7a00;\n    background-color: rgba(255, 98, 7, 0.1); }\n"

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

module.exports = "<div class=\"benefits-div\">\r\n\r\n  <!-- TOP -->\r\n  <div class=\"main-card\">\r\n    <mat-card class=\"background-faded-green\">\r\n      <div class=\"image-container\" style=\"margin-top: -74px;\">\r\n        <img class=\"image\" mat-card-image alt=\"employee\" src=\"assets/beneficios-empleado.png\">\r\n      </div>\r\n      <div class=\"content-info\">\r\n        <span>BENEFICIOS PARA LOS EMPLEADOS</span>\r\n        <p>\r\n            La fruta para los empleados en la oficina tiene un efecto beneficioso en nuestro bienestar. \r\n            La cantidad óptima recomendada de verduras y frutas es de 5 porciones al día.\r\n        </p>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <!-- BENEFICIOS -->\r\n  <div class=\"benefits\">\r\n\r\n    <div class=\"green\">\r\n      <mat-card>\r\n        <div class=\"benefit-card\">\r\n          <div class=\"benefit-photo\" style=\"background-image: url('assets/salud-inmunidad.jpg')\"></div>\r\n\r\n          <div class=\"benefit-info\">\r\n            <span>Salud e inmunidad</span>\r\n            <p>Los ingleses dicen \"Una manzana al día mantiene alejado al médico\".\r\n              Esto es confirmado por numerosos estudios. El consumo diario de frutas y\r\n              verduras tiene un efecto positivo en nuestra salud. Las vitaminas y los\r\n              minerales que contienen las frutas aumentan nuestra inmunidad y nos hacen\r\n              sentir más saludables y llenos de energía.</p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"orange\">\r\n      <mat-card>\r\n        <div class=\"benefit-card\">\r\n          <div class=\"benefit-photo\" style=\"background-image: url('assets/mayor-voluntad.jpg')\">\r\n          </div>\r\n\r\n          <div class=\"benefit-info\">\r\n            <span>Mayor voluntad de trabajar.</span>\r\n            <p>Los minerales contenidos en las frutas afectan positivamente nuestro estado de ánimo\r\n              y nos dan energía que, en efecto, se traduce en una mayor disposición para hacer ...\r\n              cualquier cosa. La investigación confirma que comer productos saludables en el trabajo\r\n              puede aumentar nuestra eficiencia hasta en un 20%.</p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"green\">\r\n      <mat-card>\r\n        <div class=\"benefit-card\">\r\n          <div class=\"benefit-photo\" style=\"background-image: url('assets/sabrosos-aperitivos.jpg')\">\r\n          </div>\r\n\r\n          <div class=\"benefit-info\">\r\n            <span>Sabrosos aperitivos en el trabajo</span>\r\n            <p>A todos les gusta comer bocadillos en el trabajo, desafortunadamente los chips y\r\n              barras que se encuentran en las máquinas contienen mucha azúcar, grasas trans,\r\n              endurecedores y conservantes. A veces es difícil eliminarlos porque el acceso a\r\n              frutas y verduras frescas no está disponible en todas partes.\r\n              Es por eso que los entregamos directamente a la cocina de la compañía, para que\r\n              pueda comunicarse con ellos en cualquier momento.</p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"orange\">\r\n      <mat-card>\r\n        <div class=\"benefit-card\">\r\n          <div class=\"benefit-photo\" style=\"background-image: url('assets/mejor-humor.jpg')\">\r\n          </div>\r\n\r\n          <div class=\"benefit-info\">\r\n            <span>Mejor humor</span>\r\n            <p>\r\n                Las frutas contienen vitaminas que producen serotonina y endorfina, químicos naturales \r\n                encargados de inducir la sensación de felicidad. Un estudio realizado por la Universidad \r\n                de Otago (Nueva Zelanda) indica que el aumento de la ingesta de frutas y verduras puede \r\n                conducir a beneficios rápidos para el bienestar psicológico. Por la tanto, la fruta en la \r\n                oficina se traduce en mejor humor. \r\n            </p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/benefits/for-employee/benefits-employee.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forms/benefits/for-employee/benefits-employee.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 846px) {\n  .main-card {\n    margin-bottom: -16px;\n    overflow: hidden; }\n    .main-card mat-card {\n      border-radius: 50px;\n      margin-top: 50px; }\n  .benefits-div {\n    padding-top: 86px;\n    margin-left: -117px; }\n  .image-container {\n    float: left;\n    padding: 10px 0 0 0px; }\n  .benefit-info {\n    margin-left: 140px; }\n  .content-info {\n    color: white;\n    margin-left: 120px;\n    text-align: justify;\n    font-size: 16px;\n    font-weight: 500;\n    height: 135px;\n    padding-top: 15px; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.85; } }\n\n@media (max-width: 845px) {\n  .main-card {\n    padding-left: 3%;\n    padding-top: 50px;\n    padding-right: 3%;\n    overflow: hidden; }\n    .main-card mat-card {\n      border-radius: 20px; }\n  .benefits-div {\n    padding-top: 86px; }\n  .image-container {\n    display: none; }\n  .benefit-photo {\n    display: none; }\n  .benefit-info {\n    margin-left: 10px; }\n  .content-info {\n    color: white;\n    padding-left: 10px;\n    padding-top: 5px; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.85;\n      font-size: 16px;\n      color: white;\n      font-weight: 500; } }\n\n.benefits {\n  padding-top: 3px;\n  padding-left: 10%;\n  padding-right: 10%; }\n\n.benefits mat-card {\n    min-height: 150px;\n    background-repeat: repeat;\n    border-radius: 20px; }\n\n.benefit-card {\n  overflow: hidden; }\n\n.benefit-photo {\n  float: left;\n  min-height: 130px;\n  min-width: 130px;\n  padding: 10px;\n  border-radius: 85px;\n  background-size: cover; }\n\n.benefit-info span {\n  font-weight: bold; }\n\n.green {\n  margin-top: 25px; }\n\n.green .benefit-photo {\n    border: 4px solid #03602a; }\n\n.green .benefit-info {\n    color: #03602a; }\n\n.green mat-card {\n    border-left: 8px solid #03602a;\n    background-color: rgba(3, 96, 42, 0.2); }\n\n.orange {\n  margin-top: 25px; }\n\n.orange .benefit-photo {\n    border: 4px solid #fc7a00; }\n\n.orange .benefit-info {\n    color: #962f03; }\n\n.orange mat-card {\n    border-right: 8px solid #fc7a00;\n    background-color: rgba(255, 98, 7, 0.1); }\n"

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

module.exports = "<div class=\"content\">\r\n\r\n  <div id=\"#left-panel\" class=\"left-div\">\r\n    <mat-card class=\"example-card\">\r\n      <!-- <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shiba Inu</mat-card-title>\r\n      </mat-card-header> -->\r\n      <img mat-card-image src=\"assets/contactenos.jpg\" alt=\"Photo of a Shiba Inu\">\r\n      <mat-card-content>\r\n        <p>\r\n          Preferimos la atención personal donde podamos atenderle de manera inmediata sin espera, \r\n          por eso lo invitamos a comunicarse con nosotros a través de nuestros diversos canales.\r\n        </p>\r\n        <span class=\"icons\">\r\n            <a href=\"https://www.instagram.com\"><i class=\"fa fa-instagram\"></i></a>&nbsp; &nbsp; &nbsp;\r\n            <a href=\"https://www.facebook.com\"><i class=\"fa fa-facebook\"></i></a>&nbsp;  &nbsp; &nbsp;\r\n            <a href=\"https://www.twitter.com\"><i class=\"fa fa-twitter\"></i></a>  \r\n        </span>\r\n        <p> </p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div id=\"#right-panel\" class=\"form-container contact-form\">\r\n      <mat-card>\r\n          <div class=\"contact-info\">\r\n              <span class=\"tittle\">Señor Fruits</span><br><br>\r\n              <p>Avenida Siempreviva 123, Zapopan, Jalisco, Mexico, 45050</p>\r\n              <p>333-333-3333</p>            \r\n          </div>          \r\n        </mat-card>\r\n  </div>\r\n\r\n  <!-- FORMULARIO -->\r\n  <!-- <div id=\"#right-panel\" class=\"form-container contact-form\">\r\n\r\n    <mat-form-field class=\"left-xs\" style=\"margin-top: 10px;\">\r\n      <input matInput placeholder=\"Nombre o Empresa\" [formControl]=\"name\" required>\r\n      <mat-error *ngIf=\"name.invalid\">{{getErrorMessages('name')}}</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"left-xs\">\r\n      <input matInput placeholder=\"Correo electrónico\" [formControl]=\"email\" required>\r\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessages('email')}}</mat-error>\r\n    </mat-form-field>\r\n\r\n    <div class=\"left-xs\">\r\n      <mat-form-field>\r\n        <input matInput type=\"tel\" placeholder=\"Teléfono\" #tel maxlength=\"20\" [formControl]=\"telephone\">\r\n        <mat-hint align=\"end\">{{tel.value.length}} / 20</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <mat-form-field class=\"left-xs\">\r\n      <textarea matInput placeholder=\"Comentario\" rows=\"10\" [formControl]=\"comment\" required></textarea>\r\n      <mat-error *ngIf=\"comment.invalid\">{{getErrorMessages('comment')}}</mat-error>\r\n      <mat-hint align=\"start\"><i>No enviar información personal</i></mat-hint>\r\n    </mat-form-field>\r\n\r\n    <div class=\"top-s\">\r\n      <button mat-button color=\"primary\" (click)=\"send()\" class=\"submit-btn\">\r\n        <span class=\"text\">Enviar</span>\r\n      </button>\r\n    </div>\r\n\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/contact/contact/contact.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/contact/contact/contact.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\n  .left-div {\n    float: left;\n    width: 30%;\n    margin-left: 10%; }\n  .tittle {\n    font-size: 24px;\n    color: #7EAF3B;\n    text-align: center;\n    margin-bottom: 25px; }\n  .contact-form {\n    margin-right: 25px;\n    width: 50%;\n    float: right;\n    margin-right: 5%; }\n  .icons {\n    font-size: 25px;\n    text-align: right;\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    color: #7EAF3B;\n    opacity: .8; }\n    .icons a {\n      color: #7EAF3B; } }\n\n@media (max-width: 600px) {\n  .left-div {\n    display: none; }\n  .contact-form {\n    margin-left: 2%;\n    width: 93%;\n    float: none;\n    margin-right: 2%; } }\n\n.form-container {\n  display: flex;\n  flex-direction: column; }\n\n.submit-btn {\n  background-color: #7EAF3B;\n  width: 55px !important;\n  text-align: center;\n  position: relative;\n  right: 5px;\n  bottom: 0;\n  float: right; }\n\n.submit-btn .text {\n    font-size: 18px;\n    color: whitesmoke !important; }\n\n.example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.notification-check {\n  margin-left: 5px;\n  font-size: 13px;\n  font-style: italic;\n  opacity: 0.8; }\n\n#right-panel {\n  padding-left: 10px; }\n\n.contact-form {\n  border-radius: 15px;\n  min-height: 500px; }\n\n.contact-form mat-form-field {\n    margin-left: 10px;\n    margin-right: 15px; }\n\n.contact-form mat-form-field input {\n      color: black;\n      opacity: .9; }\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../index */ "./src/app/index.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ContactComponent(snackBar, router, emailService) {
        this.snackBar = snackBar;
        this.router = router;
        this.emailService = emailService;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.telephone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]);
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.getErrorMessages = function (controlName) {
        switch (controlName) {
            case 'email':
                return this.email.hasError('required') ? 'Ingresa un correo electrónico' :
                    this.email.hasError('email') ? 'Correo electrónico inválido' :
                        '';
            case 'name':
                return this.name.hasError('required'), 'Ingresa un nombre';
            case 'telephone':
                return this.name.hasError('required'), 'Ingresa un teléfono, mínimo 10 caracteres';
            case 'comment':
                return this.name.hasError('required'), 'Ingresa un comentario';
            default:
                break;
        }
    };
    ContactComponent.prototype.send = function () {
        if (this.checkFormValid()) {
            this.sendEmail();
            this.snackBar.open('Comentario enviado, verificar su bandeja de entrada', 'OK', {
                duration: 4000
            });
            this.clearForms();
            this.router.navigate(['contacto']);
            return;
        }
        alert('Favor de llenar todos los campos faltantes');
    };
    ContactComponent.prototype.sendEmail = function () {
        this.emailData = {
            name: this.name.value,
            comment: this.comment.value,
            email: this.email.value,
            telephone: this.telephone.value,
            typeEmail: _index__WEBPACK_IMPORTED_MODULE_3__["TypeEmail"].Contacto
        };
        this.emailService.sendEmail(this.emailData);
    };
    ContactComponent.prototype.checkFormValid = function () {
        return this.isValidForm = (this.name.valid &&
            this.email.valid &&
            this.comment.valid &&
            this.telephone.valid);
    };
    ContactComponent.prototype.clearForms = function () {
        this.name.setValue('');
        this.email.setValue('');
        this.telephone.setValue('');
        this.comment.setValue('');
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/forms/contact/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/forms/contact/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_email_service__WEBPACK_IMPORTED_MODULE_4__["EmailRestService"]])
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

module.exports = "<div class=\"content\">\r\n\r\n<div class=\"main-card\">\r\n    <mat-card class=\"background-faded-green\">\r\n        <div class=\"image-div\">\r\n          <img class=\"image\" mat-card-image alt=\"employee\" src=\"assets/questions.svg\">\r\n        </div>\r\n        <div class=\"content-info\">\r\n          <span>Preguntas frecuentes</span>\r\n          <p>\r\n              Aqui se leen preguntas utiles, en caso de tener alguna otra pregunta \r\n              favor de contactarnos y con gusto le atenderemos\r\n          </p>\r\n        </div>\r\n      </mat-card>\r\n</div>\r\n\r\n<div class=\"questions-content\">\r\n\r\n    \r\n      <div id=\"right\">\r\n        <mat-accordion id=\"questions\">\r\n    \r\n          <mat-expansion-panel [expanded]=\"true\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                De donde viene la fruta?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Cada cuando puedo cambiar mi pedido?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Pregunta 3?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Pregunta 4?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Pregunta 5?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Pregunta 6?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Pregunta 7?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Pregunta 8?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Pregunta 9?\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                {{panelOpenState ? '' : ''}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n          </mat-expansion-panel>\r\n    \r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    Pregunta 10?\r\n                </mat-panel-title>\r\n                <mat-panel-description class=\"\">\r\n                  {{panelOpenState ? '' : ''}}\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <p>Respuesta bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\r\n                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>\r\n            </mat-expansion-panel>\r\n    \r\n        </mat-accordion>\r\n    \r\n      </div>\r\n\r\n</div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/contact/questions/questions.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/contact/questions/questions.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#questions mat-expansion-panel {\n  border-left: 3px solid #337acc;\n  margin: 10px; }\n\n#left {\n  float: left;\n  margin-left: 15px; }\n\n@media (min-width: 600px) {\n  #right {\n    margin: 0 2% 0 0; }\n  .image-div {\n    float: left;\n    max-width: 32%; }\n  .main-card {\n    padding-left: 5%;\n    padding-right: 5%;\n    min-height: 250px;\n    overflow: hidden; }\n    .main-card mat-card {\n      border-radius: 50px; }\n  .content-info {\n    color: whitesmoke;\n    font-size: 15px;\n    margin-left: 235px; }\n    .content-info span {\n      font-size: 30px; }\n    .content-info p {\n      opacity: 0.9; }\n    .content-info h6 {\n      opacity: 1; } }\n\n@media (max-width: 600px) {\n  .main-card {\n    padding-left: 3%;\n    padding-right: 3%;\n    overflow: hidden; }\n    .main-card mat-card {\n      border-radius: 20px; }\n  #right {\n    width: 100%; }\n  .image-div {\n    display: none; }\n  .content-info {\n    color: whitesmoke;\n    padding-left: 10px;\n    font-size: 13px; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.9; } }\n\n.image {\n  min-width: 250px;\n  min-height: 180px;\n  max-height: 200px;\n  max-width: 220px; }\n"

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

module.exports = "@media (min-width: 600px) {\n  .right-div {\n    float: right;\n    width: 30%; }\n  .left-div {\n    float: left;\n    width: 65%;\n    padding-top: 20px; }\n    .left-div span {\n      color: whitesmoke;\n      opacity: .9;\n      font-size: 25px;\n      font-family: Arial, Helvetica, sans-serif; }\n    .left-div p {\n      font-size: 15px;\n      color: white;\n      opacity: .9; }\n    .left-div button {\n      background-color: #ffce0c;\n      border-radius: 15px; } }\n\n@media (max-width: 600px) {\n  .right-div {\n    display: none; }\n  .left-div {\n    width: 92%;\n    padding-left: 4%;\n    padding-top: 15px; }\n    .left-div span {\n      color: whitesmoke;\n      opacity: .9;\n      font-size: 25px;\n      font-family: Arial, Helvetica, sans-serif; }\n    .left-div p {\n      font-size: 15px;\n      color: white;\n      opacity: .9; }\n    .left-div button {\n      background-color: #ffce0c;\n      border-radius: 15px; } }\n\n.main {\n  overflow: hidden;\n  background-color: #519e2d;\n  height: 160px;\n  margin-bottom: 30px;\n  margin-top: 65px; }\n\n.banana {\n  height: 140px;\n  min-width: 150px;\n  float: right;\n  padding-top: 10px;\n  padding-right: 8%; }\n"

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

/***/ "./src/app/components/forms/home/extra-content/extra-content.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/home/extra-content/extra-content.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"left-section\">\r\n    <span>¿Porque Nosotros?</span>\r\n    <p>\r\n        La calidad y la satisfacción del cliente son fructíferas. Llevamos 7 años \r\n        suministrando fruta a las oficinas y durante ese tiempo nos hemos ganado la \r\n        confianza de más de 50 empresas reconocidas en Mexico. Sabemos que la \r\n        calidad es lo más importante para usted, por lo que cada fruta está envuelta \r\n        a mano y verificada para la calidad visual. Las personas responsables de comprar \r\n        fruta siempre verifican su sabor antes de comprar fruta, por lo que solo las \r\n        mejores variedades lo alcanzan. Las mejores frutas en el trabajo son frutas de Frutas Alvarez.\r\n    </p>\r\n    <div class=\"btn\">\r\n        <a routerLink=\"/porque-nosotros\" routerLinkActive=\"active\"><button mat-button><span>Ver</span></button></a>\r\n    </div>    \r\n  </div>\r\n\r\n  <div class=\"right-section\">\r\n    <img src=\"assets/fruit-gif.gif\">\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/forms/home/extra-content/extra-content.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/home/extra-content/extra-content.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\n  .left-section {\n    float: left;\n    width: 50%;\n    padding-left: 15%; }\n  .right-section {\n    float: right;\n    width: 50%; } }\n\n@media (max-width: 600px) {\n  .left-section {\n    width: 80%;\n    margin-left: 10%;\n    font-size: 15px; }\n  .right-section {\n    float: right;\n    display: none; } }\n\n.main {\n  padding-top: 45px;\n  overflow: hidden;\n  padding-bottom: 45px; }\n\n.left-section span {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 33px;\n  color: #519e2d;\n  opacity: .8; }\n\n.left-section p {\n  padding-top: 20px;\n  color: rgba(3, 96, 42, 0.8);\n  font-family: Arial, Helvetica, sans-serif;\n  opacity: 1;\n  text-align: justify; }\n\n.btn button {\n  width: 170px;\n  border-radius: 15px;\n  background-color: #519e2d; }\n\n.btn span {\n  font-size: 18px;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/forms/home/extra-content/extra-content.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/home/extra-content/extra-content.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExtraContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraContentComponent", function() { return ExtraContentComponent; });
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

var ExtraContentComponent = /** @class */ (function () {
    function ExtraContentComponent() {
    }
    ExtraContentComponent.prototype.ngOnInit = function () {
    };
    ExtraContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'extra-content',
            template: __webpack_require__(/*! ./extra-content.component.html */ "./src/app/components/forms/home/extra-content/extra-content.component.html"),
            styles: [__webpack_require__(/*! ./extra-content.component.scss */ "./src/app/components/forms/home/extra-content/extra-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraContentComponent);
    return ExtraContentComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-top center\">\r\n\r\n  <!-- SECCION  CARRUSEL -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <ngb-carousel>\r\n        <ng-template ngbSlide>\r\n          <img src='assets/carousel-1.jpg' style=\"width: 100%\" alt=\"fruta 1\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Paquetes frescos</h3>\r\n            <p><a class=\"carrusel-link\" routerLink=\"/oferta\" routerLinkActive=\"active\">Leer mas ...</a></p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src='assets/carousel-3.jpg' style=\"width: 100%\" alt=\"fruta 2\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Titulo Sr Fruits Imagen 2</h3>\r\n            <p>Informacion imagen Sr Fruits 2, detalles</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src='assets/carousel-2.jpg' style=\"width: 100%\" alt=\"fruta 3\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Titulo Sr Fruits Imagen 3</h3>\r\n            <p>Informacion imagen Sr Fruits 3, detalles</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src='assets/carousel-4.jpg' style=\"width: 100%\" alt=\"fruta 4\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Titulo Sr Fruits Imagen 4</h3>\r\n            <p>Informacion imagen Sr Fruits 4, detalles cada imagen 5 segndos</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src='assets/carousel-7.jpg' style=\"width: 100%\" alt=\"fruta 5\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Titulo Sr Fruits Imagen 5</h3>\r\n            <p>Informacion imagen Sr Fruits 5, detalles</p>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SECCION TARJETAS -->\r\n  <div class=\"center\" id=\"offer\">\r\n    <div class=\"card offer-card\" id=\"card1\" style=\"width: 18rem;\">\r\n      <img class=\"card-img-top\" src=\"assets/field-2.jpg\" alt=\"Campesinos\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Nuestra oferta</h5>\r\n        <p class=\"card-text\">\r\n            Garantizamos un precio fijo y accesible durante todo el año; empaques sustentables y \r\n            entregas puntuales en el tiempo acordado.\r\n            Además, tienes la opción de recibir tu pedido 1 o 2 veces a la semana para garantizar \r\n            frescura y disponibilidad de nuestros productos.            \r\n        </p>\r\n      </div>\r\n      <div class=\"btn-link\">\r\n        <a routerLink=\"/oferta\" routerLinkActive=\"active\"><button mat-button>Visitar</button></a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card offer-card\" id=\"card2\" style=\"width: 18rem;\">\r\n      <img class=\"card-img-top\" src=\"assets/field-2.jpg\" alt=\"Frutas\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Educación nutricional</h5>\r\n        <p class=\"card-text\">\r\n            Si deseas promover una alimentación saludable para tu personal, tenemos la solución perfecta para ti.\r\n            Un hábito alimenticio saludable y balanceado comienza con pequeñas acciones cotidianas que logran grandes cambios.            \r\n        </p>\r\n      </div>\r\n      <div class=\"btn-link\">\r\n        <a routerLink=\"/oferta\" routerLinkActive=\"active\"><button mat-button>Visitar</button></a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card offer-card\" id=\"card3\" style=\"width: 18rem;\">\r\n      <img class=\"card-img-top\" src=\"assets/field-2.jpg\" alt=\"Campo mexicano\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Botanas para conferencias</h5>\r\n        <p class=\"card-text\">\r\n            <br/>¿Tienes capacitaciones, conferencias o reuniones de negocios en puerta? \r\n            Consulta nuestra oferta preparada especialmente para tales ocasiones. \r\n            Aperitivos frescos y saludables para este tipo de eventos garantizan el bienestar \r\n            de los participantes.\r\n        </p>\r\n      </div>\r\n      <div class=\"btn-link\">\r\n        <a routerLink=\"/oferta\" routerLinkActive=\"active\"><button mat-button>Visitar</button></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- SECCION PROCESO -->\r\n\r\n  <process-steps></process-steps>\r\n\r\n  <extra-add-info></extra-add-info>\r\n\r\n  <extra-content></extra-content>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#offer {\n  overflow: auto;\n  padding-top: 50px; }\n  #offer .offer-card {\n    display: inline-block;\n    margin: 5px; }\n  #offer #offer > img {\n    height: 50px; }\n  .center {\n  text-align: center;\n  margin-bottom: 65px; }\n  .center .card-body {\n    background-color: rgba(255, 191, 0, 0.9);\n    opacity: .9;\n    height: 265px;\n    font-size: 15px; }\n  .center .btn-link {\n    background-color: #7eaf3b; }\n  .center .btn-link button {\n      width: 100%;\n      color: whitesmoke;\n      font-size: 18px; }\n  mat-grid-tile {\n  text-align: center;\n  border: 1px solid #dce0e8; }\n  mat-grid-tile p {\n    font-size: 13px; }\n  mat-grid-tile mat-icon {\n    font-size: 35px;\n    text-align: center !important; }\n  @media (min-width: 600px) {\n  #process {\n    padding-top: 10px;\n    margin: 1%; }\n    #process span {\n      padding-top: 15px; }\n    #process mat-icon {\n      margin-top: 10px; }\n  .carousel-top {\n    padding-top: 96px; } }\n  @media (max-width: 600px) {\n  #process {\n    padding-top: 20px;\n    margin: 1%; }\n    #process p {\n      font-size: 10px; }\n    #process h6 {\n      display: none; }\n    #process mat-icon {\n      font-size: 25px; }\n  .center {\n    padding-top: 96px; }\n  .row h3 {\n    display: none; }\n  .row p {\n    font-size: 15px; } }\n  .card-img-top {\n  height: 200px;\n  width: 240px; }\n  .carrusel-link {\n  color: white;\n  font-size: 20px; }\n"

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
        config.interval = 5000;
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

module.exports = "<tittle-header color='verde' text='¿Como funciona?'></tittle-header>\r\n<div class=\"main-process\">\r\n    <div class=\"step-card\" id=\"order\">\r\n        <div class=\"image-card\" style=\"background-image: url('assets/step-order.png')\"></div>\r\n        <div class=\"description\">\r\n            <p>ORDENA</p>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            Elige el paquete que deseas, la cantidad de porciones y días de entrega: lunes y/o miércoles. \r\n            Inmediatamente nos pondremos en contacto contigo para concluir el proceso de compra.<br/><br/><br/>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"step-card\" id=\"receive\">\r\n        <div class=\"image-card\" style=\"background-image: url('assets/step-receive.png')\"></div>\r\n        <div class=\"description\">\r\n            <div class=\"description\">\r\n                <p>RECIBE TU PEDIDO</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            Las entregas se realizan en las primeras horas laborales de los días lunes y miércoles. \r\n            Así garantizamos que la fruta que recibas sea la más fresca. \r\n            Nuestro servicio está disponible dentro de la ZMG. <br/><br/><br/>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"step-card\" id=\"payment\">\r\n        <div class=\"image-card\" style=\"background-image: url('assets/step-pay.png')\"></div>\r\n        <div class=\"description\">\r\n            <p>PAGOS FLEXIBLES</p>\r\n        </div>\r\n        <div class=\"card-text\">\r\n            Una vez entregado tu pedido, te enviaremos la factura correspondiente para que \r\n            realices el pago dentro de los siguientes 7 días hábiles mediante transferencia \r\n            electrónica, depósito bancario o en OXXO. \r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/home/process-steps/process-steps.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/forms/home/process-steps/process-steps.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-card {\n  height: 445px;\n  width: 260px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 25px;\n  margin: 15px; }\n\n.image-card {\n  background-size: cover;\n  height: 190px;\n  width: 185px;\n  margin: 0 auto; }\n\n.description {\n  text-align: center;\n  width: 190px;\n  height: 35px;\n  color: white;\n  border-radius: 15px;\n  font-weight: 500;\n  font-size: 18px;\n  margin: 0 auto;\n  margin-top: 15px;\n  vertical-align: middle; }\n\n.description p {\n    padding-top: 4px; }\n\n.card-text {\n  padding-top: 15px;\n  font-size: 16px;\n  margin: 5px;\n  font-weight: 500; }\n\n.main-process {\n  padding-top: 10px;\n  margin-top: 40px;\n  background-color: transparent;\n  display: block; }\n\n.main-process #order {\n    color: #f40000;\n    opacity: .9;\n    border: 2px solid #f40000; }\n\n.main-process #order .description {\n      background-color: #f40000; }\n\n.main-process #receive {\n    color: #62912b;\n    border: 2px solid #79bf28; }\n\n.main-process #receive .description {\n      background-color: #79bf28; }\n\n.main-process #payment {\n    color: #ff7404;\n    border: 2px solid #ff8e04; }\n\n.main-process #payment .description {\n      background-color: #ff8e04; }\n"

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

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"center\">\r\n    <!-- SECCION TARJETAS -->\r\n    <div class=\"center\" id=\"offer\">\r\n      <div class=\"card offer-card\" style=\"width: 18rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/field-2.jpg\" alt=\"Campesinos\">\r\n        <div class=\"\">\r\n          <div class=\"pkg-description card-body\">\r\n            <span class=\"card-title\">Estándar</span>\r\n            <p>\r\n              2 kg Manzana<br />\r\n              2 kg Plátano<br />\r\n              2 kg Fruta de temporada<br />\r\n              Entrega incluida<br />\r\n            </p>\r\n            <span class=\"price\">$ 100 precio final</span>\r\n          </div>\r\n          <div class=\"capacity\">\r\n            <span>\r\n              <mat-icon>person</mat-icon> Hasta 40 personas\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"btn-link\">\r\n          <button mat-button>Pedir</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card offer-card\" style=\"width: 18rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/field-2.jpg\" alt=\"Frutas\">\r\n        <div class=\"\">\r\n          <div class=\"pkg-description card-body\">\r\n            <span class=\"card-title\">Básico</span>\r\n            <p>\r\n              2 kg Manzana<br />\r\n              2 kg Plátano<br />\r\n              2 kg Fruta de temporada<br />\r\n              Entrega incluida<br />\r\n            </p>\r\n            <span class=\"price\">$ 100 precio final</span>\r\n          </div>\r\n          <div class=\"capacity\">\r\n            <span>\r\n              <mat-icon>person</mat-icon> Hasta 40 personas\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"btn-link\">\r\n          <button mat-button>Pedir</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card offer-card\" style=\"width: 18rem;\">\r\n        <img class=\"card-img-top\" src=\"assets/field-2.jpg\" alt=\"Campo mexicano\">\r\n        <div class=\"\">\r\n          <div class=\"pkg-description card-body\">\r\n            <span class=\"card-title\">Mezcla +2</span>\r\n            <p>\r\n              2 kg Manzana<br />\r\n              3 kg Plátano<br />\r\n              3 kg Fruta de temporada<br />\r\n              1 kg de uva\r\n            </p>\r\n          </div>\r\n          <div class=\"capacity\">\r\n            <span>\r\n              <mat-icon>person</mat-icon> Hasta 40 personas\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"btn-link\">\r\n          <button mat-button>Pedir</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"advantages\">\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Flexibilidad -</strong> Posibilidad de cambiar el producto cuando se deseé\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Accesible -</strong> Paquetes para cualquier presupuesto\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Capacidad -</strong> Podemos proveer a empresas de cualquier tamaño\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Entrega -</strong> Llevamos el producto hasta su oficina sin costo\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Frescura -</strong> Trabajamos con las frutas de la mejor calidad garantizada\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Atención -</strong> Con gusto atenderemos cualquier aclaración que necesite 24/7\r\n      </ngb-alert>\r\n    </p>\r\n    <p>\r\n      <ngb-alert type=\"success\" [dismissible]=\"false\">\r\n        <strong>Presentacion -</strong> Contenedores diseñados especialmente para el producto\r\n      </ngb-alert>\r\n    </p>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/products/offer/offer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/forms/products/offer/offer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#offer {\n  overflow: auto; }\n  #offer .offer-card {\n    display: inline-block;\n    margin: 5px; }\n  #offer #offer > img {\n    height: 50px; }\n  .center {\n  text-align: center; }\n  .center .card-body {\n    background-color: rgba(255, 191, 0, 0.9);\n    opacity: .9;\n    font-size: 15px;\n    text-align: center;\n    padding: 0.25rem; }\n  .center .card-body span {\n      font-size: 25px;\n      color: #004700; }\n  .center .card-body p {\n      color: rgba(0, 71, 0, 0.9); }\n  .center .btn-link {\n    background-color: #7eaf3b;\n    height: 36px; }\n  .center .btn-link button {\n      width: 100%;\n      height: 100%;\n      color: whitesmoke;\n      font-size: 20px;\n      padding-top: 0px; }\n  .card-img-top {\n  height: 200px;\n  width: 240px; }\n  .pkg-description {\n  height: 180px; }\n  .pkg-description .price {\n    font-size: 14px !important; }\n  .capacity {\n  font-size: 15px;\n  background-color: rgba(255, 191, 0, 0.9); }\n  .capacity span {\n    color: black;\n    opacity: .6; }\n  @media (min-width: 600px) {\n  .margin-top {\n    margin-top: 25px; }\n  #advantages {\n    padding-top: 25px;\n    width: 55%;\n    margin: auto; } }\n  @media (max-width: 600px) {\n  .margin-top {\n    margin-top: 0px; }\n  #advantages {\n    padding-top: 25px;\n    width: 98%;\n    margin: auto; } }\n"

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

module.exports = "<div>\r\n  <mat-card class=\"background green-color\">\r\n    <h5 class=\"send-title\"><b>Calculo de fruta necesaria:</b></h5>\r\n    <mat-card-content>\r\n      <p #info>Una caja puede proveer a <b>{{peoplePerBox}}</b> colaboradores</p>\r\n      <br>\r\n      <p>\r\n        <mat-icon>group</mat-icon><b> Colaboradores:</b> <b> {{employees}}</b>&nbsp;\r\n        &nbsp;<mat-icon>local_shipping</mat-icon><b> Entregas semanales: {{deliveries}}</b>\r\n      </p>\r\n      <p>\r\n        <mat-icon>shopping_basket</mat-icon><b> Porciones: {{employees * deliveries}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mat-icon>inbox</mat-icon><b> Cajas semanales:  {{boxes}}</b> \r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n<!-- TARJETA DE SOLICITUD -->\r\n<!-- <div class=\"card-buttom\">\r\n  <mat-card class=\"background green-color\">\r\n    <h5 class=\"send-title\"><b>Solicitar pedido:</b></h5>\r\n    <p>Nos contactaremos con usted en un periodo máximo de una hora</p>\r\n    <mat-card-content>\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Nombre o Empresa\" [formControl]=\"name\" required>\r\n          <mat-error *ngIf=\"name.invalid\">{{getErrorMessages('name')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Correo electrónico\" [formControl]=\"email\" required>\r\n          <mat-error *ngIf=\"email.invalid\">{{getErrorMessages('email')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput type=\"tel\" placeholder=\"Teléfono\" #tel maxlength=\"20\" [formControl]=\"telephone\" required>\r\n          <mat-hint align=\"end\">{{tel.value.length}} / 20</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div> -->\r\n\r\n<div class=\"top-s\" id=\"buttons\">\r\n  <div id=\"left-btn\">\r\n    <button mat-button color=\"\" [mat-dialog-close]=\"true\" class=\"\">\r\n      <span class=\"text\">Cerrar</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div id=\"right-btn\">\r\n    <button mat-button color=\"primary\" (click)=\"redirectToRequest()\" [mat-dialog-close]=\"true\" class=\"green-btn\">\r\n      <span class=\"text\">Realizar pedido</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n</div>"

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
    function CalculatorResultComponent(data, router) {
        this.data = data;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.telephone = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.peoplePerBox = 35;
        this.employees = parseInt(data.employees);
        this.deliveries = parseInt(data.deliveries);
        this.boxes = Math.round((this.employees * this.deliveries) / this.peoplePerBox);
    }
    CalculatorResultComponent.prototype.ngOnInit = function () {
    };
    CalculatorResultComponent.prototype.redirectToRequest = function () {
        var navigationParams = {
            queryParams: {
                "employees": this.employees,
                "deliveries": this.deliveries
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

module.exports = "<div class=\"content\">\r\n  <div id=\"#left-panel\" class=\"left-div\">\r\n\r\n  </div>\r\n\r\n  <div id=\"#right-panel\" class=\"form-container contact-form\">\r\n    <mat-card class=\"example-card\">\r\n      <span class=\"title\">¿Cuanta fruta necesitamos diariamente?</span>\r\n      <mat-card-content>\r\n        <p>\r\n          Comer siete o más porciones de frutas y vegetales al día es más sano que las cinco\r\n          recomendadas actualmente por muchos países del mundo y la Organización Mundial de la Salud,\r\n          debido a que -según un nuevo estudio- ayuda a prolongar la vida.\r\n        </p>\r\n\r\n        <div>\r\n          <div id=\"inputs\" class=\"full-width\">\r\n            <mat-card-subtitle>Llenar los datos:</mat-card-subtitle>\r\n            <mat-form-field>\r\n                <input id=\"employees\" matInput #empleados type=\"number\" min=\"0\" max=\"100\" required [formControl]=\"employees\"\r\n                  placeholder=\"Cantidad de colaboradores\">\r\n                <mat-hint align=\"end\">Entre 20 y 1000 - caracteres:{{empleados.value.length}} / 5</mat-hint>\r\n              </mat-form-field>\r\n\r\n            <mat-form-field>\r\n              <mat-label>Entregas semanales:</mat-label>\r\n              <mat-select #fontSize id=\"deliveries\" [formControl]=\"deliveries\">\r\n                <mat-option value=\"1\">1</mat-option>\r\n                <mat-option value=\"2\">2</mat-option>\r\n                <mat-option value=\"3\">3</mat-option>\r\n                <mat-option value=\"4\">4</mat-option>\r\n                <mat-option value=\"5\">5</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <div>\r\n            <div class=\"top-s\">\r\n              <button mat-button color=\"primary\" (click)=\"calculate()\" class=\"green-btn\">\r\n                <span class=\"text\">Calcular</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/calculator/calculator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/forms/requests/calculator/calculator.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\n  .left-div {\n    float: left;\n    width: 30%;\n    margin-left: 10%; }\n  .contact-form {\n    margin-right: 25px;\n    width: 50%;\n    float: right;\n    margin-right: 5%; } }\n\n@media (max-width: 600px) {\n  .left-div {\n    display: none; }\n  .contact-form {\n    margin-right: 0px;\n    width: 100%;\n    float: none;\n    margin-right: 0%; } }\n\n.submit-btn {\n  background-color: #7EAF3B;\n  width: 55px !important;\n  right: 5px;\n  bottom: 0; }\n\n.submit-btn .text {\n    font-size: 18px;\n    color: whitesmoke !important; }\n\n#inputs mat-form-field {\n  width: 70%;\n  margin: 10px; }\n\n.send-btn {\n  float: right; }\n\n.title {\n  color: #7EAF3B;\n  font-size: 22px; }\n"

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../calculator/calculator-result/calculator-result.component */ "./src/app/components/forms/requests/calculator/calculator-result/calculator-result.component.ts");
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
        this.deliveries = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("1", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.employees = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.areFieldsValid = false;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent.prototype.calculate = function () {
        if (this.employees.valid && this.deliveries.valid) {
            this.dialog.open(_calculator_calculator_result_calculator_result_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorResultComponent"], {
                data: {
                    employees: this.employees.value,
                    deliveries: this.deliveries.value
                }
            });
        }
        else {
            alert("Verificar que los datos sean correctos \n Cantidad de colaboradores entre 20 y 1000");
        }
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/components/forms/requests/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.scss */ "./src/app/components/forms/requests/calculator/calculator.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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

module.exports = "<div class=\"content\">\r\n\r\n  <div class=\"payment-info\">\r\n    <div>\r\n      <span class=\"tittle\">¿Como realizar el pago?</span>\r\n      <p>\r\n        Para comodidad y seguridad de nuestros clientes, todos los pagos se\r\n        realizan mediante transferencias bancarias.<br>\r\n        Al final de cada mes le enviaremos el comprobante de pago con los\r\n        detalles de su pedido y la factura de su compra.\r\n      </p>\r\n\r\n      <div class=\"payment-details\">\r\n        <mat-card>\r\n          <div>\r\n              [Frutas Alvarez]<br>\r\n              Cuenta: 4545 1212 2323 5656<br>\r\n              Avenida Siempreviva 123, Zapopan, Jalisco, Mexico, 45050\r\n          </div>          \r\n        </mat-card>\r\n      </div>\r\n\r\n      <!-- <div class=\"transfer-img\">\r\n        <img src=\"assets/bank-transfer.jpg\" alt=\"bank-transfer\">\r\n      </div> -->\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/payment/payment.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/requests/payment/payment.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\n  .payment-info {\n    padding-left: 10%;\n    padding-right: 10%;\n    text-align: center;\n    text-align: center; }\n    .payment-info .tittle {\n      color: #519e2d;\n      opacity: .8;\n      font-size: 25px; }\n    .payment-info p {\n      font-size: 14px;\n      opacity: .8; }\n  .transfer-img img {\n    max-width: 100%; }\n  .payment-details mat-card {\n    width: 100%;\n    border-radius: 10px;\n    border-right: 4px solid #519e2d;\n    border-left: 4px solid #519e2d;\n    color: #03602a;\n    opacity: .75;\n    height: 140px; } }\n"

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

module.exports = "<!-- <div class=\"content\">\r\n  Employees {{employees}}\r\n  Deliveries {{deliveries}}\r\n</div> -->\r\n\r\n<div class=\"content\">\r\n  <div class=\"main-card\">\r\n    <mat-card class=\"background-faded-green\">\r\n      <div class=\"content-info\">\r\n        <p>\r\n          La cantidad de fruta necesaria para su empresa depende de distintos factores como cantidad de empleados,\r\n          numero de oficinas, pisos o cocinas de su empresa, frecuencias de entrega, etc. Es por eso que\r\n          para proveer un mejor servicio y buscando su completa satisfacción usted puede contactarnos\r\n          mediante nuestro número telefónico o email y nos comunicamos con usted en un periodo menor a 1 hora\r\n          donde le brindaremos toda la información necesaria.\r\n        </p>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <!-- CONTANCT CARD -->\r\n  <div class=\"contact\">\r\n    <!-- logo -->\r\n    <div class=\"logo\">\r\n      <div class=\"visual\">\r\n          <div>\r\n              <img class=\"image\"  src=\"assets/sr-fruits-white-icon.jpg\" alt=\"calidad\">\r\n          </div>\r\n          <div class=\"slogan\">\r\n            Salud en la oficina.\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- company info -->\r\n    <div class=\"company-info\">\r\n      <div id=\"contact-details\">\r\n        <mat-icon>phone</mat-icon><span>   336 059 8886</span><br>\r\n        <mat-icon>mail</mat-icon><span>   srfruits@srfruits.com.mx</span><br>\r\n        <p>\r\n            Avenida Siempreviva 742,<br>\r\n            Zapopan, Jalisco México.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/forms/requests/request/request.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/requests/request/request.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 600px) {\n  .main-card {\n    padding-left: 5%;\n    padding-right: 5%;\n    overflow: hidden;\n    text-align: center; }\n    .main-card mat-card {\n      border-radius: 50px; }\n  .logo {\n    text-align: center;\n    float: left;\n    width: 50%; }\n  .company-info {\n    float: right;\n    border-left: 2px solid #519e2d;\n    color: #519e2d;\n    height: 160px;\n    width: 50%; }\n    .company-info .mat-icon {\n      font-size: 22px; }\n    .company-info #contact-details {\n      font-size: 20px;\n      padding-left: 50px;\n      padding-top: 30px; }\n      .company-info #contact-details p {\n        font-size: 14px;\n        font-style: italic;\n        padding-top: 5px; }\n  .image {\n    height: 130px;\n    border-radius: 25px;\n    background-size: auto;\n    border: 3px solid #519e2d; }\n  .slogan {\n    padding-top: 8px;\n    font-size: 18px;\n    font-style: italic;\n    color: #519e2d; }\n  .content-info {\n    color: white;\n    font-size: 16px;\n    text-align: justify; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.85; } }\n\n@media (max-width: 600px) {\n  .main-card {\n    padding-left: 3%;\n    padding-right: 3%;\n    overflow: hidden; }\n    .main-card mat-card {\n      border-radius: 20px; }\n  .logo {\n    display: none; }\n  .company-info {\n    float: right;\n    color: #519e2d;\n    height: 160px;\n    width: 100%;\n    text-align: center; }\n    .company-info .mat-icon {\n      font-size: 17px; }\n    .company-info #contact-details {\n      font-size: 16px;\n      padding-left: 10px;\n      padding-top: 10px; }\n      .company-info #contact-details p {\n        color: #03602a;\n        opacity: .7;\n        font-size: 15px;\n        font-style: italic;\n        padding-top: 2px; }\n  .image {\n    height: 70px;\n    border-radius: 15px;\n    background-size: auto;\n    border: 2px solid #519e2d; }\n  .slogan {\n    padding-top: 8px;\n    font-size: 13px;\n    font-style: italic;\n    color: #519e2d; }\n  .content-info {\n    color: white;\n    padding-left: 10px;\n    text-align: center;\n    font-size: 13px; }\n    .content-info span {\n      font-size: 20px; }\n    .content-info p {\n      opacity: 0.85;\n      text-align: justify; } }\n\n.contact {\n  padding-top: 45px;\n  padding-left: 10%;\n  padding-right: 10%; }\n\n.visual {\n  float: right;\n  padding-right: 60px; }\n"

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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top  navigation\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n        <img src=\"assets/sr-fruits-logo.png\" class=\"header-logo\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n        <ul class=\"navbar-nav navbar-items\">\r\n\r\n            <li class=\"nav-item link-item\">\r\n                <a class=\"nav-link\" routerLink=\"/porque-nosotros\" routerLinkActive=\"active\" translate>COMMON.ABOUT_US</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item link-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/beneficios-empresa\" routerLinkActive=\"active\" translate>COMMON.BENEFITS</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item link-item\">\r\n                <a class=\"nav-link\" routerLink=\"/oferta\" routerLinkActive=\"active\" translate>COMMON.OFFER</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <span translate>COMMON.REQUEST</span>\r\n                </a>\r\n                <div class=\"dropdown-menu drop-background\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" routerLink=\"/pedido\" routerLinkActive=\"active\" translate>COMMON.REQUEST_A_QUOTE\r\n                    </a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/calculo\" routerLinkActive=\"active\" translate>COMMON.CALCULATE_QTY</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/pago\" routerLinkActive=\"active\" translate>COMMON.PAYMENT</a>\r\n                </div>\r\n            </li>\r\n\r\n            <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\" aria-expanded=\"false\"><span translate>COMMON.CONTACT</span>\r\n                </a>\r\n                <div class=\"dropdown-menu drop-background\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                    <a class=\"dropdown-item\" routerLink=\"/contact\" routerLinkActive=\"active\" translate>COMMON.CONTACT_US</a>\r\n                    <a class=\"dropdown-item\" routerLink=\"/preguntas\" routerLinkActive=\"active\" translate>COMMON.FAQ</a>\r\n                </div>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse social-network\">\r\n        <mat-icon>phone</mat-icon><span class=\"telephone\">332-275-6887</span>\r\n    </div>\r\n\r\n    <!-- <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav color-white\">\r\n            <li class=\"nav-item dropdown link-item\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n                    aria-haspopup=\"true\">\r\n                    <mat-icon>language</mat-icon>\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"\">\r\n                    <a class=\"dropdown-item\"><button (click)=\"switchLanguage('es')\">Español</button></a>\r\n                    <a class=\"dropdown-item\"><button (click)=\"switchLanguage('en')\">English</button></a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div> -->\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/components/shell/components/app-shell/app-shell.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/shell/components/app-shell/app-shell.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  display: block;\n  height: 70px;\n  padding-left: 8px; }\n\n.navigation {\n  background-color: #ffbf00;\n  top: 0; }\n\n.bar-items-text {\n  padding-bottom: 5px; }\n\n.telephone {\n  padding-left: 5px;\n  font-size: 30px;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif; }\n\n.navbar-items {\n  padding-top: 10px; }\n\n.social-network {\n  padding-left: 100px;\n  color: rgba(0, 0, 0, 0.5); }\n\n.social-network mat-icon {\n    font-size: 28px; }\n\n.icon {\n  font-size: 26px;\n  padding-left: 8px;\n  color: white; }\n\n.link-item > * {\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  font-size: 18px;\n  opacity: .9; }\n\n.drop-background {\n  background-color: #bed932; }\n"

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

module.exports = "<div class=\"footer-distributed\">\r\n\r\n  <div class=\"footer-right\">\r\n    <a href=\"https://www.instagram.com\"><i class=\"fa fa-instagram\"></i></a>\r\n    <a href=\"https://www.facebook.com\"><i class=\"fa fa-facebook\"></i></a>\r\n    <a href=\"https://www.twitter.com\"><i class=\"fa fa-twitter\"></i></a>\r\n  </div>\r\n\r\n  <div class=\"footer-left\">\r\n\r\n    <p class=\"footer-links\">\r\n      <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n      ·\r\n      <a routerLink=\"/porque-nosotros\" routerLinkActive=\"active\">Nosotros</a>\r\n      ·\r\n      <a routerLink=\"/beneficios-empresa\" routerLinkActive=\"active\">Beneficios</a>\r\n      ·\r\n      <a routerLink=\"/oferta\" routerLinkActive=\"active\">Oferta</a>\r\n      ·\r\n      <a routerLink=\"/pedido\" routerLinkActive=\"active\">Pedidos</a>\r\n      ·\r\n      <a routerLink=\"/contacto\" routerLinkActive=\"active\">Contacto</a>\r\n    </p>\r\n\r\n    <p>Señor Fruits &copy; {{currentYear}}</p>\r\n  </div>\r\n\r\n</div>"

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

/***/ "./src/app/components/shell/components/profile-info/profile-info.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shell/components/profile-info/profile-info.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item>Item 1</button>\r\n  <button mat-menu-item>Item 2</button>\r\n</mat-menu> -->\r\n\r\n<!-- <button mat-icon-button [matMenuTriggerFor]=\"profileMenu\" id=\"profile-info-btn\">\r\n    <div class=\"user-initials\">HE</div>\r\n    <mat-icon>arrow_drop_down</mat-icon>\r\n</button>\r\n\r\n<mat-menu #profileMenu=\"matMenu\" [overlapTrigger]=\"false\" [class]=\"'profile-info-panel'\">\r\n    <a id=\"profile-settings-btn\" href=\"\" target=\"_blank\" mat-menu-item class=\"profile-info-item\">Option 1</a>\r\n    <a id=\"company-settings-btn\" href=\"\" *ngIf=\"\" target=\"_blank\" mat-menu-item class=\"profile-info-item\">Option 2</a>\r\n    <a id=\"language-btn\" href=\"\" target=\"_blank\" mat-menu-item class=\"profile-info-item\">Option 3</a>\r\n    <a id=\"help-support-btn\" href=\"\" target=\"_blank\" mat-menu-item class=\"profile-info-item\">Option 4</a>\r\n    <a id=\"reset-guide-btn\" href=\"javascript:void(0)\" *ngIf=\"onboardingGuideEnabled\" (click)=\"resetGuide()\" mat-menu-item class=\"profile-info-item\">Option 5</a>\r\n    <a id=\"logout-btn\" href=\"javascript:void(0)\" (click)=\"requestLogout()\" mat-menu-item class=\"profile-info-item\">Option 6</a>\r\n</mat-menu> -->\r\n"

/***/ }),

/***/ "./src/app/components/shell/components/profile-info/profile-info.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shell/components/profile-info/profile-info.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-info-btn {\n  background-color: rgba(255, 255, 255, 0.3);\n  height: 40px;\n  width: 40px;\n  margin-right: 32px;\n  overflow: visible;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n\n#profile-info-btn .mat-icon {\n  position: absolute;\n  top: 20%;\n  left: 110%; }\n\n.user-initials {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/shell/components/profile-info/profile-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/shell/components/profile-info/profile-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
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

var ProfileInfoComponent = /** @class */ (function () {
    function ProfileInfoComponent() {
    }
    ProfileInfoComponent.prototype.ngOnInit = function () {
    };
    ProfileInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-info',
            template: __webpack_require__(/*! ./profile-info.component.html */ "./src/app/components/shell/components/profile-info/profile-info.component.html"),
            styles: [__webpack_require__(/*! ./profile-info.component.scss */ "./src/app/components/shell/components/profile-info/profile-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileInfoComponent);
    return ProfileInfoComponent;
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

module.exports = "<div class=\"header-container\" id=\"header\">\n  <div class=\"tittle-text\">\n      <span id=\"text\">{{text}}</span>\n  </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/components/shell/components/tittle-header/tittle-header.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shell/components/tittle-header/tittle-header.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  width: 100%;\n  min-height: 70px;\n  vertical-align: middle; }\n\n.tittle-text {\n  font-size: 35px;\n  color: white;\n  padding-top: 5px;\n  text-align: center; }\n\n.verde {\n  background-color: #79bf28; }\n\n.amarillo {\n  background-color: #ffbf00; }\n\n.naranja {\n  background-color: #ff8e04; }\n\n.rojo {\n  background-color: #f40000; }\n\n.gris {\n  background-color: #41444d; }\n\n.crema {\n  background-color: #f5f4e2; }\n"

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

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: EmailData, TypeEmail, BoxType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailData", function() { return EmailData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeEmail", function() { return TypeEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxType", function() { return BoxType; });
var EmailData = /** @class */ (function () {
    function EmailData(email, name, telephone, typeEmail, weeklyDeliveries, totalEmployees, totalPortions, totalBoxes, typeOfBox, getNotifications, comment, subject, body) {
        this.email = email;
        this.name = name;
        this.telephone = telephone;
        this.typeEmail = typeEmail;
        this.weeklyDeliveries = weeklyDeliveries;
        this.totalEmployees = totalEmployees;
        this.totalPortions = totalPortions;
        this.totalBoxes = totalBoxes;
        this.typeOfBox = typeOfBox;
        this.getNotifications = getNotifications;
        this.comment = comment;
        this.subject = subject;
        this.body = body;
    }
    return EmailData;
}());

var TypeEmail;
(function (TypeEmail) {
    TypeEmail[TypeEmail["Contacto"] = 0] = "Contacto";
    TypeEmail[TypeEmail["Pedido"] = 1] = "Pedido";
    TypeEmail[TypeEmail["Cotizacion"] = 2] = "Cotizacion";
})(TypeEmail || (TypeEmail = {}));
var BoxType;
(function (BoxType) {
    BoxType[BoxType["Basico"] = 0] = "Basico";
    BoxType[BoxType["Medio"] = 1] = "Medio";
    BoxType[BoxType["Premium"] = 2] = "Premium";
})(BoxType || (BoxType = {}));


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