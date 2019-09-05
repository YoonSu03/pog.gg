import React, {useState, useEffect} from 'react';
import * as api from '../../../api/api';
const Leauges = ({userinfo}) => {
    const [matchlists, setMatchlists] = useState('');
    const [matches, setMatches] = useState('');
    const matchArray = useState([]);
    const getMatches = (matches) => {
        matches.map(v => {
            api.getmatches(v.gameId)
            .then(response => matchArray.push(response.data))
            .catch(error => console.log(error))
        })
        setMatches(matchArray);
    }
    useEffect(() => {
        api.getmatchlists(userinfo.accountId)
        .then(response => {
            setMatchlists(response.data.matches)
            return getMatches(response.data.matches);
        })
        .catch(error => console.log(error))
    },[userinfo])
    console.log(matchlists, matches)
    return (
        <div>
            <div className="GameItemList">
                <div className="GameItemWrap">
                    <div className="GameItem Win">
                        <div className="Content">
                            <div className="GameStats">
                                <div className="GameType">일반</div>
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
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>
                {`
                    .GameItemWrap {
                        position: relative;
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
                `}
            </style>
        </div>
    );
}

export default Leauges;