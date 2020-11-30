import React, {Fragment} from "react";
import PopifySearchView from "./PopifySearchView";
import MusicSource from "./musicSource.js"
import { useDataLayerValue } from "./DataLayer";
import promiseNoData from './promiseNoData'
import SearchResultsView from './searchResultsView'
import usePromise from './usePromise'

function PopifySearch(){
    const [{token}] = useDataLayerValue();
    const [promise, setPromise] = React.useState(null);
    const [data, error] = usePromise(promise);
    console.log(data)
    React.useEffect(() => setPromise(MusicSource.SearchArtists({type: "artist", text: "Justin", token})), [token]);

    return (
        <Fragment>
            <PopifySearchView onSearch={(type, text) => setPromise(MusicSource.SearchArtists({type, text, token}))} />
            {promiseNoData(promise, data, error) || <SearchResultsView searchResult={data} />}
        </Fragment>
    )
}

export default PopifySearch;
