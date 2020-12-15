import React from "react";
import {Link} from "react-router-dom";
import "../css/artist.css"
import "../css/AlbumView.css";


const LikedmusicView = ({likedSongs}) => {
    return(


    <div className="trackContainer">
        
         <div><Link to="/"> <button className ="button">Back to search</button></Link>
            <h1 className="loadedTrack" >{likedSongs}</h1>
        </div>
    </div>
    )

}

export default LikedmusicView 