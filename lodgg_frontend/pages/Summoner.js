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
    const router = useRouter();
    const { name } = router.query

    const getInfo = () => {
        return (
            api.getInfo(name)
            .then(response => {
                setUserinfo(response.data)
                return getleagueFirst(response.data);
            })
            .catch(error => console.log(error))
        )
    }
    const getleagueFirst = (response) => {
        return (
            api.getleagueFirst(response.id)
            .then(response => setLeagueEntriesfirst(response.data))
            .catch(error => console.log(error))
        )
    }
    useEffect(() => {
        getInfo()
    },[name])
    console.log(userinfo, leagueEntriesInfo)
    return (
        <div>   
            <LolLayout/>
            <Header userinfo={userinfo}/>
            <Tier leagueEntriesInfo={leagueEntriesInfo}/>
            <Leagues userinfo={userinfo}/>
        </div>
    );
}

export default Summoner;