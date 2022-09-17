function Table(props) {
  console.log(props.apiData);

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // [Step 1] Creating a table-component for API-data to show
    return <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Continent</th>
          <th>Population</th>
          <th>Population Growth</th>
        </tr>
      </thead>
      <tbody>
      {/* Uses map-function to create table-elements for each country in apiData*/}
      {props.apiData.results.map((data) => (
          <tr key={data.Country+"-list"}>
            <td key={data.Country}>
              {data.Country}</td>
            <td key={data.Continent}>
              {data.Continent}</td>
            <td key={data.Population}>
              {data.Population}</td>
            <td key={data.PopulationGrowth}>
              {data.PopulationGrowth}</td>
          </tr>
      ))}
      </tbody>
    </table>;
  }
}
export default Table;
