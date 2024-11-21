"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_website_modules_analyzes_analyzes_module_ts"],{

/***/ 1310:
/*!*********************************************************************!*\
  !*** ./src/app/website/modules/analyzes/analyzes-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzesRoutingModule: () => (/* binding */ AnalyzesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _analyzes_analyzes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyzes/analyzes.component */ 1024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _analyzes_analyzes_component__WEBPACK_IMPORTED_MODULE_0__.AnalyzesComponent
}];
class AnalyzesRoutingModule {
  static {
    this.ɵfac = function AnalyzesRoutingModule_Factory(t) {
      return new (t || AnalyzesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AnalyzesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnalyzesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2279:
/*!*************************************************************!*\
  !*** ./src/app/website/modules/analyzes/analyzes.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzesModule: () => (/* binding */ AnalyzesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _analyzes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyzes-routing.module */ 1310);
/* harmony import */ var _analyzes_analyzes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analyzes/analyzes.component */ 1024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





class AnalyzesModule {
  static {
    this.ɵfac = function AnalyzesModule_Factory(t) {
      return new (t || AnalyzesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AnalyzesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _analyzes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnalyzesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AnalyzesModule, {
    declarations: [_analyzes_analyzes_component__WEBPACK_IMPORTED_MODULE_1__.AnalyzesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _analyzes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnalyzesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 1024:
/*!*************************************************************************!*\
  !*** ./src/app/website/modules/analyzes/analyzes/analyzes.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyzesComponent: () => (/* binding */ AnalyzesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AnalyzesComponent {
  static {
    this.ɵfac = function AnalyzesComponent_Factory(t) {
      return new (t || AnalyzesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalyzesComponent,
      selectors: [["app-analyzes"]],
      decls: 31,
      vars: 0,
      consts: [[1, "page-background"], [1, "about"], [1, "title"], [1, "main"], [1, "onePart"], [1, "leftPart"], [1, "info"], [2, "font-size", "14px"], [2, "font-size", "26px"], [1, "rightPart"], [1, "list-container"]],
      template: function AnalyzesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F / \u0410\u043D\u0430\u043B\u0438\u0437\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041A\u041B\u0418\u041D\u0418\u041A\u0410-03 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2000 \u0432\u0438\u0434\u043E\u0432 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "div", 6)(17, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0443 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u043E\u0432 \u0443\u0441\u043B\u0443\u0433\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10)(20, "ul")(21, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u043E\u0431\u0449\u0435\u043A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043A\u0440\u043E\u0432\u0438 \u0438 \u043C\u043E\u0447\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0431\u0438\u043E\u0445\u0438\u043C\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0442\u0435\u0441\u0442\u044B \u043D\u0430 \u0433\u043E\u0440\u043C\u043E\u043D\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0430\u043B\u043B\u0435\u0440\u0433\u043E\u043F\u0440\u043E\u0431\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u0441-\u0444\u0430\u043A\u0442\u043E\u0440\u0430 \u0438 \u0434\u0440.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        }
      },
      styles: [".title[_ngcontent-%COMP%] {\n  margin-left: 10.5%;\n  margin-top: 25px;\n  margin-bottom: 50px;\n}\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 14.63px;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: 10.5%;\n  margin-right: 10.5%;\n  margin-bottom: 50px;\n}\n\n.onePart[_ngcontent-%COMP%] {\n  display: flex;\n}\n.onePart[_ngcontent-%COMP%]   .leftPart[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.onePart[_ngcontent-%COMP%]   .rightPart[_ngcontent-%COMP%] {\n  z-index: 2;\n  width: 40vw;\n  height: 30vh;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 8px;\n  border: 1px solid rgb(210, 210, 210);\n}\n.onePart[_ngcontent-%COMP%]   .rightPart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n.onePart[_ngcontent-%COMP%]   .rightPart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n.onePart[_ngcontent-%COMP%]   .rightPart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: disc;\n  padding-left: 8vw;\n  margin: 10px 0;\n}\n.onePart[_ngcontent-%COMP%]   .rightPart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  margin: 5px 0;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2Vic2l0ZS9tb2R1bGVzL2FuYWx5emVzL2FuYWx5emVzL2FuYWx5emVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUFHLGVBQUE7RUFBaUIsb0JBQUE7QUFJeEI7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7QUFNSjtBQUxJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9SO0FBTEk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFPUjtBQU5RO0VBQ0ksVUFBQTtBQVFaO0FBUFE7RUFDSSxlQUFBO0VBQWlCLGtCQUFBO0VBQ2pCLGlCQUFBO0VBQ0Esb0JBQUE7QUFVWjtBQVJRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFTWjtBQVBRO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVNaIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwLjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBoMntmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxNC42M3B4O31cclxufVxyXG4ubWFpbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMC41JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAuNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5vbmVQYXJ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5sZWZ0UGFydHtcclxuICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0UGFydHtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtY29udGFpbmVyIHVsIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjOyBcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4dnc7IFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtY29udGFpbmVyIHVsIGxpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ })

}]);
//# sourceMappingURL=src_app_website_modules_analyzes_analyzes_module_ts.js.map