import React from "react";


const SearchResultsView=({searchResult, set_currentTrack})=>
    <div className="searchResult">{
        
        searchResult.map(result=>
            <span key={result.id}  >
                
                <div className="result-title" >
                    <span onClick = { () => {set_currentTrack(result)}}> {result.name} </span>
                    
                    {result.type==="track" ? <div><img src = {result.album.images[0]&&
                            result.album.images[0].url } alt="" height = "50px"/> </div>:
     
                            <div><img src = {result.images[0]&&
                                result.images[0].url } alt="" height = "50px"/> </div>
                            }
                    
                </div> 
            </span>)
    }</div>
export default SearchResultsView; 
