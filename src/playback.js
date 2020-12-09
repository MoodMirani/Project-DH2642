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
          callback('BQDtViS79vDVYECCtNMLCkXRoKhqhNyUFEXbfoun-Mg3OHu5BIjKkwx98aYDeJfDbGlLRZHaKWeKLHLMILyvJdsQ-LdL9W3YQ1vRhqC8I7lO5dIeIvSGWPWIVwq8MbSGN8rhhD82vUgXRn4WEDAcjSBrLhDT9LlJFNk');
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

    return (<div>  {currentTrack.name}, {currentTrack.id} </div>);
  }
  
  export default Playback;

