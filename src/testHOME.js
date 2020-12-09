//testHOME.js

import React from "react";
import Playback from "./playback";
import PopifySearch from "./PopifySearch";
import { useDataLayerValue } from "./DataLayer";



function TestPlayer({ spotify }) {

  return (
    
    <div>

    
      <PopifySearch/>
      <Playback/>



    </div>
 
  );

}

export default TestPlayer;