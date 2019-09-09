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



var Leauges = function Leauges(_ref) {
  /*const [matchesData, setMatchesdata] = useState([]);
  let temp = [];
  useEffect(() => {
      matchList.map(v => {
          api.getmatches(v.gameId)
          .then((response) => {
              setMatchesdata([...matchesData, response.data]);   
          })
          .catch(error => console.log(error))
      })  
  }, [matchList])
  return (
      <div className="GameContents">
          <div className="GameItemList">
              {
                  matchesData.map((v,i) => {
                      console.log(v)
                      return (
                          <div key={i} className="GameItemWrap">
                              <div className="GameItem Win">
                                  <div className="Content">
                                      <div className="GameStats">
                                          <div className="GameType">{v.gameMode}</div>
                                          <div className="TimeStamp"><span>5시간전</span></div>
                                          <div className="Bar"></div>
                                          <div className="GameResult">승리</div>
                                          <div className="GameLength">29분 55초</div>
                                      </div>
                                      <div className="GameSettingInfo">
                                          <div className="ChampionImage"><a><img src="https://opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=w_46&v=1"/></a></div>
                                          <div className="SummonerSpell">
                                              <div className="Spell">
                                                  <img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerSmite.png?image=w_22&v=15354684000"/>
                                              </div>
                                              <div className="Spell">
                                                  <img src="https://opgg-static.akamaized.net/images/lol/spell/SummonerSmite.png?image=w_22&v=15354684000"/>
                                              </div>
                                          </div>
                                          <div className="Runes">
                                              <div className="Rune"><img src="https://opgg-static.akamaized.net/images/lol/perk/8010.png?image=w_22&v=1"/></div>
                                              <div className="Rune"><img src="https://opgg-static.akamaized.net/images/lol/perk/8010.png?image=w_22&v=1"/></div>
                                          </div>
                                          <div className="ChampionName">
                                              <a>리신</a>
                                          </div>
                                      </div>
                                      
                                      <div className="KDA">
                                          <div className="KDA">
                                              <span className="Kill">16</span>
                                              /
                                              <span className="Death">6</span>
                                              /
                                              <span className="Assist">4</span>
                                          </div>
                                          <div className="KDARatio">
                                              <span className="KDARatio">3.33:1</span>
                                              평점
                                          </div>
                                      </div>
                                      <div className="Stats">
                                          <div className="Level">레벨16</div>
                                          <div className="CS"><span>178 (5.9)</span> CS</div>
                                          <div class="CKRate tip tpd-delegation-uid-1">
                                              킬관여 61%
                                          </div>
                                      </div>
                                      <div className="Items">
                                          <div className="ItemList">
                                              <div className="Item"><img src="https://opgg-static.akamaized.net/images/lol/item/3077.png?image=w_22&v=1"/></div>
                                              <div className="Item"><img src="https://opgg-static.akamaized.net/images/lol/item/3078.png?image=w_22&v=1"/></div>
                                              <div className="Item"><img src="https://opgg-static.akamaized.net/images/lol/item/3075.png?image=w_22&v=1"/></div>
                                              <div className="Item"><img src="https://opgg-static.akamaized.net/images/lol/item/3080.png?image=w_22&v=1"/></div>
                                              <div className="Item"><img src="https://opgg-static.akamaized.net/images/lol/item/3081.png?image=w_22&v=1"/></div>
                                              <div className="Item"><img src="https://opgg-static.akamaized.net/images/lol/item/3082.png?image=w_22&v=1"/></div>
                                              <div className="Item"><img src="https://opgg-static.akamaized.net/images/lol/item/3083.png?image=w_22&v=1"/></div>
                                          </div>
                                          <div className="Trinket">
                                              <img src="https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png"/>
                                              제어와드
                                              <span className="wards vision">9</span>
                                          </div>
                                      </div>                 
                                      <div className="FollowPlayers Names">
                                          <div className="Team">
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                              <div className="Summoner Requester">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                          </div>
                                          <div className="Team">
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                              <div className="Summoner">
                                                  <div className="ChampionImage"><img src="https://ddragon.leagueoflegends.com/cdn/9.17.1/img/champion/Irelia.png"/></div>
                                                  <div className="SummonerName"><a className="Link" href="#">임헌우</a></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )
                  })
              }
              
          </div>
          <style jsx global>
              {`
                  .GameItemWrap {
                      border-radius: 3px;
                      margin-bottom: 8px;
                  }
                  .GameItem {
                      position: relative;
                      background: none;
                  }
                  .GameItem.Win > .Content {
                      table-layout: fixed;
                      background-color: #a3cfec;
                      border-color: #99b9cf;
                  }
                  .GameItem > .Content {
                      display: table;
                      width: 689px;
                      height: 97px;
                      border-collase: collapse;
                      border: 1px solid #cdd2d2;
                  }
                  .GameItem > .Content > .GameStats {
                      width: 70px;
                      text-align: center;
                      font-size: 11px;
                      color: #555;
                      line-height: 16px;
                  }
                  .GameItem > .Content > div {
                      display: table-cell;
                      height: 96px;
                      vertical-align: middle;
                  }
                  .GameItem>.Content>.GameStats>.GameType {
                      font-weight: bold;
                      width: 70px;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                  }
                  ._timeCountAssigned {
                      font-size: inherit;
                      cursor: help;
                  }
                  .GameItem.Win>.Content>.GameStats>.Bar {
                      background: #99b9cf;
                  }
                  .GameItem.Win>.Content>.GameStats>.GameResult {
                      color: #1a78ae;
                  }
                  .GameItem>.Content>.GameSettingInfo {
                      width: 110px;
                      font-size: 0;
                  }
                  .GameItem>.Content>.GameSettingInfo>.ChampionImage {
                      display: inline-block;
                      width: 46px;
                      height: 46px;
                      vertical-align: middle;
                      border-radius: 50%;
                      overflow: hidden;
                  }
                  .GameItem>.Content>.GameSettingInfo>.ChampionImage .Image {
                      display: block;
                      width: 100%;
                      height: 100%;
                      background: #000;
                  }
                  .GameItem>.Content>.GameSettingInfo>.SummonerSpell {
                      display: inline-block;
                      vertical-align: middle;
                      margin-left: 4px;
                  }
                  .GameItem>.Content>.GameSettingInfo>.SummonerSpell>.Spell:first-child {
                      margin-left: 0;
                  }
                  .GameItem>.Content>.GameSettingInfo>.Runes {
                      display: inline-block;
                      vertical-align: middle;
                      margin-left: 4px;
                  }
                  .GameItem>.Content>.GameSettingInfo>.Runes>.Rune {
                      width: 22px;
                      height: 22px;
                      margin-top: 2px;
                  }   
                  .GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child {
                      margin-top: 0;
                  }
                  .GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child>.Image {
                      background: #000;
                  }
                  .GameItem>.Content>.GameSettingInfo>.Runes>.Rune {
                      width: 22px;
                      height: 22px;
                      margin-top: 2px;
                  }
                  .GameItem>.Content>.GameSettingInfo>.ChampionName {
                      margin-top: 8px;
                      font-size: 11px;
                      color: #555;
                      text-align: center;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                  }
                  .GameItem>.Content>.GameSettingInfo>.ChampionName>a {
                      text-decoration: none;
                      color: inherit;
                  }
                  .GameItem>.Content>.KDA {
                      font-size: 11px;
                      text-align: center;
                  }
                  .GameItem>.Content>.KDA>.KDA {
                      color: #879292;
                      font-size: 15px;
                      white-space: nowrap;
                  }
                  .GameItem>.Content>.KDA>.KDA>.Kill, .GameItem>.Content>.KDA>.KDA>.Assist {
                      color: #555e5e;
                  }
                  .GameItem>.Content>.KDA>.KDA>.Death {
                      color: #c6443e;
                  }
                  .GameItem>.Content>.KDA>.KDA>.Kill, .GameItem>.Content>.KDA>.KDA>.Assist {
                      color: #555e5e;
                  }
                  .GameItem>.Content>.KDA>.KDARatio {
                      color: #555e5e;
                      font-size: 12px;
                      font-weight: bold;
                      margin-top: 6px;
                  }
                  .GameItem>.Content>.KDA>.KDARatio .KDARatio {
                      color: #353a3a;
                  }
                  .GameItem>.Content>.Items {
                      font-size: 0;
                  }
                  .GameItem>.Content>div {
                      display: table-cell;
                      height: 96px;
                      vertical-align: middle;
                  }
                  .GameItem>.Content>.Items .ItemList {
                      width: 96px;
                      margin: 0 auto;
                  }
                  .GameItem.Win>.Content>.Items>.ItemList>.Item {
                      background-color: #99b9cf;
                  }
                  .GameItem>.Content>.Items .Item {
                      display: inline-block;
                      width: 22px;
                      height: 22px;
                      border-radius: 3px;
                      margin-top: 2px;
                      margin-right: 2px;
                      overflow: hidden;
                  }
                  .GameItem>.Content>.Items .Item>.Image {
                      width: 100%;
                      height: 100%;
                  }
                  .GameItem>.Content>.Items .Trinket {
                      margin-top: 7px;
                      color: #353a3a;
                      line-height: 13px;
                      font-size: 11px;
                      text-align: center;
                  }
                  .GameItem>.Content>.Items .Trinket img {
                      vertical-align: middle;
                  }
                  .GameItem>.Content>.FollowPlayers {
                      width: 170px;
                      font-size: 0;
                  }
                  .GameItem>.Content>.FollowPlayers.Names>.Team {
                      float: left;
                      width: 50%;
                  }
                  .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner {
                      display: block;
                      width: 80px;
                      height: 18px;
                      margin-left: 3px;
                      text-align: left;
                      white-space: nowrap;
                  }
                  .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.ChampionImage {
                      display: inline-block;
                      vertical-align: middle;
                      margin-right: 3px;
                  }
                  .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.ChampionImage img{
                      width: 16px;
                      height: 16px;
                  }
                  .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.SummonerName {
                      display: inline-block;
                      max-width: 60px;
                      vertical-align: middle;
                      font-size: 11px;
                      color: #555;
                  }
                  .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.SummonerName>.Link {
                      display: block;
                      color: inherit;
                      text-decoration: none;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                  }
                  .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner.Requester>.SummonerName>.Link {
                      color: #222;
                  }
                  .GameItem>.Content>.Stats {
                      width: 90px;
                      font-size: 11px;
                      text-align: center;
                      line-height: 18px;
                      color: #555e5e;
                  }
                  .GameItem>.Content>.Stats>.CKRate {
                      color: #c6443e;
                  }
              `}
          </style>
      </div>
  );*/

  var matchList = _ref.matchList;
};

/* harmony default export */ __webpack_exports__["default"] = (Leauges);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false

})
//# sourceMappingURL=summoner.js.8c0f1979a3dc218a563d.hot-update.js.map