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
/* harmony import */ var _static_data_spell_static_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static-data/spell-static-data */ "./static-data/spell-static-data.json");
var _static_data_spell_static_data__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static-data/spell-static-data */ "./static-data/spell-static-data.json", 1);


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
  },
  getSpellUrl: function getSpellUrl(spellCode) {
    for (var i in _static_data_spell_static_data__WEBPACK_IMPORTED_MODULE_1__.data) {
      if (_static_data_spell_static_data__WEBPACK_IMPORTED_MODULE_1__.data[i].id === spellCode) return "https://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/".concat("Summoner" + _static_data_spell_static_data__WEBPACK_IMPORTED_MODULE_1__.data[i].key, ".png");
    }
  }
};


/***/ }),

/***/ "./static-data/spell-static-data.json":
/*!********************************************!*\
  !*** ./static-data/spell-static-data.json ***!
  \********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"Barrier\":{\"id\":21,\"key\":\"Barrier\"},\"Clarity\":{\"id\":13,\"key\":\"Clarity\"},\"Cleanse\":{\"id\":1,\"key\":\"Cleanse\"},\"Exhaust\":{\"id\":3,\"key\":\"Exhaust\"},\"Flash\":{\"id\":4,\"key\":\"Flash\"},\"Ghost\":{\"id\":6,\"key\":\"Ghost\"},\"Heal\":{\"id\":7,\"key\":\"Heal\"},\"Ignite\":{\"id\":14,\"key\":\"Ignite\"},\"Smite\":{\"id\":11,\"key\":\"Smite\"},\"Teleport\":{\"id\":12,\"key\":\"Teleport\"}}}");

/***/ })

})
//# sourceMappingURL=summoner.js.0916fd1c124a5148a1a9.hot-update.js.map