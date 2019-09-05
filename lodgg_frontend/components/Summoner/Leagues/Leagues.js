import React, {useState, useEffect} from 'react';
import * as api from '../../../api/api';
const Leauges = ({userinfo}) => {
    const [matchlists, setMatchlists] = useState('');
    const [matches, setMatches] = useState('');
    const matchArray = useState([]);
    const getMatches = (matches) => {
        matches.map(v => {
            api.getmatches(v.gameId)
            .then(response => matchArray.push(response.data))
            .catch(error => console.log(error))
        })
        setMatches(matchArray);
    }
    useEffect(() => {
        api.getmatchlists(userinfo.accountId)
        .then(response => {
            setMatchlists(response.data.matches)
            return getMatches(response.data.matches);
        })
        .catch(error => console.log(error))
    },[userinfo])
    console.log(matchlists, matches)
    return (
        <div>
            <div className="GameItemList">
                <div className="GameItemWrap">
                    <div className="GameItem Win">
                        <div className="Content">

                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>
                {`
                    .GameItemWrap {
                        position: relative;
                        border-radius: 3px;
                        margin-bottom: 8px;
                    }
                    .GameItem {
                        position: relative;
                        background: none;
                    }
                    .GameItem.Win > .Content {
                        table-layout: fixed;
                        background-color: #a3cfec;
                        border-color: #99b9cf;
                    }
                    .GameItem > .Content {
                        display: table;
                        width: 689px;
                        height: 97px;
                        border-collase: collapse;
                        border: 1px solid #cdd2d2;
                    }
                `}
            </style>
        </div>
    );
}

export default Leauges;