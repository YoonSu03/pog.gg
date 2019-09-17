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
          className: "Lane_Image",
          style: {
            width: "50px",
            height: "50px"
          },
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
          className: "Lane_Image",
          style: {
            width: "50px",
            height: "50px"
          },
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
          className: "Lane_Image",
          style: {
            width: "50px",
            height: "50px"
          },
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
          className: "Lane_Image",
          style: {
            width: "50px",
            height: "50px"
          },
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
          className: "Lane_Image",
          style: {
            width: "50px",
            height: "50px"
          },
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
      return champData;
    }
  };

  var getPreferName = function getPreferName(champ) {
    if (champ.preferChamp !== undefined) {
      var champName = _lib__WEBPACK_IMPORTED_MODULE_2__["GetGameData"].getChampName(champ.preferChamp[0]);
      return champName;
    }
  };

  return __jsx("div", {
    className: "jsx-3958430607" + " " + "Prefer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3958430607" + " " + "PreferLane",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3958430607" + " " + "PreferPosition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\uC120\uD638\uD3EC\uC9C0\uC158"), __jsx("div", {
    className: "jsx-3958430607" + " " + "PreferLane_Info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, getPreferLane(preferData), __jsx("div", {
    className: "jsx-3958430607" + " " + "PreferLane_SubInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3958430607" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-3958430607" + " " + "RoleRate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3958430607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, playcount), "%")))), __jsx("div", {
    className: "jsx-3958430607" + " " + "PreferChamp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3958430607" + " " + "PreferPosition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uC120\uD638\uCC54\uD53C\uC5B8"), __jsx("div", {
    className: "jsx-3958430607" + " " + "PreferLane_Info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("img", {
    src: getPreferChamp(preferData),
    className: "jsx-3958430607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3958430607" + " " + "PreferLane_SubInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3958430607" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, getPreferName(preferData))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3958430607",
    __self: this
  }, ".Prefer.jsx-3958430607{width:340px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.PreferLane.jsx-3958430607{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:170px;height:150px;padding:16px 0 14px 20px;line-height:14px;font-size:14px;color:#666;border-left:1px solid #cdd2d2;}.PreferChamp.jsx-3958430607{margin-left:30px;padding-left:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:170px;height:150px;padding:16px 0 14px 20px;line-height:14px;font-size:14px;color:#666;border-left:1px solid #cdd2d2;}.PreferLane_Info.jsx-3958430607{margin-top:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.PreferLane_SubInfo.jsx-3958430607{margin-left:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.PreferLane_SubInfo.jsx-3958430607>.name.jsx-3958430607{line-height:16px;font-size:16px;color:#333;margin-bottom:4px;}.PreferLane_SubInfo.jsx-3958430607>.RoleRate.jsx-3958430607{line-height:12px;font-size:13px;color:#1f8ecd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcUHJlZmVyXFxQcmVmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVpQixBQUdxQyxBQU1DLEFBV0ksQUFhRCxBQU1BLEFBTUMsQUFNQSxZQS9DSixJQThCQSxBQU1BLENBbkJLLEFBeUJILEFBTUEsZUFMSixBQU1HLEdBL0JELFFBMEJLLEdBT3RCLGVBTkEsYUF2QzBCLFlBTEMsSUE4QkosQUFNQSxtQkFsQkcsMkNBWlYsWUFDQyxhQUNZLE1BdUJOLEFBTUcsRUFwQ0gsRUFrQlAsWUFDQyxHQVhJLFVBWVEsT0FYVixlQUNKLEdBV00sUUFWYSxPQW9CbEMsRUFUbUIsT0FlbkIsUUFkZSxNQVhmLEdBWEEsRUF1QmtDLDhCQUNsQyIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcU3VtbW9uZXJcXFByZWZlclxcUHJlZmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0dldEdhbWVEYXRhfSBmcm9tICcuLi8uLi9saWInO1xyXG5jb25zdCBQcmVmZXIgPSAoe21hdGNobGlzdH0pID0+IHtcclxuICAgIGNvbnN0IFtwcmVmZXJEYXRhLCAgU2V0UHJlZmVyZGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgIGxldCBwbGF5Y291bnQgPSAwO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihtYXRjaGxpc3Qpe1xyXG4gICAgICAgICAgICBTZXRQcmVmZXJkYXRhKEdldEdhbWVEYXRhLmdldFByZWZlckRhdGEobWF0Y2hsaXN0Lm1hdGNoZXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFttYXRjaGxpc3RdKVxyXG4gICAgY29uc3QgZ2V0UHJlZmVyTGFuZSA9IChsYW5lKSA9PiB7XHJcbiAgICAgICAgaWYobGFuZS5wcmVmZXJMYW5lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGFuZS5wcmVmZXJMYW5lKVxyXG4gICAgICAgICAgICBpZihsYW5lLnByZWZlckxhbmUubGFuZSA9PT0gXCJUT1BcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWNvdW50PWxhbmUucHJlZmVyTGFuZS5wbGF5Q291bnQ7XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwi7YORXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJMYW5lX0ltYWdlXCIgc3R5bGU9e3t3aWR0aDpcIjUwcHhcIiAsIGhlaWdodDpcIjUwcHhcIn19IHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3JvbGUvdG9wLnN2Z1wiLz5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxhbmUucHJlZmVyTGFuZS5sYW5lID09PSBcIk1JRFwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Y291bnQ9bGFuZS5wcmVmZXJMYW5lLnBsYXlDb3VudCAvIGxhbmUucmFua0NvdW50ICogMTAwO1xyXG4gICAgICAgICAgICAgICAgbmFtZT1cIuuvuOuTnFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiTGFuZV9JbWFnZVwiIHN0eWxlPXt7d2lkdGg6XCI1MHB4XCIgLCBoZWlnaHQ6XCI1MHB4XCJ9fSBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC9yb2xlL01JRC5zdmdcIi8+XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYW5lLnByZWZlckxhbmUubGFuZSA9PT0gXCJKVU5HTEVcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWNvdW50PWxhbmUucHJlZmVyTGFuZS5wbGF5Q291bnQgLyBsYW5lLnJhbmtDb3VudCAqIDEwMDtcclxuICAgICAgICAgICAgICAgIG5hbWU9XCLsoJXquIBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIkxhbmVfSW1hZ2VcIiBzdHlsZT17e3dpZHRoOlwiNTBweFwiICwgaGVpZ2h0OlwiNTBweFwifX0gc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvcm9sZS9qbmcuc3ZnXCIvPlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYobGFuZS5wcmVmZXJMYW5lLmxhbmUgPT09IFwiQk9UVE9NXCIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXljb3VudD1sYW5lLnByZWZlckxhbmUucGxheUNvdW50IC8gbGFuZS5yYW5rQ291bnQgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwi7JuQ65ScXCJcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIkxhbmVfSW1hZ2VcIiBzdHlsZT17e3dpZHRoOlwiNTBweFwiICwgaGVpZ2h0OlwiNTBweFwifX0gc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvcm9sZS9hZGMuc3ZnXCIvPlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYobGFuZS5wcmVmZXJMYW5lLmxhbmUgPT09IFwiU1VQUE9SVFwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Y291bnQ9bGFuZS5wcmVmZXJMYW5lLnBsYXlDb3VudCAvIGxhbmUucmFua0NvdW50ICogMTAwO1xyXG4gICAgICAgICAgICAgICAgbmFtZT1cIuyEnO2Pv1wiXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJMYW5lX0ltYWdlXCIgc3R5bGU9e3t3aWR0aDpcIjUwcHhcIiAsIGhlaWdodDpcIjUwcHhcIn19IHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3JvbGUvc3VwLnN2Z1wiLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFByZWZlckNoYW1wID0gKGNoYW1wKSA9PiB7XHJcbiAgICAgICAgaWYoY2hhbXAucHJlZmVyQ2hhbXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY2hhbXBEYXRhID0gR2V0R2FtZURhdGEuZ2V0Q2hhbXBEYXRhKGNoYW1wLnByZWZlckNoYW1wWzBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW1wRGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQcmVmZXJOYW1lID0gKGNoYW1wKSA9PiB7XHJcbiAgICAgICAgaWYoY2hhbXAucHJlZmVyQ2hhbXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY2hhbXBOYW1lID0gR2V0R2FtZURhdGEuZ2V0Q2hhbXBOYW1lKGNoYW1wLnByZWZlckNoYW1wWzBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW1wTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlZmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlZmVyTGFuZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlByZWZlclBvc2l0aW9uXCI+7ISg7Zi47Y+s7KeA7IWYPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlZmVyTGFuZV9JbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFByZWZlckxhbmUocHJlZmVyRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByZWZlckxhbmVfU3ViSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlJvbGVSYXRlXCI+PGI+e3BsYXljb3VudH08L2I+JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByZWZlckNoYW1wXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJQcmVmZXJQb3NpdGlvblwiPuyEoO2YuOyxlO2UvOyWuDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByZWZlckxhbmVfSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0UHJlZmVyQ2hhbXAocHJlZmVyRGF0YSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlZmVyTGFuZV9TdWJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2dldFByZWZlck5hbWUocHJlZmVyRGF0YSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbGJvYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5QcmVmZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUHJlZmVyTGFuZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwIDE0cHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NkZDJkMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlByZWZlckNoYW1wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMTRweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2RkMmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUHJlZmVyTGFuZV9JbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlByZWZlckxhbmVfU3ViSW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QcmVmZXJMYW5lX1N1YkluZm8gPiAubmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlByZWZlckxhbmVfU3ViSW5mbyA+IC5Sb2xlUmF0ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZjhlY2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWZlcjsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Prefer\\Prefer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Prefer);

/***/ })

})
//# sourceMappingURL=summoner.js.7c5c68fabb1c5bf114b8.hot-update.js.map