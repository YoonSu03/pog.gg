webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./components/Summoner/Tier/Tier.js":
/*!******************************************!*\
  !*** ./components/Summoner/Tier/Tier.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tierinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tierinfo */ "./components/Summoner/Tierinfo/index.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api */ "./api/api.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Body = function Body(_ref) {
  var leagueEntriesInfo = _ref.leagueEntriesInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      soloInfo = _useState[0],
      setSoloinfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      tftInfo = _useState2[0],
      setTftinfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      flexInfo = _useState3[0],
      setFlexinfo = _useState3[1];

  console.log(leagueEntriesInfo);
  return __jsx("div", {
    className: "jsx-813662471" + " " + "rank_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\uC194\uB85C\uB7AD\uD06C",
    data: soloInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\uC790\uC720\uB7AD\uD06C",
    data: tftInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\uB864\uD1A0\uCCB4\uC2A4",
    data: flexInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "813662471",
    __self: this
  }, ".rank_wrapper.jsx-813662471{padding-top:40px;width:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmlCLEFBRzBDLGlCQUNMLFlBQ2hCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpZXJpbmZvIGZyb20gJy4uL1RpZXJpbmZvJztcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG5cclxuY29uc3QgQm9keSA9ICh7bGVhZ3VlRW50cmllc0luZm99KSA9PiB7XHJcbiAgICBjb25zdCBbc29sb0luZm8sIHNldFNvbG9pbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3RmdEluZm8sIHNldFRmdGluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZmxleEluZm8sIHNldEZsZXhpbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc29sZS5sb2cobGVhZ3VlRW50cmllc0luZm8pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5rX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLypsZWFndWVFbnRyaWVzSW5mbyAmJiBsZWFndWVFbnRyaWVzSW5mby5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5xdWV1ZVR5cGUgPT09IFwiUkFOS0VEX1NPTE9fNXg1XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29sb2luZm8oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucXVldWVUeXBlID09PSBcIlJBTktFRF9URlRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZnRpbmZvKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfRkxFWF9TUlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZsZXhpbmZvKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8VGllcmluZm8gbmFtZT1cIuyGlOuhnOuere2BrFwiIGRhdGE9e3NvbG9JbmZvfS8+XHJcbiAgICAgICAgICAgIDxUaWVyaW5mbyBuYW1lPVwi7J6Q7Jyg656t7YGsXCIgZGF0YT17dGZ0SW5mb30vPlxyXG4gICAgICAgICAgICA8VGllcmluZm8gbmFtZT1cIuuhpO2GoOyytOyKpFwiIGRhdGE9e2ZsZXhJbmZvfS8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5yYW5rX3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=summoner.js.24d3069b47ef467176d9.hot-update.js.map