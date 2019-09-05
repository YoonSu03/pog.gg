webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: getInfo, getleagueFirst, getleagueSecond, getmatchlists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getleagueFirst", function() { return getleagueFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getleagueSecond", function() { return getleagueSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getmatchlists", function() { return getmatchlists; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var address = "http://localhost:8080";
function getInfo(name) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userinfo", {
    params: {
      name: name
    }
  });
}
function getleagueFirst(encryptedSummonerId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userleaguesFirst", {
    params: {
      encryptedSummonerId: encryptedSummonerId
    }
  });
}
function getleagueSecond(leagueId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userleaguesSecond", {
    params: {
      leagueId: leagueId
    }
  });
}
function getmatchlists(leagueId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/matchlists", {
    params: {
      encryptedSummonerId: encryptedSummonerId
    }
  });
}

/***/ })

})
//# sourceMappingURL=summoner.js.5abbb5abd1a87d3dcc03.hot-update.js.map