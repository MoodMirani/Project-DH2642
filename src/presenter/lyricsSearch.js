import React, {Fragment} from "react";
import TrackDetailsView from "../view/trackDetailsView";
import TrackDetailsNoLyricsView from "../view/trackDetailsNoLyricsView";
import LyricsSource from "../lyricsSource";
import { useDataLayerValue } from "../DataLayer";
import usePromise from '../usePromise'
import FooterView from "../FooterView"
import TrackDetailsNullView from "../view/trackDetailsNullView";




function LyricsSearch(){
    const [{currentTrack, player, user}, ] = useDataLayerValue();
    //console.log(currentTrack.artists[0].name, currentTrack.name)


    const [promise, setPromise] = React.useState();

    
    React.useEffect(async() => {
                if (currentTrack){
                    const id = await LyricsSource.getId(currentTrack.artists[0].name, currentTrack.name)
                    setPromise(LyricsSource.getLyrics(id))

                }},[currentTrack]) 


    const [data, error] = usePromise(promise);
    //console.log("result from lyricsSearch", data, error)
      

    return (
        <Fragment>
            {currentTrack && data && <TrackDetailsView spotifyObject={currentTrack} lyricsData={data}/>}
            {(data === undefined) && currentTrack && <TrackDetailsNoLyricsView spotifyObject={currentTrack} /> }
            {(data === null) && (currentTrack == null) && <TrackDetailsNullView spotifyObject={currentTrack} /> }
            <FooterView currentTrack={currentTrack} player={player} user={user}/>
        </Fragment>
    )
}

export default LyricsSearch; 


/*

To FIX: some kind of alternte rendering pending on if data = defined eller undefined
Update heroku path for cors handeling (need to mearch branches with main to do that)

{currentTrack && (data === "undefined") && <TrackDetailsNoLyricsView spotifyObject={currentTrack}/>}

( (data === "undefined") && currentTrack && <TrackDetailsNoLyricsView spotifyObject={currentTrack} /> )
            
            
            ||*/

