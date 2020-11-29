import { BASE_URL, requestHeader } from "./spotify"

const MusicSource = {
    apiCall(params) {
        // from headers to response data
        return fetch(BASE_URL+params, {"method": "GET"})
            .then(response => response.json())   ;
    }, 
    SearchArtists({type, text, token}) { 
        if(type==null){type=""} 
        if(text==null){text=""}
        return fetch(BASE_URL+ "/search?q="+text+"&type="+type, requestHeader(token))
            .then(data => data.json())
            .then(data => data.artists.items);
    }
};

export default MusicSource; 