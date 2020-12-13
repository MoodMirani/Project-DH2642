import React from "react";
import PopifySearch from "./PopifySearch";
//import LyricsSource from "./lyricsSource"
import LyricsSearch from "./presenter/lyricsSearch"
//import Footer from "./Footer"
import Playback from "./playback"
import ArtistInfo from "./artist"
import Liked from "./likedmusic.js"
import { useDataLayerValue } from "./DataLayer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Main({ spotify }) {
  const [{ player, token, user }, dispatch] = useDataLayerValue();
  return (
    <Router>
        <Switch>
          <Route path="/lyrics">
            <LyricsSearch/>
          </Route>
          <Route path="/liked">
            <Liked/>
          </Route>
          <Route path="/artist">
            <ArtistInfo/>
          </Route>
          <Route path="/">
            <PopifySearch/>
          </Route>    
        </Switch>
      <Playback/>
   </Router>
  );
}

export default Main;


/*

          <Route path="/track">
          <LyricsSearch/>
          </Route>
          */