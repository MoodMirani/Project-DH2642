
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import "./popify.css"
import "./searchResult.css"

function Liked(){
    return (
        <Fragment>
            <div><Link to="/"> <button className ="button">Back to search</button></Link></div>
        </Fragment>
    )
    
}
export default Liked; 
