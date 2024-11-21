"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_website_modules_doctor_doctor_module_ts"],{

/***/ 4554:
/*!*****************************************************************!*\
  !*** ./src/app/website/modules/doctor/doctor-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorRoutingModule: () => (/* binding */ DoctorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor/doctor.component */ 8086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_0__.DoctorComponent
}];
class DoctorRoutingModule {
  static {
    this.ɵfac = function DoctorRoutingModule_Factory(t) {
      return new (t || DoctorRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DoctorRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DoctorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1763:
/*!*********************************************************!*\
  !*** ./src/app/website/modules/doctor/doctor.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorModule: () => (/* binding */ DoctorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _doctor_doctor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor/doctor.component */ 8086);
/* harmony import */ var _doctor_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-routing.module */ 4554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





class DoctorModule {
  static {
    this.ɵfac = function DoctorModule_Factory(t) {
      return new (t || DoctorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: DoctorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _doctor_routing_module__WEBPACK_IMPORTED_MODULE_1__.DoctorRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DoctorModule, {
    declarations: [_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_0__.DoctorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _doctor_routing_module__WEBPACK_IMPORTED_MODULE_1__.DoctorRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 8086:
/*!*******************************************************************!*\
  !*** ./src/app/website/modules/doctor/doctor/doctor.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoctorComponent: () => (/* binding */ DoctorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class DoctorComponent {
  static {
    this.ɵfac = function DoctorComponent_Factory(t) {
      return new (t || DoctorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorComponent,
      selectors: [["app-doctor"]],
      decls: 2,
      vars: 0,
      template: function DoctorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "doctor works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ })

}]);
//# sourceMappingURL=src_app_website_modules_doctor_doctor_module_ts.js.map