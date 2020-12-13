import React, {Fragment} from "react";
import { useDataLayerValue } from "./DataLayer";
import artistView from "./artistView";
import { GeneratedIdentifierFlags } from "typescript";
import "./artist.css"
import "./searchResult.css"
import {Link} from "react-router-dom";
import "./popify.css"
import FooterView from "./FooterView";

function ArtistInfo(){
    
    const [{currentArtist, player, user, currentTrack}] = useDataLayerValue();
   
    return (
        <Fragment>
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
            <FooterView currentTrack={currentTrack} player={player} user={user}/>
        </Fragment> 
    )
}

export default ArtistInfo; 
