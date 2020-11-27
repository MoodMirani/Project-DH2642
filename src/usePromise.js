// reactjs/usePromise.js
import React from "react";

function usePromise(promise) {  
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    React.useEffect(function(){ 
        setData(null); 
        setError(null);
        promise && promise.then(dt=>setData(dt)).catch(er=>setError(er))
       ;
     }, [promise]);
    return [data, error];
}

export default usePromise;
