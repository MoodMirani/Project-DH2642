const key = "df5661c198e8ac1b5dba0f079f8458ff"

const LyricsSource = {
    getId(artist, song){
        //console.log("getId", artist, song)
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
    //.then(res => JSON.parse(res))
   
    },
   
}

export default LyricsSource;


  // parse.js
  // //*[@id="application"]/main/div[2]/div[3]/div[1]

  /*
  function parseSongHTML(htmlText) {
    const $ = cheerio.load(htmlText)
    const lyrics = $('.lyrics').text()
    const releaseDate = $('release-date .song_info-info').text()
    console.log("här", lyrics)
    return {
      lyrics,
      releaseDate,
    }
  }



.then(data => data.json())
.then(data => data[index].items);
const LyricsSource = {
    findLyric({artist, track}){
        /*
        if(artist===null){artist=""} 
        if(track===null){track=""}
        
        return fetch("https://mourits-lyrics.p.rapidapi.com/?artist=" + artist +"&song="+track, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1529a51a04msh6bbef445e3fecf0p172eccjsn24c338c6c7aa",
                "x-rapidapi-host": "mourits-lyrics.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });

    }
}

return fetch("https://mourits-lyrics.p.rapidapi.com/?artist=Bon%20Jovi&song=Livin'%20on%20a%20prayer", {
            
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1529a51a04msh6bbef445e3fecf0p172eccjsn24c338c6c7aa",
                "x-rapidapi-host": "mourits-lyrics.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response.json());
        })
        .catch(err => {
            console.error(err);
        });

    fetch("https://genius.p.rapidapi.com/songs/442856", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1529a51a04msh6bbef445e3fecf0p172eccjsn24c338c6c7aa",
                "x-rapidapi-host": "genius.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
   /*
        console.log("lyricssoruce", artist, song)
        artist = encodeURI(artist)
        song = encodeURI(song)
        console.log("lyricssoruce", artist, song)
        
        let artist = "Molly Sandén"
        let song = "Jag mår bra nu (feat. Newkid)"
        */
        /*
        song = song.replace(".", '')
        song = song.replace(" (", '')
        song = song.replace(")", '')
        song = song.replace("feat", '')
        
 
        console.log("lyrics", artist, song)
        return fetch("api.musixmatch.com/ws/1.1/df5661c198e8ac1b5dba0f079f8458ff/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc", {
            "method": "GET",
            "headers": {
                
                
            }
        })
        .then(response => 
            console.log(response.json()) 
        )
        .catch(err => 
            console.error(err)
        );
        axios
      .get(
        `http://api.musixmatch.com/ws/1.1/matcher.track.get?q_artist=eminem&q_track=lose%20yourself%20(soundtrack)&apikey=${
            "df5661c198e8ac1b5dba0f079f8458ff"
        }`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
    */

