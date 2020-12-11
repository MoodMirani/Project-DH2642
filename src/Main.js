import React from "react";
import PopifySearch from "./PopifySearch";
import LyricsSource from "./lyricsSource"
import LyricsSearch from "./presenter/lyricsSearch"
import Footer from "./Footer"
import Playback from "./playback"


function Main({ spotify }) {
  return (
    <div>
      <PopifySearch/>
      <LyricsSearch/>
      <Playback/>
      <Footer/>
      {/*console.log(LyricsSource.findLyrics())*/}
    </div>
 
  );
}

export default Main;