//testHOME.js

import React from "react";
import Playback from "./playback";
import PopifySearch from "./PopifySearch";
import Footer from "./Footer"



function TestPlayer({ spotify }) {

  return (
    
    <div>
      <PopifySearch/>
      <Playback/>
      <Footer/>
    </div>
 
  );

}

export default TestPlayer;

