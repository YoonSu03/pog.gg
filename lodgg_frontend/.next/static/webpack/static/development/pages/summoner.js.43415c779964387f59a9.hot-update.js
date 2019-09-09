webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./components/Summoner/Tierinfo/Tierinfo.js":
/*!**************************************************!*\
  !*** ./components/Summoner/Tierinfo/Tierinfo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tierinfo\\Tierinfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Tierinfo = function Tierinfo(_ref) {
  var index = _ref.index,
      name = _ref.name,
      data = _ref.data;
  console.log({
    index: index,
    name: name,
    data: data
  });

  var imageFilter = function imageFilter(tier, rank) {};

  return __jsx("div", {
    className: "jsx-1261995648" + " " + "rank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1261995648" + " " + "TierImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, imageFilter(data.tier, data.rank)), __jsx("div", {
    className: "jsx-1261995648" + " " + "TierInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1261995648" + " " + "RankType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, name), __jsx("b", {
    className: "jsx-1261995648" + " " + "TierRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, data.tier + " " + data.rank), __jsx("span", {
    className: "jsx-1261995648" + " " + "LeaguePoints",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, data.leaguePoints, " LP"), __jsx("div", {
    "class": "winrate",
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1261995648" + " " + "WinLose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1261995648" + " " + "wins",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, data.wins, "\uC2B9"), __jsx("span", {
    className: "jsx-1261995648" + " " + "losses",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.losses, "\uD328"), " ", __jsx("br", {
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("span", {
    "class": "winrate",
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\uC2B9\uB960 ", Math.round(data.wins / (data.wins + data.losses) * 100), "%")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1261995648",
    __self: this
  }, ".rank{width:300px;height:140px;border:1px solid #cdd2d2;box-shadow:0 1px #dcdfdf;background:#f2f2f2;border-radius:2px;}.TierImage{padding-top:10px;float:left;display:table-cell;vertical-align:middle;text-align:center;width:130px;height:110px;}.rank .TierImage img{width:110px;height:110px;}.TierInfo{padding-top:30px;height:30px;display:table-cell;vertical-align:middle;font-size:12px;line-height:1.5;text-align:left;}.RankType{font-size:13px;color:#879292;}.TierRank{font-size:15px;font-weight:bold;color:#1f8ecd;}.LeaguePoints{padding-left:5px;color:#555e5e;font-weight:bold;}.WinLose{font-size:14px;color:#879292;}.rank+.rank{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllcmluZm9cXFRpZXJpbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCaUIsQUFHcUMsQUFRSyxBQVNMLEFBSUssQUFTRixBQUlBLEFBS0UsQUFLRixBQUlDLFlBL0NILEFBaUJBLEdBYUMsQUFJRyxBQVVILENBSWxCLENBeENlLEFBYUMsQUFrQkUsUUF0Q1csQUFpQjdCLEdBVHVCLENBYUEsQUFTdkIsQUFjQSxFQUxxQixDQUxILGNBQ2xCLENBMUIwQixDQWFBLEFBa0IxQixFQXZDNkIsbUJBU1AsQ0FhSCxLQXJCSSxVQXNCSCxFQWJKLE9BUk0sS0FTTCxFQWFHLFdBckJwQixBQVNBLEtBYUEiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcbG9kZ2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXFN1bW1vbmVyXFxUaWVyaW5mb1xcVGllcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGllcmluZm8gPSAoe2luZGV4LCBuYW1lLCBkYXRhfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coe2luZGV4LCBuYW1lLCBkYXRhfSlcclxuICAgIGNvbnN0IGltYWdlRmlsdGVyID0gKHRpZXIsIHJhbmspID0+IHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5rXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGllckltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VGaWx0ZXIoZGF0YS50aWVyLCBkYXRhLnJhbmspXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpZXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJhbmtUeXBlXCI+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJUaWVyUmFua1wiPntkYXRhLnRpZXIgKyBcIiBcIiArIGRhdGEucmFua308L2I+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJMZWFndWVQb2ludHNcIj57ZGF0YS5sZWFndWVQb2ludHN9IExQPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbnJhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJXaW5Mb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndpbnNcIj57ZGF0YS53aW5zfeyKuTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9zc2VzXCI+e2RhdGEubG9zc2Vzfe2MqDwvc3Bhbj4gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aW5yYXRlXCI+7Iq566WgIHtNYXRoLnJvdW5kKChkYXRhLndpbnMgLyAoZGF0YS53aW5zICsgZGF0YS5sb3NzZXMpKSAqIDEwMCl9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAucmFuayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkZDJkMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggI2RjZGZkZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuVGllckltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmsgLlRpZXJJbWFnZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRpZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1R5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODc5MjkyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuVGllclJhbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFmOGVjZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxlYWd1ZVBvaW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NWU1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5XaW5Mb3NlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg3OTI5MjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmsgKyAucmFuayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpZXJpbmZvOyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tierinfo\\Tierinfo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tierinfo);

/***/ })

})
//# sourceMappingURL=summoner.js.43415c779964387f59a9.hot-update.js.map