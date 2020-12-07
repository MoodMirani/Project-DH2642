// import cheerio from 'cheerio'
const LyricsSource = {
    findLyrics(artist, song){
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
        */
 
        console.log("lyrics", artist, song)
        return fetch("https://genius.p.rapidapi.com/search?q="+artist+" "+song, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1529a51a04msh6bbef445e3fecf0p172eccjsn24c338c6c7aa",
                "x-rapidapi-host": "genius.p.rapidapi.com"
            }
        })
        .then(response => 
            response.json() 
        ).then(response => response.response.hits.find(element=>
            element.result.full_title.includes(artist) === true))
        .then(result => console.log(result.result.url))
     
        .catch(err => 
            console.error(err)
        );
    }
}

  
export default LyricsSource;
  // parse.js

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

*/