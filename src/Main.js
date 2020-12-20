import React from "react";
import PopifySearch from "./presenter/PopifySearch";
import LyricsSearch from "./presenter/lyricsSearch"
import Playback from "./playback"
import ArtistInfo from "./presenter/artist"
import AlbumInfo from "./presenter/album"

import Liked from "./presenter/likedmusic.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Main({ spotify }) {

  return (

    <Router>
      <Switch>
        <Route path="/lyrics">
          <LyricsSearch />
        </Route>
        <Route path="/liked">
          <Liked />
        </Route>
        <Route path="/artist">
          <ArtistInfo />
        </Route>
        <Route path="/album">
          <AlbumInfo />
        </Route>
        <Route path="/">
          <PopifySearch />
        </Route>
      </Switch>
      <Playback />
    </Router>
  );
}

export default Main;

