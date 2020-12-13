import React from "react";
import { Grid, Slider } from "@material-ui/core";
import Likes from "./model/firebase-manager"
import {Link} from "react-router-dom";

import "./popify.css";
import "./Footer.css";

import {
  PauseCircleOutline,
  PlayCircleOutline,
  VolumeDown,
  FavoriteBorder,
  LibraryMusic,
  MusicNote,

} from "@material-ui/icons";

function FooterView({currentTrack, player, user}) {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    player.setVolume(value/100)
  };

  
  return (  
  
    <div className="footer__play">
      <div className="footer__left">

      {currentTrack === null ? <img alt=""/> :

        <img alt=""
        className="footer__albumLogo"
        src= {currentTrack.type === "track" ? currentTrack.album.images[0].url : "" } />  

      }
        <div className="footer__songInfo">
          <h4>{ currentTrack !== null ? currentTrack.name : "Welcome!"}</h4>
        <div className="grey_name" >
          <h5>{ currentTrack !== null ? currentTrack.artists[0].name : ""}</h5></div>
        </div>

        <Grid item>
          <FavoriteBorder fontSize="large" className="footer__icon" onClick = {()=>{console.log("footerview", currentTrack.name, user);
          Likes(currentTrack.name, user.id)}}></FavoriteBorder>
        </Grid>

        <Link to="/lyrics">
          <Grid item>
              <MusicNote fontSize="large" className="footer__icon" style={{fill: "white"}}/>
          </Grid>
        </Link>

      </div>
      
      <div className="footer__center">
       
        <PlayCircleOutline fontSize="large" className="footer__icon" onClick = {() => player.resume()} /> 
        <PauseCircleOutline fontSize="large" className="footer__icon" onClick = {() => player.pause()}/> 

        <Link to="/liked">
          <Grid item>
            <LibraryMusic fontSize="large" className="footer__icon" style={{fill: "white"}}/>
          </Grid>
        </Link>

      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={value} onChange={handleChange} valueLabelDisplay="auto"/>
          </Grid>
        </Grid>
      </div>
     
    </div>
  );
}

export default FooterView;