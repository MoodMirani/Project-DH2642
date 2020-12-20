import React from "react";
import "../css/popify.css";



function PopifySearchView({onSearch, searchText, set_searchText ,searchType, set_searchType}){
    const message = `What do you want to listen to?`;
    return(
        <React.Fragment>
        <img className="logo"
        src="https://i.ibb.co/283SGvS/popi-Trans.png" 
        alt="Popify logo"
        height="100px"/>
            <input className="searchbar" id="searchbar_id" placeholder= {message}  onChange={(e) => set_searchText(e.target.value)}/>

                <div className="categoryButtons">
                    <button className= "categories" onClick ={() => set_searchType("track")}>Tracks</button>
                    <button className= "categories" onClick ={() => set_searchType("album")}>Albums</button>
                    <button className= "categories" onClick ={() => set_searchType("artist")}>Artists</button>
                    <button className= "btnSearch" id="searchbtn_id" onClick ={() => onSearch(searchType, searchText)}>Search!</button>
                </div>
                
                {/*
                <select className="options" onChange={(e) => set_searchType(e.target.value)} >
                    {["track","album", "artist"].map(k=> <option key={k} value={k}>{k}</option>) }
                </select>  */}
            <script>
            {document.getElementById("searchbar_id") !== null ? document.getElementById("searchbar_id")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
            document.getElementById("searchbtn_id").click();
            }
                }) : ""}
            </script>
        
        </React.Fragment>
        
    )
}

export default PopifySearchView 