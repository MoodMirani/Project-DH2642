import React from "react";
import { Grid, Slider } from "@material-ui/core";
import { Likes, unLike } from "../model/firebase-manager.js"
import { Link } from "react-router-dom";

import "../css/popify.css";
import "../css/Footer.css";

import { Alert,
         AlertTitle } from '@material-ui/lab';
import {
  PauseCircleOutline,
  PlayCircleOutline,
  VolumeDown,
  FavoriteBorder,
  LibraryMusic,
  FormatAlignLeft
} from "@material-ui/icons";

function FooterView({currentTrack, player, user, likedSongs, dispatch}) {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => { // this is for the volume slider
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
          <h5>{ currentTrack !== null ? currentTrack.artists[0].name : ""}</h5>
          </div>
      </div>

      <Grid item>
      {(currentTrack === null)? 
      <FavoriteBorder disabled style={{fill: "gray"}} fontSize="large"/> :
      <FavoriteBorder fontSize="large" className="footer__icon" onClick = {()=>{
          Likes(currentTrack, user, dispatch, likedSongs)}}/> && 
          <Alert severity="success">
          <AlertTitle>You have liked the song!</AlertTitle>
          </Alert>}
      </Grid>

      <Link to="/liked">
        <Grid item>
          <LibraryMusic fontSize="large" className="footer__icon" style={{fill: "white"}}/>
        </Grid>
      </Link>

      </div>
      
      <div className="footer__center">
       
      <PlayCircleOutline fontSize="large" className="footer__icon" onClick = {() => player.resume()} /> 
      <PauseCircleOutline fontSize="large" className="footer__icon" onClick = {() => player.pause()}/> 
    
      <Grid item>
      {(currentTrack === null)?  
        <FormatAlignLeft disabled style={{fill: "gray"}} fontSize="large"/> :   
        <Link to="/lyrics">
            <FormatAlignLeft  style={{fill: "white"}} fontSize="large" className="footer__icon" />
        </Link> }
      </Grid>
      
  
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