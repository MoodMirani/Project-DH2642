//testHOME.js

import React from "react";
import Playback from "./playback";
import PopifySearch from "./PopifySearch";
import Details from "./details"



function TestPlayer({ spotify }) {

  return (
    
    <div>
      <PopifySearch/>
      <Playback/>
    </div>
 
  );

}

export default TestPlayer;


//<PopifySearch/>
//<Playback/>