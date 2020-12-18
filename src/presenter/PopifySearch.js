import React, {Fragment, useEffect} from "react";
import PopifySearchView from "../view/PopifySearchView";
import MusicSource from "../musicSource.js"
import { useDataLayerValue } from "../DataLayer";
import promiseNoData from '../promiseNoData'
import SearchResultsView from '../view/searchResultsView'
import usePromise from '../usePromise'
import Play from "../play"
import FooterView from "../view/FooterView"
import { getLikes } from "../model/firebase-manager"

function PopifySearch(){
    const [{ player, token, currentTrack, user, likedSongs }, dispatch] = useDataLayerValue();

    const [promise, setPromise] = React.useState(null);
    const [data, error] = usePromise(promise);

    useEffect(()=>{
        if(user){
        getLikes(user, dispatch)
        }}, [user, dispatch])
    
    function set_currentTrack(result) {
        dispatch({
            type: "SET_CURRENTTRACK",
            currentTrack: result,
        });
        Play({ //calling playing-function after setting current object instead of using then in serachresultview
            playerInstance: player,
            spotify_uri: result.uri

        })
        
    }


    function set_currentArtist(result) {
        dispatch({
            type: "SET_CURRENTARTIST",
            currentArtist: result,
        })
       }
    
       function set_currentAlbum(result) {
        dispatch({
            type: "SET_CURRENTALBUM",
            currentAlbum: result,
        })
       }


    React.useEffect(() => setPromise(MusicSource.search({type: "track", text: "santa", token})), [token]);

    return (
        <Fragment>
            <PopifySearchView onSearch={(type, text) => setPromise(MusicSource.search({type, text, token}))}/>
            { promiseNoData(promise, data, error) || 
            <Fragment> 
                <SearchResultsView searchResult={data} set_currentTrack={set_currentTrack} 
                set_currentArtist={set_currentArtist} set_currentAlbum={set_currentAlbum}/>
                <FooterView currentTrack={currentTrack} player={player} user={user} likedSongs={likedSongs} dispatch={dispatch}/> 
               
            </Fragment>  }
        </Fragment> 
    )
}

export default PopifySearch; 
