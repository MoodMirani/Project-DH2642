//playback.js

import React from "react";
import { useDataLayerValue } from "./DataLayer";
import loadScript from "./playbacktest";


function Playback() {
  
  const [{ currentTrack }, dispatch] = useDataLayerValue();

  React.useEffect(()=>{loadScript("https://sdk.scdn.co/spotify-player.js", () => console.log("hej"))
    
    window.onSpotifyWebPlaybackSDKReady = () => {
      let player = new window.Spotify.Player({
        name: 'Amandas player',
        getOAuthToken: callback => {
          callback('BQATtn7D7Yzvpx-WNiGXyWwVqeYTRaawfqfm4DVXMEXjZPlh-4HDD6MdJN4nH5--whCVR4Ob4hLhdqDZ-F1rdz5N9Wx--Jjl_TfJlOnHNaJ8YzbYjeS7b3eUnyNuSSQJpvVXiF__2iBY1BAiHWhCu_0L9uBEMJ6m2Ta9vesOJT5_ZL7lC8PFpEY');
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

