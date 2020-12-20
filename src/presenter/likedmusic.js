
import React, {Fragment} from "react";
import { useDataLayerValue } from "../DataLayer";
import FooterView from "../view/FooterView";
import LikedmusicView from "../view/likedmusicView";

function Liked(){
    const [{user, likedSongs, currentTrack, player, currentAlbum}, dispatch] = useDataLayerValue();

    return (
        <Fragment>
            <LikedmusicView likedSongs={likedSongs}/>
            <FooterView dispatch={dispatch} likedSongs={likedSongs} currentAlbum={currentAlbum} currentTrack={currentTrack} player={player} user={user}/>
        </Fragment>
    )
}
export default Liked; 
