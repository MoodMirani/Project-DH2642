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
          callback('BQAxeCJvJnETLXKwx7K_qEBzu6VSkcf_7I_QbktPyuOvitzIHT0YjpRRnr5LQQ7IVaXH4zlftx5rCQao1SEjsPBPA40z7H4hBNa4bAsXBU7ju-2rn9v2ikEJxYCp9Wf_H5e4liK6utbDLVsdbnv-EK6ELAtJmXaQ4Zc');
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

