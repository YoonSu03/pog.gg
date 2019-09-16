webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./components/lib.js":
/*!***************************!*\
  !*** ./components/lib.js ***!
  \***************************/
/*! exports provided: GetGameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGameData", function() { return GetGameData; });
/* harmony import */ var _static_data_champ_static_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static-data/champ-static-data */ "./static-data/champ-static-data.json");
var _static_data_champ_static_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static-data/champ-static-data */ "./static-data/champ-static-data.json", 1);

var GetGameData = {
  getChampData: function getChampData(champion) {
    for (var i in _static_data_champ_static_data__WEBPACK_IMPORTED_MODULE_0__.data) {
      if (_static_data_champ_static_data__WEBPACK_IMPORTED_MODULE_0__.data[i].id === champion) return "http://opgg-static.akamaized.net/images/lol/champion/".concat(_static_data_champ_static_data__WEBPACK_IMPORTED_MODULE_0__.data[i].key, ".png?image=w_55&v=1");
    }
  },
  getGameTime: function getGameTime(timestamp) {
    var date = new Date(timestamp),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        retVal = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day) + " " + (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
    return retVal;
  },
  getLaneIconData: function getLaneIconData(lane) {
    return lineIconData.filter(function (item) {
      return item.lane === lane;
    });
  },
  getPlayerItemData: function getPlayerItemData(itemCode) {
    return itemData.data[itemCode];
  },
  getItemUrl: function getItemUrl(itemCode) {
    if (itemCode !== 0) {
      return "http://opgg-static.akamaized.net/images/lol/item/".concat(itemCode, ".png?image=w_22&v=15276924000");
    } else {
      return "https://lolprofile.net/web/img/item-1.png";
    }
  }
};


/***/ })

})
//# sourceMappingURL=summoner.js.76eca96144aaeacbeacc.hot-update.js.map