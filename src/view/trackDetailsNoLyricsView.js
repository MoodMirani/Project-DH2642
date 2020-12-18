import React from "react";
import "../css/TrackDetailsView.css"
import {Link} from "react-router-dom"

const TrackDetailsNoLyricsView =({spotifyObject})=>
   <div className="flexboxWrapper">
      <div className="row">

         <div className="column">
            <div className="trackContainer"> 
               <img className="trackPic" src = { spotifyObject.album.images[0] && spotifyObject.album.images[0].url } alt="" />
            </div>
         </div>

         <div className="column">
            <div className="lyricsContainer">
               <p className="headingTitle">
                  <span className="artistTitle">{spotifyObject.artists[0].name}</span>
                  <span className="trackTitle">{spotifyObject.name}</span>
               </p>
               <Link to="/">
                  <button className ="button">Back to search</button>
               </Link>
               <p className="lyricsStyle" style={{whiteSpace: 'pre-line'}}>There is no lyrics avaible for this track</p>
            </div>
         </div>

      </div>
   </div>
   

export default TrackDetailsNoLyricsView; 

