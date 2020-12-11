import React from "react";
import "../TrackDetailsView.css"

const TrackDetailsView =({spotifyObject, lyricsData})=>
   <div>
      <div className="trackContainer">
        {console.log("current;", spotifyObject)}
      </div>
      <div className="lyricsContainer">
          

           <p style={{whiteSpace: 'pre-line'}}>{lyricsData}</p>
         

         
        
      </div>
   </div>
   

export default TrackDetailsView; 
