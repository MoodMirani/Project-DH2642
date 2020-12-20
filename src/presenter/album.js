import React, {Fragment} from "react";
import { useDataLayerValue } from "../DataLayer.js";
import FooterView from "../view/FooterView";
import AlbumView from "../view/albumView";
import usePromise from '../usePromise';
import MusicSource from "../musicSource";
import Play from "../play"


function AlbumInfo(){
    
    const [{player, user, currentTrack, currentAlbum, likedSongs, token}, dispatch] = useDataLayerValue();

    const [promise, setPromise] = React.useState(null);
    React.useEffect(() => setPromise(currentAlbum && MusicSource.searchAlbum({id: currentAlbum.id, token})), [currentAlbum, token]);
    const [data] = usePromise(promise);

    function set_currentTrack(result) {
        console.log(result)

        dispatch({
            type: "SET_CURRENTTRACK",
            currentTrack: result,
        });
        Play({ //calling playing-function after setting current object instead of using then in serachresultview
            playerInstance: player,
            spotify_uri: result.uri

        })
    }
   
    return (
        <Fragment>
            {data && <AlbumView currentAlbum={currentAlbum} albumTracks={data} set_currentTrack={set_currentTrack} currentTrack={currentTrack}/>}
            <FooterView dispatch={dispatch} likedSongs={likedSongs} currentAlbum={currentAlbum} currentTrack={currentTrack} player={player} user={user}/>
        </Fragment> 
    )
}

export default AlbumInfo; 
