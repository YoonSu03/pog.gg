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
  }, leagueEntriesInfo && leagueEntriesInfo.map(function (data, index) {
    if (data.queueType === "RANKED_SOLO_5x5") {
      console.log(index);
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        name: "\uC194\uB85C\uB7AD\uD06C",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    } else if (data.queueType === "RANKED_TFT") {
      var key = i;
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        name: "\uB864\uD1A0\uCCB4\uC2A4",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      });
    } else if (data.queueType === "RANKED_FLEX_SR") {
      var _key = i;
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
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
  }, ".rank_wrapper.jsx-2095890673{padding-top:40px;width:1100px;height:130px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmlCLEFBRzBDLGlCQUNKLGFBQ0EsYUFDQyxjQUNsQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcU3VtbW9uZXJcXFRpZXJcXFRpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaWVyaW5mbyBmcm9tICcuLi9UaWVyaW5mbyc7XHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuXHJcbmNvbnN0IEJvZHkgPSAoe2xlYWd1ZUVudHJpZXNJbmZvfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFua193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxlYWd1ZUVudHJpZXNJbmZvICYmIGxlYWd1ZUVudHJpZXNJbmZvLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfU09MT181eDVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaWVyaW5mbyBrZXk9e2luZGV4fSBuYW1lPVwi7IaU66Gc656t7YGsXCIgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfVEZUXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaWVyaW5mbyBrZXk9e2luZGV4fSBuYW1lPVwi66Gk7Yag7LK07IqkXCIgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfRkxFWF9TUlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllcmluZm8ga2V5PXtpbmRleH0gbmFtZT1cIuyekOycoOuere2BrFwiIGRhdGE9e2RhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmtfd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=summoner.js.f60fc5280ebbd2224235.hot-update.js.map