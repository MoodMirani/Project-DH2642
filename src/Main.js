import React from "react";
import PopifySearch from "./PopifySearch";
import LyricsSource from "./lyricsSource"
import LyricsSearch from "./presenter/lyricsSearch"
function Main({ spotify }) {
  return (
    <div>
      <PopifySearch/>
      {/*console.log(LyricsSource.findLyrics())*/}
    </div>
 
  );
}

export default Main;