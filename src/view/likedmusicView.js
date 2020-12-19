import React from "react";
import {Link} from "react-router-dom";
import "../css/artist.css"
import "../css/AlbumView.css";


const LikedmusicView = ({likedSongs}) => {
    // console.log("liked songs: ", likedSongs)
    //console.log("track.artist: ", track.artists)
    likedSongs = likedSongs.flat()
    return <div className="trackContainer">
                <Link to="/"><button className ="button">Back to search</button></Link>
                {likedSongs.map(track =>
                <div >
                        <h1 key={track.id} className="loadedTrack" >{track.artists[0].name + " - " + track.name}</h1>
                    </div>
                    )}
            </div>
        
}

export default LikedmusicView 