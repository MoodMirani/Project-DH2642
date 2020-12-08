//testHOME.js

import React from "react";
import Playback from "./playback";
import PopifySearch from "./PopifySearch";


function TestPlayer({ spotify }) {
  return (
    <div>
      <PopifySearch/>
      <Playback/>

    </div>
 
  );
}

export default TestPlayer;