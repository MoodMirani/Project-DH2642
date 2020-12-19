
import React, {Fragment} from "react";
import { useDataLayerValue } from "../DataLayer";
import FooterView from "../view/FooterView";
import LikedmusicView from "../view/likedmusicView";

function Liked(){
    const [{user, likedSongs, currentTrack, player}, dispatch] = useDataLayerValue();

    return (
        <Fragment>
            <LikedmusicView likedSongs={likedSongs}/>
            <FooterView currentTrack={currentTrack} player={player} user={user} likedSongs={likedSongs} dispatch={dispatch}/>
        </Fragment>
    )
}
export default Liked; 
