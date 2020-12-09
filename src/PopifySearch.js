import React, {Fragment} from "react";
import PopifySearchView from "./PopifySearchView";
import MusicSource from "./musicSource.js"
import { useDataLayerValue } from "./DataLayer";
import promiseNoData from './promiseNoData'
import SearchResultsView from './searchResultsView'
import usePromise from './usePromise'
import Play from "./play"

function PopifySearch(){
    
    const [{player, currentTrack},dispatch] = useDataLayerValue();
    
    function set_currentTrack(result) {
        dispatch({
            type: "SET_CURRENTTRACK",
            currentTrack: result,
        });
        console.log(result)
    Play({
        playerInstance: player,
        spotify_uri: currentTrack.uri,
      }) //calling playing-function after setting current object instead of using then in serachresultview
    }

    //const [{currentTrack}] = useDataLayerValue();
    const [{token}] = useDataLayerValue();
    
    const [promise, setPromise] = React.useState(null);
    const [data, error] = usePromise(promise);
    React.useEffect(() => setPromise(MusicSource.SearchArtists({type: "artist", text: "A", token})), [token]);

    return (
        <Fragment>
            <PopifySearchView onSearch={(type, text) => setPromise(MusicSource.SearchArtists({type, text, token}))}
 />
            {promiseNoData(promise, data, error) || <SearchResultsView searchResult={data} set_currentTrack={set_currentTrack}/>}
        </Fragment>
    )
}

export default PopifySearch; 
