import {api, cache} from "../lib/api";  

export const getMovies = (q, callback) => {
    const search = q ? `?search=${q}` : "";

    if(cache[`films/${search}`]) {
        callback(cache[`films/${search}`]);
    } else {
        api.get(`films/${search}`)
        .then( ({data}) => {
            cache[`films/${search}`] = data;
            callback(data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}
