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
    className: "jsx-1168999982",
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
    className: "jsx-1168999982" + " " + "InfoTop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1168999982" + " " + "InfoContents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1168999982" + " " + "InfoTier",
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
    className: "jsx-1168999982" + " " + "GameContents",
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
  }))))) : __jsx("div", {
    className: "jsx-1168999982" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("img", {
    src: "/static/loading_img.gif",
    className: "jsx-1168999982",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1168999982",
    __self: this
  }, ".InfoTop{width:100vw;height:700px;}.InfoContents{width:60vw;margin:0 auto;}.InfoTier{float:left;}.GameContents{padding-top:40px;padding-left:20px;float:left;}.loading{width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxwYWdlc1xcc3VtbW9uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VpQixBQUdxQyxBQUlELEFBSUEsQUFHTSxBQUtMLFdBWEUsQUFJbEIsQ0FSaUIsQUFnQkQsS0FMTSxRQVZ0QixBQUlBLFVBT2UsV0FDZix3Q0FJMkIsbUdBQ0osNkZBQ3ZCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxwYWdlc1xcc3VtbW9uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2xMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2xMYXlvdXQnOyAgICBcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1N1bW1vbmVyL0hlYWRlcic7XHJcbmltcG9ydCBUaWVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3VtbW9uZXIvVGllcic7XHJcbmltcG9ydCBMZWFndWVzIGZyb20gJy4uL2NvbXBvbmVudHMvU3VtbW9uZXIvTGVhZ3Vlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknO1xyXG5cclxuY29uc3QgU3VtbW9uZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFt1c2VyaW5mbywgc2V0VXNlcmluZm9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xlYWd1ZUVudHJpZXNJbmZvLCBzZXRMZWFndWVFbnRyaWVzZmlyc3RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21hdGNobGlzdCwgc2V0TWF0Y2hsaXN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttYXRjaGVzRGF0YSwgc2V0TWF0Y2hlc2RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIFNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaFVzZXJpbmZvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0SW5mbyhuYW1lKVxyXG4gICAgICAgICAgICBzZXRVc2VyaW5mbyhyZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgZmV0Y2hMZWFndWVpbmZvKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICBmZXRjaE1hdGNobGlzdChyZXN1bHQuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmV0Y2hMZWFndWVpbmZvID0gYXN5bmMgKHVzZXJpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRsZWFndWVGaXJzdCh1c2VyaW5mby5pZClcclxuICAgICAgICAgICAgc2V0TGVhZ3VlRW50cmllc2ZpcnN0KHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmZXRjaE1hdGNobGlzdCA9IGFzeW5jICh1c2VyaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0bWF0Y2hsaXN0cyh1c2VyaW5mby5hY2NvdW50SWQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgc2V0TWF0Y2hsaXN0KHJlc3VsdC5kYXRhKVxyXG4gICAgICAgICAgICBmZXRjaE1hdGNoZGF0YShyZXN1bHQuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmV0Y2hNYXRjaGRhdGEgPSBhc3luYyAobWF0Y2hsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgIG1hdGNobGlzdC5tYXRjaGVzLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgICAgIGFwaS5nZXRtYXRjaGVzKHYuZ2FtZUlkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlc2RhdGEobWF0Y2hlc0RhdGEgPT4gbWF0Y2hlc0RhdGEuY29uY2F0KHJlc3BvbnNlLmRhdGEpLnNvcnQoKGEsYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5nYW1lQ3JlYXRpb24gPiBiLmdhbWVDcmVhdGlvbiA/IC0xIDogYS5nYW1lQ3JlYXRpb24gPCBiLmdhbWVDcmVhdGlvbiA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBTZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZXNwb3J0c01hdGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0ZXNwb3J0c01hdGNoZXMoXCIyOTNcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaFVzZXJpbmZvKCk7XHJcbiAgICAgICAgZXNwb3J0c01hdGNoKCk7XHJcbiAgICB9LFtuYW1lXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj4gICBcclxuICAgICAgICAgICAgPExvbExheW91dC8+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlID8gPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgbWF0Y2hsaXN0PXttYXRjaGxpc3R9IHVzZXJpbmZvPXt1c2VyaW5mb30vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmZvVG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmZvQ29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmZvVGllclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpZXIgbGVhZ3VlRW50cmllc0luZm89e2xlYWd1ZUVudHJpZXNJbmZvfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVDb250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlYWd1ZXMgbmFtZT17bmFtZX0gbWF0Y2hMaXN0PXttYXRjaGxpc3R9IG1hdGNoZXNEYXRhPXttYXRjaGVzRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz4gOiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48aW1nIHNyYz1cIi9zdGF0aWMvbG9hZGluZ19pbWcuZ2lmXCIvPjwvZGl2Pn1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5JbmZvVG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW5mb0NvbnRlbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW5mb1RpZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVDb250ZW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubG9hZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VtbW9uZXI7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\pages\\summoner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Summoner);

/***/ })

})
//# sourceMappingURL=summoner.js.8ad8fbbb739005904913.hot-update.js.map