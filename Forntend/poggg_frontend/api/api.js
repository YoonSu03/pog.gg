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
export function getmatchlists(encryptedSummonerId) {
    return axios.get(address+"/matchlists", {
        params: {
            encryptedSummonerId: encryptedSummonerId
        }
    })
}
export function getmatches(matchId) {
    return axios.get(address+"/matches", {
        params: {
            matchId: matchId
        }
    })
}
export function getleagueExp(tier) {
    return axios.get(address+"/leagueExp", {
        params: {
            tier: tier
        }
    })
}
export function getesportsMatches(leagueId) {
    return axios.get(address+"/esportsMatch", {
        params: {
            leagueId: leagueId
        }
    })
}