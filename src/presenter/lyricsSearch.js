import React, {Fragment} from "react";
import TrackDetailsView from "../view/trackDetailsView";
import LyricsSource from "../lyricsSource";
import { useDataLayerValue } from "../DataLayer";
import promiseNoData from '../promiseNoData'
import usePromise from '../usePromise'
import ShowLyrics from "../view/lyricsButton"

function LyricsSearch(){
    const [{currentTrack}] = useDataLayerValue();
    console.log("currentTrack: ", currentTrack);
    const [promise, setPromise] = React.useState();

    
    React.useEffect(async() => {
                if (currentTrack){
                    const id = await LyricsSource.getId(currentTrack.artists[0].name, currentTrack.name)
                    setPromise(LyricsSource.getLyrics(id))

                }},[currentTrack]) 
            

    //const data = "testdata";
    const [data, error] = usePromise(promise);
  
  

    return (
        <Fragment>
           {data && <TrackDetailsView spotifyObject={currentTrack} lyricsData={data.lyrics_body} />}
        </Fragment>
    )
}

export default LyricsSearch; 

