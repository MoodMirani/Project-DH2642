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
    const [{ player, token, currentTrack, user, likedSongs, searchType, searchText}, dispatch] = useDataLayerValue();

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

       function set_currentAlbum(result) {
        dispatch({
            type: "SET_CURRENTALBUM",
            currentAlbum: result,
        })
       }

       function set_searchText(result) {
        dispatch({
            type: "SET_SEARCHTEXT",
            searchText: result,
        })
        console.log("searchText",searchText)
       }

       function set_searchType(result) {
        dispatch({
            type: "SET_SEARCHTYPE",
            searchType: result,
        })
        console.log("seacrhTYPE", searchType)
       }

    //console.log("data", data, error)

    React.useEffect(() => setPromise(MusicSource.search({type: searchType, text: searchText, token})), [token]);

    return (
        <Fragment>
            <PopifySearchView set_searchText={set_searchText} set_searchType={set_searchType} searchText={searchText} searchType={searchType}
            onSearch={(searchType, searchText) => {
                set_searchText(searchText)
                set_searchType(searchType)
                console.log(searchText)
                console.log(searchType)
                setPromise(MusicSource.search({type: searchType, text: searchText, token}))}}/>
            { promiseNoData(promise, data, error) || 
            
            <Fragment> 
                 
                <SearchResultsView searchResult={data} set_currentTrack={set_currentTrack} 
                set_currentArtist={set_currentArtist} set_currentAlbum={set_currentAlbum}/>
               
               
            </Fragment>  }
            <FooterView currentTrack={currentTrack} player={player} user={user} likedSongs={likedSongs} dispatch={dispatch}/> 
        </Fragment> 
    )
}

export default PopifySearch; 
