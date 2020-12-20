import React from "react";
import { Link } from "react-router-dom";
import "../css/artist.css"
import "../css/AlbumView.css";
import { Grid } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';


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
                        <th></th>
                        <th>Artist</th>
                        <th>Track</th>
                    </tr>
                </thead>
                <tbody>
                    {likedSongs.flat().map(track =>

                        <tr key={track.id}>
                            <td>
                                <Grid item>
                                    {<FavoriteIcon fontSize="small" />}
                                </Grid>
                            </td>
                            <td>{track.artists[0].name}</td>
                            <td className="trackNameLIKED">{track.name}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    </div>

}

export default LikedmusicView 