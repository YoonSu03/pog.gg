import React from 'react';
const LeagueSelector = () => {
    console.log("hi")
    return (
        <div>
            <div className="FluidContainer container-fluid LeagueSelector">
                <div className="container">
                    <div className="TournamentSymbol LeagueSelector__highlighted">
                        <img className="TournamentSymbol__image" src="static/lck_image.png" alt="LCK 2019 Summer Season"/>
                        <span className="TournamentSymbol__label Gilroy">LCK 2019 Summer</span>
                    </div>
                </div>
            </div>
            <style global jsx>{`
                .LeagueSelector {
                    background-color: #27282d;;
                    cursor: pointer;
                    user-select: none;
                }
                .container-fluid {
                    width: 100%;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                }
                .LeagueSelector .container {
                    position: relative;
                }
                .TournamentSymbol {
                    padding-bottom: .625rem;
                    border-bottom: 2px solid transparent;
                }
                .TournamentSymbol__image {
                    height: 2.5rem;
                    width: 2.5rem;
                    margin-top: .625rem;
                    vertical-align: top;
                }
                .TournamentSymbol__badge, .TournamentSymbol__label {
                    margin-left: .625rem;
                    display: inline-block;
                    vertical-align: top;
                    margin-top: .625rem;
                    line-height: 2.5rem;
                }
            `}
            </style>
        </div>
    )
}

export default LeagueSelector;