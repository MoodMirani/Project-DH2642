//playback.js

import React from "react";
import { useDataLayerValue } from "./DataLayer";
import loadScript from "./playbacktest";


function Playback() {

  const [{currentTrack}] = useDataLayerValue();
  
  React.useEffect(()=>{loadScript("https://sdk.scdn.co/spotify-player.js", () => console.log("hej"))
    
    window.onSpotifyWebPlaybackSDKReady = () => {

    // Define the Spotify Connect device, getOAuthToken has an actual token 
    // hardcoded for the sake of simplicity
    var player = new window.Spotify.Player({
      name: 'Amandas player',
      getOAuthToken: callback => {
        callback('BQCdMbKUuFEXsAr0a0EzYlQ3x1UlCG941E62bWEAJV7u-t8g-vFNhaYq-B6TB01s_FU49IV8wcbbOiNcf7Nv-bu95ASySky7p5BJirI4VyFG4rG4XXeCMRLxRo8UHddRNVWO1TrtR4c7OcZw-mzGp4dv6maFcMOlMCjAb_GS0wf1baTahFuNY4U');
      },
      volume: 0.1
    });


    // Called when connected to the player created beforehand successfully
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);

      const play = ({
        spotify_uri,
        playerInstance: {
          _options: {
            getOAuthToken,
            id
          }
        }
      }) => {
        getOAuthToken(access_token => {
          fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [spotify_uri] }),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${access_token}`
            },
          });
        });

        
      };

      console.log("id på låten",currentTrack.uri)
      
      play({
        playerInstance: player,
        spotify_uri: currentTrack.uri,
      });
  
    });


    // Connect to the player created beforehand, this is equivalent to 
    // creating a new device which will be visible for Spotify Connect
    player.connect();


   
  }

},[])

    return (<div>  {currentTrack.name}, {currentTrack.id} </div>);
  }
  
  export default Playback;
