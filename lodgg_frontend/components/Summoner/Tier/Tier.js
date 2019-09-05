import React, {useState, useEffect} from 'react';
import Tierinfo from '../Tierinfo';
import * as api from '../../../api/api';

const Body = ({userinfo}) => {
    const [leaugeinfo, setLeagueinfo] = useState('');
    useEffect(() => {
        api.getleague(userinfo.id)
        .then(response => setLeagueinfo(response.data))
        .catch(error => console.log(error))
    }, [userinfo])
    return(
        <div className="rank_wrapper">
            {
                leaugeinfo && leaugeinfo.map((data, i) => {
                    if(data.queueType === "RANKED_SOLO_5x5") {
                        console.log("solo")
                        return (
                            <Tierinfo key={i} name="솔로랭크" data={data}/>
                        );
                    } else if(data.queueType === "RANKED_TFT") {
                        console.log("tft");
                        return (
                            <Tierinfo key={i} name="롤토체스" data={data}/>
                        );
                    } else if(data.queueType === "RANKED_FLEX_SR") {
                        console.log("team");
                        return (
                            <Tierinfo key={i} name="자유랭크" data={data}/>
                        );
                    }
                })
            }
            
            
            <style jsx>
                {`
                    .rank_wrapper {
                        padding-top: 40px;
                        width: 1100px;
                        height: 130px;
                        margin: 0 auto;
                    }
                `}
            </style>
        </div>
    );
};

export default Body;