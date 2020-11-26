
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
   searchArtists({type, text, token}) { 
       if(type==null){type=""} 
       if(text==null){text=""}
            //return (fetch("https://api.spotify.com/v1"+ "/search?q="+text+"&type="+type, 
            //{”method” : ”GET”,”headers”: 
            //{	”Authorization”: token	} }
        console.log(type, text, token)
             return fetch("https://api.spotify.com/v1"+ "/search?q="+text+"&type="+type, {
                "method": "GET",
                "headers": {
                'Authorization': 'Bearer ' + token
             }
        })   
                .then(data=>data.results);         
        },

 };

 export default MusicSource;
