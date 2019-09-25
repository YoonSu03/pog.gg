import React, {useState, useEffect} from 'react';
import LolLayout from '../components/LolLayout';    
import Header from '../components/Summoner/Header';
import Tier from '../components/Summoner/Tier';
import Leagues from '../components/Summoner/Leagues';
import { useRouter } from 'next/router';
import * as api from '../api/api';

const Summoner = () => {
    
    const [userinfo, setUserinfo] = useState('');
    const [leagueEntriesInfo, setLeagueEntriesfirst] = useState('');
    const [matchlist, setMatchlist] = useState('');
    const [matchesData, setMatchesdata] = useState([]);
    const [loading, SetLoading] = useState(false);
    const router = useRouter();
    const { name } = router.query
    useEffect(() => {
        const fetchUserinfo = async () => {
            const result = await api.getInfo(name)
            setUserinfo(result.data)
            fetchLeagueinfo(result.data)
            fetchMatchlist(result.data)
        }
        const fetchLeagueinfo = async (userinfo) => {
            const result = await api.getleagueFirst(userinfo.id)
            setLeagueEntriesfirst(result.data)
        }
        const fetchMatchlist = async (userinfo) => {
            const result = await api.getmatchlists(userinfo.accountId)
            console.log(result)
            setMatchlist(result.data)
            fetchMatchdata(result.data)
        }
        const fetchMatchdata = async (matchlist) => {
            matchlist.matches.map(v => {
                api.getmatches(v.gameId)
                .then((response) => {
                    setMatchesdata(matchesData => matchesData.concat(response.data).sort((a,b) => {
                        return a.gameCreation > b.gameCreation ? -1 : a.gameCreation < b.gameCreation ? 1 : 0;
                    }));
                    SetLoading(true)
                })
                .catch(error => console.log(error))
            })
        }
        const esportsMatch = async () => {
            const result = await api.getesportsMatches("293")
            console.log(result)
        }
        fetchUserinfo();
        esportsMatch();
    },[name])
    return (
        <div>   
            <LolLayout/>
            {loading === true ? <>
                <Header matchlist={matchlist} userinfo={userinfo}/>
                <div className="InfoTop">
                    <div className="InfoContents">
                        <div className="InfoTier">
                            <Tier leagueEntriesInfo={leagueEntriesInfo}/>
                        </div>
                        <div className="GameContents">
                            <Leagues name={name} matchList={matchlist} matchesData={matchesData}/>
                        </div>
                    </div>
                </div>
            </> : <div className="loading"><img src="/static/loading_img.gif"/></div>}
            <style jsx global>
                {`
                    .InfoTop {
                        width: 100vw;
                        height: 700px;
                    }
                    .InfoContents {
                        width: 60vw;
                        margin: 0 auto;
                    }
                    .InfoTier {
                        float: left;
                    }
                    .GameContents {
                        padding-top: 40px;
                        padding-left: 20px;
                        float: left;
                    }
                    .loading {
                        margin-top: 100px;
                        width: 100vw;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .loading > img{
                        width: 200px;
                        height: 100px; 
                    }
                `}
            </style>
        </div>
    );
}

export default Summoner;