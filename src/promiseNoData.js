import React from "react";
import Loading from './assets/loading.gif';
function promiseNoData(promise, data, error, h){  
    return  !promise && "no data"     // case "0"  
          || error && <h1>error</h1>   // case 3 
          || !data && <img src={Loading} />  // case 1
}
export default promiseNoData;