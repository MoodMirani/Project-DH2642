import React from "react";
import "../css/TrackDetailsView.css"
import {Link} from "react-router-dom";
import "../css/popify.css";
import { Fragment } from "react";

const TrackDetailsView =({currentTrack, currentAlbum, lyricsData})=>
   <div className="flexboxWrapper">
      <div className="row">

         <div className="column">
            <div className="trackContainer"> 
               <img className="trackPic" src = { currentTrack.type === "track" && currentTrack.album ? currentTrack.album.images[0].url : currentAlbum.images[0] && currentAlbum.images[0].url ? currentAlbum.images[0].url : "https://suitabletech.com/images/HelpCenter/errors/Lenovo-Camera-Error.JPG" } alt="" />
            </div>
         </div>
      

         <div className="column">
            <div className="lyricsContainer">
               <p className="headingTitle">
                  <span className="artistTitle">{currentTrack.artists[0].name}</span>
                  <span className="trackTitle">{currentTrack.name}</span>
                  
               </p>
               <Link to="/">
                  <button className ="button">Back to search</button>
               </Link>
               
               {(lyricsData.lyrics_body === "") ? 
               <p className="lyricsStyle" style={{whiteSpace: 'pre-line'}}>There is no lyrics avaible for this track</p>:
               <Fragment>
               <p className="lyricsCopy" >{lyricsData.lyrics_copyright}</p>
               <p className="lyricsStyle" style={{whiteSpace: 'pre-line'}}>{lyricsData.lyrics_body}</p>
               </Fragment>}
         
            </div>
         </div>

      </div>

   </div>
   

export default TrackDetailsView; 


