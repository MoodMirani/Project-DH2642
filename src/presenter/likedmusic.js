
import React, {Fragment} from "react";
import { useDataLayerValue } from "../DataLayer";
import FooterView from "../view/FooterView";
import LikedmusicView from "../view/likedmusicView";

function Liked(){
    const [{user, likedSongs, currentTrack, player, currentArtist}] = useDataLayerValue();

    return (
        <Fragment>
            <LikedmusicView currentArtist={currentArtist} likedSongs={likedSongs}/>
            <FooterView currentTrack={currentTrack} player={player} user={user}/>
        </Fragment>
    )
}
export default Liked; 
