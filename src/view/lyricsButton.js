import React from "react";

//Here we create the buttons to search on songs

function ShowLyrics({onClick}){
    return(
        <React.Fragment>
            <button className= "btnSearch" onClick ={() => onClick()}>Show Lyrics</button>
        </React.Fragment>
    )
}

export default ShowLyrics; 