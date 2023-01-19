import { api, cache } from "../lib/api";  

export const getCharacters = (q, callback) => {
    const search = q ? `?search=${q}` : "";

    if(cache[`people/${search}`]) {
        callback(cache[`people/${search}`]);
    } else {
        api.get(`people/${search}`)
            .then( ({data}) => {
                cache[`people/${search}`] = data
                callback(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const getCharacter = (idCharacter, callback) => {
    if(cache[`people/${idCharacter}`]) {
        callback(cache[`people/${idCharacter}`]);
    } else {
        api.get(`people/${idCharacter}`)
            .then( ({data}) => {
                cache[`people/${idCharacter}`] = data;
                callback(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
}