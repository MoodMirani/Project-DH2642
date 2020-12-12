import React from "react";
import "./Footer.css";
import {
  PauseCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import Pause from "./pause"


function FooterView({currentTrack, player}) {

  return (  
    
    <div className="footer__play">
      <div className="footer__left">

      {currentTrack === null ?

        <img alt="" className="footer__albumLogo" src= {"https://i.ibb.co/rsCJb8L/popify-Logo.png"} /> :

        <img alt=""
        className="footer__albumLogo"
        src= {currentTrack.type === "track" ? currentTrack.album.images[0].url : "" } />  

      }

        <div className="footer__songInfo">
        <h4>{ currentTrack !== null ? currentTrack.name : "welcome"}</h4>
        </div>
      </div>
      
      <div className="footer__center">
        <Shuffle className="footer__green" /> {/*Not working, only for the look} */}
        <SkipPrevious className="footer__icon" /> {/*Not working, only for the look} */}
        
        <PauseCircleOutline fontSize="large" className="footer__icon"  
        onClick = { () => { Pause({ playerInstance: player}) } }
        />
        
        <SkipNext className="footer__icon" /> {/*Not working, only for the look} */}
        <Repeat className="footer__green" /> {/*Not working, only for the look} */}
      </div>
     
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default FooterView;