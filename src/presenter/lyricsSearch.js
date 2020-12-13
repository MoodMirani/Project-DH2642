import React, {Fragment} from "react";
import TrackDetailsView from "../view/trackDetailsView";
import TrackDetailsNoLyricsView from "../view/trackDetailsNoLyricsView";
import LyricsSource from "../lyricsSource";
import { useDataLayerValue } from "../DataLayer";
import promiseNoData from '../promiseNoData'
import usePromise from '../usePromise'
import ShowLyrics from "../view/lyricsButton"
import FooterView from "../FooterView"

function LyricsSearch(){
    const [{currentTrack, player, user}] = useDataLayerValue();
    console.log("currentTrack: ", currentTrack);
    const [promise, setPromise] = React.useState();

    
    React.useEffect(async() => {
                if (currentTrack){
                    const id = await LyricsSource.getId(currentTrack.artists[0].name, currentTrack.name)
                    setPromise(LyricsSource.getLyrics(id))

                }},[currentTrack]) 
            

    //const data = "testdata";
    const [data, error] = usePromise(promise);
    console.log("data", data)
  
  

    return (
        <Fragment>
            {(currentTrack && data && <TrackDetailsView spotifyObject={currentTrack} lyricsData={data}/>)}

            <FooterView currentTrack={currentTrack} player={player} user={user}/>
        </Fragment>
    )
}

export default LyricsSearch; 


/*

To FIX: some kind of alternte rendering pending on if data = defined eller undefined
Update heroku path for cors handeling (need to mearch branches with main to do that)

( (data === "undefined") && currentTrack && <TrackDetailsNoLyricsView spotifyObject={currentTrack} /> )
            
            
            ||*/

