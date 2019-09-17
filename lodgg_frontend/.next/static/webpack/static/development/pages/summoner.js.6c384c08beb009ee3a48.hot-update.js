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
  getChampName: function getChampName(champion) {
    for (var i in _static_data_champ_static_data__WEBPACK_IMPORTED_MODULE_0__.data) {
      if (_static_data_champ_static_data__WEBPACK_IMPORTED_MODULE_0__.data[i].id === champion) return _static_data_champ_static_data__WEBPACK_IMPORTED_MODULE_0__.data[i].name;
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
  },
  getPreferData: function getPreferData(data) {
    var champ = [],
        rankCount = 0,
        playChamp = [],
        playChampCnt = [],
        preferData = {
      preferChamp: '',
      preferLane: '',
      champ: [],
      lane: [{
        lane: "SUPPORT",
        playCount: 0,
        style: {
          backgroundImage: "url('http://opgg-static.akamaized.net/assets/site.png')",
          backgroundPosition: "-70px -2794px"
        }
      }, {
        lane: "TOP",
        playCount: 0,
        style: {
          backgroundImage: "url('http://opgg-static.akamaized.net/assets/site.png')",
          backgroundPosition: "-80px -2872px"
        }
      }, {
        lane: "MID",
        playCount: 0,
        style: {
          backgroundImage: "url('http://opgg-static.akamaized.net/assets/site.png')",
          backgroundPosition: "-80px -2719px"
        }
      }, {
        lane: "JUNGLE",
        playCount: 0,
        style: {
          backgroundImage: "url('http://opgg-static.akamaized.net/assets/site.png')",
          backgroundPosition: "-83px -2640px"
        }
      }, {
        lane: "BOTTOM",
        playCount: 0,
        style: {
          backgroundImage: "url('http://opgg-static.akamaized.net/assets/site.png')",
          backgroundPosition: "-80px -2564px"
        }
      }, {
        lane: "NONE",
        playCount: 0
      }]
    };
    data.map(function (item) {
      if (item.role === "DUO_SUPPORT") {
        rankCount++;
        preferData.lane[0].playCount++;
      } else {
        switch (item.lane) {
          case "TOP":
            rankCount++;
            preferData.lane[1].playCount++;
            break;

          case "MID":
            rankCount++;
            preferData.lane[2].playCount++;
            break;

          case "JUNGLE":
            rankCount++;
            preferData.lane[3].playCount++;
            break;

          case "BOTTOM":
            rankCount++;
            preferData.lane[4].playCount++;
            break;

          case "NONE":
            rankCount++;
            preferData.lane[5].playCount++;
            break;

          default:
            return preferData.lane;
        }
      }

      return champ.push(item.champion);
    });
    playChamp = champ.filter(function (item, pos) {
      return champ.indexOf(item) === pos;
    });
    playChamp.map(function (item) {
      return playChampCnt.push(champ.filter(function (items) {
        return item === items;
      }));
    });
    preferData.champ = playChampCnt;
    preferData.preferChamp = preferData.champ.reduce(function (prev, current) {
      return prev.length > current.length ? prev : current;
    });
    preferData.preferLane = preferData.lane.reduce(function (prev, current) {
      return prev.playCount > current.playCount ? prev : current;
    });
    preferData.rankCount = rankCount;
    return preferData;
  }
};


/***/ })

})
//# sourceMappingURL=summoner.js.6c384c08beb009ee3a48.hot-update.js.map