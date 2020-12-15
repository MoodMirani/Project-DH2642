import React, {Fragment} from "react";
import { useDataLayerValue } from "../DataLayer.js";
import FooterView from "../view/FooterView";
import AlbumView from "../view/albumView";
import usePromise from '../usePromise';
import MusicSource from "../musicSource";


function AlbumInfo(){
    
    const [{player, user, currentTrack, currentAlbum, token}] = useDataLayerValue();

    const [promise, setPromise] = React.useState(null);
    React.useEffect(() => setPromise(currentAlbum && MusicSource.searchAlbum({id: currentAlbum.id, token})), [currentAlbum, token]);
    const [data] = usePromise(promise);
  
   
    return (
        <Fragment>
            {data && <AlbumView currentAlbum={currentAlbum} albumTracks={data} />}
            <FooterView currentTrack={currentTrack} player={player} user={user}/>
        </Fragment> 
    )
}

export default AlbumInfo; 
