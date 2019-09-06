import React from 'react';

const Tierinfo = ({key, name, data}) => {
    const imageFilter = (tier, rank) => {
        if(tier === "IRON") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/iron_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/iron_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/iron_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/iron_1.png"/>)
            } 
        } else if(tier === "BRONZE") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/bronze_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/bronze_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/bronze_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/bronze_1.png"/>)
            } 
        } else if (tier === "SILVER") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/silver_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/silver_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/silver_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/silver_1.png"/>)
            } 
        } else if (tier === "GOLD") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/gold_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/gold_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/gold_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/gold_1.png"/>)
            }
        } else if (tier === "PLATINUM") { 
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/platinum_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/platinum_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/platinum_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/platinum_1.png"/>)
            }
        } else if (tier === "DIAMOND") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/diamond_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/diamond_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/diamond_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/diamond_1.png"/>)
            }
        } else if (tier === "MASTER") {
            return (<img src="https://poro.gg/images/lol/tier/master_1.png"/>)
        } else if (tier === "GRANDMASTER") {
            return (<img src="https://poro.gg/images/lol/tier/grandmaster_1.png"/>)
        } else if (tier === "CHALLENGER") {
            return (<img src="https://poro.gg/images/lol/tier/challenger_1.png"/>)
        }
    }
    return (
        <div className="rank">
            <div className="TierImage">
                {
                    imageFilter(data.tier, data.rank)
                }
            </div>
            <div className="TierInfo">
                <div className="RankType">{name}</div>
                <b className="TierRank">{data.tier + " " + data.rank}</b>
                <span className="LeaguePoints">{data.leaguePoints} LP</span>
                <div class="winrate">
                    <span className="WinLose">
                        <span className="wins">{data.wins}승</span>
                        <span className="losses">{data.losses}패</span> <br/>
                        <span class="winrate">승률 {Math.round((data.wins / (data.wins + data.losses)) * 100)}%</span>
                    </span>
                </div>
            </div>
            <style jsx global>
                {`
                    .rank {
                        width: 300px;
                        height: 140px;
                        border: 1px solid #cdd2d2;
                        box-shadow: 0 1px #dcdfdf;
                        background: #f2f2f2;
                        border-radius: 2px;
                    }
                    .TierImage {
                        padding-top: 10px;
                        float: left;
                        display: table-cell;
                        vertical-align: middle;
                        text-align: center;
                        width: 130px;
                        height: 110px;
                    }
                    .rank .TierImage img{
                        width: 110px;
                        height: 110px;
                    }
                    .TierInfo {
                        padding-top: 30px;
                        height: 30px;
                        display: table-cell;
                        vertical-align: middle;
                        font-size: 12px;
                        line-height: 1.5;
                        text-align: left;
                    }
                    .RankType {
                        font-size: 13px;
                        color: #879292;
                    }
                    .TierRank {
                        font-size: 15px;
                        font-weight: bold;
                        color: #1f8ecd;
                    }
                    .LeaguePoints {
                        padding-left: 5px;
                        color: #555e5e;
                        font-weight: bold;
                    }
                    .WinLose {
                        font-size: 14px;
                        color: #879292;
                    }
                    .rank + .rank {
                        margin-top: 10px;
                    }
                `}
            </style>
        </div>
    );
}

export default Tierinfo;