const key = "df5661c198e8ac1b5dba0f079f8458ff"

const LyricsSource = {
    getId(artist, song){

        return fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${encodeURI(artist)}&q_track=${encodeURI(song)}&apikey=${key}`, {
            "method": "GET",
        })
        .then(response => {
            if (response.ok) { 
                return response.json()
            } else {
                throw new Error ("Something went wrong when trying to load the lyrics")
            }})
        .then(res => (res.message.body.track_list[0]).track.track_id)
        .catch(err => 
            console.error(err)
        )
    },
    getLyrics(id){ 
        return fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${key}`, {
            "method": "GET",           
        })
        .then(response => {
            if (response.ok) { 
                return response.json()
            } else {
                throw new Error ("Something went wrong when trying to load the lyrics")
            }})
    .then(res => (res.message.body.lyrics))
    .catch(err => 
        console.error(err)
    )
   
    },
   
}

export default LyricsSource;

