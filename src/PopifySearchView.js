import React from "react";
import "./popify.css"
import { useDataLayerValue } from "./DataLayer";
import Hello from "./testHOME"


function PopifySearchView({onSearch}){
    const [text, setText]= React.useState("");
    const [type, setType]= React.useState("");


    // const [{ user }, dispatch] = useDataLayerValue();
    // var username = user.id
    // var hello = "Hello " + username + ", what do you want to listen to?"
   
    return(
        <React.Fragment>
        <img className="logo"
        src="https://i.ibb.co/CnH7TMS/popify-Clean-1.png" 
        alt="Popify logo"
        height="100px"
      />

            <input className="searchbar" placeholder="Hello NAME, what do you want to listen to?"  onChange={(e) => setText(e.target.value)}/>
                <select className="options" onChange={(e) => setType(e.target.value)}>
                    {["album", "artist", "track"].map(k=> <option key={k} value={k}>{k}</option>) }
                </select>    
            <button className= "btnSearch" onClick ={(e) => onSearch(type, text)}>Search!</button>

        </React.Fragment>
    )
}

export default PopifySearchView 