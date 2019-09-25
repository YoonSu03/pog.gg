import React from 'react';

const LiveStream = () => {
    return (
        <>
            <div className="FluidContainer container-fluid">
                <div className="container LiveStreams Intro__section">
                    <h3 className="Title Gilroy">
                        <div className="Title__squares">
                            <div className="Title__square"></div>
                            <div className="Title__square"></div>
                            <div className="Title__square small"></div>
                            <div className="Title__square small"></div>
                        </div>
                        Live STREAMING
                    </h3>
                    <div className="LiveStreams__container">
                        <div className="LiveStreams__streaming">
                            <a href="#">
                                <img className="LiveStreams__streaming__thumbnail" src="https://static-cdn.jtvnw.net/previews-ttv/live_user_rush-320x180.jpg"/>
                                <div className="LiveStreams__streaming_player">
                                    <figure className="PlayerIcon LiveStreams__streaming__playerIcon small" style={{backgroundImage: "url(https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/60/FOX_Rush_2019_Split_1.png)"}}></figure>
                                    <div className="LiveStreams__streaming__playerName">FOX Rush</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style global jsx>
                {`
                    .LiveStreams__container {
                        margin-right: -.625rem;
                    }
                    .LiveStreams__streaming {
                        display: inline-block;
                        vertical-align: top;
                        margin-bottom: 1.25rem;
                        margin-right: .625rem;
                        width: calc(20% - .625rem);
                    }
                    .LiveStreams__streaming__thumbnail {
                        width: 100%;
                        height: auto;
                        margin-bottom: .5rem;
                    }
                    .PlayerIcon {
                        width: 2.5rem;
                        height: 2.5rem;
                        background-size: cover;
                        border-radius: 50%;
                        margin: 0;
                    }
                    .PlayerIcon.small {
                        width: 1.875rem;
                        height: 1.875rem;
                    }
                    .LiveStreams__streaming__playerName {
                        display: inline-block;
                        vertical-align: top;
                        position: relative;
                        margin-left: .5rem;
                        top: .2rem;
                        color: #fbfbfb;
                    }
                    .LiveStreams__streaming__playerIcon {
                        display: inline-block;
                        vertical-align: top;
                        border: 1px solid #d8d8d8;
                    }
                `}
            </style>
        </>
    )
}

export default LiveStream;