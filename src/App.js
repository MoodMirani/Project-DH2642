
import React, { useEffect } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import TestPlayer from "./testHOME";
import "./App.css"

const spotify = new SpotifyWebApi();



function App() {
  
  const [{ token }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token; // is a Bearer token which we will be adding to every request made to the Spotify API.
    if (_token) { // token är typ en "nyckel" från användaren
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ // The wrap dispatch function recognizes that this is a promise and not an action so it waits for the 
                   // promise to resolve and passes it on
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  }, []);


//if user exists we want the user to see the website otherwise login page


  return (
    <div className="App">
      {token ? <TestPlayer /> : <Login />}
    </div>
  );
}

export default App;
