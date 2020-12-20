import React from "react";
import "../css/AlbumView.css";
import "../css/searchResult.css"
import { Link } from "react-router-dom"

const AlbumView = ({ currentAlbum, albumTracks, set_currentTrack }) => {
    return (

        <div><Link to="/">
            <img className="logo" src="https://i.ibb.co/283SGvS/popi-Trans.png" alt="Popify logo" height="100px" />
        </Link>
            <div className="flexboxWrapper" >
                <div className="row">
                    <div className="column">
                        <div className="trackContainer">
                            <img className="trackPic" src={currentAlbum.images[0] && currentAlbum.images[0].url} alt="" />
                        </div>
                    </div>

                    <div className="column">
                        <div className="lyricsContainer">
                            <Link to="/">
                                <button className="button">Back to search</button>
                            </Link>
                            <p>
                                <span className="artistTitle">{currentAlbum.artists[0].name}</span>
                                <span className="trackTitle">{currentAlbum.name}</span>
                            </p>

                            <div>
                                <table className="albumSongList">
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
                                                <td className="trackName" onClick={() => set_currentTrack(item)}>{item.name}</td>
                                            </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


export default AlbumView;

