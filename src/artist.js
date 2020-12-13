import React, {Fragment} from "react";
import { useDataLayerValue } from "./DataLayer";
import artistView from "./artistView";
import { GeneratedIdentifierFlags } from "typescript";
import "./artist.css"
import "./searchResult.css"
import {Link} from "react-router-dom";
import "./popify.css"
import FooterView from "./FooterView";
import ArtistView from "./artistView";

function ArtistInfo(){
    
    const [{currentArtist, player, user, currentTrack}] = useDataLayerValue();
   
    return (
        <Fragment>
        <ArtistView currentArtist={currentArtist}/>
        <FooterView currentTrack={currentTrack} player={player} user={user}/>
    
        </Fragment> 
    )
}

export default ArtistInfo; 
