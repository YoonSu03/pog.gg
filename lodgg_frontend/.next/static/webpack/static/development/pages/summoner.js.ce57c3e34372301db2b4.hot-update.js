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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LolLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LolLayout */ "./components/LolLayout/index.js");
/* harmony import */ var _components_Summoner_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Summoner/Header */ "./components/Summoner/Header/index.js");
/* harmony import */ var _components_Summoner_Tier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Summoner/Tier */ "./components/Summoner/Tier/index.js");
/* harmony import */ var _components_Summoner_Leagues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Summoner/Leagues */ "./components/Summoner/Leagues/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/api */ "./api/api.js");


var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\pages\\summoner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Summoner = function Summoner() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      userinfo = _useState[0],
      setUserinfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      leagueEntriesInfo = _useState2[0],
      setLeagueEntriesfirst = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var name = router.query.name;

  var getleagueFirst = function getleagueFirst(response) {
    return _api_api__WEBPACK_IMPORTED_MODULE_8__["getleagueFirst"](response.id).then(function (response) {
      setLeagueEntriesfirst(response.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var getMatchList = function getMatchList() {
    console.log(userinfo);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData =
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
                return _api_api__WEBPACK_IMPORTED_MODULE_8__["getInfo"](name);

              case 2:
                result = _context.sent;
                setUserinfo(result.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [name]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_LolLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_Summoner_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    userinfo: userinfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_components_Summoner_Tier__WEBPACK_IMPORTED_MODULE_5__["default"], {
    leagueEntriesInfo: leagueEntriesInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Summoner);

/***/ })

})
//# sourceMappingURL=summoner.js.ce57c3e34372301db2b4.hot-update.js.map