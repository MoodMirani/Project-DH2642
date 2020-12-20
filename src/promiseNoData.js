import React from "react";
import Loading from './assets/spinner-big.gif';
import "./css/popify.css"

function promiseNoData(promise, data, error) {
    return (!promise && "no data")
        || (error && <h1>You need to type something in the searchbar</h1>)
        || (!data && <img className="centrePROM" src={Loading} alt="" />)

}
export default promiseNoData;