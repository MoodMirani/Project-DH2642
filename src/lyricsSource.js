const key = "df5661c198e8ac1b5dba0f079f8458ff"

const LyricsSource = {
    getId(artist, song){
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
        return fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${key}`, {
            "method": "GET",           
        })
    .then(res => res.json())
    .then(res => (res.message.body.lyrics))
    
    
   
    },
    matchLyrics(artist, song){
        return fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.track.get?q_artist=${encodeURI(artist)}&q_track=${encodeURI(song)}&apikey=${key}`, 
        {
            "method": "GET",
        })
        .then(response => response.json())
        .then(res => res.message.body)
       
        
    },
   
}

export default LyricsSource;

