//playback.js

import React from "react";
import { useDataLayerValue } from "./DataLayer";


function Playback() {

    const [{currentTrack}] = useDataLayerValue();

    return (<div> {currentTrack.name}, {currentTrack.id} </div>
   
    );
  }
  
  export default Playback;