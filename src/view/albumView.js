import React from "react";
import "../css/AlbumView.css";
import {Link} from "react-router-dom"

const AlbumView =({currentAlbum, albumTracks})=>{
    return(
    <div className="flexboxWrapper" >
       <div className="row">
            <div className="column">
                <div className="trackContainer"> 
                    <img className="trackPic" src = { currentAlbum.images[0] && currentAlbum.images[0].url } alt="" />
                </div>
            </div>

        <div className="column">
            <div className="lyricsContainer">
                <p>
                    <span className="artistTitle">{currentAlbum.artists[0].name}</span>
                    <span className="trackTitle">{currentAlbum.name}</span>
                </p>
                <Link to="/">
                    <button className ="button">Back to search</button>
                </Link>
                <div>
                    <table className ="albumSongList">
                        <thead>
                            <tr>
                                <th>Nr</th>
                                <th>Track</th>
                            </tr>
                        </thead>
                        <tbody>
                        {albumTracks.items.map(item => 
                            <tr key={item.id}>
                                <td>{item.track_number}</td>
                                <td className="trackName">{item.name}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        </div>
        
           
       
    </div>)}
   
export default AlbumView; 

