import React from "react";
//import Footer from "./Footer";
import "./searchResult.css"
//import LyricsSource from "./lyricsSource";
//import scrapeLyrics from "./presenter/lyricsScraper";
import "./popify.css"
import "./App.css"
import {Link} from "react-router-dom";

const SearchResultsView=({searchResult, set_currentTrack, set_currentArtist})=>{

    return <div  className="searchMODE">{
        searchResult.map(result=>
            <span key={result.id} className="searchResult" >    
        
       
        <div className="searchName"><b>{result.name}</b> {result.artist} </div>

 
        
            {result.type === "artist" ? 
            <Link to="/artist">

            <img className="searchPic" onClick = { () => { set_currentArtist(result) } } 
    
            src = { result.images[0]? result.images[0].url : "https://suitabletech.com/images/HelpCenter/errors/Lenovo-Camera-Error.JPG" }  alt="" />
            </Link>
            :(
            result.type==="track" ?
             <Link to="/track">
            <img className="searchPic" onClick = { () => { set_currentTrack(result)}}
                // LyricsSource.findLyrics(result.artists[0].name, result.name) } } 
            src = { result.album.images[0] && result.album.images[0].url } alt="" /></Link>:
    
                            <img className="searchPic" src = {result.images[0]&&
                                result.images[0].url } alt="" />)
            }
        
                   
            </span>)
        
        } </div>
 
    }

export default SearchResultsView;
