import {api, cache} from "../lib/api";

export const getPlanet = (idPlanet, callback) => {
    if(cache[`planets/${idPlanet}`]) {
        callback(cache[`planets/${idPlanet}`]);
    } else {
        api.get(`planets/${idPlanet}`)
            .then( ({data}) => {
                cache[`planets/${idPlanet}`] = data;
                callback(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
}
   