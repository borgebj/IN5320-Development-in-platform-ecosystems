import React, { useState } from "react";

/* [Step 2] Search-field and button for searching through data*/
function Search(props) {

    const [search, setSearch] = useState()

    const onInputChange = (event) => {
        setSearch(event.target.value)
    }

    const onClick = () => {
        props.setSearchQuery(search)
        props.setPageNumber(1)
    }

    return (
        <div>
            <input type="text" onChange={onInputChange}/>
            <button id="searchButton" type="button" onClick={onClick}>Search</button>
        </div>
    )
}
export default Search;