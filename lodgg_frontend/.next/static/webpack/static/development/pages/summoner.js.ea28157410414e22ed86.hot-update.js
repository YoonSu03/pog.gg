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
    className: "jsx-3879421196" + " " + "Prefer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3879421196" + " " + "PreferLane",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3879421196" + " " + "PreferPosition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\uC120\uD638\uD3EC\uC9C0\uC158"), __jsx("div", {
    className: "jsx-3879421196" + " " + "PreferLane_Info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, getPreferLane(preferData), __jsx("div", {
    className: "jsx-3879421196" + " " + "PreferLane_SubInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3879421196" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-3879421196" + " " + "RoleRate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3879421196",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, playcount), "%")))), __jsx("div", {
    className: "jsx-3879421196" + " " + "PreferLane",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3879421196" + " " + "PreferPosition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uC120\uD638\uCC54\uD53C\uC5B8"), __jsx("div", {
    className: "jsx-3879421196" + " " + "PreferLane_Info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("img", {
    src: getPreferChamp(preferData),
    className: "jsx-3879421196",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3879421196" + " " + "PreferLane_SubInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3879421196" + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, getPreferName(preferData))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3879421196",
    __self: this
  }, ".Prefer.jsx-3879421196{width:340px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.PreferLane.jsx-3879421196{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:170px;height:150px;padding:16px 0 14px 20px;line-height:14px;font-size:14px;color:#666;border-left:1px solid #cdd2d2;}.PreferLane.jsx-3879421196:frist-child{padding-right:30px;}.PreferLane_Info.jsx-3879421196{margin-top:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.PreferLane_SubInfo.jsx-3879421196{margin-left:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.PreferLane_SubInfo.jsx-3879421196>.name.jsx-3879421196{line-height:16px;font-size:16px;color:#333;margin-bottom:4px;}.PreferLane_SubInfo.jsx-3879421196>.RoleRate.jsx-3879421196{line-height:12px;font-size:13px;color:#1f8ecd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcUHJlZmVyXFxQcmVmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVpQixBQUdxQyxBQU1DLEFBV00sQUFHSCxBQU1BLEFBTUMsQUFNQSxZQXJDSixJQW9CQSxBQU1BLENBTUUsQUFNQSxFQXJCbkIsYUFnQmUsQUFNRyxXQUxJLEdBT3RCLGVBTkEsYUE3QjBCLFlBTEMsSUFvQkosQUFNQSw4REFwQlAsWUFDQyxhQUNZLE1BYU4sQUFNRyxFQTFCSCxpQkFRRixpQkFDRixlQUNKLFdBQ21CLE9BVWxDLFNBTUEsY0FmQSxHQVhBIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcUHJlZmVyXFxQcmVmZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7R2V0R2FtZURhdGF9IGZyb20gJy4uLy4uL2xpYic7XHJcbmNvbnN0IFByZWZlciA9ICh7bWF0Y2hsaXN0fSkgPT4ge1xyXG4gICAgY29uc3QgW3ByZWZlckRhdGEsICBTZXRQcmVmZXJkYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgbGV0IHBsYXljb3VudCA9IDA7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKG1hdGNobGlzdCl7XHJcbiAgICAgICAgICAgIFNldFByZWZlcmRhdGEoR2V0R2FtZURhdGEuZ2V0UHJlZmVyRGF0YShtYXRjaGxpc3QubWF0Y2hlcykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW21hdGNobGlzdF0pXHJcbiAgICBjb25zdCBnZXRQcmVmZXJMYW5lID0gKGxhbmUpID0+IHtcclxuICAgICAgICBpZihsYW5lLnByZWZlckxhbmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsYW5lLnByZWZlckxhbmUpXHJcbiAgICAgICAgICAgIGlmKGxhbmUucHJlZmVyTGFuZS5sYW5lID09PSBcIlRPUFwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Y291bnQ9bGFuZS5wcmVmZXJMYW5lLnBsYXlDb3VudDtcclxuICAgICAgICAgICAgICAgIG5hbWU9XCLtg5FcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIkxhbmVfSW1hZ2VcIiBzdHlsZT17e3dpZHRoOlwiNTBweFwiICwgaGVpZ2h0OlwiNTBweFwifX0gc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvcm9sZS90b3Auc3ZnXCIvPlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYobGFuZS5wcmVmZXJMYW5lLmxhbmUgPT09IFwiTUlEXCIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXljb3VudD1sYW5lLnByZWZlckxhbmUucGxheUNvdW50IC8gbGFuZS5yYW5rQ291bnQgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwi66+465OcXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJMYW5lX0ltYWdlXCIgc3R5bGU9e3t3aWR0aDpcIjUwcHhcIiAsIGhlaWdodDpcIjUwcHhcIn19IHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3JvbGUvTUlELnN2Z1wiLz5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxhbmUucHJlZmVyTGFuZS5sYW5lID09PSBcIkpVTkdMRVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Y291bnQ9bGFuZS5wcmVmZXJMYW5lLnBsYXlDb3VudCAvIGxhbmUucmFua0NvdW50ICogMTAwO1xyXG4gICAgICAgICAgICAgICAgbmFtZT1cIuygleq4gFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiTGFuZV9JbWFnZVwiIHN0eWxlPXt7d2lkdGg6XCI1MHB4XCIgLCBoZWlnaHQ6XCI1MHB4XCJ9fSBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC9yb2xlL2puZy5zdmdcIi8+XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYW5lLnByZWZlckxhbmUubGFuZSA9PT0gXCJCT1RUT01cIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWNvdW50PWxhbmUucHJlZmVyTGFuZS5wbGF5Q291bnQgLyBsYW5lLnJhbmtDb3VudCAqIDEwMDtcclxuICAgICAgICAgICAgICAgIG5hbWU9XCLsm5DrlJxcIlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiTGFuZV9JbWFnZVwiIHN0eWxlPXt7d2lkdGg6XCI1MHB4XCIgLCBoZWlnaHQ6XCI1MHB4XCJ9fSBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC9yb2xlL2FkYy5zdmdcIi8+XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsYW5lLnByZWZlckxhbmUubGFuZSA9PT0gXCJTVVBQT1JUXCIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXljb3VudD1sYW5lLnByZWZlckxhbmUucGxheUNvdW50IC8gbGFuZS5yYW5rQ291bnQgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwi7ISc7Y+/XCJcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIkxhbmVfSW1hZ2VcIiBzdHlsZT17e3dpZHRoOlwiNTBweFwiICwgaGVpZ2h0OlwiNTBweFwifX0gc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvcm9sZS9zdXAuc3ZnXCIvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHJlZmVyQ2hhbXAgPSAoY2hhbXApID0+IHtcclxuICAgICAgICBpZihjaGFtcC5wcmVmZXJDaGFtcCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFtcERhdGEgPSBHZXRHYW1lRGF0YS5nZXRDaGFtcERhdGEoY2hhbXAucHJlZmVyQ2hhbXBbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhbXBEYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdldFByZWZlck5hbWUgPSAoY2hhbXApID0+IHtcclxuICAgICAgICBpZihjaGFtcC5wcmVmZXJDaGFtcCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFtcE5hbWUgPSBHZXRHYW1lRGF0YS5nZXRDaGFtcE5hbWUoY2hhbXAucHJlZmVyQ2hhbXBbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhbXBOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJMYW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJlZmVyUG9zaXRpb25cIj7shKDtmLjtj6zsp4DshZg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJMYW5lX0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UHJlZmVyTGFuZShwcmVmZXJEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlZmVyTGFuZV9TdWJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUm9sZVJhdGVcIj48Yj57cGxheWNvdW50fTwvYj4lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJlZmVyTGFuZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUHJlZmVyUG9zaXRpb25cIj7shKDtmLjssZTtlLzslrg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmVmZXJMYW5lX0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dldFByZWZlckNoYW1wKHByZWZlckRhdGEpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByZWZlckxhbmVfU3ViSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntnZXRQcmVmZXJOYW1lKHByZWZlckRhdGEpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xib2FsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuUHJlZmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlByZWZlckxhbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMCAxNHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZGQyZDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QcmVmZXJMYW5lOmZyaXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlByZWZlckxhbmVfSW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QcmVmZXJMYW5lX1N1YkluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUHJlZmVyTGFuZV9TdWJJbmZvID4gLm5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QcmVmZXJMYW5lX1N1YkluZm8gPiAuUm9sZVJhdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWY4ZWNkO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVmZXI7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Prefer\\Prefer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Prefer);

/***/ })

})
//# sourceMappingURL=summoner.js.ea28157410414e22ed86.hot-update.js.map