//playback.js

import React from "react";
import { useDataLayerValue } from "./DataLayer";
import loadScript from "./playbacktest";


function Playback() {

  const [{currentTrack}, dispatch] = useDataLayerValue();
  
  React.useEffect(()=>{loadScript("https://sdk.scdn.co/spotify-player.js", () => console.log("hej"))
    
    window.onSpotifyWebPlaybackSDKReady = () => {
      let player = new window.Spotify.Player({
        name: 'Amandas player',
        getOAuthToken: callback => {
          callback('BQDMt7wdPlvPBZZiFPQE4dECuxaZDqiD5ldQTetUxvRua23xmjEU8tyy_P-MbZpB2Y5LgZYA7DlaNl5VmBhMfGKM3SMYIPB7C5jtr8lxisOTC6tQ3ZNory2te5A4GDSrdyA0-269emu4Fw9CniDNjAtaJOvalfpYhzvDLZ7uPy4T1MqoRvUZzT4');
        },
        volume: 0.1
      })


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
