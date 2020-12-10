import React, {Fragment} from "react";
import LyricsView from "../view/lyricsView";
import LyricsSource from "../lyricsSource";
import { useDataLayerValue } from "../DataLayer";
import promiseNoData from '../promiseNoData'
import usePromise from '../usePromise'
import ShowLyrics from "../view/lyricsButton"

function LyricsSearch(){
    const [{currentTrack}] = useDataLayerValue();
    // console.log({currentTrack})
    const [{token}] = useDataLayerValue();
    const [promise, setPromise] = React.useState(null);
    const [data, error] = usePromise(promise);
    React.useEffect(() => setPromise(LyricsSource.findLyrics()), []);

    return (
        <Fragment>
            <ShowLyrics onClick={() => setPromise(LyricsSource.findLyrics())}/>
            {promiseNoData(promise, data, error) || <LyricsView lyrics={data}/>}
        </Fragment>
    )
}

export default LyricsSearch; 
