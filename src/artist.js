import React, {Fragment} from "react";
import { useDataLayerValue } from "./DataLayer";
import artistView from "./artistView";
import "./artist.css"
import "./searchResult.css"
import {Link} from "react-router-dom";
import "./popify.css"

function ArtistInfo(){
    
    const [{currentArtist}] = useDataLayerValue();
   
    return (
        <Fragment>
           {/* <artistView artistInfo={currentArtist}/> */}
        
           <div className="style">
           <Link to="/">
            <button className ="button">Back to search</button>
           </Link>
            <div className="artistName">{currentArtist.name} </div>
            <img className="artistPic" src = {currentArtist.images[0].url} />
            <div className="artistInfo">Followers: {currentArtist.followers.total} </div>
            <div className="artistInfo">Genre: {currentArtist.genres[0]} </div>
            <div className="artistInfo">Popularity: {currentArtist.popularity} </div>
           </div>
    
        </Fragment> 
    )
}

export default ArtistInfo; 
