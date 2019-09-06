import React, {useState, useEffect} from 'react';
import * as api from '../../../api/api';
const Leauges = ({userinfo}) => {
    const [matchlists, setMatchlists] = useState('');
    const [matches, setMatches] = useState('');
    let matchArray = [];
    const getMatches = async(matches) => {
        await matches.map(v => {
            api.getmatches(v.gameId)
            .then(async(response) => {
                matchArray.push(response.data);
            })
            .catch(error => console.log(error))
        })
        setMatches(matchArray)
    }
    useEffect(() => {
        api.getmatchlists(userinfo.accountId)
        .then(response => {
            setMatchlists(response.data.matches)
            return getMatches(response.data.matches);
        })
        .catch(error => console.log(error))
    },[userinfo])
    console.log(matches)
    return (
        <div className="GameContents">
            <div className="GameItemList">
                {
                   console.log(matches[0])
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
    );
}

export default Leauges;