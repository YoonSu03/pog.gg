import React from 'react';

const TeamIntro = () => {
    return (
        <>
            <div className="Intro">
                <div className="FluidContainer container-fluid">
                    <div className="container">
                        <h3 className="Title Gilroy">
                            <div className="Title__squares">
                                <div className="Title__square"></div>
                                <div className="Title__square"></div>
                                <div className="Title__square small"></div>
                                <div className="Title__square small"></div>
                            </div>
                            LEAGUE OF LEGENDS CHAMPIONS KOREA TEAMS
                        </h3>
                        <div className="LeagueTeams">
                            <div className="LeagueTeams__teams">
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">AF</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/DWG.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">DWG</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/GEN.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">GEN</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">GRF</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/HLE.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">HLE</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/SKT.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">SKT</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/JAG.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">JAG</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/KT.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">KT</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/KZ.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">KZ</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/SB.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">SB</span>
                                    </figure>
                                </a>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style global jsx>
                {`
                    .Intro {
                        background-color: #1e2025;
                        padding-top: 2.5rem;
                        padding-bottom: 2.5rem;
                    }
                    .Title {
                        font-size: 1.875px;
                        font-size: 1.875rem;
                        position: relative;
                        padding-top: 1rem;
                        color: #fbfbfb;
                        text-transform: uppercase;
                    }
                    .Title__squares {
                        font-size: 0;
                        position: absolute;
                        top: 0;
                    }
                    .Title__square {
                        display: inline-block;
                        vertical-align: top;
                        width: 10px;
                        height: 8px;
                        margin-right: 2px;
                        background-color: #db0442;
                    }
                    .Title__square.small {
                        width: 8px;
                    }
                    .LeagueTeams {
                        text-align: center;
                        margin-bottom: 3rem;
                    }
                    .LeagueTeams__link {
                        margin-bottom: 1.25rem;
                        display: inline-block;
                    }
                    .LeagueSelector .container {
                        position: relative;
                    }
                    .LeagueTeams__link:not(:last-child) {
                        margin-right: 1.25rem;
                    }
                    .TeamSymbol.large {
                        width: 5rem;
                        height: 5rem;
                    }
                    .LeagueTeams__team {
                        text-align: center;
                        background-color: #fff;
                        width: 4.6875rem!important;
                        height: 4.6875rem!important;
                        
                    }
                    .LeagueTeams__team:hover {
                        -webkit-animation:team   0.3s ease 1;
                        -webkit-animation-fill-mode:both
                    }
                    @-webkit-keyframes team{
                        0%{
                            -webkit-transform: scale(1.0, 1.0)
                        }
                        100%{
                            -webkit-transform: scale(1.1, 1.1)
                        }
                    }
                    .TeamSymbol {
                        display: inline-block;
                        width: 3.75rem;
                        height: 3.75rem;
                        position: relative;
                        margin: 0;
                    }
                    .TeamSymbol:not(.circleless) {
                        border: 1px solid #d8d8d8;
                        border-radius: 50%;
                        background-color: #fbfbfb;
                    }
                    .TeamSymbol__image {
                        width: 100%;
                        height: 100%;
                        -webkit-transform: scale(.7);
                        transform: scale(.7);
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        
                    }
                    .TeamSymbol__acronym {
                        margin-top: .625rem;
                        display: inline-block;
                        color: #5b5c64;
                    }
                `}
            </style>
        </>
    )
}

export default TeamIntro;