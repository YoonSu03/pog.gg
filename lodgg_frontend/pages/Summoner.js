import React, {useState, useEffect} from 'react';
import LolLayout from '../components/LolLayout';    
import Header from '../components/Summoner/Header';
import Tier from '../components/Summoner/Tier';
import { useRouter } from 'next/router';
import * as api from '../api/api';

const Summoner = () => {
    const [userinfo, setUserinfo] = useState('');
    const router = useRouter();
    const { name } = router.query
    useEffect(() => {
        api.getInfo(name)
        .then(response => setUserinfo(response.data))
        .catch(error => console.log(error))
    },[name])
    return (
        <div>   
            <LolLayout/>
            <Header userinfo={userinfo}/>
            <Tier userinfo={userinfo}/>
        </div>
    );
}

export default Summoner;