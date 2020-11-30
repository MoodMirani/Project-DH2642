
import React from "react";

const SearchResultsView=({searchResult})=>
    <div className="resultsContainer">{
        searchResult.map(result=>
            <span key={result.id} className="searchResult" >
                <div className="result-title" >
                    {result.name}  
                    
                </div> 
                {/* <img src ={result.images[0].url} alt=""/>  */}
                {/* {result.genres[1]}   */}
                
            </span>)
    }</div>
export default SearchResultsView;
