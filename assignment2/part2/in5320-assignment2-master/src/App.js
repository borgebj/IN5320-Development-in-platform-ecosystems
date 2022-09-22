import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js";
import Search from "./Search.js";
import Pagination from "./Pagination";
import PageSize from "./PageSize";
import ContinentSelector from "./ContinentSelector";

function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */

    const [apiData, setApiData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(); // Default = No search query
    const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
    const [pageSize, setPageSize] = useState(10); // Default = pageSize 10
    const [continentQuery, setContinentQuery] = useState();
    const [lastPage, setLastPage] = useState();
    const [sortQuery, setSortQuery] = useState();

    useEffect(() => {
        // All parameters are appended to this URL.
        let apiQuery = "https://dhis2-app-course.ifi.uio.no/api?";

        // If searchQuery isn't empty add &search='searchQuery' to the API request.
        if (searchQuery) {
          apiQuery = apiQuery + "&search=" + searchQuery;
        }

        // [Step 6] if continentQuery isn't empty add &continentCode='continentQuery' to API request
        if (continentQuery) {
            apiQuery = apiQuery + "&ContinentCode=" + continentQuery;
        }

        if (sortQuery) {
            apiQuery = apiQuery + sortQuery
        }

        // [step 3] Adding &pageSize='pageSize' to query with default of 10
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
            setLastPage(Math.ceil(data.pager.total / pageSize));
          });
      }, [searchQuery, pageNumber, continentQuery, pageSize, sortQuery]); // Array containing which state changes that should re-run useEffect()
    return (
        <div className="App">
            <h1>Country lookup</h1>

            {/* [Step 2] Search component*/}
            <Search setSearchQuery={setSearchQuery} setPageNumber={setPageNumber}/>

            {/* [Step 6] Continent Selector component*/}
            <ContinentSelector
                setContinentQuery={setContinentQuery}
                continentQuery={continentQuery}
                setPageNumber={setPageNumber}
            />

            {/* [Step 1] call to creation of table*/}
            <Table
                apiData={apiData}
                setSortQuery={setSortQuery}
            />

            {/* [Step 4] Pagination component*/}
            <Pagination
                lastPage={lastPage}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />

            {/* [Step 3] PageSize component */}
            <PageSize
                setPageSize={setPageSize}
                setPageNumber={setPageNumber}
            />
        </div>
      );
}

export default App;
