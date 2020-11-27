import React from "react";

const SearchResultsView=({searchResult})=>
    
    <div class="resultsContainer">{ 
    searchResult.map(result=>
        <span class="searchResult" >
            <div class="result-title" >
                {result.name}
            </div> 
        </span>)
  } </div>

  export default SearchResultsView;