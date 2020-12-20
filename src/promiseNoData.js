import React from "react";
import Loading from './assets/spinner-big.gif';
import "./css/popify.css"

function promiseNoData(promise, data, error) {
    console.log(data, error)
    console.log()
    return (!promise && "no data")
        || ((error || data === undefined) && <h1>You need to type something in the searchbar</h1>)
        || ((!Array.isArray(data) || !data.length) && data && <h1>Unvalid search term, try again!</h1> )
        || (!data && <img className="centrePROM" src={Loading} alt="" />)

}
export default promiseNoData;