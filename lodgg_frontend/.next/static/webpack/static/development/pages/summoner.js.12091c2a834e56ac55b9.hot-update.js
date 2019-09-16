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
                setMatchlist(result.data);
                fetchMatchdata(result.data);

              case 5:
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

    fetchUserinfo();
  }, [name]);
  return __jsx("div", {
    className: "jsx-4234370346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_components_LolLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_components_Summoner_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userinfo: userinfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4234370346" + " " + "info_top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4234370346" + " " + "info_tier",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_components_Summoner_Tier__WEBPACK_IMPORTED_MODULE_6__["default"], {
    leagueEntriesInfo: leagueEntriesInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4234370346" + " " + "GameContents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_components_Summoner_Leagues__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: name,
    matchList: matchlist,
    matchesData: matchesData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4234370346",
    __self: this
  }, ".info_tier{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxwYWdlc1xcc3VtbW9uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERpQixBQUdvQyxXQUNmIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxwYWdlc1xcc3VtbW9uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2xMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2xMYXlvdXQnOyAgICBcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1N1bW1vbmVyL0hlYWRlcic7XHJcbmltcG9ydCBUaWVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3VtbW9uZXIvVGllcic7XHJcbmltcG9ydCBMZWFndWVzIGZyb20gJy4uL2NvbXBvbmVudHMvU3VtbW9uZXIvTGVhZ3Vlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xyXG5cclxuY29uc3QgU3VtbW9uZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFt1c2VyaW5mbywgc2V0VXNlcmluZm9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xlYWd1ZUVudHJpZXNJbmZvLCBzZXRMZWFndWVFbnRyaWVzZmlyc3RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21hdGNobGlzdCwgc2V0TWF0Y2hsaXN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttYXRjaGVzRGF0YSwgc2V0TWF0Y2hlc2RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaFVzZXJpbmZvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0SW5mbyhuYW1lKVxyXG4gICAgICAgICAgICBzZXRVc2VyaW5mbyhyZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgZmV0Y2hMZWFndWVpbmZvKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICBmZXRjaE1hdGNobGlzdChyZXN1bHQuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmV0Y2hMZWFndWVpbmZvID0gYXN5bmMgKHVzZXJpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRsZWFndWVGaXJzdCh1c2VyaW5mby5pZClcclxuICAgICAgICAgICAgc2V0TGVhZ3VlRW50cmllc2ZpcnN0KHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmZXRjaE1hdGNobGlzdCA9IGFzeW5jICh1c2VyaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0bWF0Y2hsaXN0cyh1c2VyaW5mby5hY2NvdW50SWQpXHJcbiAgICAgICAgICAgIHNldE1hdGNobGlzdChyZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgZmV0Y2hNYXRjaGRhdGEocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZldGNoTWF0Y2hkYXRhID0gYXN5bmMgKG1hdGNobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICBtYXRjaGxpc3QubWF0Y2hlcy5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcGkuZ2V0bWF0Y2hlcyh2LmdhbWVJZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGNoZXNkYXRhKG1hdGNoZXNEYXRhID0+IG1hdGNoZXNEYXRhLmNvbmNhdChyZXNwb25zZS5kYXRhKS5zb3J0KChhLGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZ2FtZUNyZWF0aW9uID4gYi5nYW1lQ3JlYXRpb24gPyAtMSA6IGEuZ2FtZUNyZWF0aW9uIDwgYi5nYW1lQ3JlYXRpb24gPyAxIDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hVc2VyaW5mbygpO1xyXG4gICAgfSxbbmFtZV0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+ICAgXHJcbiAgICAgICAgICAgIDxMb2xMYXlvdXQvPlxyXG4gICAgICAgICAgICA8SGVhZGVyIHVzZXJpbmZvPXt1c2VyaW5mb30vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9fdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9fdGllclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaWVyIGxlYWd1ZUVudHJpZXNJbmZvPXtsZWFndWVFbnRyaWVzSW5mb30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVDb250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMZWFndWVzIG5hbWU9e25hbWV9IG1hdGNoTGlzdD17bWF0Y2hsaXN0fSBtYXRjaGVzRGF0YT17bWF0Y2hlc0RhdGF9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvX3RpZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VtbW9uZXI7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\pages\\summoner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Summoner);

/***/ })

})
//# sourceMappingURL=summoner.js.12091c2a834e56ac55b9.hot-update.js.map