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

  return __jsx("div", {
    className: "jsx-813662471" + " " + "rank_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, leagueEntriesInfo && leagueEntriesInfo.map(function (data, index) {
    if (data.queueType === "RANKED_SOLO_5x5") {
      setSoloinfo(data);
    } else if (data.queueType === "RANKED_TFT") {
      setTftinfo(data);
    } else if (data.queueType === "RANKED_FLEX_SR") {
      setFlexinfo(data);
    }
  }), __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\uC194\uB85C\uB7AD\uD06C",
    data: soloInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\uC790\uC720\uB7AD\uD06C",
    data: tftInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "\uB864\uD1A0\uCCB4\uC2A4",
    data: flexInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "813662471",
    __self: this
  }, ".rank_wrapper.jsx-813662471{padding-top:40px;width:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmlCLEFBRzBDLGlCQUNMLFlBQ2hCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpZXJpbmZvIGZyb20gJy4uL1RpZXJpbmZvJztcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG5cclxuY29uc3QgQm9keSA9ICh7bGVhZ3VlRW50cmllc0luZm99KSA9PiB7XHJcbiAgICBjb25zdCBbc29sb0luZm8sIHNldFNvbG9pbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3RmdEluZm8sIHNldFRmdGluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZmxleEluZm8sIHNldEZsZXhpbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFua193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxlYWd1ZUVudHJpZXNJbmZvICYmIGxlYWd1ZUVudHJpZXNJbmZvLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfU09MT181eDVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb2xvaW5mbyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5xdWV1ZVR5cGUgPT09IFwiUkFOS0VEX1RGVFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRmdGluZm8oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucXVldWVUeXBlID09PSBcIlJBTktFRF9GTEVYX1NSXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmxleGluZm8oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8VGllcmluZm8gbmFtZT1cIuyGlOuhnOuere2BrFwiIGRhdGE9e3NvbG9JbmZvfS8+XHJcbiAgICAgICAgICAgIDxUaWVyaW5mbyBuYW1lPVwi7J6Q7Jyg656t7YGsXCIgZGF0YT17dGZ0SW5mb30vPlxyXG4gICAgICAgICAgICA8VGllcmluZm8gbmFtZT1cIuuhpO2GoOyytOyKpFwiIGRhdGE9e2ZsZXhJbmZvfS8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5yYW5rX3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=summoner.js.54480b6cc9eceeda06bf.hot-update.js.map