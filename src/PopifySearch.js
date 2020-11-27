import React from "react";
import PopifySearchView from "./PopifySearchView";
import MusicSource from "./musicSource.js"
import { useDataLayerValue } from "./DataLayer";
// import usePromise from './usePromise'
import promiseNoData from './promiseNoData'
import SearchResultsView from './searchResultsView'

function PopifySearch(){
    const [{searchResult, token }, dispatch] = useDataLayerValue();
    React.useEffect(()=>MusicSource.SearchArtists({type: "artist", text: "Justin", token: token, dispatch}), []);
         //including effect to initialize the promise, see early 2.3 !
         // type: type, query: query
    // const [data, error]= usePromise(promise);
    console.log("Här popofi", searchResult)

    // data && dispatch(data)
    
    return (
        
            React.createElement(PopifySearchView, {
                onSearch: (type, text) => 
                dispatch(MusicSource.SearchArtists({type: type, text: text, token: token}))
                }
            ),
            React.createElement(SearchResultsView, {
                searchResult: searchResult
            })
            
    )
        }

export default PopifySearch;