function Table(props) {
  console.log(props.apiData);

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Step 1: Creating a table-component for API-data to show
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
      {props.apiData.results.map((data) => (
          <tr>
            <td>{data.Country}</td>
            <td>{data.Continent}</td>
            <td>{data.Population}</td>
            <td>{data.PopulationGrowth}</td>
          </tr>
      ))}
      </tbody>
    </table>;
  }
}

export default Table;
