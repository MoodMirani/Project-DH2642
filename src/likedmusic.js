
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import "./popify.css"
import "./searchResult.css"
import {getLikes} from "./model/firebase-manager"
import { useDataLayerValue } from "./DataLayer";
import fire from "./firebase-config"
import usePromise from './usePromise'
function Liked(){
    const [{user}, dispatch] = useDataLayerValue();
    var info="Ingen data"
    const infor = getLikes(user)
    console.log(infor)
    return (
        <Fragment>
            <div><Link to="/"> <button className ="button">Back to search</button></Link>
            <h1 className="loadedTrack" ></h1>
            
            
            </div>
            
        </Fragment>
    )
    
}
export default Liked; 
