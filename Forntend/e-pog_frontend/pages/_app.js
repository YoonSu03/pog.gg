import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout/AppLayout';

const EPogg = ({ Component }) => {
    console.log("hi")
    return (
        <>
            <Head>
                <title>e-pog.gg</title>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
            <style global jsx>
            {`
                .LeagueBackground {
                    position: absolute; 
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    position: fixed;
                    background-repeat: no-repeat;
                    background-image:url(/static/lck_background.png);
                    background-size: 50%;
                    background-position: 50%;
                    opacity: .3;
                    pointer-events: none;
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