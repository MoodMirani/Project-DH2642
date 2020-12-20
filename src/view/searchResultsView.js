import React from "react";
import "../css/searchResult.css"
import "../css/popify.css"
import "../css/App.css"
import { Link } from "react-router-dom";


const SearchResultsView = ({ searchResult, set_currentTrack, set_currentArtist, set_currentAlbum }) => {

    return <div className="searchMODE">{

        searchResult.map(result =>
            <span key={result.id} className="searchResult" >

                <div className="searchName"><b>{result.name}</b> {result.artist} </div>

                {
                    result.type === "artist" ?
                        <Link to="/artist">
                            <img className="searchPic" onClick={() => { set_currentArtist(result) }}
                                src={result.images[0] ? result.images[0].url : "https://suitabletech.com/images/HelpCenter/errors/Lenovo-Camera-Error.JPG"} alt="" />
                        </Link>
                        :
                        result.type === "track" ?
                            (
                                <Link to="/track">
                                    <img className="searchPic" onClick={() => { set_currentTrack(result) }}
                                        src={result.album.images[0] && result.album.images[0].url} alt="" />
                                </Link>
                            )
                            :
                            result.type === "album" &&

                            (<Link to="/album">
                                <img className="searchPic" onClick={() => { set_currentAlbum(result) }}
                                    src={result.images[0] ? result.images[0].url : "https://suitabletech.com/images/HelpCenter/errors/Lenovo-Camera-Error.JPG"} alt="" />
                            </Link>)}
            </span>
        )
    }
    </div>

}

export default SearchResultsView;
