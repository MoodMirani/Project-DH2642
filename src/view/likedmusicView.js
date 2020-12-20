import React from "react";
import { Link } from "react-router-dom";
import "../css/artist.css"
import "../css/AlbumView.css";
import { Likes, unLike } from "../model/firebase-manager.js"
import { FavoriteBorder } from "@material-ui/icons";
import { Grid } from "@material-ui/core";


const LikedmusicView = ({ likedSongs, set_currentTrack, currentTrack, user, dispatch }) => {
    return <div className="trackContainer">
        <Link to="/">
            <img className="logo" src="https://i.ibb.co/283SGvS/popi-Trans.png" alt="Popify logo" height="100px" />
        </Link>
        <Link to="/"><button className="button">Back to search</button></Link>

        <div>
            <table className="albumSongList">
                <thead>
                    <tr>
                        <th>Like</th>
                        <th>Artist</th>
                        <th>Track</th>
                    </tr>
                </thead>
                <tbody>
                    {likedSongs.flat().map(track =>

                        <tr key={track.id}>
                            <td>
                                <Grid item>
                                    {<FavoriteBorder fontSize="large" className="footer__icon" onClick={() => {
                                        Likes(currentTrack, user, dispatch, likedSongs)
                                    }} />}
                                </Grid>
                            </td>
                            <td>{track.artists[0].name}</td>
                            <td className="trackName">{track.name}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    </div>

}

export default LikedmusicView 