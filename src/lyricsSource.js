const key = "df5661c198e8ac1b5dba0f079f8458ff"

const LyricsSource = {
    getId(artist, song){
        //console.log("getId", artist, song)

        // https://popify-app-heroku-deploy.herokuapp.com/  Doesnt work yet

        return fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${encodeURI(artist)}&q_track=${encodeURI(song)}&apikey=${key}`, {
            
            "method": "GET",
        })
        .then(response => response.json())
        .then(res => (res.message.body.track_list[0]).track.track_id)
        .catch(err => 
            console.error(err)
        )
     
    },
    getLyrics(id){
        //console.log("get lyrics", id);     
        return fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${key}`, {
            "method": "GET",           
        })
    .then(res => res.json())
    .then(res => (res.message.body.lyrics))
    //.then(res => res.replaceAll(/\\n/g, "<br />"))
   
    },
   
}

export default LyricsSource;


  // parse.js
  // //*[@id="application"]/main/div[2]/div[3]/div[1]



