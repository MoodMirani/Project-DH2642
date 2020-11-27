import React from "react";
import { useDataLayerValue } from "./DataLayer";
//Javascript

// js/dishSource.js  
const  MusicSource={

    apiCall(params) {
     return fetch("https://api.spotify.com/v1"+params, {
             "method": "GET",
     })

 // from headers to response data
        .then(response => response.json())   ;
 }
 , 
   SearchArtists({type, text, token, dispatch}) { 
        // const [{ user, token }, dispatch] = useDataLayerValue();
       if(type==null){type=""} 
       if(text==null){text=""}
            //return (fetch("https://api.spotify.com/v1"+ "/search?q="+text+"&type="+type, 
            //{”method” : ”GET”,”headers”: 
            //{	”Authorization”: token	} }
        console.log(type, text, token) // fetch returnerar en promise
             return fetch("https://api.spotify.com/v1"+ "/search?q="+text+"&type="+type, {
                "method": "GET",
                "headers": {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
             }
        })   
                .then(data=>data.json()).then(
                        d => dispatch({
                                type: "SET_SEARCHRESULT",
                                searchResult: d.artists.items,
                              })
                        );         
        }
        
 };

 export default MusicSource;

 ;