webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./components/Summoner/Prefer/Prefer.js":
/*!**********************************************!*\
  !*** ./components/Summoner/Prefer/Prefer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ "./components/lib.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Prefer\\Prefer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Prefer = function Prefer(_ref) {
  var matchlist = _ref.matchlist;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      preferData = _useState[0],
      SetPreferdata = _useState[1];

  var name = "";
  var playcount = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (matchlist) {
      SetPreferdata(_lib__WEBPACK_IMPORTED_MODULE_2__["GetGameData"].getPreferData(matchlist.matches));
    }
  }, [matchlist]);

  var getPreferLane = function getPreferLane(lane) {
    if (lane.preferLane !== undefined) {
      console.log(lane.preferLane);

      if (lane.preferLane.lane === "TOP") {
        playcount = lane.preferLane.playCount;
        name = "탑";
        return __jsx("img", {
          src: "https://poro.gg/images/lol/role/top.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        });
      } else if (lane.preferLane.lane === "MID") {
        playcount = lane.preferLane.playCount / lane.rankCount * 100;
        name = "미드";
        return __jsx("img", {
          src: "https://poro.gg/images/lol/role/MID.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });
      } else if (lane.preferLane.lane === "JUNGLE") {
        playcount = lane.preferLane.playCount / lane.rankCount * 100;
        name = "정글";
        return __jsx("img", {
          src: "https://poro.gg/images/lol/role/jng.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        });
      } else if (lane.preferLane.lane === "BOTTOM") {
        playcount = lane.preferLane.playCount / lane.rankCount * 100;
        name = "원딜";
        return __jsx("img", {
          src: "https://poro.gg/images/lol/role/adc.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        });
      } else if (lane.preferLane.lane === "SUPPORT") {
        playcount = lane.preferLane.playCount / lane.rankCount * 100;
        name = "서폿";
        return __jsx("img", {
          src: "https://poro.gg/images/lol/role/sup.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        });
      }
    }
  };

  var getPreferChamp = function getPreferChamp(champ) {
    if (champ.preferChamp !== undefined) {
      var champData = _lib__WEBPACK_IMPORTED_MODULE_2__["GetGameData"].getChampData(champ.preferChamp[0]);
      console.log(champ.preferChamp[0]);
      return champData;
    }
  };

  return __jsx("div", {
    className: "jsx-499562672" + " " + "Prefer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-499562672" + " " + "PreferTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\uC120\uD638\uD3EC\uC9C0\uC158"), __jsx("div", {
    className: "jsx-499562672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, getPreferLane(preferData), __jsx("span", {
    className: "jsx-499562672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-499562672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, playcount), __jsx("img", {
    src: getPreferChamp(preferData),
    className: "jsx-499562672",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "499562672",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcUHJlZmVyXFxQcmVmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRpQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcU3VtbW9uZXJcXFByZWZlclxcUHJlZmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0dldEdhbWVEYXRhfSBmcm9tICcuLi8uLi9saWInO1xyXG5jb25zdCBQcmVmZXIgPSAoe21hdGNobGlzdH0pID0+IHtcclxuICAgIGNvbnN0IFtwcmVmZXJEYXRhLCAgU2V0UHJlZmVyZGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgIGxldCBwbGF5Y291bnQgPSAwO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihtYXRjaGxpc3Qpe1xyXG4gICAgICAgICAgICBTZXRQcmVmZXJkYXRhKEdldEdhbWVEYXRhLmdldFByZWZlckRhdGEobWF0Y2hsaXN0Lm1hdGNoZXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFttYXRjaGxpc3RdKVxyXG4gICAgY29uc3QgZ2V0UHJlZmVyTGFuZSA9IChsYW5lKSA9PiB7XHJcbiAgICAgICAgaWYobGFuZS5wcmVmZXJMYW5lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGFuZS5wcmVmZXJMYW5lKVxyXG4gICAgICAgICAgICBpZihsYW5lLnByZWZlckxhbmUubGFuZSA9PT0gXCJUT1BcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWNvdW50PWxhbmUucHJlZmVyTGFuZS5wbGF5Q291bnQ7XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwi7YORXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC9yb2xlL3RvcC5zdmdcIi8+XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYW5lLnByZWZlckxhbmUubGFuZSA9PT0gXCJNSURcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWNvdW50PWxhbmUucHJlZmVyTGFuZS5wbGF5Q291bnQgLyBsYW5lLnJhbmtDb3VudCAqIDEwMDtcclxuICAgICAgICAgICAgICAgIG5hbWU9XCLrr7jrk5xcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3JvbGUvTUlELnN2Z1wiLz5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxhbmUucHJlZmVyTGFuZS5sYW5lID09PSBcIkpVTkdMRVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Y291bnQ9bGFuZS5wcmVmZXJMYW5lLnBsYXlDb3VudCAvIGxhbmUucmFua0NvdW50ICogMTAwO1xyXG4gICAgICAgICAgICAgICAgbmFtZT1cIuygleq4gFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvcm9sZS9qbmcuc3ZnXCIvPlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYobGFuZS5wcmVmZXJMYW5lLmxhbmUgPT09IFwiQk9UVE9NXCIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXljb3VudD1sYW5lLnByZWZlckxhbmUucGxheUNvdW50IC8gbGFuZS5yYW5rQ291bnQgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwi7JuQ65ScXCJcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3JvbGUvYWRjLnN2Z1wiLz5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxhbmUucHJlZmVyTGFuZS5sYW5lID09PSBcIlNVUFBPUlRcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWNvdW50PWxhbmUucHJlZmVyTGFuZS5wbGF5Q291bnQgLyBsYW5lLnJhbmtDb3VudCAqIDEwMDtcclxuICAgICAgICAgICAgICAgIG5hbWU9XCLshJztj79cIlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvcm9sZS9zdXAuc3ZnXCIvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHJlZmVyQ2hhbXAgPSAoY2hhbXApID0+IHtcclxuICAgICAgICBpZihjaGFtcC5wcmVmZXJDaGFtcCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFtcERhdGEgPSBHZXRHYW1lRGF0YS5nZXRDaGFtcERhdGEoY2hhbXAucHJlZmVyQ2hhbXBbMF0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFtcC5wcmVmZXJDaGFtcFswXSlcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW1wRGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOyEoO2YuO2PrOyngOyFmFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRQcmVmZXJMYW5lKHByZWZlckRhdGEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cGxheWNvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0UHJlZmVyQ2hhbXAocHJlZmVyRGF0YSl9Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xib2FsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuUHJlZmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWZlcjsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Prefer\\Prefer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Prefer);

/***/ })

})
//# sourceMappingURL=summoner.js.b073781d5d56c8a197c1.hot-update.js.map