webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./components/Summoner/Leagues/Leagues.js":
/*!************************************************!*\
  !*** ./components/Summoner/Leagues/Leagues.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/api */ "./api/api.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Leauges = function Leauges(_ref) {
  var userinfo = _ref.userinfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      matchlists = _useState[0],
      setMatchlists = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      matches = _useState2[0],
      setMatches = _useState2[1];

  var matchArray = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  var getMatches = function getMatches(matches) {
    matches.map(function (v) {
      _api_api__WEBPACK_IMPORTED_MODULE_2__["getmatches"](v.gameId).then(function (response) {
        return matchArray.push(response.data);
      })["catch"](function (error) {
        return console.log(error);
      });
    });
    setMatches(matchArray);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _api_api__WEBPACK_IMPORTED_MODULE_2__["getmatchlists"](userinfo.accountId).then(function (response) {
      setMatchlists(response.data.matches);
      return getMatches(response.data.matches);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, [userinfo]);
  console.log(matchlists, matches);
  return __jsx("div", {
    className: "jsx-2730477603",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2730477603" + " " + "GameItemList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2730477603" + " " + "GameItemWrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2730477603" + " " + "GameItem Win",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2730477603" + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2730477603" + " " + "GameStats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2730477603" + " " + "GameType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\uC77C\uBC18"), __jsx("div", {
    className: "jsx-2730477603" + " " + "TimeStamp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2730477603",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "5\uC2DC\uAC04\uC804")), __jsx("div", {
    className: "jsx-2730477603" + " " + "Bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2730477603" + " " + "GameLength",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "29\uBD84 55\uCD08")), __jsx("div", {
    className: "jsx-2730477603" + " " + "GameSettingInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2730477603" + " " + "ChampionImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2730477603",
    __self: this
  }, ".GameItemWrap{position:relative;border-radius:3px;margin-bottom:8px;}.GameItem{position:relative;background:none;}.GameItem.Win>.Content{table-layout:fixed;background-color:#a3cfec;border-color:#99b9cf;}.GameItem>.Content{display:table;width:689px;height:97px;border-collase:collapse;border:1px solid #cdd2d2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcTGVhZ3Vlc1xcTGVhZ3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2lCLEFBRzJDLEFBS0EsQUFJQyxBQUtMLGNBQ0YsSUFkTSxBQUtGLENBSVMsT0FNYixRQVRoQixFQUxzQixFQWVNLE1BTkgsVUFSekIsUUFlNkIsR0FON0Isc0JBT0EiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcbG9kZ2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXFN1bW1vbmVyXFxMZWFndWVzXFxMZWFndWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vLi4vLi4vYXBpL2FwaSc7XHJcbmNvbnN0IExlYXVnZXMgPSAoe3VzZXJpbmZvfSkgPT4ge1xyXG4gICAgY29uc3QgW21hdGNobGlzdHMsIHNldE1hdGNobGlzdHNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21hdGNoZXMsIHNldE1hdGNoZXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgbWF0Y2hBcnJheSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGdldE1hdGNoZXMgPSAobWF0Y2hlcykgPT4ge1xyXG4gICAgICAgIG1hdGNoZXMubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICBhcGkuZ2V0bWF0Y2hlcyh2LmdhbWVJZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gbWF0Y2hBcnJheS5wdXNoKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0TWF0Y2hlcyhtYXRjaEFycmF5KTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXBpLmdldG1hdGNobGlzdHModXNlcmluZm8uYWNjb3VudElkKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgc2V0TWF0Y2hsaXN0cyhyZXNwb25zZS5kYXRhLm1hdGNoZXMpXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXRjaGVzKHJlc3BvbnNlLmRhdGEubWF0Y2hlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfSxbdXNlcmluZm9dKVxyXG4gICAgY29uc29sZS5sb2cobWF0Y2hsaXN0cywgbWF0Y2hlcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lSXRlbUxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZUl0ZW1XcmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lSXRlbSBXaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVTdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVR5cGVcIj7snbzrsJg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpbWVTdGFtcFwiPjxzcGFuPjXsi5zqsITsoIQ8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVMZW5ndGhcIj4yOeu2hCA1Ney0iDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVTZXR0aW5nSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhbXBpb25JbWFnZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtV3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLldpbiA+IC5Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EzY2ZlYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTliOWNmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0gPiAuQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjg5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RkMmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWF1Z2VzOyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Leauges);

/***/ })

})
//# sourceMappingURL=summoner.js.1899f00a7a07b28bbd59.hot-update.js.map