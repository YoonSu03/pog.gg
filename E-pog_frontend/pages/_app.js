import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout/AppLayout';

const EPogg = ({ Component }) => {
    console.log("hi")
    return (
        <>
            <Head>
                <title>E-pog.gg</title>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
            <style global jsx>
            {`
                .LeagueSelector {
                    background-color: #27282d;;
                    cursor: pointer;
                    user-select: none;
                }
                * {
                    box-sizing: border-box;
                }
                body {
                    margin: 0;
                    font-family: Spoqa Han Sans,Spoqa Han Sans JP,"Sans-serif","sans-serif",Apple SD Gothic Neo,Helvetica Neue,Arial;
                    font-size: 1rem;
                    background-color: #1e2025;
                    font-weight: 400;
                    line-height: 1.5;
                }
                a {
                    text-decoration: none;
                    color: white;
                }
                img, svg {
                    vertical-align: middle;
                }
                td {
                    display: table-cell;
                    vertical-align: inherit;
                }
                .Icon, .Menus__link {
                    display: inline-block;
                }
                .Gilroy {
                    font-family: Gilroy,Spoqa Han Sans,Spoqa Han Sans JP,"Sans-serif";
                    font-weight: 700;
                }
                .float-right {
                    float: right!important;
                }
                .FluidContainer {
                    background-color: #1e2025;
                }
            `}
            </style>
        </>
    )
}

export default EPogg;