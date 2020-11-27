import React from "react";

const SearchResultsView=({h, searchResults})=>
    <div class="resultsContainer">{ 
    searchResults.map(result=>
        <span key={result.id} class="searchResult" >
            <div class="result-title" >{result.title}</div> 
            This is a result
        </span>)
  } </div>

  export default SearchResultsView;