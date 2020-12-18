import React from "react";
import {Link} from "react-router-dom";
import "../css/artist.css"
import "../css/AlbumView.css";


const LikedmusicView = ({currentArtist, likedSongs}) => {
    console.log("liked songs: ", likedSongs)
    //console.log("track.artist: ", track.artists)
    likedSongs = likedSongs.flat()
    const tracks = likedSongs.map(track => track.artists[0].name + " " + track.name)
    console.log(tracks)
    return(
    <div className="trackContainer">
        
         <div><Link to="/"> <button className ="button">Back to search</button></Link>
            <div>
                <h1 className="loadedTrack" >{tracks}</h1>
            </div>
        </div>
    </div>
    )

}

export default LikedmusicView 