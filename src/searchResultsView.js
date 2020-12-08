import React from "react";
import Playback from "./playback"
import "./searchResult.css"

const SearchResultsView=({searchResult, set_currentTrack})=>{

    return <div>{
        searchResult.map(result=>
            <span key={result.id} className="searchResult" >    
        
        <div className="searchName"><b>{result.name}</b></div>

            {result.type==="track" ?
             
            <img className="searchPic" onClick = { () => { (set_currentTrack(result)).then( () => Playback()) } } 
            src = {result.album.images[0] && result.album.images[0].url } alt="" />:
    
                            <img className="searchPic" src = {result.images[0]&&
                                result.images[0].url } alt="" />
                    }

                </span>)
        } </div>
    }
export default SearchResultsView;