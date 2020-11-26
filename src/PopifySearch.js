import React from "react";
import PopifySearchView from "./PopifySearchView";
import MusicSource from "./musicSource.js"
import { useDataLayerValue } from "./DataLayer";



function PopifySearch(){
    const [{ user, token }, dispatch] = useDataLayerValue();
    return (
            React.createElement(PopifySearchView, {
                onSearch: (type, text) => MusicSource.searchArtists({type, text, token})
            }
            ))

};

export default PopifySearch