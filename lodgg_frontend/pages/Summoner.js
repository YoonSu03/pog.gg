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
                    setMatchesdata(matchesData => matchesData.concat(response.data));
                    console.log(matchesData)
                })
                .catch(error => console.log(error))
            })
        }
        fetchUserinfo();
    },[name])
    return (
        <div>   
            <LolLayout/>
            <Header userinfo={userinfo}/>
            <Tier leagueEntriesInfo={leagueEntriesInfo}/>
            <Leagues matchList={matchlist} matchesData={matchesData}/>
        </div>
    );
}

export default Summoner;