//playback.js

import React from "react";
import { useDataLayerValue } from "./DataLayer";
import loadScript from "./loadscript";

function Playback() {
  
  const [{ token }, dispatch] = useDataLayerValue();

  React.useEffect(()=>{loadScript("https://sdk.scdn.co/spotify-player.js")
    
    window.onSpotifyWebPlaybackSDKReady = () => {
      let player = new window.Spotify.Player({
        name: 'Popify player',
        getOAuthToken: callback => {
          callback(token);
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

    return ""
  }
  
  export default Playback;

