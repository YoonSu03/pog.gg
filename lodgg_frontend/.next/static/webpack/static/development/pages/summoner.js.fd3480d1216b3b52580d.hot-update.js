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
  var key = _ref.key,
      name = _ref.name,
      data = _ref.data;

  var imageFilter = function imageFilter(tier, rank) {
    if (tier === "BRONZE") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        });
      }
    } else if (tier === "SILVER") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      }
    } else if (tier === "GOLD") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
      }
    } else if (tier === "PLATINUM") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
      }
    } else if (tier === "DIAMOND") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        });
      }
    } else if (tier === "MASTER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/master_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      });
    } else if (tier === "GRANDMASTER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/grandmaster_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      });
    } else if (tier === "CHALLENGER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/challenger_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      });
    }
  };

  console.log(key);
  return __jsx("div", {
    key: key,
    className: "jsx-1261995648" + " " + "rank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1261995648" + " " + "TierImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, imageFilter(data.tier, data.rank)), __jsx("div", {
    className: "jsx-1261995648" + " " + "TierInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1261995648" + " " + "RankType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, name), __jsx("b", {
    className: "jsx-1261995648" + " " + "TierRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, data.tier + " " + data.rank), __jsx("span", {
    className: "jsx-1261995648" + " " + "LeaguePoints",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, data.leaguePoints, " LP"), __jsx("div", {
    "class": "winrate",
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1261995648" + " " + "WinLose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1261995648" + " " + "wins",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, data.wins, "\uC2B9"), __jsx("span", {
    className: "jsx-1261995648" + " " + "losses",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, data.losses, "\uD328"), " ", __jsx("br", {
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("span", {
    "class": "winrate",
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\uC2B9\uB960 ", Math.round(data.wins / (data.wins + data.losses) * 100), "%")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1261995648",
    __self: this
  }, ".rank{width:300px;height:140px;border:1px solid #cdd2d2;box-shadow:0 1px #dcdfdf;background:#f2f2f2;border-radius:2px;}.TierImage{padding-top:10px;float:left;display:table-cell;vertical-align:middle;text-align:center;width:130px;height:110px;}.rank .TierImage img{width:110px;height:110px;}.TierInfo{padding-top:30px;height:30px;display:table-cell;vertical-align:middle;font-size:12px;line-height:1.5;text-align:left;}.RankType{font-size:13px;color:#879292;}.TierRank{font-size:15px;font-weight:bold;color:#1f8ecd;}.LeaguePoints{padding-left:5px;color:#555e5e;font-weight:bold;}.WinLose{font-size:14px;color:#879292;}.rank+.rank{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllcmluZm9cXFRpZXJpbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GaUIsQUFHcUMsQUFRSyxBQVNMLEFBSUssQUFTRixBQUlBLEFBS0UsQUFLRixBQUlDLFlBL0NILEFBaUJBLEdBYUMsQUFJRyxBQVVILENBSWxCLENBeENlLEFBYUMsQUFrQkUsUUF0Q1csQUFpQjdCLEdBVHVCLENBYUEsQUFTdkIsQUFjQSxFQUxxQixDQUxILGNBQ2xCLENBMUIwQixDQWFBLEFBa0IxQixFQXZDNkIsbUJBU1AsQ0FhSCxLQXJCSSxVQXNCSCxFQWJKLE9BUk0sS0FTTCxFQWFHLFdBckJwQixBQVNBLEtBYUEiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcbG9kZ2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXFN1bW1vbmVyXFxUaWVyaW5mb1xcVGllcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGllcmluZm8gPSAoe2tleSwgbmFtZSwgZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IGltYWdlRmlsdGVyID0gKHRpZXIsIHJhbmspID0+IHtcclxuICAgICAgICBpZih0aWVyID09PSBcIkJST05aRVwiKSB7XHJcbiAgICAgICAgICAgIGlmKHJhbmsgPT09IFwiSVZcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvYnJvbnplXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2Jyb256ZV8zLnBuZ1wiLz4pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihyYW5rID09PSBcIklJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2Jyb256ZV8yLnBuZ1wiLz4pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihyYW5rID09PSBcIklcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvYnJvbnplXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9IGVsc2UgaWYgKHRpZXIgPT09IFwiU0lMVkVSXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9zaWx2ZXJfNC5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvc2lsdmVyXzMucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvc2lsdmVyXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9zaWx2ZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJHT0xEXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2dvbGRfMy5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJQTEFUSU5VTVwiKSB7IFxyXG4gICAgICAgICAgICBpZihyYW5rID09PSBcIklWXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzMucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvcGxhdGludW1fMi5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJESUFNT05EXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2RpYW1vbmRfMy5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJNQVNURVJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9tYXN0ZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJHUkFORE1BU1RFUlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2dyYW5kbWFzdGVyXzEucG5nXCIvPilcclxuICAgICAgICB9IGVsc2UgaWYgKHRpZXIgPT09IFwiQ0hBTExFTkdFUlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2NoYWxsZW5nZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInJhbmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaWVySW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZUZpbHRlcihkYXRhLnRpZXIsIGRhdGEucmFuaylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGllckluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmFua1R5cGVcIj57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cIlRpZXJSYW5rXCI+e2RhdGEudGllciArIFwiIFwiICsgZGF0YS5yYW5rfTwvYj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkxlYWd1ZVBvaW50c1wiPntkYXRhLmxlYWd1ZVBvaW50c30gTFA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lucmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIldpbkxvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2luc1wiPntkYXRhLndpbnN97Iq5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb3NzZXNcIj57ZGF0YS5sb3NzZXN97YyoPC9zcGFuPiA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndpbnJhdGVcIj7sirnrpaAge01hdGgucm91bmQoKGRhdGEud2lucyAvIChkYXRhLndpbnMgKyBkYXRhLmxvc3NlcykpICogMTAwKX0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5yYW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RkMmQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAjZGNkZmRmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UaWVySW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmFuayAuVGllckltYWdlIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuVGllckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NzkyOTI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UaWVyUmFuayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWY4ZWNkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGVhZ3VlUG9pbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1ZTVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLldpbkxvc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODc5MjkyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmFuayArIC5yYW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGllcmluZm87Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tierinfo\\Tierinfo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tierinfo);

/***/ })

})
//# sourceMappingURL=summoner.js.fd3480d1216b3b52580d.hot-update.js.map