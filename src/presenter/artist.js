import React, {Fragment} from "react";
import { useDataLayerValue } from "../DataLayer";
import FooterView from "../view/FooterView";
import ArtistView from "../view/artistView";

function ArtistInfo(){
    
    const [{currentArtist, player, user, currentTrack, likedSongs}, dispatch] = useDataLayerValue();
   
    return (
        <Fragment>
        <ArtistView currentArtist={currentArtist}/>
        <FooterView currentTrack={currentTrack} player={player} user={user} likedSongs={likedSongs} dispatch={dispatch}/>
        </Fragment> 
    )
}

export default ArtistInfo; 
