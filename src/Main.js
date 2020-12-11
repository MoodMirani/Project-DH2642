import React from "react";
import PopifySearch from "./PopifySearch";
import LyricsSource from "./lyricsSource"
import LyricsSearch from "./presenter/lyricsSearch"
import Footer from "./Footer"
import Playback from "./playback"
import { useDataLayerValue } from "./DataLayer";
function Main({ spotify }) {
  const [{ player, token, user }, dispatch] = useDataLayerValue();
  return (
    <div>
      <PopifySearch/>
      <Playback/>
      <Footer/>
      {/*console.log(LyricsSource.findLyrics())*/}
    </div>
 
  );
}

export default Main;