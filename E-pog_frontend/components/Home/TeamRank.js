import React from 'react';

const TeamRank = () => {
    return (
        <>
            <div class="FluidContainer container-fluid">
                <div class="container Intro_section">
                    <h3 class="Title Gilroy">
                        <div class="Title__squares">
                            <div class="Title__square"></div>
                            <div class="Title__square"></div>
                            <div class="Title__square small"></div>
                            <div class="Title__square small"></div>
                        </div>
                        LCK 2019 Summer 순위
                    </h3>
                    <div class="Ranks">
                        <table class="RankTable Gilroy Ranks--desktop">
                            <thead>
                                <tr>
                                    <th colspan="3"></th>
                                    <th scope="col" colspan="2"><span>승-패</span></th>
                                    <th colspan="2"><span>세트</span></th>
                                    <th scope="col"><span>득실차</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="RankTable__row RankTable__lead">
                                    <td class="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"}}></td>
                                    <td>1</td>
                                    <td class="RankTable__name">
                                        <span class="hidden-in-mobile">Griffin</span>
                                    </td>
                                    <td>
                                        13W&nbsp;5L
                                    </td>
                                    <td>72.2%</td>
                                    <td>29W&nbsp;13L</td>
                                    <td>69.0%</td>
                                    <td>16</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <style global jsx>
                {`
                    .Ranks table {
                        width: 100%;
                    }
                    .RankTable {
                        border-collapse: initial;
                        border-spacing: 0 1rem;
                        width: 100%;
                    }
                    thead {
                        display: table-header-group;
                        vertical-align: middle;
                        border-color: inherit;
                    }
                    .RankTable thead th:first-child {
                        font-size: 1.875px;
                        font-size: 1.875rem;
                    }
                    .RankTable thead th {
                        height: 3.125rem;
                        text-transform: uppercase;
                    }
                    th {
                        text-align: inherit;
                    }
                    .RankTable thead th {
                        height: 3.125rem;
                        text-transform: uppercase;
                    }
                    tbody {
                        display: table-row-group;
                        vertical-align: middle;
                        border-color: inherit;
                    }
                    .RankTable tbody td:first-child {
                        width: 5rem;
                        position: relative;
                        background-color: #fbfbfb;
                        background-size: 60%;
                        background-position: .625rem;
                        background-repeat: no-repeat;
                    }
                    .RankTable tbody td {
                        height: 3.75rem;
                        -webkit-transition: background-color .15s;
                        transition: background-color .15s;
                        background-color: #5b5c64;
                    }
                    .RankTable tbody tr.RankTable__lead td:not(:first-child) {
                        background-color: #db0442;
                    }
                    .RankTable tbody td:nth-child(2) {
                        font-size: 1.5px;
                        font-size: 1.5rem;
                        text-align: center;
                        width: 3rem;
                    }
                    .RankTable tbody td:nth-child(4) {
                        width: 6rem;
                    }
                    .RankTable tbody td:last-child {
                        width: 5rem;
                    }                    
                `}
            </style>
        </>
    )
}

export default TeamRank;