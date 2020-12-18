import React from "react";
import {Link} from "react-router-dom";
import "../css/artist.css"


const ArtistView = ({currentArtist}) => {
    return(

    <div className="style">
        <Link to="/">
        <button className ="button">Back to search</button>
        </Link>
        <div className="artistName">{currentArtist.name} </div>
        <img className="artistPic" src = {currentArtist.images[0].url} alt="" />
        <div className="artistInfo">Followers: {currentArtist.followers.total} </div>
        <div className="artistInfo">Genre: {currentArtist.genres[0]} </div>
        <div className="artistInfo">Popularity: {currentArtist.popularity} </div>
    </div>
    )

    
}

export default ArtistView 