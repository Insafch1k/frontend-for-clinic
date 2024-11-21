"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _website_shared_pages_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website/shared/pages/main/main.component */ 7409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: 'main',
  component: _website_shared_pages_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
  title: 'Главная'
}, {
  path: 'about',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./website/modules/about/about.module */ 4623)).then(m => m.AboutModule),
  title: 'about'
}, {
  path: 'analyzes',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_modules_analyzes_analyzes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./website/modules/analyzes/analyzes.module */ 2279)).then(m => m.AnalyzesModule),
  title: 'analyzes'
}, {
  path: 'specialists',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_modules_specialists_specialists_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./website/modules/specialists/specialists.module */ 6711)).then(m => m.SpecialistsModule),
  title: 'specialists'
}, {
  path: 'doctor',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_website_modules_doctor_doctor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./website/modules/doctor/doctor.module */ 1763)).then(m => m.DoctorModule),
  title: 'specialists'
}, {
  path: '**',
  //component: MainComponent,
  redirectTo: 'main'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _website_shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website/shared/layout/header/header.component */ 8073);
/* harmony import */ var _website_shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website/shared/layout/footer/footer.component */ 2153);




class AppComponent {
  constructor() {
    this.title = 'client';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "website"], [1, "main"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _website_shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _website_shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      styles: [".website[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi53ZWJzaXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _website_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./website/shared/shared.module */ 9917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _website_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _website_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 1782:
/*!***************************************************************!*\
  !*** ./src/app/website/modules/about/about-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutRoutingModule: () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}];
class AboutRoutingModule {
  static {
    this.ɵfac = function AboutRoutingModule_Factory(t) {
      return new (t || AboutRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AboutRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4623:
/*!*******************************************************!*\
  !*** ./src/app/website/modules/about/about.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 1782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





class AboutModule {
  static {
    this.ɵfac = function AboutModule_Factory(t) {
      return new (t || AboutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutModule, {
    declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 286:
/*!****************************************************************!*\
  !*** ./src/app/website/modules/about/about/about.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function AboutComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0424\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0421\u041E\u0423\u0422");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F, \u0432\u044B\u043F\u0438\u0441\u043A\u0430 \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0427\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u0435\u0449\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class AboutComponent {
  constructor() {
    this.lookMore = false;
  }
  LookOrNo() {
    this.lookMore = !this.lookMore;
  }
  static {
    this.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 54,
      vars: 2,
      consts: [[1, "page-background"], [1, "about"], [1, "title"], [1, "main"], [1, "onePart"], [1, "p-one"], [1, "p-two"], [1, "twoPart"], [1, "picture"], [1, "infoOne"], [1, "thirdPart"], [1, "info-one"], [1, "picturetwo"], [1, "fourthPart"], [1, "titlee"], [1, "littletit", 2, "border-top", "1px solid black", "margin-top", "35px"], [1, "topbox", 3, "click"], ["alt", "", 3, "src"], ["class", "inLittle", 4, "ngIf"], [1, "littletit"], [1, "topbox"], ["src", "assets/data/icon/add.svg", "alt", ""], [1, "fifthPart"], [1, "dyploms"], ["src", "assets/data/image/dyplom 1.svg"], ["src", "assets/data/image/dyplom 2.svg", 2, "padding-left", "5px"], ["src", "assets/data/image/dyplom 3.svg", 2, "padding-left", "7px"], [1, "inLittle"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F / \u041E \u043A\u043B\u0438\u043D\u0438\u043A\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "8(8552) 25-05-03");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0433.\u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u044B\u0435 \u0427\u0435\u043B\u043D\u044B, \u0443\u043B.\u0410\u0445\u043C\u0435\u0442\u0448\u0438\u043D\u0430, \u0434.116");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041A\u043B\u0438\u043D\u0438\u043A\u0430 03");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u044D\u0442\u043E \u043A\u043B\u0438\u043D\u0438\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u0430\u043D\u0435\u0442 \u0432\u0430\u0448\u0438\u043C \u0434\u0440\u0443\u0433\u043E\u043C \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F \u0434\u0435\u0442\u0435\u0439 \u0438 \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430\u0448\u0435\u0433\u043E \u0443\u0441\u043F\u0435\u0445\u0430 \u2013 \u044D\u0442\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044B, \u043F\u0440\u0435\u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0432\u043E\u0435\u043C\u0443 \u0434\u0435\u043B\u0443. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041C\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u043B\u0435\u0447\u0435\u0431\u043D\u043E-\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0443\u0441\u043B\u0443\u0433, \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u043A\u043B\u0438\u043D\u0438\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0432\u0441\u0435 \u0432\u0438\u0434\u044B \u0430\u043D\u0430\u043B\u0438\u0437\u043E\u0432. \u0410 \u0443\u0441\u043B\u0443\u0433\u0430 \u0432\u044B\u0437\u043E\u0432\u0430 \u043F\u0435\u0434\u0438\u0430\u0442\u0440\u0430 \u043D\u0430 \u0434\u043E\u043C \u0432\u043E\u043E\u0431\u0449\u0435 \u043D\u0435 \u0437\u0430\u043C\u0435\u043D\u0438\u043C\u0430 \u0432 \u0442\u0435\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u043A\u043E\u0433\u0434\u0430 \u043D\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u0439\u0442\u0438 \u0438\u0437 \u0434\u043E\u043C\u0430.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13)(28, "div", 14)(29, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15)(32, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_div_click_32_listener() {
            return ctx.LookOrNo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043B\u0438\u0446\u0446\u0435\u043D\u0437\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AboutComponent_div_36_Template, 9, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19)(38, "div", 20)(39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430, \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19)(43, "div", 20)(44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0417\u0430\u043A\u043E\u043D\u0430\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22)(48, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u041B\u0418\u0426\u0415\u041D\u0417\u0418\u042F \u0418 \u0421\u0412\u0418\u0414\u0415\u0422\u0415\u041B\u042C\u0421\u0422\u0412\u041E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 24)(52, "img", 25)(53, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lookMore ? "assets/data/icon/close.svg" : "assets/data/icon/add.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lookMore);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".title[_ngcontent-%COMP%] {\n  margin-left: 10.5%;\n  margin-top: 25px;\n}\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 14.63px;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: 10.5%;\n  margin-right: 10.5%;\n}\n\n.onePart[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.onePart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n  font-size: 36px;\n  line-height: 43.88px;\n}\n.onePart[_ngcontent-%COMP%]   .p-one[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.onePart[_ngcontent-%COMP%]   .p-two[_ngcontent-%COMP%] {\n  width: 172px;\n  font-size: 15px;\n  text-align: center;\n}\n.onePart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0);\n}\n\n.twoPart[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 50px;\n  height: 237px;\n}\n.twoPart[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  background-color: aquamarine;\n  width: 500px;\n  height: 247px;\n  border-radius: 8px;\n  margin-right: 5.7vw;\n  flex-shrink: 0;\n}\n.twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgb(0, 0, 0);\n  margin-top: 10px;\n}\n.twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgb(0, 0, 0);\n  margin-bottom: 10px;\n}\n\n.thirdPart[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"A A A A B B B\";\n  grid-gap: 10px;\n  margin-top: 50px;\n  height: 237px;\n}\n.thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%] {\n  grid-area: A;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 90%;\n}\n.thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n.thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-top: 10px;\n  width: 100%;\n}\n.thirdPart[_ngcontent-%COMP%]   .picturetwo[_ngcontent-%COMP%] {\n  grid-area: B;\n  margin-right: auto;\n  background-color: aquamarine;\n  width: 500px;\n  height: 247px;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n\n.fourthPart[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-left: 2.5%;\n}\n.fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 15px;\n}\n\n.fifthPart[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.fifthPart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 25px;\n}\n.fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n}\n\n@media (max-width: 1100px) {\n  .twoPart[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 50px;\n    height: 200px;\n  }\n  .twoPart[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    background-color: aquamarine;\n    width: 400px;\n    height: 200px;\n    border-radius: 8px;\n    margin-right: 5.7vw;\n    flex-shrink: 0;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    color: rgb(0, 0, 0);\n    margin-top: 10px;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    color: rgb(0, 0, 0);\n    margin-bottom: 10px;\n  }\n  .thirdPart[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"A A A A B B B\";\n    grid-gap: 10px;\n    margin-top: 50px;\n    height: 200px;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%] {\n    grid-area: A;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 90%;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 10px;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-top: 10px;\n    width: 100%;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .picturetwo[_ngcontent-%COMP%] {\n    grid-area: B;\n    margin-right: auto;\n    background-color: aquamarine;\n    width: 400px;\n    height: 200px;\n    border-radius: 8px;\n    flex-shrink: 0;\n  }\n  .fourthPart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .titlee[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%] {\n    border-bottom: 1px solid black;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    width: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-left: 2.5%;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-top: 15px;\n  }\n  .fifthPart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 20px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: flex;\n    justify-content: center;\n  }\n}\n@media (max-width: 900px) {\n  .onePart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .onePart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: rgb(0, 0, 0);\n    width: 260px;\n    font-size: 24px;\n  }\n  .onePart[_ngcontent-%COMP%]   .p-one[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .onePart[_ngcontent-%COMP%]   .p-two[_ngcontent-%COMP%] {\n    width: 172px;\n    font-size: 14px;\n    text-align: center;\n  }\n  .onePart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgb(0, 0, 0);\n  }\n  .twoPart[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 50px;\n    height: 175px;\n  }\n  .twoPart[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    background-color: aquamarine;\n    width: 350px;\n    height: 175px;\n    border-radius: 8px;\n    margin-right: 5.7vw;\n    flex-shrink: 0;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    color: rgb(0, 0, 0);\n    margin-top: 10px;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    color: rgb(0, 0, 0);\n    margin-bottom: 10px;\n  }\n  .thirdPart[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"A A A A B B B\";\n    grid-gap: 10px;\n    margin-top: 50px;\n    height: 175px;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%] {\n    grid-area: A;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 90%;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-bottom: 10px;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-top: 10px;\n    width: 100%;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .picturetwo[_ngcontent-%COMP%] {\n    grid-area: B;\n    margin-right: auto;\n    background-color: aquamarine;\n    width: 350px;\n    height: 175px;\n    border-radius: 8px;\n    flex-shrink: 0;\n  }\n  .fourthPart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .titlee[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%] {\n    border-bottom: 1px solid black;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    width: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-left: 2.5%;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-top: 15px;\n  }\n  .fifthPart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 20px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: flex;\n    justify-content: center;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 185px;\n    height: auto;\n  }\n}\n@media (max-width: 800px) {\n  .onePart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .onePart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: rgb(0, 0, 0);\n    width: 225px;\n    font-size: 20px;\n  }\n  .onePart[_ngcontent-%COMP%]   .p-one[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .onePart[_ngcontent-%COMP%]   .p-two[_ngcontent-%COMP%] {\n    width: 172px;\n    font-size: 14px;\n    text-align: center;\n  }\n  .onePart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgb(0, 0, 0);\n  }\n  .twoPart[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 50px;\n    height: 155px;\n  }\n  .twoPart[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    background-color: aquamarine;\n    width: 270px;\n    height: 155px;\n    border-radius: 8px;\n    margin-right: 5.7vw;\n    flex-shrink: 0;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    color: rgb(0, 0, 0);\n    margin-top: 10px;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    color: rgb(0, 0, 0);\n    margin-bottom: 10px;\n  }\n  .thirdPart[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"A A A A B B B\";\n    grid-gap: 10px;\n    margin-top: 50px;\n    height: 155px;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%] {\n    grid-area: A;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 90%;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-bottom: 10px;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-top: 10px;\n    width: 100%;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .picturetwo[_ngcontent-%COMP%] {\n    grid-area: B;\n    margin-right: auto;\n    background-color: aquamarine;\n    width: 270px;\n    height: 155px;\n    border-radius: 8px;\n    flex-shrink: 0;\n  }\n  .fourthPart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .titlee[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%] {\n    border-bottom: 1px solid black;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    width: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-left: 2.5%;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-top: 15px;\n  }\n  .fifthPart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 16px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: flex;\n    justify-content: center;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 165px;\n    height: auto;\n  }\n}\n@media (max-width: 650px) {\n  .onePart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    display: grid;\n    grid-template-areas: \"A A A A\" \"B B C C\";\n    align-items: center;\n  }\n  .onePart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: rgb(0, 0, 0);\n    width: 100%;\n    font-size: 20px;\n    grid-area: A;\n  }\n  .onePart[_ngcontent-%COMP%]   .p-one[_ngcontent-%COMP%] {\n    font-size: 14px;\n    grid-area: B;\n  }\n  .onePart[_ngcontent-%COMP%]   .p-two[_ngcontent-%COMP%] {\n    width: 172px;\n    font-size: 14px;\n    text-align: center;\n    grid-area: C;\n  }\n  .onePart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgb(0, 0, 0);\n  }\n  .twoPart[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 50px;\n    height: 200px;\n    margin-bottom: 20px;\n  }\n  .twoPart[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    background-color: aquamarine;\n    width: 350px;\n    height: 200px;\n    border-radius: 8px;\n    margin-left: auto;\n    margin-right: auto;\n    flex-shrink: 0;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: -230px;\n    margin-bottom: 220px;\n    font-size: 1rem;\n    color: rgb(0, 0, 0);\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    color: rgb(0, 0, 0);\n  }\n  .thirdPart[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"B B B\" \"A A A\";\n    margin-top: 80px;\n    height: 200px;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    grid-area: A;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 80%;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-top: 10px;\n    width: 100%;\n    text-align: center;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .picturetwo[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    grid-area: B;\n    margin-right: auto;\n    background-color: aquamarine;\n    width: 350px;\n    height: 200px;\n    border-radius: 8px;\n    flex-shrink: 0;\n  }\n  .fourthPart[_ngcontent-%COMP%] {\n    margin-top: 175px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .titlee[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 16px;\n    text-align: center;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%] {\n    border-bottom: 1px solid black;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    width: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-left: 2.5%;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-top: 15px;\n  }\n  .fifthPart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 16px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: flex;\n    flex-direction: column;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50vw;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media (max-width: 450px) {\n  .twoPart[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-top: 50px;\n    height: 200px;\n    margin-bottom: 20px;\n  }\n  .twoPart[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    background-color: aquamarine;\n    width: 300px;\n    height: 175px;\n    border-radius: 8px;\n    margin-left: auto;\n    margin-right: auto;\n    flex-shrink: 0;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: -200px;\n    margin-bottom: 180px;\n    font-size: 1rem;\n    color: rgb(0, 0, 0);\n  }\n  .twoPart[_ngcontent-%COMP%]   .infoOne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    color: rgb(0, 0, 0);\n  }\n  .thirdPart[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"B B B\" \"A A A\";\n    margin-top: 40px;\n    height: 200px;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    grid-area: A;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .info-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-top: 10px;\n    width: 100%;\n    text-align: center;\n  }\n  .thirdPart[_ngcontent-%COMP%]   .picturetwo[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    grid-area: B;\n    margin-right: auto;\n    background-color: aquamarine;\n    width: 300px;\n    height: 175px;\n    border-radius: 8px;\n    flex-shrink: 0;\n  }\n  .fourthPart[_ngcontent-%COMP%] {\n    margin-top: 180px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .titlee[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: center;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%] {\n    border-bottom: 1px solid black;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .topbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 10px;\n    width: 12px;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-left: 2.5%;\n  }\n  .fourthPart[_ngcontent-%COMP%]   .littletit[_ngcontent-%COMP%]   .inLittle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin-top: 15px;\n  }\n  .fifthPart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 16px;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    display: flex;\n    flex-direction: column;\n  }\n  .fifthPart[_ngcontent-%COMP%]   .dyploms[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70vw;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media (max-width: 370px) {\n  .onePart[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    display: grid;\n    grid-template-areas: \"A A A A\" \"B B C C\";\n    align-items: center;\n  }\n  .onePart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: rgb(0, 0, 0);\n    width: 100%;\n    font-size: 18px;\n    grid-area: A;\n  }\n  .onePart[_ngcontent-%COMP%]   .p-one[_ngcontent-%COMP%] {\n    font-size: 12px;\n    grid-area: B;\n  }\n  .onePart[_ngcontent-%COMP%]   .p-two[_ngcontent-%COMP%] {\n    width: 172px;\n    font-size: 12px;\n    text-align: center;\n    grid-area: C;\n  }\n  .onePart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: rgb(0, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2Vic2l0ZS9tb2R1bGVzL2Fib3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFBRyxlQUFBO0VBQWlCLG9CQUFBO0FBSXhCOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQU1KO0FBTEk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQU9SO0FBTEk7RUFDSSxlQUFBO0FBT1I7QUFMSTtFQUNJLFlBQUE7RUFBYyxlQUFBO0VBQWlCLGtCQUFBO0FBU3ZDO0FBUEk7RUFBRSxtQkFBQTtBQVVOOztBQVJBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVdKO0FBVkk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFZUjtBQVZJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFZUjtBQVhRO0VBQUUsZUFBQTtFQUFnQixtQkFBQTtFQUF3QixnQkFBQTtBQWdCbEQ7QUFmUTtFQUFHLGVBQUE7RUFBZ0IsbUJBQUE7RUFBd0IsbUJBQUE7QUFvQm5EOztBQWpCQTtFQUNJLGFBQUE7RUFDQSxvQ0FDQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFtQko7QUFsQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBb0JSO0FBbkJRO0VBQUcsZUFBQTtFQUFpQixtQkFBQTtBQXVCNUI7QUF0QlE7RUFBRSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLFdBQUE7QUEyQjdDO0FBekJJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZ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QUMvQixZQUFBO0VBaUtWO0VBL0pNO0lBQUUsbUJBQUE7RUFrS1I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMC41JTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBoMntmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxNC42M3B4O31cclxufVxyXG4ubWFpbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMC41JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAuNSU7XHJcbn1cclxuLm9uZVBhcnR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoMntcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTsgXHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4OyBcclxuICAgICAgICBsaW5lLWhlaWdodDogNDMuODhweDtcclxuICAgIH1cclxuICAgIC5wLW9uZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucC10d297XHJcbiAgICAgICAgd2lkdGg6IDE3MnB4OyBmb250LXNpemU6IDE1cHg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHB7Y29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7fVxyXG59XHJcbi50d29QYXJ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDIzN3B4O1xyXG4gICAgLnBpY3R1cmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1Ljd2dztcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxuICAgIC5pbmZvT25le1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwe2ZvbnQtc2l6ZTogMTZweDtjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTttYXJnaW4tdG9wOiAxMHB4O31cclxuICAgICAgICBoMntmb250LXNpemU6IDE2cHg7Y29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbiAgICB9XHJcbn1cclxuLnRoaXJkUGFydHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIFwiQSBBIEEgQSBCIEIgQlwiO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMzdweDsgXHJcbiAgICAuaW5mby1vbmV7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBBO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGgye2ZvbnQtc2l6ZTogMXJlbTsgbWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbiAgICAgICAgcHtmb250LXNpemU6IDFyZW07IG1hcmdpbi10b3A6IDEwcHg7IHdpZHRoOiAxMDAlO31cclxuICAgIH1cclxuICAgIC5waWN0dXJldHdve1xyXG4gICAgICAgIGdyaWQtYXJlYTogQjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcbn1cclxuLmZvdXJ0aFBhcnR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLnRpdGxlZXtcclxuICAgIH1cclxuICAgIC5saXR0bGV0aXR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIC50b3Bib3h7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcHtmb250LXNpemU6IDI1cHg7fVxyXG4gICAgICAgICAgICBpbWd7bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuICAgICAgICB9XHJcbiAgICAgICAgLmluTGl0dGxle1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgICAgICAgICAgcHtmb250LXNpemU6IDE1cHg7IG1hcmdpbi10b3A6IDE1cHg7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZmlmdGhQYXJ0e1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGgye3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyNXB4O31cclxuICAgIC5keXBsb21ze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KXtcclxuICAgIC50d29QYXJ0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIC5waWN0dXJle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1Ljd2dztcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvT25le1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcHtmb250LXNpemU6IDAuOHJlbTtjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTttYXJnaW4tdG9wOiAxMHB4O31cclxuICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiAwLjhyZW07Y29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRoaXJkUGFydHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgIFwiQSBBIEEgQSBCIEIgQlwiO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDsgXHJcbiAgICAgICAgLmluZm8tb25le1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IEE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBoMntmb250LXNpemU6IDAuOHJlbTsgbWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbiAgICAgICAgICAgIHB7Zm9udC1zaXplOiAwLjhyZW07IG1hcmdpbi10b3A6IDEwcHg7IHdpZHRoOiAxMDAlO31cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpY3R1cmV0d297XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogQjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm91cnRoUGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIC50aXRsZWV7XHJcbiAgICAgICAgICAgIGgye2ZvbnQtc2l6ZTogMjBweDt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXR0bGV0aXR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudG9wYm94e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMTVweDt9XHJcbiAgICAgICAgICAgICAgICBpbWd7bWFyZ2luLXJpZ2h0OiAxMHB4OyB3aWR0aDogMTVweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluTGl0dGxle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgcHtmb250LXNpemU6IDE1cHg7IG1hcmdpbi10b3A6IDE1cHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZpZnRoUGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGgye3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyMHB4O31cclxuICAgICAgICAuZHlwbG9tc3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgLm9uZVBhcnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnAtb25le1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wLXR3b3tcclxuICAgICAgICAgICAgd2lkdGg6IDE3MnB4OyBmb250LXNpemU6IDE0cHg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTt9XHJcbiAgICB9XHJcblxyXG4gICAgLnR3b1BhcnR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogICAgMTc1cHg7XHJcbiAgICAgICAgLnBpY3R1cmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUuN3Z3O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm9PbmV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMC43cmVtO2NvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO21hcmdpbi10b3A6IDEwcHg7fVxyXG4gICAgICAgICAgICBoMntmb250LXNpemU6IDAuN3JlbTtjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTttYXJnaW4tYm90dG9tOiAxMHB4O31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGhpcmRQYXJ0e1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgXCJBIEEgQSBBIEIgQiBCXCI7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE3NXB4OyBcclxuICAgICAgICAuaW5mby1vbmV7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogQTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGgye2ZvbnQtc2l6ZTogMC43cmVtOyBtYXJnaW4tYm90dG9tOiAxMHB4O31cclxuICAgICAgICAgICAgcHtmb250LXNpemU6IDAuN3JlbTsgbWFyZ2luLXRvcDogMTBweDsgd2lkdGg6IDEwMCU7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGljdHVyZXR3b3tcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBCO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm91cnRoUGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIC50aXRsZWV7XHJcbiAgICAgICAgICAgIGgye2ZvbnQtc2l6ZTogMjBweDt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXR0bGV0aXR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudG9wYm94e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMTVweDt9XHJcbiAgICAgICAgICAgICAgICBpbWd7bWFyZ2luLXJpZ2h0OiAxMHB4OyB3aWR0aDogMTVweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluTGl0dGxle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgcHtmb250LXNpemU6IDE1cHg7IG1hcmdpbi10b3A6IDE1cHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZpZnRoUGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGgye3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyMHB4O31cclxuICAgICAgICAuZHlwbG9tc3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3t3aWR0aDogMTg1cHg7IGhlaWdodDogYXV0bzt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAub25lUGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpOyBcclxuICAgICAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAucC1vbmV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnAtdHdve1xyXG4gICAgICAgICAgICB3aWR0aDogMTcycHg7IGZvbnQtc2l6ZTogMTRweDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe2NvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO31cclxuICAgIH1cclxuXHJcbiAgICAudHdvUGFydHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAgICAxNTVweDtcclxuICAgICAgICAucGljdHVyZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNS43dnc7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5mb09uZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHB7Zm9udC1zaXplOiAwLjdyZW07Y29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7bWFyZ2luLXRvcDogMTBweDt9XHJcbiAgICAgICAgICAgIGgye2ZvbnQtc2l6ZTogMC43cmVtO2NvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO21hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aGlyZFBhcnR7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICBcIkEgQSBBIEEgQiBCIEJcIjtcclxuICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTU1cHg7IFxyXG4gICAgICAgIC5pbmZvLW9uZXtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBBO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiAwLjdyZW07IG1hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4gICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMC43cmVtOyBtYXJnaW4tdG9wOiAxMHB4OyB3aWR0aDogMTAwJTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWN0dXJldHdve1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IEI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3VydGhQYXJ0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgLnRpdGxlZXtcclxuICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiAxNnB4O31cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpdHRsZXRpdHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIC50b3Bib3h7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHB7Zm9udC1zaXplOiAxNXB4O31cclxuICAgICAgICAgICAgICAgIGltZ3ttYXJnaW4tcmlnaHQ6IDEwcHg7IHdpZHRoOiAxNXB4O31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5MaXR0bGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICAgICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMTNweDsgbWFyZ2luLXRvcDogMTVweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmlmdGhQYXJ0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgaDJ7dGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDE2cHg7fVxyXG4gICAgICAgIC5keXBsb21ze1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne3dpZHRoOiAxNjVweDsgaGVpZ2h0OiBhdXRvO31cclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KXtcclxuICAgIC5vbmVQYXJ0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICBcIkEgQSBBIEFcIiBcclxuICAgICAgICBcIkIgQiBDIENcIjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgICAgICAgICBncmlkLWFyZWE6IEE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wLW9uZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IEI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wLXR3b3tcclxuICAgICAgICAgICAgd2lkdGg6IDE3MnB4OyBmb250LXNpemU6IDE0cHg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe2NvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO31cclxuICAgIH1cclxuXHJcbiAgICAudHdvUGFydHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6ICAgIDIwMHB4O21hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLnBpY3R1cmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm9PbmV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGgye21hcmdpbi10b3A6IC0yMzBweDttYXJnaW4tYm90dG9tOiAyMjBweDtmb250LXNpemU6IDFyZW07Y29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7fVxyXG4gICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMC44cmVtO2NvbG9yOiByZ2JhKDAsIDAsIDAsIDEpOyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aGlyZFBhcnR7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICBcIkIgQiBCXCIgXHJcbiAgICAgICAgXCJBIEEgQVwiO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDsgXHJcbiAgICAgICAgLmluZm8tb25le1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IEE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBoMntmb250LXNpemU6IDAuOXJlbTsgbWFyZ2luLWJvdHRvbTogMTBweDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMC44cmVtOyBtYXJnaW4tdG9wOiAxMHB4OyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyO31cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpY3R1cmV0d297XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogQjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvdXJ0aFBhcnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTc1cHg7XHJcbiAgICAgICAgLnRpdGxlZXtcclxuICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiAxNnB4O3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXR0bGV0aXR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAudG9wYm94e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMTVweDt9XHJcbiAgICAgICAgICAgICAgICBpbWd7bWFyZ2luLXJpZ2h0OiAxMHB4OyB3aWR0aDogMTVweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluTGl0dGxle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgcHtmb250LXNpemU6IDEzcHg7IG1hcmdpbi10b3A6IDE1cHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZpZnRoUGFydHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGgye3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNnB4O31cclxuICAgICAgICAuZHlwbG9tc3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwdnc7IFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87fVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KXtcclxuXHJcbiAgICAudHdvUGFydHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6ICAgIDIwMHB4O21hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLnBpY3R1cmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNzVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm9PbmV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGgye21hcmdpbi10b3A6IC0yMDBweDttYXJnaW4tYm90dG9tOiAxODBweDtmb250LXNpemU6IDFyZW07Y29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7fVxyXG4gICAgICAgICAgICBwe2ZvbnQtc2l6ZTogMC44cmVtO2NvbG9yOiByZ2JhKDAsIDAsIDAsIDEpOyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aGlyZFBhcnR7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICBcIkIgQiBCXCIgXHJcbiAgICAgICAgXCJBIEEgQVwiO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDsgXHJcbiAgICAgICAgLmluZm8tb25le1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IEE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaDJ7Zm9udC1zaXplOiAwLjlyZW07IG1hcmdpbi1ib3R0b206IDEwcHg7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICAgICAgICAgICAgcHtmb250LXNpemU6IDAuOHJlbTsgbWFyZ2luLXRvcDogMTBweDsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWN0dXJldHdve1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IEI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3VydGhQYXJ0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE4MHB4O1xyXG4gICAgICAgIC50aXRsZWV7XHJcbiAgICAgICAgICAgIGgye2ZvbnQtc2l6ZTogMTRweDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAubGl0dGxldGl0e1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgLnRvcGJveHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcHtmb250LXNpemU6IDEycHg7fVxyXG4gICAgICAgICAgICAgICAgaW1ne21hcmdpbi1yaWdodDogMTBweDsgd2lkdGg6IDEycHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbkxpdHRsZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgICAgICAgICAgICAgIHB7Zm9udC1zaXplOiAxMnB4OyBtYXJnaW4tdG9wOiAxNXB4O31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5maWZ0aFBhcnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBoMnt0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTZweDt9XHJcbiAgICAgICAgLmR5cGxvbXN7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHZ3OyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO31cclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpe1xyXG4gICAgLm9uZVBhcnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgIFwiQSBBIEEgQVwiIFxyXG4gICAgICAgIFwiQiBCIEMgQ1wiO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpOyBcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogQTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnAtb25le1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogQjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnAtdHdve1xyXG4gICAgICAgICAgICB3aWR0aDogMTcycHg7IGZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IEM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7Y29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7fVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 2153:
/*!******************************************************************!*\
  !*** ./src/app/website/shared/layout/footer/footer.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class FooterComponent {
  constructor() {
    this.email = 'clinica03@yandex.ru';
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 95,
      vars: 1,
      consts: [[1, "top-footer"], [1, "contact-nav"], [1, "navbar", "flex-pos"], ["routerLink", "/main", "src", "assets/data/icon/header/logo.svg", "alt", "", 1, "img-logo"], ["routerLink", "/main"], ["routerLink", "/specialists"], ["routerLink", "/analyzes"], ["routerLink", "/about"], [1, "flex-pos"], [1, "flex-wrap"], [1, "contact-wrap"], [1, "picstr"], ["src", "assets/data/icon/insta.svg", "alt", ""], ["src", "assets/data/icon/vk.svg", "alt", ""], ["src", "assets/data/icon/whatsapp.svg", "alt", ""], [1, "contact"], [1, "policy"], [1, "location"], [1, "text-grey"], [1, "bottom-footer"], [1, "info", "info-left"], [1, "need-info"], [1, "info"], [1, "diploms"], ["src", "assets/data/image/dyplom 1.svg", "alt", ""], ["src", "assets/data/image/dyplom 2.svg", "alt", ""], ["src", "assets/data/image/dyplom 3.svg", "alt", ""], [1, "taxes-info"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0410\u043D\u0430\u043B\u0438\u0437\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E \u043A\u043B\u0438\u043D\u0438\u043A\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0410\u043A\u0446\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8)(19, "div", 9)(20, "ul")(21, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0413\u0430\u0441\u0442\u0440\u043E\u044D\u043D\u0442\u0435\u0440\u043E\u043B\u043E\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0418\u043C\u043C\u0443\u043D\u043E\u043B\u043E\u0433/\u0410\u043B\u043B\u0435\u0440\u0433\u043E\u043B\u043E\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041A\u0430\u0440\u0434\u0438\u043E\u043B\u043E\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041B\u043E\u0433\u043E\u043F\u0435\u0434");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041D\u0435\u0432\u0440\u043E\u043B\u043E\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041D\u0435\u043E\u043D\u0430\u0442\u043E\u043B\u043E\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul")(34, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041D\u0435\u0444\u0440\u043E\u043B\u043E\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041F\u0435\u0434\u0438\u0430\u0442\u0440");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0435\u0432\u0442");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u042D\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10)(45, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 12)(47, "img", 13)(48, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 15)(50, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "8(8552) 25-05-03");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0431\u0443\u0434\u043D\u0438 09:00 - 17:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0435 09:00 - 17:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 16)(59, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0433.\u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u044B\u0435 \u0427\u0435\u043B\u043D\u044B, \u0443\u043B.\u0410\u0445\u043C\u0435\u0442\u0448\u0438\u043D\u0430, \u0434.116");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u041E\u0444\u0435\u0440\u0442\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " *Instagram \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Meta, \u043F\u0440\u0438\u0437\u043D\u0430\u043D\u043D\u043E\u0439 \u044D\u043A\u0441\u0442\u0440\u0435\u043C\u0438\u0441\u0442\u0441\u043A\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0438 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043D\u043E\u0439 \u0432 \u0420\u0424 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19)(70, "div", 20)(71, "div")(72, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " \u0412\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0446\u0435\u043D\u044B, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0434\u043B\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u043E\u0439 (\u0441\u0442.435 \u0413\u041A \u0420\u0424, c\u0442. 437 \u0413\u041A \u0420\u0424) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div")(77, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438: \u041B\u041E-16-01-005901;");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438: 29.03.2017;");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u00A9 2024, Clinika03.ru");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 22)(84, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u041E\u041E\u041E \"\u041A\u041B\u0418\u041D\u0418\u041A\u0410-03\" \u041E\u0413\u0420\u041D - 1223600016001 \u0418\u041D\u041D - 3665819839");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 24)(88, "img", 25)(89, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27)(91, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u0421\u043F\u0440\u0430\u0432\u043A\u0430 \u0434\u043B\u044F \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0439");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0438 \u043F\u0440\u0430\u0432\u043E\u0432\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["@charset \"UTF-8\";\n.top-footer[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.top-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.top-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  font-size: 15px;\n  font-weight: 400;\n}\n@media (max-width: 768px) {\n  .top-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media (max-width: 480px) {\n  .top-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n@media (max-width: 768px) {\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%] {\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  width: 50%;\n}\n@media (max-width: 768px) {\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%] {\n    width: 90%;\n    gap: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    align-items: center;\n    width: 100%;\n  }\n}\n.top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%]   .flex-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%]   .flex-wrap[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n@media (max-width: 480px) {\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%]   .flex-wrap[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-right: 20%;\n    justify-content: space-between;\n  }\n}\n.top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%]   .flex-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: calc(50% - 10px);\n  box-sizing: border-box; \n\n  margin-bottom: 2px;\n}\n@media (max-width: 480px) {\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%]   .contact-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%]   .contact-wrap[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .flex-pos[_ngcontent-%COMP%]   .contact-wrap[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: calc(50% - 10px);\n  }\n}\n.top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%] {\n  width: 173px;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .top-footer[_ngcontent-%COMP%]   .contact-nav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n}\n.top-footer[_ngcontent-%COMP%]   .policy[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.top-footer[_ngcontent-%COMP%]   .policy[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.top-footer[_ngcontent-%COMP%]   .policy[_ngcontent-%COMP%]   .text-grey[_ngcontent-%COMP%] {\n  color: #6f6f6f;\n}\n\n.bottom-footer[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: #7eb3c1;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 10%;\n}\n@media (max-width: 480px) {\n  .bottom-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.bottom-footer[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 40%;\n}\n@media (max-width: 480px) {\n  .bottom-footer[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.bottom-footer[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ffffff;\n}\n.bottom-footer[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .diploms[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.bottom-footer[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .diploms[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 53px;\n}\n.bottom-footer[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .taxes-info[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 12px;\n  color: white;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .bottom-footer[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .taxes-info[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.bottom-footer[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .taxes-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.bottom-footer[_ngcontent-%COMP%]   .info-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.bottom-footer[_ngcontent-%COMP%]   .info-left[_ngcontent-%COMP%]   .need-info[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  font-size: 13px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2Vic2l0ZS9zaGFyZWQvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksWUFBQTtBQUVKO0FBREk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUdSO0FBRlE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSVo7QUFIWTtFQUpKO0lBS1EsZUFBQTtFQU1kO0FBQ0Y7QUFMWTtFQVBKO0lBUVEsZUFBQTtFQVFkO0FBQ0Y7QUFMSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQU9SO0FBTlE7RUFISjtJQUlRLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxTQUFBO0VBU1Y7QUFDRjtBQVJRO0VBUko7SUFTUSxzQkFBQTtJQUNBLHVCQUFBO0VBV1Y7QUFDRjtBQVZRO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBWVo7QUFYWTtFQUxKO0lBTVEsVUFBQTtJQUNBLFNBQUE7RUFjZDtBQUNGO0FBYlk7RUFUSjtJQVVRLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBZ0JkO0FBQ0Y7QUFmWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQWlCaEI7QUFoQmdCO0VBSEo7SUFJUSxtQkFBQTtFQW1CbEI7QUFDRjtBQWxCZ0I7RUFOSjtJQU9RLFVBQUE7SUFDQSxpQkFBQTtJQUNBLDhCQUFBO0VBcUJsQjtBQUNGO0FBcEJnQjtFQUNJLHVCQUFBO0VBQ0Esc0JBQUEsRUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FBc0JwQjtBQWxCZ0I7RUFESjtJQUVRLFdBQUE7RUFxQmxCO0VBcEJrQjtJQUNJLGFBQUE7SUFDQSxlQUFBO0VBc0J0QjtFQXJCc0I7SUFDSSx1QkFBQTtFQXVCMUI7QUFDRjtBQWhCWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBa0JoQjtBQWpCZ0I7RUFISjtJQUlRLFdBQUE7RUFvQmxCO0FBQ0Y7QUFoQkk7RUFDSSxnQkFBQTtBQWtCUjtBQWpCUTtFQUNJLDBCQUFBO0FBbUJaO0FBakJRO0VBQ0ksY0FBQTtBQW1CWjs7QUFkQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBaUJKO0FBaEJJO0VBTko7SUFPUSxzQkFBQTtFQW1CTjtBQUNGO0FBbEJJO0VBQ0ksVUFBQTtBQW9CUjtBQW5CUTtFQUZKO0lBR1EsV0FBQTtFQXNCVjtBQUNGO0FBckJRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUF1Qlo7QUFyQlE7RUFDSSxnQkFBQTtBQXVCWjtBQXRCWTtFQUNJLFdBQUE7QUF3QmhCO0FBckJRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBdUJaO0FBdEJZO0VBTEo7SUFNUSxlQUFBO0VBeUJkO0FBQ0Y7QUF4Qlk7RUFDSSxvQkFBQTtBQTBCaEI7QUF0Qkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQXdCUjtBQXRCUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF3QloiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWZvb3RlciB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmIC5jb250YWN0LW5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbGV4LXBvcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgLmZsZXgtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiDDkMKjw5HCh8OQwrXDkcKCIMOQwr7DkcKCw5HCgcORwoLDkcKDw5DCv8OQwr7DkMKyIMOQwrggw5DCs8ORwoDDkMKww5DCvcOQwrjDkcKGICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgLmNvbnRhY3Qtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAmIC5jb250YWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLmltZy1sb2dvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNzNweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiAucG9saWN5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICYgLmxvY2F0aW9uIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgLnRleHQtZ3JleSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvdHRvbS1mb290ZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZWIzYzE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMjBweCAxMCU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpcGxvbXMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRheGVzLWluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mby1sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAubmVlZC1pbmZvIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 9659:
/*!***********************************************************************************!*\
  !*** ./src/app/website/shared/layout/header/burger-menu/burger-menu.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BurgerMenuComponent: () => (/* binding */ BurgerMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




function BurgerMenuComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    scrolled: a0
  };
};
function BurgerMenuComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041A\u041B\u0418\u041D\u0418\u041A\u0410-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "03");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19)(8, "div", 20)(9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.isScrolled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.pagesList[ctx_r1.currentRoute]);
  }
}
class BurgerMenuComponent {
  constructor(router) {
    this.router = router;
    this.pagesList = {
      '/specialists': 'Специалисты',
      '/analyzes': 'Анализы',
      '/about': 'О клинике',
      '/stock': 'Акции',
      '/price-list': 'Прайс-лист'
    };
    this.isScrolled = false;
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this.currentRoute = event.url; // Получаем текущий маршрут
      }
    });
  }
  // Метод для закрытия чекбокса
  closeMenu() {
    console.log(this.currentRoute);
    const checkbox = document.getElementById('menu-icon');
    if (checkbox) {
      checkbox.checked = false; // Закрываем чекбокс
    }
  }

  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // порог прокрутки 50 пикселей
  }

  lala() {
    console.log(this.currentRoute);
  }
  static {
    this.ɵfac = function BurgerMenuComponent_Factory(t) {
      return new (t || BurgerMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BurgerMenuComponent,
      selectors: [["app-burger-menu"]],
      hostBindings: function BurgerMenuComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function BurgerMenuComponent_scroll_HostBindingHandler($event) {
            return ctx.onWindowScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 30,
      vars: 2,
      consts: [[3, "click"], ["class", "main-route", 4, "ngIf"], ["class", "other-route", 4, "ngIf"], ["type", "checkbox", "id", "menu-icon", "name", "menu-icon", 1, "menu-icon"], ["for", "menu-icon"], [1, "nav"], ["routerLink", "/main", 3, "click"], ["routerLink", "/specialists", 3, "click"], ["routerLink", "/analyzes", 3, "click"], ["routerLink", "/about", 3, "click"], [1, "burger-other"], [1, "icons"], ["src", "assets/data/icon/header/whatsapp.svg", "alt", ""], ["src", "assets/data/icon/header/vk.svg", "alt", ""], ["src", "assets/data/icon/header/instagram.svg", "alt", ""], [1, "main-route"], ["routerLink", "/main", "src", "assets/data/icon/header/logo.svg", "alt", ""], [1, "other-route"], [1, "upper-header"], [1, "page-name-wrapper", 3, "ngClass"], [1, "page-name"]],
      template: function BurgerMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerMenuComponent_Template_div_click_1_listener() {
            return ctx.lala();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BurgerMenuComponent_div_2_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BurgerMenuComponent_div_3_Template, 11, 4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3)(5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5)(7, "ul")(8, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerMenuComponent_Template_li_click_8_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerMenuComponent_Template_li_click_10_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerMenuComponent_Template_li_click_12_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0410\u043D\u0430\u043B\u0438\u0437\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerMenuComponent_Template_li_click_14_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041E \u043A\u043B\u0438\u043D\u0438\u043A\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerMenuComponent_Template_li_click_16_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0410\u043A\u0446\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerMenuComponent_Template_li_click_18_listener() {
            return ctx.closeMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10)(21, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12)(23, "img", 13)(24, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div")(26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0433.\u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u044B\u0435 \u0427\u0435\u043B\u043D\u044B, \u0443\u043B.\u0410\u0445\u043C\u0435\u0442\u0448\u0438\u043D\u0430,116");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "+7(8552)25-05-03");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoute === "/main");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoute !== "/main");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".main-route[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 80px;\n}\n.main-route[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.other-route[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n.other-route[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 33px;\n}\n.other-route[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  width: 62px;\n}\n.other-route[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #0081EC;\n}\n.other-route[_ngcontent-%COMP%]   .upper-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline;\n  font-weight: 600;\n  color: #E31D24;\n}\n.other-route[_ngcontent-%COMP%]   .page-name-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 85px;\n}\n.other-route[_ngcontent-%COMP%]   .page-name-wrapper[_ngcontent-%COMP%]   .page-name[_ngcontent-%COMP%] {\n  background-color: #7EB3C1;\n  padding: 25px 0;\n  text-align: center;\n}\n.other-route[_ngcontent-%COMP%]   .page-name-wrapper[_ngcontent-%COMP%]   .page-name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.scrolled[_ngcontent-%COMP%] {\n  margin: 0 3%;\n  top: 10px !important;\n  transition: top 0.4s ease;\n  z-index: 4;\n}\n.scrolled[_ngcontent-%COMP%]   .page-name[_ngcontent-%COMP%] {\n  width: 94%;\n  border-radius: 20px;\n  box-shadow: -10px 11px 9px 14px rgba(22, 24, 79, 0.1);\n}\n\n.burger-other[_ngcontent-%COMP%] {\n  position: relative;\n  top: 130px;\n}\n.burger-other[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.burger-other[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: none !important;\n  color: #ffffff;\n}\n\n[type=checkbox][_ngcontent-%COMP%]:checked, [type=checkbox][_ngcontent-%COMP%]:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], .menu-icon[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 63px;\n  right: 55px;\n  display: block;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  z-index: 10;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, .menu-icon[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 19px;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  border-top: 2px solid #ffffff;\n  border-bottom: 2px solid #ffffff;\n  transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after, .menu-icon[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 22px;\n  height: 2px;\n  z-index: 20;\n  top: 10px;\n  right: 4px;\n  background-color: #ffffff;\n  transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  top: 10px;\n  transform: rotate(45deg);\n  height: 2px;\n  background-color: #ffffff;\n  border-width: 0;\n  transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  width: 30px;\n  margin-top: 0;\n  right: 0;\n  transform: rotate(-45deg);\n  transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 33px;\n  right: 30px;\n  display: block;\n  width: 80px;\n  height: 80px;\n  padding: 0;\n  margin: 0;\n  z-index: 9;\n  overflow: hidden;\n  box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);\n  background-color: #7EB3C1;\n  animation: _ngcontent-%COMP%_border-transform 7s linear infinite;\n  transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n@keyframes _ngcontent-%COMP%_border-transform {\n  0%, 100% {\n    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;\n  }\n  14% {\n    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;\n  }\n  28% {\n    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;\n  }\n  42% {\n    border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;\n  }\n  56% {\n    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;\n  }\n  70% {\n    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;\n  }\n  84% {\n    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;\n  }\n}\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  width: 200%;\n  height: 200%;\n  transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  z-index: 6;\n  text-align: center;\n  transform: translateY(-50%);\n  list-style: none;\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 10px 0;\n  text-align: center;\n  list-style: none;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(30px);\n  transition: all 250ms linear;\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 200ms;\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 150ms;\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 100ms;\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 50ms;\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n  display: inline-block;\n  position: relative;\n  color: #ffffff;\n  transition: all 250ms linear;\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 350ms ease, transform 250ms ease;\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 1400ms;\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 1480ms;\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 1560ms;\n}\n\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 1640ms;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2Vic2l0ZS9zaGFyZWQvbGF5b3V0L2hlYWRlci9idXJnZXItbWVudS9idXJnZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSOztBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNaO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFaEI7QUFFSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFSO0FBQ1E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0FBRWhCOztBQUlBO0VBQ0ksWUFBQTtFQU1BLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBTko7QUFESTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBR1I7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFESjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBRUk7RUFDSSwrQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFJQTs7RUFFSSxrQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFHQTs7RUFFSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUFKOztBQUVBOztFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0TkFBQTtBQUNKOztBQUtBOztFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUlBQUE7QUFGSjs7QUFLQTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzT0FBQTtBQUZKOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxrSUFBQTtBQUxKOztBQVNBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxnUEFBQTtBQU5KOztBQVlBO0VBQ0k7SUFFSSw4Q0FBQTtFQVZOO0VBWUU7SUFDSSw4Q0FBQTtFQVZOO0VBWUU7SUFDSSw4Q0FBQTtFQVZOO0VBWUU7SUFDSSw4Q0FBQTtFQVZOO0VBWUU7SUFDSSw4Q0FBQTtFQVZOO0VBWUU7SUFDSSw4Q0FBQTtFQVZOO0VBWUU7SUFDSSw4Q0FBQTtFQVZOO0FBQ0Y7QUFhQTtFQUNJLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK09BQUE7QUFYSjs7QUFrQkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFmSjs7QUFpQkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksdUJBQUE7QUFiSjs7QUFlQTtFQUNJLHVCQUFBO0FBWko7O0FBY0E7RUFDSSx1QkFBQTtBQVhKOztBQWFBO0VBQ0ksc0JBQUE7QUFWSjs7QUFZQTtFQUNJLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBVEo7O0FBWUE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0RBQUE7QUFUSjs7QUFXQTtFQUNJLHdCQUFBO0FBUko7O0FBVUE7RUFDSSx3QkFBQTtBQVBKOztBQVNBO0VBQ0ksd0JBQUE7QUFOSjs7QUFRQTtFQUNJLHdCQUFBO0FBTEoiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1yb3V0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdGhlci1yb3V0ZSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAmIC51cHBlci1oZWFkZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAzM3B4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwODFFQztcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNFMzFEMjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmIC5wYWdlLW5hbWUtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogODVweDtcclxuICAgICAgICAmIC5wYWdlLW5hbWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0VCM0MxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxlZCB7XHJcbiAgICBtYXJnaW46IDAgMyU7XHJcbiAgICAmIC5wYWdlLW5hbWUge1xyXG4gICAgICAgIHdpZHRoOiA5NCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAtMTBweCAxMXB4IDlweCAxNHB4IHJnYigyMiAyNCA3OSAvIDEwJSk7XHJcbiAgICB9XHJcbiAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHRvcCAwLjRzIGVhc2U7XHJcbiAgICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG4uYnVyZ2VyLW90aGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTMwcHg7XHJcbiAgICAuaWNvbnMge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgfVxyXG4gICAgZGl2IHAge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCxcclxuW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC05OTk5cHg7XHJcbn1cclxuLm1lbnUtaWNvbjpjaGVja2VkICsgbGFiZWwsXHJcbi5tZW51LWljb246bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjNweDtcclxuICAgIHJpZ2h0OiA1NXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5tZW51LWljb246Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcclxuLm1lbnUtaWNvbjpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci13aWR0aCAxMDBtcyAxNTAwbXMgZWFzZSxcclxuICAgICAgICB0b3AgMTAwbXMgMTYwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuICAgICAgICBoZWlnaHQgMTAwbXMgMTYwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UsXHJcbiAgICAgICAgdHJhbnNmb3JtIDIwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG4ubWVudS1pY29uOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcclxuLm1lbnUtaWNvbjpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxMDBtcyAxNzUwbXMgZWFzZSwgcmlnaHQgMTAwbXMgMTc1MG1zIGVhc2UsXHJcbiAgICAgICAgbWFyZ2luLXRvcCAxMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG59XHJcbi5tZW51LWljb246Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItd2lkdGggMTAwbXMgMzQwbXMgZWFzZSxcclxuICAgICAgICB0b3AgMTAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG4gICAgICAgIGhlaWdodCAxMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAyMDBtcyA1MDBtcyBlYXNlLFxyXG4gICAgICAgIHRyYW5zZm9ybSAyMDBtcyAxNzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG59XHJcbi5tZW51LWljb246Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDEwMG1zIGVhc2UsIHJpZ2h0IDEwMG1zIGVhc2UsIG1hcmdpbi10b3AgMTAwbXMgNTAwbXMgZWFzZSxcclxuICAgICAgICB0cmFuc2Zvcm0gMjAwbXMgMTcwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMzcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdFQjNDMTtcclxuICAgIGFuaW1hdGlvbjogYm9yZGVyLXRyYW5zZm9ybSA3cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMzUwbXMgMTEwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuICAgICAgICByaWdodCAzNTBtcyAxMTAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG4gICAgICAgIHRyYW5zZm9ybSAyNTBtcyAxMTAwbXMgZWFzZSxcclxuICAgICAgICB3aWR0aCA2NTBtcyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXHJcbiAgICAgICAgaGVpZ2h0IDY1MG1zIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJvcmRlci10cmFuc2Zvcm0ge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2MyUgMzclIDU0JSA0NiUgLyA1NSUgNDglIDUyJSA0NSU7XHJcbiAgICB9XHJcbiAgICAxNCUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCUgNTQlIDQ2JSAvIDQ5JSA2MCUgNDAlIDUxJTtcclxuICAgIH1cclxuICAgIDI4JSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTQlIDQ2JSAzOCUgNjIlIC8gNDklIDcwJSAzMCUgNTElO1xyXG4gICAgfVxyXG4gICAgNDIlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2MSUgMzklIDU1JSA0NSUgLyA2MSUgMzglIDYyJSAzOSU7XHJcbiAgICB9XHJcbiAgICA1NiUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDYxJSAzOSUgNjclIDMzJSAvIDcwJSA1MCUgNTAlIDMwJTtcclxuICAgIH1cclxuICAgIDcwJSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAzNCUgNjYlIC8gNTYlIDY4JSAzMiUgNDQlO1xyXG4gICAgfVxyXG4gICAgODQlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0NiUgNTQlIDUwJSA1MCUgLyAzNSUgNjElIDM5JSA2NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZW51LWljb246Y2hlY2tlZCB+IC5uYXYge1xyXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICAgIHRyYW5zaXRpb246IHRvcCAzNTBtcyA3MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXHJcbiAgICAgICAgcmlnaHQgMzUwbXMgNzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG4gICAgICAgIHRyYW5zZm9ybSAyNTBtcyA3MDBtcyBlYXNlLFxyXG4gICAgICAgIHdpZHRoIDc1MG1zIDEwMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXHJcbiAgICAgICAgaGVpZ2h0IDc1MG1zIDEwMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbn1cclxuXHJcbi5uYXYgdWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2IHVsIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcclxufVxyXG4ubmF2IHVsIGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAyMDBtcztcclxufVxyXG4ubmF2IHVsIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxNTBtcztcclxufVxyXG4ubmF2IHVsIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxMDBtcztcclxufVxyXG4ubmF2IHVsIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiA1MG1zO1xyXG59XHJcbi5uYXYgdWwgbGkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5tZW51LWljb246Y2hlY2tlZCB+IC5uYXYgdWwgbGkge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzUwbXMgZWFzZSwgdHJhbnNmb3JtIDI1MG1zIGVhc2U7XHJcbn1cclxuLm1lbnUtaWNvbjpjaGVja2VkIH4gLm5hdiB1bCBsaTpudGgtY2hpbGQoMSkge1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTQwMG1zO1xyXG59XHJcbi5tZW51LWljb246Y2hlY2tlZCB+IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDE0ODBtcztcclxufVxyXG4ubWVudS1pY29uOmNoZWNrZWQgfiAubmF2IHVsIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxNTYwbXM7XHJcbn1cclxuLm1lbnUtaWNvbjpjaGVja2VkIH4gLm5hdiB1bCBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTY0MG1zO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 8073:
/*!******************************************************************!*\
  !*** ./src/app/website/shared/layout/header/header.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _burger_menu_burger_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger-menu/burger-menu.component */ 9659);




function HeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-burger-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0433.\u041D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u044B\u0435 \u0427\u0435\u043B\u043D\u044B, \u0443\u043B.\u0410\u0445\u043C\u0435\u0442\u0448\u0438\u043D\u0430,116");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "+7(8552)25-05-03");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 15)(9, "img", 16)(10, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function (a0, a1) {
  return {
    scrolled: a0,
    noscrolled: a1
  };
};
function HeaderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_div_2_div_1_Template, 11, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "ul", 6)(5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0410\u043D\u0430\u043B\u0438\u0437\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 6)(13, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u041E \u043A\u043B\u0438\u043D\u0438\u043A\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0410\u043A\u0446\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isScrolled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r1.isScrolled, !ctx_r1.isScrolled));
  }
}
class HeaderComponent {
  constructor() {
    this.isScrolled = false;
    this.isMobileView = false;
    this.checkWindowSize(window.innerWidth);
  }
  onResize(event) {
    this.checkWindowSize(event.target.innerWidth);
  }
  checkWindowSize(width) {
    this.isMobileView = width <= 768; // Здесь вы можете изменить ширину по вашему усмотрению
  }

  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // порог прокрутки 50 пикселей
  }

  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
            return ctx.onWindowScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "header-desktop", 4, "ngIf"], [1, "header-desktop"], ["class", "top-header", 4, "ngIf"], [1, "main-header-wrapper", 3, "ngClass"], [1, "main-header"], [1, "nav-list"], ["routerLink", "/main"], ["routerLink", "/specialists"], ["routerLink", "/analyzes"], ["src", "assets/data/icon/header/logo.svg", "alt", ""], ["routerLink", "/about"], [1, "top-header"], [1, "left-side"], [1, "icons-head"], ["src", "assets/data/icon/header/whatsapp.svg", "alt", ""], ["src", "assets/data/icon/header/vk.svg", "alt", ""], ["src", "assets/data/icon/header/instagram.svg", "alt", ""]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 2, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_2_Template, 19, 5, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobileView);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _burger_menu_burger_menu_component__WEBPACK_IMPORTED_MODULE_0__.BurgerMenuComponent],
      styles: ["@charset \"UTF-8\";\nheader[_ngcontent-%COMP%] {\n  margin-bottom: 150px;\n}\n@media (max-width: 768px) {\n  header[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n\n.header-desktop[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  background-color: transparent; \n\n  transition: box-shadow 0.3s ease; \n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.top-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  height: 33px;\n  align-items: center;\n  background-color: #0081EC;\n}\n.top-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n}\n.top-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40%;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.top-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .icons-head[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.top-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .icons-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 5px;\n}\n.top-header[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.scrolled[_ngcontent-%COMP%] {\n  box-shadow: -10px 11px 9px 14px rgba(22, 24, 79, 0.1);\n  margin-top: 10px;\n  width: 90%;\n  border-radius: 20px;\n  transition: margin-top 0.1s ease; \n\n}\n\n.noscrolled[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.main-header-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(90.38deg, #7eb3c1 1.38%, #90c0e8 99.01%);\n}\n.main-header-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  margin: 0 10%;\n  color: rgb(255, 255, 255);\n  display: flex;\n  height: 124px;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.main-header-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  gap: 40px;\n}\n@media (max-width: 1024px) {\n  .main-header-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n.main-header-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n}\n@media (max-width: 1024px) {\n  .main-header-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media (max-width: 768px) {\n  .main-header-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 1200px) {\n  .main-header-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n    margin: 0 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2Vic2l0ZS9zaGFyZWQvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksb0JBQUE7QUFFSjtBQURJO0VBRko7SUFHUSxnQkFBQTtFQUlOO0FBQ0Y7O0FBREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsNkJBQUEsRUFBQSxtQkFBQTtFQUNBLGdDQUFBLEVBQUEsMEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSUo7QUFISTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBS1I7QUFISTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUtSO0FBSlE7RUFDSSxhQUFBO0VBQ0EsUUFBQTtBQU1aO0FBTGdCO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBT3BCO0FBSlE7RUFDSSx1QkFBQTtBQU1aOztBQURBO0VBQ0kscURBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLGdDQUFBLEVBQUEsbUNBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFBQTtFQUNJLG9FQUFBO0FBR0o7QUFGSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUlSO0FBSFE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFLWjtBQUpZO0VBSko7SUFLUSxTQUFBO0VBT2Q7QUFDRjtBQUxZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU9oQjtBQU5nQjtFQUpKO0lBS1EsZUFBQTtFQVNsQjtBQUNGO0FBUmdCO0VBUEo7SUFRUSxlQUFBO0VBV2xCO0FBQ0Y7QUFOSTtFQUNJO0lBQ0ksWUFBQTtFQVFWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWRlc2t0b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiDDkMKdw5DCsMORwofDkMKww5DCu8ORwozDkMK9w5HCi8OQwrkgw5HChsOQwrLDkMK1w5HCgiAqL1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2U7IC8qIMOQwp/DkMK7w5DCsMOQwrLDkMK9w5HCi8OQwrkgw5DCv8OQwrXDkcKAw5DCtcORwoXDkMK+w5DCtCDDkcKGw5DCssOQwrXDkcKCw5DCsCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MUVDO1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5sZWZ0LXNpZGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5pY29ucy1oZWFkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxlZCB7XHJcbiAgICBib3gtc2hhZG93OiAtMTBweCAxMXB4IDlweCAxNHB4IHJnYigyMiAyNCA3OSAvIDEwJSk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAwLjFzIGVhc2U7IC8qIMOQwp/DkMK7w5DCsMOQwrLDkMK9w5HCi8OQwrkgw5DCv8OQwrXDkcKAw5DCtcORwoXDkMK+w5DCtCDDkMK0w5DCu8ORwo8gbWFyZ2luLXRvcCAqL1xyXG59XHJcblxyXG4ubm9zY3JvbGxlZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4taGVhZGVyLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwLjM4ZGVnLCAjN2ViM2MxIDEuMzglLCAjOTBjMGU4IDk5LjAxJSk7XHJcbiAgICAmIC5tYWluLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwJTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTI0cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAubmF2LWxpc3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDQwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIC5tYWluLWhlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAyJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 7409:
/*!*************************************************************!*\
  !*** ./src/app/website/shared/pages/main/main.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _our_specialists_our_specialists_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./our-specialists/our-specialists.component */ 4155);


class MainComponent {
  static {
    this.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 54,
      vars: 0,
      consts: [[1, "main"], [1, "main-block", "main-cover"], [1, "main-title"], ["type", "button", 1, "btn-make-appointment"], [1, "main-contact"], [1, "contact-whatsapp"], ["src", "assets/data/icon/network/whatsapp-base.svg", "alt", ""], [1, "online-appointment"], [1, "main-block", "main-about-company"], [1, "main-why-exactly"], [1, "main-two-block"], [1, "first-block"], [2, "font-weight", "600"], [1, "second-block"], ["src", "assets/data/icon/other/doctor.svg", "alt", ""], [1, "main-goals"], [2, "font-size", "15px"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0417\u0430\u0431\u043E\u0442\u0430 \u043E \u0432\u0430\u0448\u0435\u043C \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u2014\u043D\u0430\u0448 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u0435\u043C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u041E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " \u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u041A\u043B\u0438\u043D\u0438\u043A\u0430 03");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u041C\u044B \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u043C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438, \u043D\u043E \u0438 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div")(27, "ul")(28, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0432\u043E\u0437\u0440\u0430\u0441\u0442");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u043F\u043E\u043B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u043E\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043D\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ul")(35, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0444\u0430\u043A\u0442\u043E\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u0441\u0440\u0435\u0434\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0438 \u0438 \u0440\u0435\u0436\u0438\u043C \u043F\u0438\u0442\u0430\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0433\u0435\u043D\u0435\u0442\u0438\u043A\u0435 \u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div")(46, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u041E\u043F\u044B\u0442\u043D\u044B\u0435 \u0432\u0440\u0430\u0447\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " \u0423 \u043D\u0430\u0441 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u0435\u043C \u043A \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u043B\u0430\u0441\u0441\u043D\u044B\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C \u043D\u0430 \u043B\u044E\u0431\u043E\u0435 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0440\u0435\u043C\u044F! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15)(51, "h2", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " \u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0446\u0435\u043B\u0438 \u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043F\u043B\u0430\u043D \u043B\u0435\u0447\u0435\u043D\u0438\u044F. \u041D\u0430\u0441 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E\u0442 \u0443\u0436\u0435 \u0442\u044B\u0441\u044F\u0447\u0438 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "app-our-specialists");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_our_specialists_our_specialists_component__WEBPACK_IMPORTED_MODULE_0__.OurSpecialistsComponent],
      styles: ["@charset \"UTF-8\";\n.main-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main-cover[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  height: calc(100vh - 157px);\n  margin: 0 40px;\n}\n@media (max-width: 768px) {\n  .main-cover[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.main-cover[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 600px;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .main-cover[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n}\n.main-cover[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: 400;\n}\n@media (max-width: 768px) {\n  .main-cover[_ngcontent-%COMP%]   .main-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.main-cover[_ngcontent-%COMP%]   .btn-make-appointment[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  background-color: #0081EC;\n  color: #ffffff;\n  padding: 14px 23px;\n  border-radius: 8px;\n}\n.main-cover[_ngcontent-%COMP%]   .btn-make-appointment[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n  background-color: #2e90df;\n}\n.main-cover[_ngcontent-%COMP%]   .btn-make-appointment[_ngcontent-%COMP%]:active {\n  transform: scale(1.06);\n  background: #034982;\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%]   .contact-whatsapp[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px solid #0081EC;\n  border-radius: 50%;\n  padding: 5px;\n  padding-bottom: 1px;\n  height: 57px;\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%]   .contact-whatsapp[_ngcontent-%COMP%]:hover {\n  border: none;\n  padding-top: 6px;\n  padding-left: 6px;\n  transform: scale(1.2);\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%]   .contact-whatsapp[_ngcontent-%COMP%]:active {\n  transform: scale(1.3);\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%]   .online-appointment[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px solid #0081EC;\n  border-radius: 50%;\n  padding: 5px;\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%]   .online-appointment[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 75px;\n  padding: 23px 0;\n  text-align: center;\n  background-color: #0081EC;\n  border-radius: 50%;\n  font-size: 12px;\n  font-weight: 500;\n  color: #ffffff;\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%]   .online-appointment[_ngcontent-%COMP%]:hover {\n  border: none;\n  padding-bottom: 6px;\n  padding-right: 6px;\n  transform: scale(1.15);\n  background-color: #2e90df;\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%]   .online-appointment[_ngcontent-%COMP%]:active {\n  transform: scale(1.2);\n  background: #034982;\n}\n.main-cover[_ngcontent-%COMP%]   .main-contact[_ngcontent-%COMP%]   .online-appointment[_ngcontent-%COMP%]:active   div[_ngcontent-%COMP%] {\n  background-color: #034982;\n}\n\n.main-about-company[_ngcontent-%COMP%] {\n  margin: 40px 0;\n}\n.main-about-company[_ngcontent-%COMP%]   .main-why-exactly[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.main-about-company[_ngcontent-%COMP%]   .main-why-exactly[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: 32px;\n  color: #E31D24;\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1024px) {\n  .main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%] {\n  width: 440px;\n  padding: 40px;\n  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2509803922);\n  border-radius: 8px;\n  font-size: 15px;\n  background-color: #fff;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  .main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 54px;\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative; \n\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u00B7\";\n  font-size: 25px;\n  position: absolute;\n  left: -12px; \n\n  top: 50%; \n\n  transform: translateY(-50%); \n\n  margin-right: 10px; \n\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .second-block[_ngcontent-%COMP%] {\n  position: relative;\n  left: -50px;\n  border: 1px solid #0081EC;\n  border-radius: 8px;\n  display: flex;\n  gap: 40px;\n  padding: 28px 66.5px;\n}\n@media (max-width: 1024px) {\n  .main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .second-block[_ngcontent-%COMP%] {\n    left: 0px;\n    top: -20px;\n  }\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .second-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .second-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 18px;\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .second-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 243px;\n  text-align: center;\n  font-size: 12px;\n}\n.main-about-company[_ngcontent-%COMP%]   .main-two-block[_ngcontent-%COMP%]   .second-block[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  z-index: 2;\n  transform: scale(1.02);\n}\n.main-about-company[_ngcontent-%COMP%]   .main-goals[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  max-width: 580px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2Vic2l0ZS9zaGFyZWQvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBQ0k7RUFKSjtJQUtRLFNBQUE7RUFFTjtBQUNGO0FBREk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdSO0FBRlE7RUFKSjtJQUtRLFVBQUE7RUFLVjtBQUNGO0FBSlE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1aO0FBTFk7RUFKSjtJQUtRLGVBQUE7RUFRZDtBQUNGO0FBTEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBT1I7QUFMUTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUFPWjtBQUxRO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQU9aO0FBSkk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFNUjtBQUpRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTVo7QUFKWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFNaEI7QUFKWTtFQUNJLHFCQUFBO0FBTWhCO0FBSFE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFLWjtBQUpZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTWhCO0FBSlk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFNaEI7QUFKWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFNaEI7QUFMZ0I7RUFDSSx5QkFBQTtBQU9wQjs7QUFBQTtFQUNJLGNBQUE7QUFHSjtBQUFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFFWjtBQURZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBR2hCO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFKSjtJQUtRLHNCQUFBO0VBR1Y7QUFDRjtBQUZRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx3REFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUlaO0FBSFk7RUFSSjtJQVNRLFVBQUE7RUFNZDtBQUNGO0FBTFk7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQU9oQjtBQU5nQjtFQUNJLFlBQUE7QUFRcEI7QUFQb0I7RUFDSSxrQkFBQSxFQUFBLDBFQUFBO0FBU3hCO0FBTm9CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUEsRUFBQSx3QkFBQTtFQUNBLFFBQUEsRUFBQSw0QkFBQTtFQUNBLDJCQUFBLEVBQUEsMEJBQUE7RUFDQSxrQkFBQSxFQUFBLHlDQUFBO0FBUXhCO0FBSlk7RUFDSSxzQkFBQTtBQU1oQjtBQUhRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUFLWjtBQUpZO0VBUko7SUFTUSxTQUFBO0lBQ0EsVUFBQTtFQU9kO0FBQ0Y7QUFOWTtFQUNJLGtCQUFBO0FBUWhCO0FBUGdCO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBU3BCO0FBUGdCO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFTcEI7QUFOWTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBUWhCO0FBSkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFNUiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm1haW4tYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbi1jb3ZlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1N3B4KTtcclxuICAgIG1hcmdpbjogMCA0MHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgJiAubWFpbi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmIC5idG4tbWFrZS1hcHBvaW50bWVudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODFFQztcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4IDIzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlOTBkZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM0OTgyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYgLm1haW4tY29udGFjdCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmIC5jb250YWN0LXdoYXRzYXBwIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4MUVDO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1N3B4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgLm9ubGluZS1hcHBvaW50bWVudCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwODFFQztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICYgZGl2IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjNweCAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODFFQztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlOTBkZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDM0OTgyO1xyXG4gICAgICAgICAgICAgICAgJiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzQ5ODI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWluLWFib3V0LWNvbXBhbnkge1xyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcblxyXG4gICAgJiAubWFpbi13aHktZXhhY3RseSB7XHJcbiAgICAgICAgJiBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNFMzFEMjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmIC5tYWluLXR3by1ibG9jayB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIC5maXJzdC1ibG9jayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IDBweCAjMDAwMDAwNDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiBkaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIMOQwp/DkMK+w5DCt8OQwrLDkMK+w5DCu8ORwo/DkMK1w5HCgiDDkMK4w5HCgcOQwr/DkMK+w5DCu8ORwozDkMK3w5DCvsOQwrLDkMKww5HCgsORwowgw5DCsMOQwrHDkcKBw5DCvsOQwrvDkcKOw5HCgsOQwr3DkMK+w5DCtSDDkMK/w5DCvsOQwrfDkMK4w5HChsOQwrjDkMK+w5DCvcOQwrjDkcKAw5DCvsOQwrLDkMKww5DCvcOQwrjDkMK1IMOQwrTDkMK7w5HCjyDDkMK/w5HCgcOQwrXDkMKyw5DCtMOQwr7DkcKNw5DCu8OQwrXDkMK8w5DCtcOQwr3DkcKCw5DCsCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsaTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIsOCwrdcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMnB4OyAvKiDDkMKfw5DCvsOQwrfDkMK4w5HChsOQwrjDkMK+w5DCvcOQwrjDkcKAw5HCg8OQwrXDkMK8IMOQwrLDkMK7w5DCtcOQwrLDkMK+ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlOyAvKiDDkMKmw5DCtcOQwr3DkcKCw5HCgMOQwrjDkcKAw5HCg8OQwrXDkMK8IMOQwr/DkMK+IMOQwrLDkMK1w5HCgMORwoLDkMK4w5DCusOQwrDDkMK7w5DCuCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IC8qIMOQwpLDkcKLw5HCgMOQwrDDkMKyw5DCvcOQwrjDkMKyw5DCsMOQwrXDkMK8IMOQwr/DkMK+IMORwobDkMK1w5DCvcORwoLDkcKAw5HCgyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIMOQwp7DkcKCw5HCgcORwoLDkcKDw5DCvyDDkMK0w5DCu8ORwo8gw5DCvsORwoLDkMK0w5DCtcOQwrvDkMK1w5DCvcOQwrjDkcKPIMORwoLDkMK+w5HCh8OQwrrDkMK4IMOQwr7DkcKCIMORwoLDkMK1w5DCusORwoHDkcKCw5DCsCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiAuc2Vjb25kLWJsb2NrIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwODFFQztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI4cHggNjYuNXB4O1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgZGl2IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjQzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYgLm1haW4tZ29hbHMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 4155:
/*!****************************************************************************************!*\
  !*** ./src/app/website/shared/pages/main/our-specialists/our-specialists.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OurSpecialistsComponent: () => (/* binding */ OurSpecialistsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = ["specList"];
function OurSpecialistsComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7)(3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const person_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.fio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.speciality);
  }
}
class OurSpecialistsComponent {
  constructor() {
    this.specialists = [{
      fio: 'Имя Отчество Фамилия 1',
      speciality: 'Должность сотрудника',
      url: ''
    }, {
      fio: 'Имя Отчество Фамилия 2',
      speciality: 'Должность сотрудника',
      url: ''
    }, {
      fio: 'Имя Отчество Фамилия 3',
      speciality: 'Должность сотрудника',
      url: ''
    }, {
      fio: 'Имя Отчество Фамилия 4',
      speciality: 'Должность сотрудника',
      url: ''
    }, {
      fio: 'Имя Отчество Фамилия 5',
      speciality: 'Должность сотрудника',
      url: ''
    }, {
      fio: 'Имя Отчество Фамилия 6',
      speciality: 'Должность сотрудника',
      url: ''
    }, {
      fio: 'Имя Отчество Фамилия 7',
      speciality: 'Должность сотрудника',
      url: ''
    }, {
      fio: 'Имя Отчество Фамилия 8',
      speciality: 'Должность сотрудника',
      url: ''
    }];
    this.visibleSpecialists = [];
    this.currentStartIndex = 0;
    this.itemsToShow = 6; // количество элементов, которые нужно показывать
  }

  ngOnInit() {
    // Инициализация данных, но не вызовем updateItemsToShow здесь
    this.updateVisibleSpecialists();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.updateItemsToShow();
      this.updateVisibleSpecialists();
    });
  }
  // Метод для обновления количества элементов для показа
  updateItemsToShow() {
    const element = this.specList.nativeElement;
    if (element) {
      const width = element.offsetWidth;
      this.itemsToShow = Math.floor(width / 244);
      // При необходимости обновляем массив видимых специалистов
      this.updateVisibleSpecialists();
    }
  }
  onResize() {
    this.updateItemsToShow();
  }
  updateVisibleSpecialists() {
    // Получаем видимые специалисты
    this.visibleSpecialists = this.specialists.slice(this.currentStartIndex, this.currentStartIndex + this.itemsToShow);
    // Если текущее количество специалистов меньше, чем itemsToShow, добавляем циклический переход
    if (this.visibleSpecialists.length < this.itemsToShow) {
      const remaining = this.itemsToShow - this.visibleSpecialists.length;
      const wrapAround = this.specialists.slice(0, remaining);
      this.visibleSpecialists = this.visibleSpecialists.concat(wrapAround);
    }
  }
  next() {
    // Циклический переход вправо по одному специалисту
    this.currentStartIndex = (this.currentStartIndex + 1) % this.specialists.length;
    this.updateVisibleSpecialists();
    console.log(this.currentStartIndex, this.visibleSpecialists);
  }
  prev() {
    // Циклический переход влево по одному специалисту
    this.currentStartIndex = (this.currentStartIndex - 1 + this.specialists.length) % this.specialists.length;
    this.updateVisibleSpecialists();
    console.log(this.currentStartIndex, this.visibleSpecialists);
  }
  static {
    this.ɵfac = function OurSpecialistsComponent_Factory(t) {
      return new (t || OurSpecialistsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurSpecialistsComponent,
      selectors: [["app-our-specialists"]],
      viewQuery: function OurSpecialistsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.specList = _t.first);
        }
      },
      hostBindings: function OurSpecialistsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function OurSpecialistsComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 8,
      vars: 1,
      consts: [[1, "specialists"], [3, "click"], ["src", "assets/data/icon/other/arrow-left.svg", "alt", ""], ["specList", ""], [4, "ngFor", "ngForOf"], ["src", "assets/data/icon/other/arrow-rigth.svg", "alt", ""], [1, "person-img"], [1, "person-info"], [1, "person-fio"], [1, "person-speciality"]],
      template: function OurSpecialistsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OurSpecialistsComponent_Template_div_click_1_listener() {
            return ctx.prev();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", null, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OurSpecialistsComponent_li_5_Template, 7, 2, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OurSpecialistsComponent_Template_div_click_6_listener() {
            return ctx.next();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visibleSpecialists);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: ["@charset \"UTF-8\";\n.specialists[_ngcontent-%COMP%] {\n  margin: 60px 30px;\n  display: flex;\n  align-items: center;\n}\n.specialists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  min-width: calc(100% - 60px);\n  max-width: calc(100% - 60px);\n  overflow: hidden; \n\n  display: flex;\n  justify-content: space-around;\n  gap: 20px;\n  padding: 0;\n  margin: 0 20px;\n}\n.specialists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 224px;\n}\n.specialists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+1)   .person-img[_ngcontent-%COMP%] {\n  height: 332px;\n  background-color: #ECECEC;\n}\n.specialists[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-last-child(n+1)   .person-info[_ngcontent-%COMP%] {\n  border: 1px solid #7EB3C1;\n  border-top: none;\n  height: 75px;\n}\n.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2Vic2l0ZS9zaGFyZWQvcGFnZXMvbWFpbi9vdXItc3BlY2lhbGlzdHMvb3VyLXNwZWNpYWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUNJLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQSxFQUFBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRVI7QUFBUTtFQUNJLGdCQUFBO0FBRVo7QUFBWTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUVoQjtBQUFZO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFaEI7QUFRQTtFQUNJLHVCQUFBO0FBTko7O0FBUUE7RUFDSSxxQkFBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWNpYWxpc3RzIHtcclxuICAgIG1hcmdpbjogNjBweCAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiDDkMKhw5DCusORwoDDkcKLw5DCssOQwrDDkMK1w5HCgiDDkMK/w5DCtcORwoDDkMK1w5DCv8OQwr7DkMK7w5DCvcOQwrXDkMK9w5DCvcORwovDkMK1IMORwo3DkMK7w5DCtcOQwrzDkMK1w5DCvcORwoLDkcKLICovXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjI0cHg7XHJcbiAgICAgICAgICAgICY6bnRoLWxhc3QtY2hpbGQobisxKSB7XHJcbiAgICAgICAgICAgICYgLnBlcnNvbi1pbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMzJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJiAucGVyc29uLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdFQjNDMTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJiAucGVyc29uLXNwZWNpYWxpdHkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4ucmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 9917:
/*!*************************************************!*\
  !*** ./src/app/website/shared/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _modules_about_about_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/about/about.module */ 4623);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/footer/footer.component */ 2153);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/header/header.component */ 8073);
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main/main.component */ 7409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_main_our_specialists_our_specialists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main/our-specialists/our-specialists.component */ 4155);
/* harmony import */ var _layout_header_burger_menu_burger_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/header/burger-menu/burger-menu.component */ 9659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);










class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _modules_about_about_module__WEBPACK_IMPORTED_MODULE_0__.AboutModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent, _pages_main_our_specialists_our_specialists_component__WEBPACK_IMPORTED_MODULE_4__.OurSpecialistsComponent, _layout_header_burger_menu_burger_menu_component__WEBPACK_IMPORTED_MODULE_5__.BurgerMenuComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _modules_about_about_module__WEBPACK_IMPORTED_MODULE_0__.AboutModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map