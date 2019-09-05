webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./components/Summoner/Leagues/Leagues.js":
/*!************************************************!*\
  !*** ./components/Summoner/Leagues/Leagues.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/api */ "./api/api.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Leauges = function Leauges(userinfo) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      tier_Leaugeinfo = _useState[0],
      setTier_Leagueinfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      Leagues_leaugeinfo = _useState2[0],
      setLeagues_Leagueinfo = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _api_api__WEBPACK_IMPORTED_MODULE_1__["getleagueFirst"](userinfo.id).then(function (response) {
      return setTier_Leagueinfo(response.data);
    })["catch"](function (error) {
      return console.log(error);
    });
    _api_api__WEBPACK_IMPORTED_MODULE_1__["getleagueSecond"](tier_Leaugeinfo.leagueId).then(function (response) {
      return setLeagues_Leagueinfo(response);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, [userinfo]);
  console.log(Leagues_leaugeinfo);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Leauges);

/***/ })

})
//# sourceMappingURL=summoner.js.d5e95c73018036a971e8.hot-update.js.map