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

  return __jsx("div", {
    className: "jsx-482434745" + " " + "Prefer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-482434745" + " " + "PreferLane",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-482434745" + " " + "PreferPosition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\uC120\uD638\uD3EC\uC9C0\uC158"), __jsx("div", {
    className: "jsx-482434745" + " " + "PreferLane_Info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, getPreferLane(preferData), __jsx("div", {
    className: "jsx-482434745" + " " + "PreferLane_SubInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-482434745" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-482434745" + " " + "RoleRate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-482434745",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, playcount), "%")))), __jsx("div", {
    className: "jsx-482434745" + " " + "PreferLane",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-482434745" + " " + "PreferPosition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\uC120\uD638\uCC54\uD53C\uC5B8"), __jsx("div", {
    className: "jsx-482434745" + " " + "PreferLane_Info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    src: getPreferChamp(preferData),
    className: "jsx-482434745",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-482434745" + " " + "PreferLane_SubInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-482434745" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, getPreferChamp(preferData.preferChamp[0])))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "482434745",
    __self: this
  }, ".Prefer.jsx-482434745{width:340px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.PreferLane.jsx-482434745{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:170px;height:150px;padding:16px 0 14px 20px;line-height:14px;font-size:14px;color:#666;border-left:1px solid #cdd2d2;}.PreferLane_Info.jsx-482434745{margin-top:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.PreferLane_SubInfo.jsx-482434745{margin-left:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.PreferLane_SubInfo.jsx-482434745>.name.jsx-482434745{line-height:16px;font-size:16px;color:#333;margin-bottom:4px;}.PreferLane_SubInfo.jsx-482434745>.RoleRate.jsx-482434745{line-height:12px;font-size:13px;color:#1f8ecd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcUHJlZmVyXFxQcmVmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVpQixBQUdxQyxBQU1DLEFBV0csQUFNQSxBQU1DLEFBTUEsWUFsQ0osSUFpQkEsQUFNQSxDQU1FLEFBTUEsZUFMSixBQU1HLFdBTEksR0FPdEIsZUFOQSxhQTFCMEIsWUFMQyxJQWlCSixBQU1BLDhEQWpCUCxZQUNDLGFBQ1ksTUFVTixBQU1HLEVBdkJILGlCQVFGLGlCQUNGLGVBQ0osV0FDbUIsT0FPbEMsU0FNQSxjQVpBLEdBWEEiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcbG9kZ2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXFN1bW1vbmVyXFxQcmVmZXJcXFByZWZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtHZXRHYW1lRGF0YX0gZnJvbSAnLi4vLi4vbGliJztcclxuY29uc3QgUHJlZmVyID0gKHttYXRjaGxpc3R9KSA9PiB7XHJcbiAgICBjb25zdCBbcHJlZmVyRGF0YSwgIFNldFByZWZlcmRhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBsZXQgbmFtZSA9IFwiXCI7XHJcbiAgICBsZXQgcGxheWNvdW50ID0gMDtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobWF0Y2hsaXN0KXtcclxuICAgICAgICAgICAgU2V0UHJlZmVyZGF0YShHZXRHYW1lRGF0YS5nZXRQcmVmZXJEYXRhKG1hdGNobGlzdC5tYXRjaGVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbbWF0Y2hsaXN0XSlcclxuICAgIGNvbnN0IGdldFByZWZlckxhbmUgPSAobGFuZSkgPT4ge1xyXG4gICAgICAgIGlmKGxhbmUucHJlZmVyTGFuZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhbmUucHJlZmVyTGFuZSlcclxuICAgICAgICAgICAgaWYobGFuZS5wcmVmZXJMYW5lLmxhbmUgPT09IFwiVE9QXCIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXljb3VudD1sYW5lLnByZWZlckxhbmUucGxheUNvdW50O1xyXG4gICAgICAgICAgICAgICAgbmFtZT1cIu2DkVwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiTGFuZV9JbWFnZVwiIHN0eWxlPXt7d2lkdGg6XCI1MHB4XCIgLCBoZWlnaHQ6XCI1MHB4XCJ9fSBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC9yb2xlL3RvcC5zdmdcIi8+XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYW5lLnByZWZlckxhbmUubGFuZSA9PT0gXCJNSURcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWNvdW50PWxhbmUucHJlZmVyTGFuZS5wbGF5Q291bnQgLyBsYW5lLnJhbmtDb3VudCAqIDEwMDtcclxuICAgICAgICAgICAgICAgIG5hbWU9XCLrr7jrk5xcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIkxhbmVfSW1hZ2VcIiBzdHlsZT17e3dpZHRoOlwiNTBweFwiICwgaGVpZ2h0OlwiNTBweFwifX0gc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvcm9sZS9NSUQuc3ZnXCIvPlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYobGFuZS5wcmVmZXJMYW5lLmxhbmUgPT09IFwiSlVOR0xFXCIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXljb3VudD1sYW5lLnByZWZlckxhbmUucGxheUNvdW50IC8gbGFuZS5yYW5rQ291bnQgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwi7KCV6riAXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJMYW5lX0ltYWdlXCIgc3R5bGU9e3t3aWR0aDpcIjUwcHhcIiAsIGhlaWdodDpcIjUwcHhcIn19IHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3JvbGUvam5nLnN2Z1wiLz5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxhbmUucHJlZmVyTGFuZS5sYW5lID09PSBcIkJPVFRPTVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Y291bnQ9bGFuZS5wcmVmZXJMYW5lLnBsYXlDb3VudCAvIGxhbmUucmFua0NvdW50ICogMTAwO1xyXG4gICAgICAgICAgICAgICAgbmFtZT1cIuybkOuUnFwiXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJMYW5lX0ltYWdlXCIgc3R5bGU9e3t3aWR0aDpcIjUwcHhcIiAsIGhlaWdodDpcIjUwcHhcIn19IHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3JvbGUvYWRjLnN2Z1wiLz5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxhbmUucHJlZmVyTGFuZS5sYW5lID09PSBcIlNVUFBPUlRcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWNvdW50PWxhbmUucHJlZmVyTGFuZS5wbGF5Q291bnQgLyBsYW5lLnJhbmtDb3VudCAqIDEwMDtcclxuICAgICAgICAgICAgICAgIG5hbWU9XCLshJztj79cIlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiTGFuZV9JbWFnZVwiIHN0eWxlPXt7d2lkdGg6XCI1MHB4XCIgLCBoZWlnaHQ6XCI1MHB4XCJ9fSBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC9yb2xlL3N1cC5zdmdcIi8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQcmVmZXJDaGFtcCA9IChjaGFtcCkgPT4ge1xyXG4gICAgICAgIGlmKGNoYW1wLnByZWZlckNoYW1wICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNoYW1wRGF0YSA9IEdldEdhbWVEYXRhLmdldENoYW1wRGF0YShjaGFtcC5wcmVmZXJDaGFtcFswXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFtcERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJMYW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJlZmVyUG9zaXRpb25cIj7shKDtmLjtj6zsp4DshZg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJMYW5lX0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJlZmVyTGFuZShwcmVmZXJEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlZmVyTGFuZV9TdWJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUm9sZVJhdGVcIj48Yj57cGxheWNvdW50fTwvYj4lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlZmVyTGFuZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJlZmVyUG9zaXRpb25cIj7shKDtmLjssZTtlLzslrg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJMYW5lX0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dldFByZWZlckNoYW1wKHByZWZlckRhdGEpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByZWZlckxhbmVfU3ViSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntnZXRQcmVmZXJDaGFtcChwcmVmZXJEYXRhLnByZWZlckNoYW1wWzBdKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsYm9hbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLlByZWZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QcmVmZXJMYW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMTRweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2RkMmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUHJlZmVyTGFuZV9JbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlByZWZlckxhbmVfU3ViSW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QcmVmZXJMYW5lX1N1YkluZm8gPiAubmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlByZWZlckxhbmVfU3ViSW5mbyA+IC5Sb2xlUmF0ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZjhlY2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QcmVmZXJQb3NpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVmZXI7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Prefer\\Prefer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Prefer);

/***/ })

})
//# sourceMappingURL=summoner.js.0f0a027e5032e630916c.hot-update.js.map