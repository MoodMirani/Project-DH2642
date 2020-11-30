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

        let index = type + "s"
        return fetch(BASE_URL+ "/search?q="+text+"&type="+type, requestHeader(token))
            .then(data => data.json())
            .then(data => data[index].items);
    }
};

export default MusicSource; 
