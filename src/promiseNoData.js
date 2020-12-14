import React from "react";
import Loading from './assets/loading.gif';
function promiseNoData(promise, data, error, h){  
    return  (!promise && "no data")  
          || (error && <h1>error</h1>)   //HÄR KAN MAN HA ETT ALERT MEDDELANDE ISTÄLLET alert("Please choose a category!")
          || (!data && <img src={Loading} alt=""/>)
}
export default promiseNoData;