import React, {useState, useEffect} from 'react';
import * as api from '../../../api/api';
const Leauges = ({leagueEntriesInfo}) => {
    const [leagueinfo, setLeagueinfo] = useState('');
    useEffect(() => {
        console.log(leagueEntriesInfo)
        
    },[leagueEntriesInfo])
    return (
        <div>
            {
                
            }
        </div>
    );
}

export default Leauges;