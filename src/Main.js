import React from "react";
import PopifySearch from "./PopifySearch";
import LyricsSource from "./lyricsSource"
function Main({ spotify }) {
  return (
    <div>
      <PopifySearch/>
      {LyricsSource.findLyric()}
    </div>
 
  );
}

export default Main;