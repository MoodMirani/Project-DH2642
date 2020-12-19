import React from "react";
import Loading from './assets/spinner-big.gif';
import "./css/popify.css"

function promiseNoLyrics(promise, data, error){  
    //console.log("PromiseNoLyrics")
    //console.log(promise, data, error)
    return  (!promise && "no data")     // case "0"  
          || (error && <h1>error</h1>)   // case 3 
          || (data === null && <img className="centrePROM" src={Loading} alt=""/>)  // case 1
}
export default promiseNoLyrics;