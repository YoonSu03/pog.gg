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
  var userinfo = _ref.userinfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      tier_Leaugeinfo = _useState[0],
      setTier_Leagueinfo = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _api_api__WEBPACK_IMPORTED_MODULE_3__["getleagueFirst"](userinfo.id).then(function (response) {
      return setTier_Leagueinfo(response.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, [userinfo]);
  return __jsx("div", {
    className: "jsx-2095890673" + " " + "rank_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, tier_Leaugeinfo && tier_Leaugeinfo.map(function (data, i) {
    if (data.queueType === "RANKED_SOLO_5x5") {
      console.log("solo");
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        name: "\uC194\uB85C\uB7AD\uD06C",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      });
    } else if (data.queueType === "RANKED_TFT") {
      console.log("tft");
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        name: "\uB864\uD1A0\uCCB4\uC2A4",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });
    } else if (data.queueType === "RANKED_FLEX_SR") {
      console.log("team");
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        name: "\uC790\uC720\uB7AD\uD06C",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2095890673",
    __self: this
  }, ".rank_wrapper.jsx-2095890673{padding-top:40px;width:1100px;height:130px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2lCLEFBRzBDLGlCQUNKLGFBQ0EsYUFDQyxjQUNsQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcU3VtbW9uZXJcXFRpZXJcXFRpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaWVyaW5mbyBmcm9tICcuLi9UaWVyaW5mbyc7XHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuXHJcbmNvbnN0IEJvZHkgPSAoe3VzZXJpbmZvfSkgPT4ge1xyXG4gICAgY29uc3QgW3RpZXJfTGVhdWdlaW5mbywgc2V0VGllcl9MZWFndWVpbmZvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXBpLmdldGxlYWd1ZUZpcnN0KHVzZXJpbmZvLmlkKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFRpZXJfTGVhZ3VlaW5mbyhyZXNwb25zZS5kYXRhKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfSwgW3VzZXJpbmZvXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmtfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aWVyX0xlYXVnZWluZm8gJiYgdGllcl9MZWF1Z2VpbmZvLm1hcCgoZGF0YSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucXVldWVUeXBlID09PSBcIlJBTktFRF9TT0xPXzV4NVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29sb1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpZXJpbmZvIGtleT17aX0gbmFtZT1cIuyGlOuhnOuere2BrFwiIGRhdGE9e2RhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5xdWV1ZVR5cGUgPT09IFwiUkFOS0VEX1RGVFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpZXJpbmZvIGtleT17aX0gbmFtZT1cIuuhpO2GoOyytOyKpFwiIGRhdGE9e2RhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGF0YS5xdWV1ZVR5cGUgPT09IFwiUkFOS0VEX0ZMRVhfU1JcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlYW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllcmluZm8ga2V5PXtpfSBuYW1lPVwi7J6Q7Jyg656t7YGsXCIgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAucmFua193cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ })

})
//# sourceMappingURL=summoner.js.168cea9311d01bf9473b.hot-update.js.map