import axios from 'axios';
const address = "http://localhost:8080";
export function getInfo(name) {
    return axios.get(address+"/userinfo", {
        params: {
            name: name
        }
    })
}
export function getleagueFirst(encryptedSummonerId) {
    return axios.get(address+"/userleaguesFirst", {
        params: {
            encryptedSummonerId: encryptedSummonerId
        }
    })
}
export function getleagueSecond(leagueId) {
    return axios.get(address+"/userleaguesSecond", {
        params: {
            leagueId: leagueId
        }
    })
}