import React from "react";
import "./popify.css";



function PopifySearchView({onSearch}){

    const [text, setText]= React.useState("");
    const [type, setType]= React.useState("");

    const message = `What do you want to listen to?`;
   
    return(
        <React.Fragment>
        <img className="logo"
        src="https://i.ibb.co/283SGvS/popi-Trans.png" 
        alt="Popify logo"
        height="100px"
      />

            <input className="searchbar" placeholder= {message}  onChange={(e) => setText(e.target.value)}/>
                <select className="options" onChange={(e) => setType(e.target.value)}>
                    {["album", "artist", "track"].map(k=> <option key={k} value={k}>{k}</option>) }
                </select>    
            <button className= "btnSearch" onClick ={(e) => onSearch(type, text)}>Search!</button>

        </React.Fragment>
    )
}

export default PopifySearchView 