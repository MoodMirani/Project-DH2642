
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import "./popify.css"
import "./searchResult.css"
import {getLikes} from "./model/firebase-manager"
import { useDataLayerValue } from "./DataLayer";
import fire from "./firebase-config"
import usePromise from './usePromise'
import FooterView from "./FooterView";
import LikedmusicView from "./likedmusicView";

function Liked(){
    const [{user, likedSongs, currentTrack, player, currentArtist}, dispatch] = useDataLayerValue();

    return (
        <Fragment>
            <LikedmusicView currentArtist={currentArtist} likedSongs={likedSongs}/>
            <FooterView currentTrack={currentTrack} player={player} user={user}/>
        </Fragment>
    )
}
export default Liked; 
