import React from "react";
import {Link} from "react-router-dom";
import "../css/artist.css"
import "../css/AlbumView.css";
import {
    FavoriteBorder
  } from "@material-ui/icons";


const LikedmusicView = ({likedSongs}) => {
    //console.log("track.artist: ", track.artists)
    likedSongs = likedSongs.flat()
    return <div className="trackContainer">
                <Link to="/"><button className ="button">Back to search</button></Link>
                <h1>Your liked songs: </h1>
                {likedSongs.map(track =>
                <div key={track.id}>
                    <FavoriteBorder style={{fill: "red"}} fontSize="large"/>
                    <h1 className="likedMusicText" >{track.name + " - " + track.artists[0].name}</h1>
                    </div>
                    )}
            </div>
        
}

export default LikedmusicView 