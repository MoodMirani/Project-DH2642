import React, {Fragment} from "react";
import { useDataLayerValue } from "./DataLayer";
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
<<<<<<< HEAD
            <ArtistView currentArtist={currentArtist}/>
            <FooterView currentTrack={currentTrack} player={player} user={user}/>  
=======
        <ArtistView currentArtist={currentArtist}/>
        <FooterView currentTrack={currentTrack} player={player} user={user}/>
>>>>>>> 56757ef047f203c25bbc5123cd8aedb1437bd0b1
        </Fragment> 
    )
}

export default ArtistInfo; 
