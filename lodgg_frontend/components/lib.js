import champData from '../static-data/champ-static-data';
import spellData from '../static-data/spell-static-data';

const GetGameData = {
    getChampData : (champion) => {
        for (let i in champData.data) {
            if(champData.data[i].id === champion) return (`http://opgg-static.akamaized.net/images/lol/champion/${champData.data[i].key}.png?image=w_55&v=1`)
        }
    },
    getGameTime : (timestamp) => {
        const date = new Date(timestamp),
              year = date.getFullYear(),
              month = date.getMonth()+1,
              day = date.getDate(),
              hour = date.getHours(),
              min = date.getMinutes(),
              sec = date.getSeconds(),
              retVal =   year + "-" + (month < 10 ? "0" + month : month) + "-" 
                        + (day < 10 ? "0" + day : day) + " " 
                        + (hour < 10 ? "0" + hour : hour) + ":"
                        + (min < 10 ? "0" + min : min) + ":" 
                        + (sec < 10 ? "0" + sec : sec);
        return retVal
    },
    getLaneIconData : (lane) => lineIconData.filter((item) => item.lane === lane),
    
    getPlayerItemData : (itemCode) => itemData.data[itemCode],
    getItemUrl : (itemCode) => {
        if(itemCode !== 0) { return (`http://opgg-static.akamaized.net/images/lol/item/${itemCode}.png?image=w_22&v=15276924000`)}
        else { return(`https://lolprofile.net/web/img/item-1.png`)}
    },
    getSpellUrl : (spellCode) => {
        for (let i in spellData.data) {
            if(spellData.data[i].id === spellCode) return (`https://ddragon.leagueoflegends.com/cdn/9.18.1/img/spell/${"Summoner"+spellData.data[i].key}.png`)
        }
    }
}
export { GetGameData };