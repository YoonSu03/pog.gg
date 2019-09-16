webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./components/Summoner/Leagues/Leagues.js":
/*!************************************************!*\
  !*** ./components/Summoner/Leagues/Leagues.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api */ "./api/api.js");

var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Leauges = function Leauges(_ref) {
  var name = _ref.name,
      matchList = _ref.matchList,
      matchesData = _ref.matchesData;

  var getparticipantId = function getparticipantId(match) {
    var participantId = 0;
    match.participantIdentities.map(function (v) {
      if (v.player.summonerName.toLowerCase() == name.toLowerCase()) {
        participantId = v.participantId;
      }
    });
    return participantId;
  };

  var getTimestamp = function getTimestamp(ts) {
    var returnData = "";
    var writeDay = new Date(ts);
    var nowtimestamp = new Date().getTime();
    var now = new Date(nowtimestamp);
    var minus;

    if (now.getFullYear() > writeDay.getFullYear()) {
      minus = now.getFullYear() - writeDay.getFullYear();
      returnData = minus + "년 전";
    } else if (now.getMonth() > writeDay.getMonth()) {
      minus = now.getMonth() - writeDay.getMonth();
      returnData = minus + "달 전";
    } else if (now.getDate() > writeDay.getDate()) {
      minus = now.getDate() - writeDay.getDate();
      returnData = minus + "일 전";
    } else if (now.getDate() == writeDay.getDate()) {
      var nowTime = now.getTime();
      var writeTime = writeDay.getTime();

      if (nowTime > writeTime) {
        var sec = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(nowTime - writeTime) / 1000;

        var day = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(sec / 60 / 60 / 24);

        sec = sec - day * 60 * 60 * 24;

        var hour = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(sec / 60 / 60);

        sec = sec - hour * 60 * 60;

        var min = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(sec / 60);

        sec = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(sec - min * 60);

        if (hour > 0) {
          returnData = hour + "시간 전";
        } else if (min > 0) {
          returnData = min + "분 전";
        } else if (sec > 0) {
          returnData = sec + "초 전";
        }
      }
    }

    return returnData;
  };

  return __jsx("div", {
    className: "jsx-2450487813" + " " + "GameContents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2450487813" + " " + "GameItemList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, matchesData.map(function (v, i) {
    var match = matchList.matches.find(function (item) {
      return item.gameId === v.gameId;
    });
    var participantIdentitie = v.participantIdentities.find(function (item) {
      return item.player.summonerName.toLowerCase() == name.toLowerCase();
    });
    var participant = v.participants.find(function (item) {
      return item.participantId === participantIdentitie.participantId;
    }); //console.log(match)
    //console.log(v);

    var gamemode = "";
    var gameMinute = 0;
    var gameSecond = 0;
    var isWin = "";
    var time = getTimestamp(match.timestamp); //let participantId = getparticipantId(v)
    //let userInfo = v.participants[participantId-1]

    console.log(v, match, participantIdentitie, participant); //타임스탬프 판별
    //게임 모드 판별

    if (v.queueId === 420) {
      gamemode = "솔로랭크";
    } else if (v.queueId === 430) {
      gamemode = "일반게임";
    } else if (v.queueId === 440) {
      gamemode = "자유랭크";
    }

    if (v.teams[1].win === "Win") {
      isWin = "승리";
    } else if (v.teams[1].win === "Fail") {
      isWin = "패배";
    } // 게임 길이 판별


    gameMinute = Math.floor(v.gameDuration / 60);
    gameSecond = Math.floor(v.gameDuration % 60); //게임 승리 판별

    if (participant.stats.win) {
      isWin = "Win";
    } else {
      isWin = "Lose";
    }

    return __jsx("div", {
      key: i,
      className: "jsx-2450487813" + " " + "GameItemWrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + ("GameItem " + "".concat(isWin) || false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "Content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "GameStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "GameType",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, gamemode), __jsx("div", {
      className: "jsx-2450487813" + " " + "TimeStamp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, time)), __jsx("div", {
      className: "jsx-2450487813" + " " + "Bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2450487813" + " " + "GameResult",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, isWin), __jsx("div", {
      className: "jsx-2450487813" + " " + "GameLength",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, gameMinute, "\uBD84 ", gameSecond, "\uCD08")), __jsx("div", {
      className: "jsx-2450487813" + " " + "GameSettingInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/champ/".concat(match.champion, "_64.png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerSpell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "Spell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("img", {
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "Spell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("img", {
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Runes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "Rune",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/spell/".concat(participant.spell1Id, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "Rune",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/spell/".concat(participant.spell2Id, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "\uB9AC\uC2E0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "KDA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "KDA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2450487813" + " " + "Kill",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, participant.stats.kills), "/", __jsx("span", {
      className: "jsx-2450487813" + " " + "Death",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, participant.stats.deaths), "/", __jsx("span", {
      className: "jsx-2450487813" + " " + "Assist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, participant.stats.assists)), __jsx("div", {
      className: "jsx-2450487813" + " " + "KDARatio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2450487813" + " " + "KDARatio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, participant.stats.deaths === 0 ? "Perfect" : ((participant.stats.kills + participant.stats.assists) / participant.stats.deaths).toFixed(2)), "\uD3C9\uC810")), __jsx("div", {
      className: "jsx-2450487813" + " " + "Stats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "Level",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "\uB808\uBCA816"), __jsx("div", {
      className: "jsx-2450487813" + " " + "CS",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "178 (5.9)"), " CS"), __jsx("div", {
      "class": "CKRate tip tpd-delegation-uid-1",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "\uD0AC\uAD00\uC5EC 61%")), __jsx("div", {
      className: "jsx-2450487813" + " " + "Items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ItemList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/items3/".concat(participant.stats.item0, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/items3/".concat(participant.stats.item1, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/items3/".concat(participant.stats.item2, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/items3/".concat(participant.stats.item6, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/items3/".concat(participant.stats.item3, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/items3/".concat(participant.stats.item4, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("img", {
      src: "http://z.fow.kr/items3/".concat(participant.stats.item5, ".png"),
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Trinket",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("img", {
      src: "https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), "\uC81C\uC5B4\uC640\uB4DC", __jsx("span", {
      className: "jsx-2450487813" + " " + "wards vision",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "9"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "FollowPlayers Names",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "Team",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner Requester",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0")))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Team",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))), __jsx("div", {
      className: "jsx-2450487813" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2450487813" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx("img", {
      src: "https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png",
      className: "jsx-2450487813",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2450487813" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-2450487813" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "\uC784\uD5CC\uC6B0"))))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2450487813",
    __self: this
  }, ".GameItemWrap{border-radius:3px;margin-bottom:8px;}.GameItem{position:relative;background:none;}.GameItem.Win>.Content{table-layout:fixed;background-color:#a3cfec;border-color:#99b9cf;}.GameItem.Lose>.Content{table-layout:fixed;background-color:#E2B6B3;border-color:#99b9cf;}.GameItem>.Content{display:table;width:689px;height:97px;border-collase:collapse;border:1px solid #cdd2d2;}.GameItem>.Content>.GameStats{width:70px;text-align:center;font-size:11px;color:#555;line-height:16px;}.GameItem>.Content>div{display:table-cell;height:96px;vertical-align:middle;}.GameItem>.Content>.GameStats>.GameType{font-weight:bold;width:70px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}._timeCountAssigned{font-size:inherit;cursor:help;}.GameItem.Lose>.Content>.GameStats>.Bar{display:block;width:27px;margin:5px auto;height:2px;background:#cea7a7;}.GameItem.Lose>.Content>.GameStats>.GameResult{color:#c6443e;}.GameItem.Win>.Content>.GameStats>.Bar{display:block;width:27px;margin:5px auto;height:2px;background:#99b9cf;}.GameItem.Win>.Content>.GameStats>.GameResult{color:#1a78ae;}.GameItem>.Content>.GameSettingInfo{width:110px;font-size:0;}.GameItem>.Content>.GameSettingInfo>.ChampionImage{display:inline-block;width:46px;height:46px;vertical-align:middle;border-radius:50%;overflow:hidden;}.GameItem>.Content>.GameSettingInfo>.ChampionImage img{width:46px;height:46px;}.GameItem>.Content>.GameSettingInfo>.SummonerSpell{display:inline-block;vertical-align:middle;margin-left:4px;}.GameItem>.Content>.GameSettingInfo>.SummonerSpell>.Spell:first-child{margin-left:0;}.GameItem>.Content>.GameSettingInfo>.Runes{display:inline-block;vertical-align:middle;margin-left:4px;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune{width:22px;height:22px;margin-top:2px;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child{margin-top:0;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child>.Image{background:#000;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune img{width:22px;height:22px;margin-top:2px;}.GameItem>.Content>.GameSettingInfo>.ChampionName{margin-top:8px;font-size:11px;color:#555;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.GameItem>.Content>.GameSettingInfo>.ChampionName>a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.GameItem>.Content>.KDA{font-size:11px;text-align:center;}.GameItem>.Content>.KDA>.KDA{color:#879292;font-size:15px;white-space:nowrap;}.GameItem>.Content>.KDA>.KDA>.Kill,.GameItem>.Content>.KDA>.KDA>.Assist{color:#555e5e;}.GameItem>.Content>.KDA>.KDA>.Death{color:#c6443e;}.GameItem>.Content>.KDA>.KDA>.Kill,.GameItem>.Content>.KDA>.KDA>.Assist{color:#555e5e;}.GameItem>.Content>.KDA>.KDARatio{color:#555e5e;font-size:12px;font-weight:bold;margin-top:6px;}.GameItem>.Content>.KDA>.KDARatio .KDARatio{color:#353a3a;}.GameItem>.Content>.Items{font-size:0;}.GameItem>.Content>div{display:table-cell;height:96px;vertical-align:middle;}.GameItem>.Content>.Items .ItemList{width:96px;margin:0 auto;}.GameItem.Win>.Content>.Items>.ItemList>.Item{background-color:#99b9cf;}.GameItem>.Content>.Items .Item{display:inline-block;width:22px;height:22px;border-radius:3px;margin-top:2px;margin-right:2px;overflow:hidden;}.GameItem>.Content>.Items .Item img{width:22px;height:22px;}.GameItem>.Content>.Items .Item>.Image{width:100%;height:100%;}.GameItem>.Content>.Items .Trinket{margin-top:7px;color:#353a3a;line-height:13px;font-size:11px;text-align:center;}.GameItem>.Content>.Items .Trinket img{vertical-align:middle;}.GameItem>.Content>.FollowPlayers{width:170px;font-size:0;}.GameItem>.Content>.FollowPlayers.Names>.Team{float:left;width:50%;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner{display:block;width:80px;height:18px;margin-left:3px;text-align:left;white-space:nowrap;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.ChampionImage{display:inline-block;vertical-align:middle;margin-right:3px;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.ChampionImage img{width:16px;height:16px;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.SummonerName{display:inline-block;max-width:60px;vertical-align:middle;font-size:11px;color:#555;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.SummonerName>.Link{display:block;color:inherit;-webkit-text-decoration:none;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner.Requester>.SummonerName>.Link{color:#222;}.GameItem>.Content>.Stats{width:90px;font-size:11px;text-align:center;line-height:18px;color:#555e5e;}.GameItem>.Content>.Stats>.CKRate{color:#c6443e;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcTGVhZ3Vlc1xcTGVhZ3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TmlCLEFBRzJDLEFBSUEsQUFJQyxBQUtBLEFBS0wsQUFPSCxBQU9RLEFBS0YsQUFPQyxBQUlKLEFBT0EsQUFHQSxBQU9BLEFBR0YsQUFJUyxBQVFWLEFBSVUsQUFLUCxBQUdPLEFBS1YsQUFLRSxBQUdHLEFBR0wsQUFLSSxBQVNNLEFBSU4sQUFJRCxBQUtBLEFBR0EsQUFHQSxBQUdBLEFBTUEsQUFHRixBQUdPLEFBS1IsQUFJYyxBQUdKLEFBU1YsQUFJQSxBQUlJLEFBT08sQUFHVixBQUlELEFBSUcsQUFRTyxBQUtWLEFBSVUsQUFPUCxBQVFILEFBR0EsQUFPRyxXQTNOSSxBQXVETixBQWlCQSxBQVdBLEFBcURFLEFBZ0JGLEFBSUEsQUFrQkYsQUFpQkUsQUFtQmhCLEFBR21CLENBMUtILEFBcUZoQixBQTBDZ0IsQ0E3RmhCLENBcEZnQixBQThCRCxBQU9mLEFBR2UsQUFPZixBQXdCQSxBQXlDbUIsQUFLbkIsQUFHQSxBQUdBLEFBR21CLEFBTW5CLEFBcURlLEFBd0JHLEFBa0JsQixDQXBJbUIsQUFhRyxBQTJESixDQWhGbEIsQ0FwRWUsQ0FyQ08sQUFJRixBQXdDSixDQXBDYSxBQUtBLEFBbUJiLEFBNEhBLEVBcEZELEFBWVcsQUFRQSxBQTRFWCxBQWdDZixBQVcwQixBQVNQLENBNUJuQixDQS9HQSxBQWlCbUIsQUFXQSxBQXFFbkIsQUFJQSxBQW1DQSxDQXBKQSxBQStIQSxDQW5Kb0IsQUFVQSxBQXVHcEIsQUFHQSxBQXVDZ0IsQ0F6TEEsQUE0Tk0sRUF6TUMsQUE4TEUsQ0ExTU4sQUF5R0ksQUFjRixBQXlDQSxDQTdJckIsQUFxRWUsQ0FqRlcsQUE0SEEsQ0FwRlYsQUFnR0EsQ0ExQ2hCLENBMUhBLEVBSkEsQUE0TjBCLENBaEJOLENBekxRLEFBK0U1QixBQVdBLEdBNURlLEFBVUEsQUF1RE8sRUE5QkYsQUFRQSxBQXVIQyxDQTNNSSxBQUtBLEFBYVYsQUErQ1csQUFnR0osQUFzRUQsRUE5RkYsQUF5Q0EsQ0FwSkMsQ0E2RnBCLEVBVmtCLEVBdkVLLEFBVUEsQ0EzQnZCLEFBNEhBLEFBZ0RvQixFQWxMQyxHQWtNRixDQXhJbkIsQUFRQSxBQXNCdUIsQ0FpR3ZCLENBbEVBLEFBeUNzQixBQXFESixDQTVOVyxBQXNKVixDQW5JUSxDQW1GM0IsQ0FqSEEsQUFLQSxDQTREc0IsR0FvSUMsRUEzSnZCLEFBVUEsQ0FqQ0EsQ0FrTWUsRUFtQmYsRUF0RXFCLENBdkRELEFBZ0hPLENBeEMzQixLQWpIb0IsQUFvSnBCLEVBdkxBLENBbkJBLENBMExBLE1BMUYyQixBQXVEUCxNQWhHcEIsQ0F5SnVCLFNBeER2QixPQXZEQSxHQWdIb0IsZ0JBQ3BCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcTGVhZ3Vlc1xcTGVhZ3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uLy4uLy4uL2FwaS9hcGknO1xyXG5jb25zdCBMZWF1Z2VzID0gKHtuYW1lLCBtYXRjaExpc3QsIG1hdGNoZXNEYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgZ2V0cGFydGljaXBhbnRJZCA9IChtYXRjaCkgPT4ge1xyXG4gICAgICAgIGxldCBwYXJ0aWNpcGFudElkID0gMDtcclxuICAgICAgICBtYXRjaC5wYXJ0aWNpcGFudElkZW50aXRpZXMubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICBpZigodi5wbGF5ZXIuc3VtbW9uZXJOYW1lKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGljaXBhbnRJZCA9IHYucGFydGljaXBhbnRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHBhcnRpY2lwYW50SWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRUaW1lc3RhbXAgPSAodHMpID0+IHtcclxuICAgICAgICBsZXQgcmV0dXJuRGF0YSA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHdyaXRlRGF5ID0gbmV3IERhdGUodHMpO1xyXG4gICAgICAgIHZhciBub3d0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUobm93dGltZXN0YW1wKTtcclxuXHJcbiAgICAgICAgdmFyIG1pbnVzO1xyXG4gICAgICAgIGlmKG5vdy5nZXRGdWxsWWVhcigpID4gd3JpdGVEYXkuZ2V0RnVsbFllYXIoKSl7XHJcbiAgICAgICAgICAgIG1pbnVzPSBub3cuZ2V0RnVsbFllYXIoKS13cml0ZURheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICByZXR1cm5EYXRhID0gbWludXMrXCLrhYQg7KCEXCI7XHJcbiAgICAgICAgfWVsc2UgaWYobm93LmdldE1vbnRoKCkgPiB3cml0ZURheS5nZXRNb250aCgpKXtcclxuICAgICAgICAgICAgbWludXM9IG5vdy5nZXRNb250aCgpLXdyaXRlRGF5LmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIHJldHVybkRhdGEgPW1pbnVzK1wi64usIOyghFwiO1xyXG4gICAgICAgIH1lbHNlIGlmKG5vdy5nZXREYXRlKCkgPiB3cml0ZURheS5nZXREYXRlKCkpe1xyXG4gICAgICAgICAgICBtaW51cz0gbm93LmdldERhdGUoKS13cml0ZURheS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybkRhdGEgPSBtaW51cytcIuydvCDsoIRcIjtcclxuICAgICAgICB9ZWxzZSBpZihub3cuZ2V0RGF0ZSgpID09IHdyaXRlRGF5LmdldERhdGUoKSl7XHJcbiAgICAgICAgICAgIHZhciBub3dUaW1lID0gbm93LmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIHdyaXRlVGltZSA9IHdyaXRlRGF5LmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG5vd1RpbWU+d3JpdGVUaW1lKXtcclxuICAgICAgICAgICAgICAgIGxldCBzZWMgPSBwYXJzZUludChub3dUaW1lIC0gd3JpdGVUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF5ICA9IHBhcnNlSW50KHNlYy82MC82MC8yNCk7XHJcbiAgICAgICAgICAgICAgICBzZWMgPSAoc2VjIC0gKGRheSAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChzZWMvNjAvNjApO1xyXG4gICAgICAgICAgICAgICAgc2VjID0gKHNlYyAtIChob3VyKjYwKjYwKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluID0gcGFyc2VJbnQoc2VjLzYwKTtcclxuICAgICAgICAgICAgICAgIHNlYyA9IHBhcnNlSW50KHNlYy0obWluKjYwKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaG91cj4wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhID0gaG91citcIuyLnOqwhCDsoIRcIjtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG1pbj4wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhID0gbWluK1wi67aEIOyghFwiO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoc2VjPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybkRhdGEgPSBzZWMrXCLstIgg7KCEXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZUNvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZUl0ZW1MaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc0RhdGEubWFwKCh2LGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gbWF0Y2hMaXN0Lm1hdGNoZXMuZmluZChpdGVtID0+IGl0ZW0uZ2FtZUlkID09PSB2LmdhbWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0aWNpcGFudElkZW50aXRpZSA9IHYucGFydGljaXBhbnRJZGVudGl0aWVzLmZpbmQoaXRlbSA9PiBpdGVtLnBsYXllci5zdW1tb25lck5hbWUudG9Mb3dlckNhc2UoKSA9PSBuYW1lLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0aWNpcGFudCA9IHYucGFydGljaXBhbnRzLmZpbmQoaXRlbSA9PiBpdGVtLnBhcnRpY2lwYW50SWQgPT09IHBhcnRpY2lwYW50SWRlbnRpdGllLnBhcnRpY2lwYW50SWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWF0Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lbW9kZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lTWludXRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVTZWNvbmQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNXaW4gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IGdldFRpbWVzdGFtcChtYXRjaC50aW1lc3RhbXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xldCBwYXJ0aWNpcGFudElkID0gZ2V0cGFydGljaXBhbnRJZCh2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xldCB1c2VySW5mbyA9IHYucGFydGljaXBhbnRzW3BhcnRpY2lwYW50SWQtMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codiwgbWF0Y2gsIHBhcnRpY2lwYW50SWRlbnRpdGllLCBwYXJ0aWNpcGFudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/tg4DsnoTsiqTtg6ztlIQg7YyQ67OEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+qyjOyehCDrqqjrk5wg7YyQ67OEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHYucXVldWVJZCA9PT0gNDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lbW9kZSA9IFwi7IaU66Gc656t7YGsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2LnF1ZXVlSWQgPT09IDQzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZW1vZGUgPSBcIuydvOuwmOqyjOyehFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodi5xdWV1ZUlkID09PSA0NDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVtb2RlID0gXCLsnpDsnKDrnq3tgaxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2LnRlYW1zWzFdLndpbiA9PT0gXCJXaW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNXaW4gPSBcIuyKueumrFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodi50ZWFtc1sxXS53aW4gPT09IFwiRmFpbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1dpbiA9IFwi7Yyo67CwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6rKM7J6EIOq4uOydtCDtjJDrs4RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZU1pbnV0ZSA9IE1hdGguZmxvb3IoKHYuZ2FtZUR1cmF0aW9uIC8gNjApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lU2Vjb25kID0gTWF0aC5mbG9vcigodi5nYW1lRHVyYXRpb24gJSA2MCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6rKM7J6EIOyKueumrCDtjJDrs4RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFydGljaXBhbnQuc3RhdHMud2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1dpbiA9IFwiV2luXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1dpbiA9IFwiTG9zZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiR2FtZUl0ZW1XcmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BHYW1lSXRlbSBgICsgYCR7aXNXaW59YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lU3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVUeXBlXCI+e2dhbWVtb2RlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGltZVN0YW1wXCI+PHNwYW4+e3RpbWV9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lUmVzdWx0XCI+e2lzV2lufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZUxlbmd0aFwiPntnYW1lTWludXRlfeu2hCB7Z2FtZVNlY29uZH3stIg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lU2V0dGluZ0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uSW1hZ2VcIj48YT48aW1nIHNyYz17YGh0dHA6Ly96LmZvdy5rci9jaGFtcC8ke21hdGNoLmNoYW1waW9ufV82NC5wbmdgfS8+PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJTcGVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNwZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNwZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUnVuZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSdW5lXCI+PGltZyBzcmM9e2BodHRwOi8vei5mb3cua3Ivc3BlbGwvJHtwYXJ0aWNpcGFudC5zcGVsbDFJZH0ucG5nYH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJ1bmVcIj48aW1nIHNyYz17YGh0dHA6Ly96LmZvdy5rci9zcGVsbC8ke3BhcnRpY2lwYW50LnNwZWxsMklkfS5wbmdgfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbk5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+66as7IugPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiS0RBXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJLREFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiS2lsbFwiPntwYXJ0aWNpcGFudC5zdGF0cy5raWxsc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRGVhdGhcIj57cGFydGljaXBhbnQuc3RhdHMuZGVhdGhzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJBc3Npc3RcIj57cGFydGljaXBhbnQuc3RhdHMuYXNzaXN0c308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJLREFSYXRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJLREFSYXRpb1wiPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudC5zdGF0cy5kZWF0aHMgPT09IDAgPyBcIlBlcmZlY3RcIiA6ICgocGFydGljaXBhbnQuc3RhdHMua2lsbHMgKyBwYXJ0aWNpcGFudC5zdGF0cy5hc3Npc3RzKSAvIHBhcnRpY2lwYW50LnN0YXRzLmRlYXRocykudG9GaXhlZCgyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Y+J7KCQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxldmVsXCI+66CI67KoMTY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNTXCI+PHNwYW4+MTc4ICg1LjkpPC9zcGFuPiBDUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJDS1JhdGUgdGlwIHRwZC1kZWxlZ2F0aW9uLXVpZC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2CrOq0gOyXrCA2MSVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSXRlbUxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtXCI+PGltZyBzcmM9e2BodHRwOi8vei5mb3cua3IvaXRlbXMzLyR7cGFydGljaXBhbnQuc3RhdHMuaXRlbTB9LnBuZ2B9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtXCI+PGltZyBzcmM9e2BodHRwOi8vei5mb3cua3IvaXRlbXMzLyR7cGFydGljaXBhbnQuc3RhdHMuaXRlbTF9LnBuZ2B9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtXCI+PGltZyBzcmM9e2BodHRwOi8vei5mb3cua3IvaXRlbXMzLyR7cGFydGljaXBhbnQuc3RhdHMuaXRlbTJ9LnBuZ2B9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtXCI+PGltZyBzcmM9e2BodHRwOi8vei5mb3cua3IvaXRlbXMzLyR7cGFydGljaXBhbnQuc3RhdHMuaXRlbTZ9LnBuZ2B9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtXCI+PGltZyBzcmM9e2BodHRwOi8vei5mb3cua3IvaXRlbXMzLyR7cGFydGljaXBhbnQuc3RhdHMuaXRlbTN9LnBuZ2B9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtXCI+PGltZyBzcmM9e2BodHRwOi8vei5mb3cua3IvaXRlbXMzLyR7cGFydGljaXBhbnQuc3RhdHMuaXRlbTR9LnBuZ2B9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJdGVtXCI+PGltZyBzcmM9e2BodHRwOi8vei5mb3cua3IvaXRlbXMzLyR7cGFydGljaXBhbnQuc3RhdHMuaXRlbTV9LnBuZ2B9Lz48L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUcmlua2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9vcGdnLXN0YXRpYy5ha2FtYWl6ZWQubmV0L2ltYWdlcy9zaXRlL3N1bW1vbmVyL2ljb24td2FyZC1ibHVlLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7KCc7Ja07JmA65OcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhcmRzIHZpc2lvblwiPjk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb2xsb3dQbGF5ZXJzIE5hbWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhbXBpb25JbWFnZVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzkuMTcuMS9pbWcvY2hhbXBpb24vSXJlbGlhLnBuZ1wiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJOYW1lXCI+PGEgY2xhc3NOYW1lPVwiTGlua1wiIGhyZWY9XCIjXCI+7J6E7ZeM7JqwPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lciBSZXF1ZXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhbXBpb25JbWFnZVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzkuMTcuMS9pbWcvY2hhbXBpb24vSXJlbGlhLnBuZ1wiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJOYW1lXCI+PGEgY2xhc3NOYW1lPVwiTGlua1wiIGhyZWY9XCIjXCI+7J6E7ZeM7JqwPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbkltYWdlXCI+PGltZyBzcmM9XCJodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vOS4xNy4xL2ltZy9jaGFtcGlvbi9JcmVsaWEucG5nXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lck5hbWVcIj48YSBjbGFzc05hbWU9XCJMaW5rXCIgaHJlZj1cIiNcIj7snoTtl4zsmrA8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uSW1hZ2VcIj48aW1nIHNyYz1cImh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi85LjE3LjEvaW1nL2NoYW1waW9uL0lyZWxpYS5wbmdcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyTmFtZVwiPjxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPVwiI1wiPuyehO2XjOyasDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhbXBpb25JbWFnZVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzkuMTcuMS9pbWcvY2hhbXBpb24vSXJlbGlhLnBuZ1wiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJOYW1lXCI+PGEgY2xhc3NOYW1lPVwiTGlua1wiIGhyZWY9XCIjXCI+7J6E7ZeM7JqwPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbkltYWdlXCI+PGltZyBzcmM9XCJodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vOS4xNy4xL2ltZy9jaGFtcGlvbi9JcmVsaWEucG5nXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lck5hbWVcIj48YSBjbGFzc05hbWU9XCJMaW5rXCIgaHJlZj1cIiNcIj7snoTtl4zsmrA8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uSW1hZ2VcIj48aW1nIHNyYz1cImh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi85LjE3LjEvaW1nL2NoYW1waW9uL0lyZWxpYS5wbmdcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyTmFtZVwiPjxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPVwiI1wiPuyehO2XjOyasDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhbXBpb25JbWFnZVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzkuMTcuMS9pbWcvY2hhbXBpb24vSXJlbGlhLnBuZ1wiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJOYW1lXCI+PGEgY2xhc3NOYW1lPVwiTGlua1wiIGhyZWY9XCIjXCI+7J6E7ZeM7JqwPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbkltYWdlXCI+PGltZyBzcmM9XCJodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vOS4xNy4xL2ltZy9jaGFtcGlvbi9JcmVsaWEucG5nXCIvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lck5hbWVcIj48YSBjbGFzc05hbWU9XCJMaW5rXCIgaHJlZj1cIiNcIj7snoTtl4zsmrA8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uSW1hZ2VcIj48aW1nIHNyYz1cImh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi85LjE3LjEvaW1nL2NoYW1waW9uL0lyZWxpYS5wbmdcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyTmFtZVwiPjxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPVwiI1wiPuyehO2XjOyasDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW1XcmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLldpbiA+IC5Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EzY2ZlYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTliOWNmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0uTG9zZSA+IC5Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UyQjZCMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTliOWNmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0gPiAuQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjg5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RkMmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0gPiAuQ29udGVudCA+IC5HYW1lU3RhdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtID4gLkNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVN0YXRzPi5HYW1lVHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5fdGltZUNvdW50QXNzaWduZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogaGVscDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLkxvc2U+LkNvbnRlbnQ+LkdhbWVTdGF0cz4uQmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NlYTdhNztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLkxvc2U+LkNvbnRlbnQ+LkdhbWVTdGF0cz4uR2FtZVJlc3VsdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzY0NDNlOztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLldpbj4uQ29udGVudD4uR2FtZVN0YXRzPi5CYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTliOWNmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0uV2luPi5Db250ZW50Pi5HYW1lU3RhdHM+LkdhbWVSZXN1bHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFhNzhhZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LkNoYW1waW9uSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LkNoYW1waW9uSW1hZ2UgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LlN1bW1vbmVyU3BlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5TdW1tb25lclNwZWxsPi5TcGVsbDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uUnVuZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5SdW5lcz4uUnVuZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LlJ1bmVzPi5SdW5lOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LlJ1bmVzPi5SdW5lOmZpcnN0LWNoaWxkPi5JbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5SdW5lcz4uUnVuZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LkNoYW1waW9uTmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LkNoYW1waW9uTmFtZT5hIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5LREEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5LREE+LktEQSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODc5MjkyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uS0RBPi5LREE+LktpbGwsIC5HYW1lSXRlbT4uQ29udGVudD4uS0RBPi5LREE+LkFzc2lzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1ZTVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBPi5EZWF0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzY0NDNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBPi5LaWxsLCAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBPi5Bc3Npc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NWU1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5LREE+LktEQVJhdGlvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NTVlNWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5LREE+LktEQVJhdGlvIC5LREFSYXRpbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzUzYTNhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+ZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIC5JdGVtTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLldpbj4uQ29udGVudD4uSXRlbXM+Lkl0ZW1MaXN0Pi5JdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5YjljZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5JdGVtcyAuSXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIC5JdGVtIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5JdGVtcyAuSXRlbT4uSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIC5Ucmlua2V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM1M2EzYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIC5Ucmlua2V0IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uRm9sbG93UGxheWVycyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkZvbGxvd1BsYXllcnMuTmFtZXM+LlRlYW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5Gb2xsb3dQbGF5ZXJzLk5hbWVzPi5UZWFtPi5TdW1tb25lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkZvbGxvd1BsYXllcnMuTmFtZXM+LlRlYW0+LlN1bW1vbmVyPi5DaGFtcGlvbkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5Gb2xsb3dQbGF5ZXJzLk5hbWVzPi5UZWFtPi5TdW1tb25lcj4uQ2hhbXBpb25JbWFnZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uRm9sbG93UGxheWVycy5OYW1lcz4uVGVhbT4uU3VtbW9uZXI+LlN1bW1vbmVyTmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkZvbGxvd1BsYXllcnMuTmFtZXM+LlRlYW0+LlN1bW1vbmVyPi5TdW1tb25lck5hbWU+Lkxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uRm9sbG93UGxheWVycy5OYW1lcz4uVGVhbT4uU3VtbW9uZXIuUmVxdWVzdGVyPi5TdW1tb25lck5hbWU+Lkxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5TdGF0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1ZTVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LlN0YXRzPi5DS1JhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M2NDQzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhdWdlczsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Leauges);

/***/ })

})
//# sourceMappingURL=summoner.js.db478f565933aaa6d486.hot-update.js.map