webpackHotUpdate("static/development/pages/SecondPage.js",{

/***/ "./src/pages/SecondPage.js":
/*!*********************************!*\
  !*** ./src/pages/SecondPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store_reducers_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/reducers/reducer */ "./src/Store/reducers/reducer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_Store_reducers_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], []),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    localStorage.setItem('to');
  });
  return __jsx("div", null, "second page");
});

/***/ })

})
//# sourceMappingURL=SecondPage.js.18dcd827b16cb1a10ae2.hot-update.js.map