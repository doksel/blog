webpackHotUpdate("static/development/pages/SecondPage.js",{

/***/ "./src/pages/SecondPage.js":
/*!*********************************!*\
  !*** ./src/pages/SecondPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Store_reducers_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/reducers/reducer */ "./src/Store/reducers/reducer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_Store_reducers_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], []),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    localStorage.setItem('token', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(state));
  }, state);
  return __jsx("div", null, __jsx("div", null), "second page");
});

/***/ })

})
//# sourceMappingURL=SecondPage.js.a69d5a904544bdfbd73c.hot-update.js.map