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
        callback('BQBGWbYy6klGeR85njNbfVR8wzrAhXPM7dfEofImU9meDq-T2HmvkboxB-BrmYZA9QW52yYYwdoojc_Fglkf1SPSiXuG0zo1Rak-7p2qT1BjmbW17wcPy_X-NXGoFw0XgHhZjYBOMcnG8MRf7071FC-MQEsZ-2UovCk');
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

      console.log("id på låten", currentTrack.uri)
      console.log("id på låten", currentTrack)
      play({
        playerInstance: player,
        spotify_uri: "spotify:track:4SS4YfDAEQG0fZAe1xfgn3",

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