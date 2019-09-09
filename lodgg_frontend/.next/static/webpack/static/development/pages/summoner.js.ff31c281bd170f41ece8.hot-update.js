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
  return __jsx("div", {
    className: "jsx-2095890673" + " " + "rank_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, leagueEntriesInfo && leagueEntriesInfo.map(function (data, i) {
    if (data.queueType === "RANKED_SOLO_5x5") {
      var key = i;
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: key,
        name: "\uC194\uB85C\uB7AD\uD06C",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    } else if (data.queueType === "RANKED_TFT") {
      var _key = i;
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: _key,
        name: "\uB864\uD1A0\uCCB4\uC2A4",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      });
    } else if (data.queueType === "RANKED_FLEX_SR") {
      var _key2 = i;
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: _key2,
        name: "\uC790\uC720\uB7AD\uD06C",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      });
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2095890673",
    __self: this
  }, ".rank_wrapper.jsx-2095890673{padding-top:40px;width:1100px;height:130px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmlCLEFBRzBDLGlCQUNKLGFBQ0EsYUFDQyxjQUNsQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcU3VtbW9uZXJcXFRpZXJcXFRpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaWVyaW5mbyBmcm9tICcuLi9UaWVyaW5mbyc7XHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuXHJcbmNvbnN0IEJvZHkgPSAoe2xlYWd1ZUVudHJpZXNJbmZvfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFua193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxlYWd1ZUVudHJpZXNJbmZvICYmIGxlYWd1ZUVudHJpZXNJbmZvLm1hcCgoZGF0YSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucXVldWVUeXBlID09PSBcIlJBTktFRF9TT0xPXzV4NVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllcmluZm8ga2V5PXtrZXl9IG5hbWU9XCLshpTroZzrnq3tgaxcIiBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEucXVldWVUeXBlID09PSBcIlJBTktFRF9URlRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpZXJpbmZvIGtleT17a2V5fSBuYW1lPVwi66Gk7Yag7LK07IqkXCIgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfRkxFWF9TUlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllcmluZm8ga2V5PXtrZXl9IG5hbWU9XCLsnpDsnKDrnq3tgaxcIiBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5yYW5rX3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5OyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=summoner.js.ff31c281bd170f41ece8.hot-update.js.map