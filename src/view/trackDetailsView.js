import React from "react";
import "../TrackDetailsView.css"
import {Link} from "react-router-dom";

const TrackDetailsView =({spotifyObject, lyricsData})=>
   <div className="flexboxWrapper">
      <div className="row">

         <div className="column">
            <div className="trackContainer"> 
               {console.log("current;", spotifyObject.album.images[0])}
               <img className="trackPic" src = { spotifyObject.album.images[0] && spotifyObject.album.images[0].url } alt="" />
            </div>
         </div>

         <div className="column">
            <div className="lyricsContainer">
               <p className="headingTitle">
                  <span className="artistTitle">{spotifyObject.artists[0].name}</span>
                  <span className="trackTitle">{spotifyObject.name}</span>
               </p>
               <p className="lyricsStyle" style={{whiteSpace: 'pre-line'}}>{lyricsData.lyrics_body}</p>
               <Link to="/">
                  <button className ="button">Back to search</button>
               </Link>
            </div>
         </div>

      </div>

   </div>
   

export default TrackDetailsView; 


