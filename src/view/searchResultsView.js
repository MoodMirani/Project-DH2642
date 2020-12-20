import React from "react";
import "../css/searchResult.css"
import "../css/popify.css"
import "../css/App.css"
import { Link } from "react-router-dom";
import playButton from "../assets/play-button.png"


const SearchResultsView = ({ searchResult, set_currentTrack, set_currentArtist, set_currentAlbum }) => {

    return <div className="searchMODE">{

        searchResult.map(result =>
            <span key={result.id} className="searchResult" >
                

                {
                    result.type === "artist" ?
                        <Link to="/artist">
                            <img className="searchPic" onClick={() => { set_currentArtist(result) }}
                                src={result.images[0] ? result.images[0].url : "https://suitabletech.com/images/HelpCenter/errors/Lenovo-Camera-Error.JPG"} alt="" />
                        </Link>
                        :

                        result.type === "track" ?
                            <Link to="/track">
                                <div className="container">
                                    <img className="searchPicT"
                                        src={result.album.images[0] && result.album.images[0].url} alt="" />

                                    <div className="middle">
                                        <img className="play_symbol" alt="play" onClick={() => { set_currentTrack(result) }}
                                            src={playButton} />
                                    </div>
                                </div>
                            </Link>
                            :

                            result.type === "album" &&

                            (<Link to="/album">
                                <img className="searchPic" onClick={() => { set_currentAlbum(result) }}
                                    src={result.images[0] ? result.images[0].url : "https://suitabletech.com/images/HelpCenter/errors/Lenovo-Camera-Error.JPG"} alt="" />
                            </Link>)}
                    <p className="searchName-artist">{result.artists[0].name}</p>
                <div className="searchName">{result.name}</div>
            </span>
        )
    }
    </div>

}

export default SearchResultsView;
