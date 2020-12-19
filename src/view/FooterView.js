import React from "react";
import { Grid, Slider, Box } from "@material-ui/core";
import { Likes, songIncluded  /*unLike*/ } from "../model/firebase-manager.js"
import { Link } from "react-router-dom";

import "../css/popify.css";
import "../css/Footer.css";
import "../css/popup.css"

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

  function Popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    if(popup.classList.contains("show")){ // Check if the popup is shown
     setTimeout(() => popup.classList.remove("show"), 2000)}
  }

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

      {/* LIKE-button */}
      <Grid className="footer__left">
      <Grid item>
      {(currentTrack === null)? 
      <FavoriteBorder disabled style={{fill: "gray"}} fontSize="large"/> :
      
      <div  className="popup"> 
        {!songIncluded(likedSongs, currentTrack) ?
        <FavoriteBorder fontSize="large" className="footer__icon" onClick = {()=>{Popup()
          if(likedSongs){
            Likes(currentTrack, user, dispatch, likedSongs)
            }}}/> : 
        <FavoriteBorder disabled style={{fill: "gray"}} fontSize="large"/>}
            
        <span className="popuptext" id="myPopup">You have liked the song!</span>
      </div>
      } Like
      </Grid>
      </Grid>

      {/* LIKED SONGS LIST */}
      <Grid className="footer__right">
      <Link to="/liked">
        <Grid item>
          <LibraryMusic fontSize="large" className="footer__icon" style={{fill: "white"}}/>
        </Grid>
      </Link>
      Liked songs
      </Grid>

      </div>
      
      <div className="footer__center">
       
      <PlayCircleOutline fontSize="large" className="footer__icon" onClick = {() => player.resume()} /> 
      <PauseCircleOutline fontSize="large" className="footer__icon" onClick = {() => player.pause()}/> 
      
      {/* LYRICS-button */}
      <Grid>
      <Grid item>
      {(currentTrack === null)?  
        <FormatAlignLeft disabled style={{fill: "gray"}} fontSize="large"/> :   
        <Link to="/lyrics">
            <FormatAlignLeft  style={{fill: "white"}} fontSize="large" className="footer__icon" />
        </Link> }
        Lyrics
      </Grid>
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