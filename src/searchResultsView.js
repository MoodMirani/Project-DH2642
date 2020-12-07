import React from "react";

const SearchResultsView=({searchResult, set_currentTrack})=>
    <div className="resultsContainer">{
        
        searchResult.map(result=>
            <span key={result.id} className="searchResult" >
                
                <div className="result-title" >
                    <span> <b>{result.name}</b> </span>
                    
                    {result.type==="track" ? <div><img onClick = { () => {set_currentTrack(result)}} 
                    src = {result.album.images[0] && result.album.images[0].url } alt="" height = "200px"/> </div> :
     
                            <div><img src = {result.images[0] && result.images[0].url } alt="" height = "200px"/> </div> //visa en annan bild när bild ej existerar
                            }
                    
                </div> 
            </span>)
    }</div>
export default SearchResultsView; 
