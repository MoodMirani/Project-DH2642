//playback.js

import React from "react";
import { useDataLayerValue } from "./DataLayer";
import loadScript from "./playbacktest";


function Playback() {
  
  const [{ currentTrack }, dispatch] = useDataLayerValue();

  React.useEffect(()=>{loadScript("https://sdk.scdn.co/spotify-player.js")
    
    window.onSpotifyWebPlaybackSDKReady = () => {
      let player = new window.Spotify.Player({
        name: 'Amandas player',
        getOAuthToken: callback => {
          callback('BQByzqPb7s5bIcwjnpYFqNfr83SQuQpiXsSPH08CBdOOIQKxJjgnlTK3sFOEhouQeTF7FUPXK6aOAs1EA8cDmlsY_KFc7Ln_8DjWq_j4FbVA9EEEaBB_X27EwpG3ZW99qQCk0NaLegbUutTDpuHFQrDiSRieCCquyaYxOWyGzFrUkWz7ifTr47w');
        },
        volume: 0.1
      })

    // Called when connected to the player created beforehand successfully
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);

  
    });

    dispatch({
      type: "SET_PLAYER",
      player: player
      });

    // Connect to the player created beforehand, this is equivalent to 
    // creating a new device which will be visible for Spotify Connect
    player.connect();
   
  }

},[])

    return (<div className="footer">  {currentTrack.name}, {currentTrack.id} </div>);
  }
  
  export default Playback;

