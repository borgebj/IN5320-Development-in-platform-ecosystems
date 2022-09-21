import React from "react";

/* [Step 6] creates a checkbox for each continent using mapping of dictionary*/
function Search(props) {

    const setContinentQuery = props.setContinentQuery
    const continentQuery = props.continentQuery
    const setPageNumber = props.setPageNumber

    // continents for checkbox-creation
    const continents = {"EU":"Europe", "AF":"Africa", "SA":"South America",
        "NA":"North America", "OC":"Oceania", "AS":"Asia"}

    const onChange = (code) => (event) => {

        // adds code to continent query
        if (event.target.checked) {
            setContinentQuery((code+","+ continentQuery).replace(undefined, ""));
        }
        // removes code from continent query
        else {
            setContinentQuery(continentQuery.replace(code+",", ""));
        }
        // changes to page 1 to not cause crashes
        setPageNumber(1)
    }

    return (
        <div className={"checkDiv"}>
            {Object.entries(continents).map(([code, continent]) => (
                <div className={"checkLine"}>
                    <input onChange={onChange(code)} value={code} type={"checkbox"} name={continent}/>
                    <label>{continent}</label>
                </div>
            ))}
        </div>
    )
}
export default Search;