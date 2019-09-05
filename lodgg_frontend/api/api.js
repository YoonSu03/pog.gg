import axios from 'axios';
const address = "http://localhost:8080";
export function getInfo(name) {
    return axios.get(address+"/userinfo", {
        params: {
            name: name
        }
    })
}
export function getleague(encryptedSummonerId) {
    return axios.get(address+"/userleague", {
        params: {
            encryptedSummonerId: encryptedSummonerId
        }
    })
}