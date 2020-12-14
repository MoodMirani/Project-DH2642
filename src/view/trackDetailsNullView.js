import React from "react";
import "../TrackDetailsView.css"
import {Link} from "react-router-dom"

const TrackDetailsNullView =({})=>
   <div className="flexboxWrapper" >
       <div className="nullButton">
      <Link to="/">
                  <button className ="button">You need to select a track to view lyrics</button>
        </Link>
        </div>
   </div>
   

export default TrackDetailsNullView; 

