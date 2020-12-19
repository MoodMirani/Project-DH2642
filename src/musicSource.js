import { BASE_URL, requestHeader } from "./spotify"
import { searchErrorHandler } from "./searchErrorHandler";

const MusicSource = {
    
    search({type, text, token}) { 
       
          
        //if(type==null){type="track"} 
        //if(text==null){text=""} 
        // console.log("type", type, "text", text)

    
        let index = type + "s"
        return fetch(BASE_URL+ "/search?q="+text+"&type="+type, requestHeader(token))
            .then(data => data.json())
            .then(data => data[index].items);
    },
    searchAlbum({id,token}){
        return fetch(`${BASE_URL}/albums/${id}/tracks`, requestHeader(token))
            .then(data => data.json())
        

    },
    searchTrack({id,token}){
        return fetch(`${BASE_URL}/tracks/${id}`, requestHeader(token))
            .then(data => data.json())

    }
};

export default MusicSource; 


function handleHTTPError(response) {
    // test error: DishSource.searchDishes({type:"undefined", query:"pizza"}).then(console.log).catch(console.error)
    if(response.ok)
    return response;
    throw Error(response.statusText);
}

