import React from "react";
import "./Footer.css";
import {
  PauseCircleOutline,
  PlayCircleOutline,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
// import HeartButton from "./components/heart"
import Likes from "./model/firebase-manager"
import HeartCheckbox from 'react-heart-checkbox';
import {Link} from "react-router-dom";

function FooterView({currentTrack, player, user}) {
  
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    player.setVolume(value/100)
  };

  
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
          <h4>{ currentTrack !== null ? currentTrack.name : "Welcome!"}</h4>
        <div className="grey_name" >
          <h5>{ currentTrack !== null ? currentTrack.artists[0].name : ""}</h5></div>
        </div>
      </div>
      
      <div className="footer__center">
       
        <PlayCircleOutline fontSize="large" className="footer__icon" onClick = {() => player.resume()} /> 
        <PauseCircleOutline fontSize="large" className="footer__icon" onClick = {() => player.pause()}/> 
        
        
        <button onClick = {()=>{console.log("footerview", currentTrack.name, user);
        Likes(currentTrack.name, user.id)}}></button>


      </div>

      <Link to="/lyrics">
        <button className ="button">LYRICS</button>
      </Link>

      

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