import React, {Fragment} from "react";
import TrackDetailsView from "../view/trackDetailsView";
import TrackDetailsNoLyricsView from "../view/trackDetailsNoLyricsView";
import LyricsSource from "../lyricsSource";
import { useDataLayerValue } from "../DataLayer";
import usePromise from '../usePromise'
import FooterView from "../view/FooterView"
import TrackDetailsNullView from "../view/trackDetailsNullView";
import promiseNoData from '../promiseNoData'
import {getLikes, GetUserLikes} from "../model/firebase-manager"
import promiseNoLyrics from "../promiseNoLyrics"




function LyricsSearch(){
    const [{currentTrack, player, user, likedSongs}, dispatch] = useDataLayerValue();
    const [promise, setPromise] = React.useState();

    React.useEffect(()=>{
        if(user){
        getLikes(user, dispatch)
        }}, [user])

    
    React.useEffect(() => {
                async function fetchLyrics(currentTrack){
                    if (currentTrack){
                        const id = await LyricsSource.getId(currentTrack.artists[0].name, currentTrack.name)
                        setPromise(LyricsSource.getLyrics(id))
    
                    }

                }
                fetchLyrics(currentTrack)
               
                },[currentTrack]) 


    const [data, error] = usePromise(promise);
    // console.log(currentTrack)
    // console.log("data from fetch lyrics: ", data, error)
   
      

    return ( 
    
        <Fragment>
            {promiseNoLyrics(promise, data, error)} 
        
            <Fragment> 
                
            {(data === null) && (currentTrack == null) && <TrackDetailsNullView spotifyObject={currentTrack} /> } 
            {(data === undefined) && currentTrack && <TrackDetailsNoLyricsView spotifyObject={currentTrack} /> } 
            {currentTrack && data && <TrackDetailsView spotifyObject={currentTrack} lyricsData={data}/>}
        
            </Fragment>
        <FooterView currentTrack={currentTrack} player={player} user={user} likedSongs={likedSongs} dispatch={dispatch}/>     
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

