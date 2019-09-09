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

  var imageFilter = function imageFilter(tier, rank) {
    if (tier === "IRON") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/iron_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/iron_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/iron_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/iron_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      }
    } else if (tier === "BRONZE") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
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
            lineNumber: 28
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
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
            lineNumber: 38
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
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
            lineNumber: 48
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
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
            lineNumber: 58
          },
          __self: this
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        });
      }
    } else if (tier === "MASTER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/master_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
    } else if (tier === "GRANDMASTER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/grandmaster_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      });
    } else if (tier === "CHALLENGER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/challenger_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      });
    }
  };

  return __jsx("div", {
    key: index,
    className: "jsx-1261995648" + " " + "rank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1261995648" + " " + "TierImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, imageFilter(data.tier, data.rank)), __jsx("div", {
    className: "jsx-1261995648" + " " + "TierInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1261995648" + " " + "RankType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, name), __jsx("b", {
    className: "jsx-1261995648" + " " + "TierRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, data.tier + " " + data.rank), __jsx("span", {
    className: "jsx-1261995648" + " " + "LeaguePoints",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, data.leaguePoints, " LP"), __jsx("div", {
    "class": "winrate",
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1261995648" + " " + "WinLose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1261995648" + " " + "wins",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, data.wins, "\uC2B9"), __jsx("span", {
    className: "jsx-1261995648" + " " + "losses",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, data.losses, "\uD328"), " ", __jsx("br", {
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("span", {
    "class": "winrate",
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "\uC2B9\uB960 ", Math.round(data.wins / (data.wins + data.losses) * 100), "%")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1261995648",
    __self: this
  }, ".rank{width:300px;height:140px;border:1px solid #cdd2d2;box-shadow:0 1px #dcdfdf;background:#f2f2f2;border-radius:2px;}.TierImage{padding-top:10px;float:left;display:table-cell;vertical-align:middle;text-align:center;width:130px;height:110px;}.rank .TierImage img{width:110px;height:110px;}.TierInfo{padding-top:30px;height:30px;display:table-cell;vertical-align:middle;font-size:12px;line-height:1.5;text-align:left;}.RankType{font-size:13px;color:#879292;}.TierRank{font-size:15px;font-weight:bold;color:#1f8ecd;}.LeaguePoints{padding-left:5px;color:#555e5e;font-weight:bold;}.WinLose{font-size:14px;color:#879292;}.rank+.rank{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllcmluZm9cXFRpZXJpbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGaUIsQUFHcUMsQUFRSyxBQVNMLEFBSUssQUFTRixBQUlBLEFBS0UsQUFLRixBQUlDLFlBL0NILEFBaUJBLEdBYUMsQUFJRyxBQVVILENBSWxCLENBeENlLEFBYUMsQUFrQkUsUUF0Q1csQUFpQjdCLEdBVHVCLENBYUEsQUFTdkIsQUFjQSxFQUxxQixDQUxILGNBQ2xCLENBMUIwQixDQWFBLEFBa0IxQixFQXZDNkIsbUJBU1AsQ0FhSCxLQXJCSSxVQXNCSCxFQWJKLE9BUk0sS0FTTCxFQWFHLFdBckJwQixBQVNBLEtBYUEiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcbG9kZ2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXFN1bW1vbmVyXFxUaWVyaW5mb1xcVGllcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGllcmluZm8gPSAoe2luZGV4LCBuYW1lLCBkYXRhfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coe2luZGV4LCBuYW1lLCBkYXRhfSlcclxuICAgIGNvbnN0IGltYWdlRmlsdGVyID0gKHRpZXIsIHJhbmspID0+IHtcclxuICAgICAgICBpZih0aWVyID09PSBcIklST05cIikge1xyXG4gICAgICAgICAgICBpZihyYW5rID09PSBcIklWXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2lyb25fNC5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvaXJvbl8zLnBuZ1wiLz4pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihyYW5rID09PSBcIklJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2lyb25fMi5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2lyb25fMS5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSBpZih0aWVyID09PSBcIkJST05aRVwiKSB7XHJcbiAgICAgICAgICAgIGlmKHJhbmsgPT09IFwiSVZcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvYnJvbnplXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2Jyb256ZV8zLnBuZ1wiLz4pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihyYW5rID09PSBcIklJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2Jyb256ZV8yLnBuZ1wiLz4pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihyYW5rID09PSBcIklcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvYnJvbnplXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9IGVsc2UgaWYgKHRpZXIgPT09IFwiU0lMVkVSXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9zaWx2ZXJfNC5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvc2lsdmVyXzMucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvc2lsdmVyXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9zaWx2ZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJHT0xEXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2dvbGRfMy5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJQTEFUSU5VTVwiKSB7IFxyXG4gICAgICAgICAgICBpZihyYW5rID09PSBcIklWXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzMucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvcGxhdGludW1fMi5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJESUFNT05EXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2RpYW1vbmRfMy5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJNQVNURVJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9tYXN0ZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJHUkFORE1BU1RFUlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2dyYW5kbWFzdGVyXzEucG5nXCIvPilcclxuICAgICAgICB9IGVsc2UgaWYgKHRpZXIgPT09IFwiQ0hBTExFTkdFUlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2NoYWxsZW5nZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyYW5rXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGllckltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VGaWx0ZXIoZGF0YS50aWVyLCBkYXRhLnJhbmspXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpZXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJhbmtUeXBlXCI+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJUaWVyUmFua1wiPntkYXRhLnRpZXIgKyBcIiBcIiArIGRhdGEucmFua308L2I+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJMZWFndWVQb2ludHNcIj57ZGF0YS5sZWFndWVQb2ludHN9IExQPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbnJhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJXaW5Mb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndpbnNcIj57ZGF0YS53aW5zfeyKuTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9zc2VzXCI+e2RhdGEubG9zc2Vzfe2MqDwvc3Bhbj4gPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aW5yYXRlXCI+7Iq566WgIHtNYXRoLnJvdW5kKChkYXRhLndpbnMgLyAoZGF0YS53aW5zICsgZGF0YS5sb3NzZXMpKSAqIDEwMCl9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAucmFuayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkZDJkMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggI2RjZGZkZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuVGllckltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmsgLlRpZXJJbWFnZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRpZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1R5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODc5MjkyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuVGllclJhbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFmOGVjZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxlYWd1ZVBvaW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NWU1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5XaW5Mb3NlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg3OTI5MjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmsgKyAucmFuayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpZXJpbmZvOyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tierinfo\\Tierinfo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tierinfo);

/***/ })

})
//# sourceMappingURL=summoner.js.3ed9cf584171b78ba6f1.hot-update.js.map