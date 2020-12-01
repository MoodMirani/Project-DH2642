import { BASE_URL, requestHeader } from "./spotify"

const MusicSource = {
    search({type, text, token}) { 
        if(type==null){type=""} 
        if(text==null){text=""}

        let index = type + "s"
        return fetch(BASE_URL+ "/search?q="+text+"&type="+type, requestHeader(token))
            .then(data => data.json())
            .then(data => data[index].items);
    }
};


export default MusicSource; 
