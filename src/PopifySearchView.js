import React from "react";

//Here we create the buttons to search on songs

function PopifySearchView({onSearch}){
    const [text, setText]= React.useState("");
    const [type, setType]= React.useState("");

    return(
        <React.Fragment>
            <input className="searchbar" type="text" placeholder="search" onChange={(e) => setText(e.target.value)}/>
                <select className="categories" onChange={(e) => setType(e.target.value)}>
                    {["album", "artist", "track"].map(k=> <option key={k} value={k}>{k}</option>) }
                </select>    
            <button className= "btnSearch" onClick ={(e) => onSearch(type, text)}>Search!</button>
        </React.Fragment>
    )
}

export default PopifySearchView