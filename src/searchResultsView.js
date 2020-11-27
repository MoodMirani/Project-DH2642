import React from "react";

const SearchResultsView=({searchResult})=>
    
    <div class="resultsContainer">{ 
    searchResult.map(result=>
        <span key={result.id} class="searchResult" >
            <div class="result-title" >{result.title}</div> 
            This is a result
        </span>)
  } </div>

  export default SearchResultsView;