import React, {Fragment} from "react";
import PopifySearchView from "./PopifySearchView";
import MusicSource from "./musicSource.js"
import { useDataLayerValue } from "./DataLayer";
import promiseNoData from './promiseNoData'
import SearchResultsView from './searchResultsView'
import usePromise from './usePromise'
import Play from "./play"
import Playback from "./playback"
import ArtistInfo from "./artist"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function PopifySearch(){
    
    const [{ player, token }, dispatch] = useDataLayerValue();
    
    function set_currentTrack(result) {
        
        dispatch({
            type: "SET_CURRENTTRACK",
            currentTrack: result,
        });
        Play({ //calling playing-function after setting current object instead of using then in serachresultview
            playerInstance: player,
            spotify_uri: result.uri,
        })
        
    }

    function set_currentArtist(result) {
 
       
        dispatch({
            type: "SET_CURRENTARTIST",
            currentArtist: result,
            
        })
        console.log(result);
        <Switch> 
        <Route path="/artist">
            <ArtistInfo/>
        </Route>
        </Switch>
        
       }

    const [promise, setPromise] = React.useState(null);
    const [data, error] = usePromise(promise);
    React.useEffect(() => setPromise(MusicSource.search({type: "artist", text: "A", token})), [token]);

    return (
        <Fragment>
            <PopifySearchView onSearch={(type, text) => setPromise(MusicSource.search({type, text, token}))}
 />
            {promiseNoData(promise, data, error) || <SearchResultsView searchResult={data} set_currentTrack={set_currentTrack} 
            set_currentArtist={set_currentArtist} />}
            
        </Fragment> 
    )
}

export default PopifySearch; 
