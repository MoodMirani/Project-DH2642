
import React, { Fragment } from "react";
import { useDataLayerValue } from "../DataLayer";
import FooterView from "../view/FooterView";
import LikedmusicView from "../view/likedmusicView";
import Play from "../play"


function Liked() {
    const [{ user, likedSongs, currentTrack, player, currentAlbum }, dispatch] = useDataLayerValue();

    // function set_currentTrack(result) {
    //     dispatch({
    //         type: "SET_CURRENTTRACK",
    //         currentTrack: result,
    //     });
    //     Play({ //calling playing-function after setting current object instead of using then in serachresultview
    //         playerInstance: player,
    //         spotify_uri: result.uri

    //     })
    // }

    return (
        <Fragment>
            <LikedmusicView likedSongs={likedSongs} currentTrack={currentTrack} dispatch={dispatch} user={user} currentAlbum={currentAlbum}/>
            <FooterView currentTrack={currentTrack} currentAlbum = {currentAlbum} player={player} user={user} likedSongs={likedSongs} dispatch={dispatch} />
        </Fragment>
    )
}
export default Liked; 
