const LyricsSource = {
    findLyrics(){
        return fetch("https://mourits-lyrics.p.rapidapi.com/?artist=Bon%20Jovi&song=Livin'%20on%20a%20prayer", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1529a51a04msh6bbef445e3fecf0p172eccjsn24c338c6c7aa",
                "x-rapidapi-host": "mourits-lyrics.p.rapidapi.com"
            }
        })
        .then(response => { 
            console.log("här", response);
        })
        .catch(err => {
            console.error(err);
        });
    }
}

export default LyricsSource;

/*
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