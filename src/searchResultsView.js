import React from "react";
import Playback from "./playback"

const SearchResultsView=({searchResult, set_currentTrack})=>{

    return <div>{
        searchResult.map(result=>
            <span key={result.id} className="searchResult" >            
                    {result.type==="track" ? <img onClick = { () => { set_currentTrack(result) && Playback() }  } 
                
                src = {result.album.images[0]&&
                            result.album.images[0].url } alt="" height = "200px"/>:
    
                            <img src = {result.images[0]&&
                                result.images[0].url } alt="" height = "200px"/> //visa en annan bild när bild ej existerar
                    }


                <div> {result.name}</div>
    
                </span>)
        } </div>
    }
export default SearchResultsView;