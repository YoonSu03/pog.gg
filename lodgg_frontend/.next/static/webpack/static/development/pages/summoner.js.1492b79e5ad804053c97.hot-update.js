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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      soloInfo = _useState[0],
      setSoloinfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      tftInfo = _useState2[0],
      setTftinfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined),
      flexInfo = _useState3[0],
      setFlexinfo = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    for (var i = 0; i < leagueEntriesInfo.length; i++) {
      if (leagueEntriesInfo[i].queueType === "RANKED_SOLO_5x5") {
        setSoloinfo(leagueEntriesInfo[i]);
      } else if (leagueEntriesInfo[i].queueType === "RANKED_TFT") {
        setTftinfo(leagueEntriesInfo[i]);
      } else if (leagueEntriesInfo[i].queueType === "RANKED_FLEX_SR") {
        setFlexinfo(leagueEntriesInfo[i]);
      }
    }
  });
  return __jsx("div", {
    className: "jsx-813662471" + " " + "rank_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, ".rank_wrapper.jsx-813662471{padding-top:40px;width:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmlCLEFBRzBDLGlCQUNMLFlBQ2hCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpZXJpbmZvIGZyb20gJy4uL1RpZXJpbmZvJztcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG5cclxuY29uc3QgQm9keSA9ICh7bGVhZ3VlRW50cmllc0luZm99KSA9PiB7XHJcbiAgICBjb25zdCBbc29sb0luZm8sIHNldFNvbG9pbmZvXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbdGZ0SW5mbywgc2V0VGZ0aW5mb10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2ZsZXhJbmZvLCBzZXRGbGV4aW5mb10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVhZ3VlRW50cmllc0luZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYobGVhZ3VlRW50cmllc0luZm9baV0ucXVldWVUeXBlID09PSBcIlJBTktFRF9TT0xPXzV4NVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTb2xvaW5mbyhsZWFndWVFbnRyaWVzSW5mb1tpXSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxlYWd1ZUVudHJpZXNJbmZvW2ldLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfVEZUXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldFRmdGluZm8obGVhZ3VlRW50cmllc0luZm9baV0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsZWFndWVFbnRyaWVzSW5mb1tpXS5xdWV1ZVR5cGUgPT09IFwiUkFOS0VEX0ZMRVhfU1JcIikge1xyXG4gICAgICAgICAgICAgICAgc2V0RmxleGluZm8obGVhZ3VlRW50cmllc0luZm9baV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFua193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxUaWVyaW5mbyBuYW1lPVwi7IaU66Gc656t7YGsXCIgZGF0YT17c29sb0luZm99Lz5cclxuICAgICAgICAgICAgPFRpZXJpbmZvIG5hbWU9XCLsnpDsnKDrnq3tgaxcIiBkYXRhPXt0ZnRJbmZvfS8+XHJcbiAgICAgICAgICAgIDxUaWVyaW5mbyBuYW1lPVwi66Gk7Yag7LK07IqkXCIgZGF0YT17ZmxleEluZm99Lz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmtfd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5OyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=summoner.js.1492b79e5ad804053c97.hot-update.js.map