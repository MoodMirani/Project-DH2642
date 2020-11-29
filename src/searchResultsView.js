import React from "react";

const SearchResultsView=({searchResult})=>
    <div className="resultsContainer">{
        searchResult.map(result=>
            <span key={result.id} className="searchResult" >
                <div className="result-title" >
                    {result.name}
                </div> 
            </span>)
    }</div>
export default SearchResultsView; 