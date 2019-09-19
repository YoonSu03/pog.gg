webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./pages/summoner.js":
/*!***************************!*\
  !*** ./pages/summoner.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LolLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LolLayout */ "./components/LolLayout/index.js");
/* harmony import */ var _components_Summoner_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Summoner/Header */ "./components/Summoner/Header/index.js");
/* harmony import */ var _components_Summoner_Tier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Summoner/Tier */ "./components/Summoner/Tier/index.js");
/* harmony import */ var _components_Summoner_Leagues__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Summoner/Leagues */ "./components/Summoner/Leagues/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/api */ "./api/api.js");


var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\pages\\summoner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var Summoner = function Summoner() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      userinfo = _useState[0],
      setUserinfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      leagueEntriesInfo = _useState2[0],
      setLeagueEntriesfirst = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      matchlist = _useState3[0],
      setMatchlist = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      matchesData = _useState4[0],
      setMatchesdata = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState5[0],
      SetLoading = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var name = router.query.name;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchUserinfo =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api_api__WEBPACK_IMPORTED_MODULE_9__["getInfo"](name);

              case 2:
                result = _context.sent;
                setUserinfo(result.data);
                fetchLeagueinfo(result.data);
                fetchMatchlist(result.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchUserinfo() {
        return _ref.apply(this, arguments);
      };
    }();

    var fetchLeagueinfo =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(userinfo) {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api_api__WEBPACK_IMPORTED_MODULE_9__["getleagueFirst"](userinfo.id);

              case 2:
                result = _context2.sent;
                setLeagueEntriesfirst(result.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchLeagueinfo(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    var fetchMatchlist =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(userinfo) {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _api_api__WEBPACK_IMPORTED_MODULE_9__["getmatchlists"](userinfo.accountId);

              case 2:
                result = _context3.sent;
                console.log(result);
                setMatchlist(result.data);
                fetchMatchdata(result.data);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function fetchMatchlist(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    var fetchMatchdata =
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(matchlist) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                matchlist.matches.map(function (v) {
                  _api_api__WEBPACK_IMPORTED_MODULE_9__["getmatches"](v.gameId).then(function (response) {
                    setMatchesdata(function (matchesData) {
                      return matchesData.concat(response.data).sort(function (a, b) {
                        return a.gameCreation > b.gameCreation ? -1 : a.gameCreation < b.gameCreation ? 1 : 0;
                      });
                    });
                    SetLoading(true);
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function fetchMatchdata(_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    var esportsMatch =
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _api_api__WEBPACK_IMPORTED_MODULE_9__["getesportsMatches"]("293");

              case 2:
                result = _context5.sent;
                console.log(result);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function esportsMatch() {
        return _ref5.apply(this, arguments);
      };
    }();

    fetchUserinfo();
    esportsMatch();
  }, [name]);
  return __jsx("div", {
    className: "jsx-1274269023",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_components_LolLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), loading === true ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Summoner_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    matchlist: matchlist,
    userinfo: userinfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1274269023" + " " + "InfoTop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1274269023" + " " + "InfoContents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1274269023" + " " + "InfoTier",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_components_Summoner_Tier__WEBPACK_IMPORTED_MODULE_6__["default"], {
    leagueEntriesInfo: leagueEntriesInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1274269023" + " " + "GameContents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_components_Summoner_Leagues__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: name,
    matchList: matchlist,
    matchesData: matchesData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))))) : __jsx("img", {
    src: "/static/loading_img.gif",
    className: "jsx-1274269023",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1274269023",
    __self: this
  }, ".InfoTop{width:100vw;height:700px;}.InfoContents{width:60vw;margin:0 auto;}.InfoTier{float:left;}.GameContents{padding-top:40px;padding-left:20px;float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxwYWdlc1xcc3VtbW9uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VpQixBQUdxQyxBQUlELEFBSUEsQUFHTSxXQU5ILEFBSWxCLENBUmlCLEtBV0ssUUFWdEIsQUFJQSxVQU9lLFdBQ2YiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcbG9kZ2dfZnJvbnRlbmRcXHBhZ2VzXFxzdW1tb25lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvbExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xvbExheW91dCc7ICAgIFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3VtbW9uZXIvSGVhZGVyJztcclxuaW1wb3J0IFRpZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TdW1tb25lci9UaWVyJztcclxuaW1wb3J0IExlYWd1ZXMgZnJvbSAnLi4vY29tcG9uZW50cy9TdW1tb25lci9MZWFndWVzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSc7XHJcblxyXG5jb25zdCBTdW1tb25lciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW3VzZXJpbmZvLCBzZXRVc2VyaW5mb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGVhZ3VlRW50cmllc0luZm8sIHNldExlYWd1ZUVudHJpZXNmaXJzdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWF0Y2hsaXN0LCBzZXRNYXRjaGxpc3RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21hdGNoZXNEYXRhLCBzZXRNYXRjaGVzZGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgU2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoVXNlcmluZm8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRJbmZvKG5hbWUpXHJcbiAgICAgICAgICAgIHNldFVzZXJpbmZvKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICBmZXRjaExlYWd1ZWluZm8ocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIGZldGNoTWF0Y2hsaXN0KHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmZXRjaExlYWd1ZWluZm8gPSBhc3luYyAodXNlcmluZm8pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmdldGxlYWd1ZUZpcnN0KHVzZXJpbmZvLmlkKVxyXG4gICAgICAgICAgICBzZXRMZWFndWVFbnRyaWVzZmlyc3QocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZldGNoTWF0Y2hsaXN0ID0gYXN5bmMgKHVzZXJpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRtYXRjaGxpc3RzKHVzZXJpbmZvLmFjY291bnRJZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgICBzZXRNYXRjaGxpc3QocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIGZldGNoTWF0Y2hkYXRhKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmZXRjaE1hdGNoZGF0YSA9IGFzeW5jIChtYXRjaGxpc3QpID0+IHtcclxuICAgICAgICAgICAgbWF0Y2hsaXN0Lm1hdGNoZXMubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBpLmdldG1hdGNoZXModi5nYW1lSWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaGVzZGF0YShtYXRjaGVzRGF0YSA9PiBtYXRjaGVzRGF0YS5jb25jYXQocmVzcG9uc2UuZGF0YSkuc29ydCgoYSxiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmdhbWVDcmVhdGlvbiA+IGIuZ2FtZUNyZWF0aW9uID8gLTEgOiBhLmdhbWVDcmVhdGlvbiA8IGIuZ2FtZUNyZWF0aW9uID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlc3BvcnRzTWF0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRlc3BvcnRzTWF0Y2hlcyhcIjI5M1wiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoVXNlcmluZm8oKTtcclxuICAgICAgICBlc3BvcnRzTWF0Y2goKTtcclxuICAgIH0sW25hbWVdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PiAgIFxyXG4gICAgICAgICAgICA8TG9sTGF5b3V0Lz5cclxuICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgPyA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBtYXRjaGxpc3Q9e21hdGNobGlzdH0gdXNlcmluZm89e3VzZXJpbmZvfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZm9Ub3BcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZm9Db250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkluZm9UaWVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllciBsZWFndWVFbnRyaWVzSW5mbz17bGVhZ3VlRW50cmllc0luZm99Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZUNvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVhZ3VlcyBuYW1lPXtuYW1lfSBtYXRjaExpc3Q9e21hdGNobGlzdH0gbWF0Y2hlc0RhdGE9e21hdGNoZXNEYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPiA6IDxpbWcgc3JjPVwiL3N0YXRpYy9sb2FkaW5nX2ltZy5naWZcIi8+fVxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkluZm9Ub3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbmZvQ29udGVudHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbmZvVGllciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUNvbnRlbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1bW1vbmVyOyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\pages\\summoner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Summoner);

/***/ })

})
//# sourceMappingURL=summoner.js.445828a340085337df5f.hot-update.js.map