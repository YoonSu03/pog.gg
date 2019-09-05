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



var Leauges = function Leauges(_ref) {
  var leagueEntriesInfo = _ref.leagueEntriesInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      solorankinfo = _useState[0],
      setSolorankinfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      tftrankinfo = _useState2[0],
      setTftrankinfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      teamrankinfo = _useState3[0],
      setTeamankinfo = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (leagueEntriesInfo) {
      leagueEntriesInfo.map(function (v) {
        _api_api__WEBPACK_IMPORTED_MODULE_1__["getleagueSecond"](v.leagueId).then(function (response) {
          if (response.data.queue === "RANKED_SOLO_5x5") {
            setSolorankinfo(response.data.entries);
          } else if (response.data.queue === "RANKED_FLEX_SR") {
            setTeamankinfo(response.data.entries);
          }
        })["catch"](function (error) {
          return console.log(error);
        });
      });
    }
  }, [leagueEntriesInfo]);
  console.log(solorankinfo, teamrankinfo);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Leauges);

/***/ })

})
//# sourceMappingURL=summoner.js.0baceccb3db8ff3367a9.hot-update.js.map