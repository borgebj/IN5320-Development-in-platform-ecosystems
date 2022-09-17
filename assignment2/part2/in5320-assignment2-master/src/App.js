import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js";

function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */

    // reference to search-input
    let textInput = React.createRef();

    // continents for checkbox-creation
    const continents = {"EU":"Europe", "AF":"Africa", "SA":"South America",
                        "NA":"North America", "OC":"Oceania", "AS":"Asia"}

    const [apiData, setApiData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(); // Default = No search query
    const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
    const [pageSize, setPageSize] = useState(10); // Default = pageSize 10
    const [continentQuery, setContinentQuery] = useState()
    const [lastPage, setLastPage] = useState()

    useEffect(() => {
        // All parameters are appended to this URL.
        let apiQuery = "https://dhis2-app-course.ifi.uio.no/api?";

        // If searchQuery isn't empty add &search=searchQuery to the API request.
        if (searchQuery) {
          apiQuery = apiQuery + "&search=" + searchQuery;
        }

        // [Step 6] if continentQuery isn't empty add &continentCode=continentQuery to API request
        if (continentQuery) {
            apiQuery = apiQuery + "&ContinentCode=" + continentQuery
        }

        // [step 3] Adding &pageSize=pageSize to query with default of 10
        apiQuery = apiQuery + "&pageSize=" + pageSize;

        // Add what page we are requesting to the API request.
        apiQuery = apiQuery + "&page=" + pageNumber;

        // Query data from API.
        console.log("Querying: " + apiQuery);
        fetch(apiQuery)
          .then((results) => results.json())
          .then((data) => {
            // Then add response to state + figure out last possible page
            setApiData(data);
            setLastPage(Math.ceil(data.pager.total / pageSize))
          });
      }, [searchQuery, pageNumber, continentQuery, pageSize]); // Array containing which state changes that should re-run useEffect()
    return (
        <div className="App">
            <h1>Country lookup</h1>

            {/* [Step 2] Search-field and button for searching through data*/}
            <input ref={textInput} type={"text"}/>
            <button id={"searchButton"} type={"button"} onClick={ ()=>  {
                setSearchQuery(textInput.current.value);
                setPageNumber(1)
            }}>Search</button>

            {/* [Step 6] creates a checkbox for each continent using mapping of dictionary*/}
            <div className={"checkDiv"}>
            {Object.entries(continents).map(([code, continent]) => (
                <div className={"checkLine"}>
                <input onChange={(e)=> {

                    // adds code to continent query
                    if (e.target.checked) {
                        setContinentQuery((code+","+continentQuery).replace(undefined, ""));
                    }
                    // removes code from continent query
                    else {
                        setContinentQuery(continentQuery.replace(code+",", ""));
                    }
                    setPageNumber(1);       // changes to page 1 to not cause crashes
                }} value={code} type={"checkbox"} name={continent}/>
                    <label>{continent}</label>
                </div>
            ))}
            </div>

            {/* [Step 1] call to creation of table*/}
            <Table apiData={apiData} />

            {/* [Step 4] Allows users to change page of table*/}
            <div>
                <button disabled={pageNumber===1} onClick={()=> setPageNumber(pageNumber-1)} className={"pageButton"}>
                        <i>🡸</i>
                </button>
                {`page ${pageNumber} of ${lastPage}`}
                <button disabled={pageNumber===lastPage} onClick={()=> setPageNumber(pageNumber+1)} className={"pageButton"}>
                    <i>🡺</i>
                </button>

            </div>

            {/* [Step 3] Allows user to change page-size of data and table*/}
            <label>Results per page:</label>
            <select onChange={ (e)=> {
                setPageSize(e.target.value);
                setPageNumber(1);       // changes to page 1 to not cause crash
            }}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
      );
}

export default App;
