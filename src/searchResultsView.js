import React from "react";
import LyricsSource from "./lyricsSource";

const SearchResultsView=({searchResult, set_currentTrack})=>
    <div className="resultsContainer">{
        
        searchResult.map(result=>
            <span key={result.id} className="searchResult" >
                
                <div className="result-title" >
                    <span> {result.name} </span>
                    
                    {result.type==="track" ? <div><img src = {result.album.images[0]&&
                            result.album.images[0].url } alt="" height = "50px" 
                            onClick = { () => {set_currentTrack(result); console.log(result.artists[0].name, result.name); LyricsSource.findLyrics(result.artists[0].name, result.name)}}/> </div>:
     
                            <div><img src = {result.images[0]&&
                                result.images[0].url } alt="" height = "50px"/> </div>
                            }
                    
                </div> 
            </span>)
    }</div>
export default SearchResultsView; 
