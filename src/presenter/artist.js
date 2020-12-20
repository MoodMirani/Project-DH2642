import React, {Fragment} from "react";
import { useDataLayerValue } from "../DataLayer";
import FooterView from "../view/FooterView";
import ArtistView from "../view/artistView";

function ArtistInfo(){
    
    const [{currentArtist, player, user, currentTrack, likedSongs,currentAlbum}, dispatch] = useDataLayerValue();
    console.log(currentArtist)
    return (
        <Fragment>
        <ArtistView currentArtist={currentArtist}/>
        <FooterView dispatch={dispatch} likedSongs={likedSongs} currentAlbum={currentAlbum} currentTrack={currentTrack} player={player} user={user}/>
        </Fragment> 
    )
}

export default ArtistInfo; 
