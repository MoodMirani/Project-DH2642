import React from "react";
import Loading from './assets/spinner-big.gif';
import "./css/popify.css"

function promiseNoLyrics(promise, data, error) {

    return (!promise && "no data")
        || (error && <h1>error</h1>)
        || (data === null && <img className="centrePROM" src={Loading} alt="" />)
}
export default promiseNoLyrics;