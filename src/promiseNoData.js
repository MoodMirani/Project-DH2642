import React from "react";
import Loading from './assets/spinner-big.gif';
import "./css/popify.css"

function promiseNoData(promise, data, error){  
    return  (!promise && "no data")     // case "0"  
          || (error && <h1>You need to type something in the searchbar</h1>)   // case 3
          || ((!Array.isArray(data) || !data.length) && <h1>Unvalid search term, try again!</h1> )
          || (!data && <img className="centrePROM" src={Loading} alt=""/>)  // case 1
         
}
export default promiseNoData;