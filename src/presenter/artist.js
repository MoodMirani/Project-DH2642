import React, {Fragment} from "react";
import { useDataLayerValue } from "../DataLayer";
import FooterView from "../view/FooterView";
import ArtistView from "../view/artistView";

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
