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
                })
                .catch(error => console.log(error))
            })
        }
        const fetchLeagueExp = async () => {
            let result;
            result = await api.getleagueExp("BRONZE")
            console.log(result.data)
        }
        fetchUserinfo();
        fetchLeagueExp();
    },[name])
    return (
        <div>   
            <LolLayout/>
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
                `}
            </style>
        </div>
    );
}

export default Summoner;