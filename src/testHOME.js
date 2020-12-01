//testHOME.js

import React from "react";
import PopifySearch from "./PopifySearch";
import Playback from "./playback";

function TestPlayer({ spotify }) {
  return (
    <div>
      <PopifySearch/>
      <Playback/>
    </div>
 
  );
}

export default TestPlayer;