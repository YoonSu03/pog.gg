import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/LolLayout';

const Lodgg = ({ Component }) => {
    return (
        <>
            <Head>
                <title>Lod.gg</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css" rel="stylesheet"/>
            </Head>
            <Component/>
            <style jsx global>{`
                body {
                    margin: 0;
                    ackground-color: #f5f5f5;
                }
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                a {
                    text-decoration: none;
                    color: white;
                }
            `}
            </style>
        </>
    )
}

export default Lodgg;