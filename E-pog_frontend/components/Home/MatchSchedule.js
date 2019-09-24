import React from 'react';

const MatchSchedule = () => {
    return (
        <>
            <div class="FluidContainer container-fluid">
                <div class="container Intro_section">
                    <h3 class="Title Gilroy">
                        MATCH SCHEDULE
                        <div class="Title__squares">
                            <div class="Title__square"></div>
                            <div class="Title__square"></div>
                            <div class="Title__square small"></div>
                            <div class="Title__square small"></div>
                        </div>
                    </h3>
                    <ul class="RecentMatches">
                        <div class="RecentMatches__split Gilroy">LCK 2019 Summer Season</div>
                        <li>
                            <a class="MatchBar" href="#">
                                <div class="MatchBar__column date Gilroy finished">
                                    2019.09.16
                                    <br/>
                                    13:00
                                </div>
                                <div class="MatchBar__column home">
                                    <span class="Gilroy MatchBar__team__line">DFM</span>
                                    <figure class="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                        <div class="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/DFM.png)"}}></div>
                                    </figure>
                                </div>
                                <div class="MatchBar__column board">
                                    <div class="ScoreBoard Gilroy MatchBar__column__score">
                                        <div class="ScoreBoard__overlay">RESULT</div>
                                        3:1
                                    </div>
                                </div>
                                <div class="MatchBar__column away">            
                                        <figure class="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                            <div class="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/V3.png)"}}></div>
                                        </figure>
                                        <span class="Gilroy MatchBar__team__line">V3</span>
                                    </div>
                                
                                <div class="MatchBar__column arrow Gilroy">
                                    DETAIL
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style global jsx>
                {`
                    .RecentMatches {
                        padding: 0;
                        margin: -1.5rem 0 0;
                    }
                    .RecentMatches__split {
                        float: right;
                        margin: .625rem;
                    }
                    .RecentMatches li, .RecentMatchesul {
                        margin: 0;
                        list-style: none;
                    }
                    .MatchBar {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 5rem;
                        background-color: #27282d;
                        width: 100%;
                        color: #fbfbfb;
                        -webkit-transition: background-color .15s;
                        transition: background-color .15s;
                        margin-bottom: .125rem;
                        position: relative;
                    }
                    .MatchBar__column.arrow, .MatchBar__column.date {
                        width: 6.25rem;
                    }
                    .MatchBar__column.date {
                        padding-left: 1.25rem;
                    }
                    .MatchBar__column.finished {
                        color: #5b5c64;
                    }
                    .MatchBar__column {
                        white-space: nowrap;
                        position: relative;
                    }
                    .MatchBar__column.home {
                        text-align: right;
                    }
                    .MatchBar__column.away, .MatchBar__column.home {
                        width: 30%;
                    }
                    .MatchBar__column.board {
                        text-align: center;
                    }
                    .MatchBar__column.away {
                        text-align: left;
                    }
                    .MatchBar__column.away, .MatchBar__column.home {
                        width: 30%;
                    }
                    .MatchBar__column {
                        white-space: nowrap;
                        position: relative;
                    }
                    .MatchBar__column.arrow, .MatchBar__column.date {
                        width: 6.25rem;
                    }
                    .MatchBar__column.arrow {
                        text-align: right;
                        padding-right: 1.25rem;
                        justify-self: right;
                    }
                    .ScoreBoard {
                        position: relative;
                        width: 7.5rem;
                        height: 2.5rem;
                        line-height: 2.5rem;
                        background-color: #1e2025;
                        overflow-y: hidden;
                        cursor: pointer;
                    }
                    .ScoreBoard__overlay {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        -webkit-transition: top .15s;
                        transition: top .15s;
                        background-color: #db0442;
                    }
                    .ScoreBoard__overlay :hover {
                        -webkit-animation:overlay  0.3s ease 1;
                        -webkit-animation-fill-mode:both
                    }
                    @-webkit-keyframes overlay{
                        100%{
                            transition: top .15s;
                            transition-property: top;
                            transition-duration: 0.15s;
                            transition-timing-function: ease;
                            transition-delay: 0s;
                        }
                    }
                    .MatchBar__team__line {
                        margin: 0 1.5625rem;
                        position: relative;
                        top: -1.3rem;
                    }
                `}
            </style>
        </>
    )
}

export default MatchSchedule;