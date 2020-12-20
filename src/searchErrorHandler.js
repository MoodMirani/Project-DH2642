
function searchError(query, type) {
    return (
        (query && type === null && "Please choose a type") ||
        (type && !!query.trim()) && "Please type something in the searchbar" ||
        ((!!query.trim()) && type === null && "Please type something in the searchbar and choose a type")) ||
        true

}

export default searchError