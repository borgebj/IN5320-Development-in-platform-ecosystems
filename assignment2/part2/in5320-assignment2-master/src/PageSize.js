import React from "react";

/* [Step 3] Allows user to change page-size of data and table*/
function PageSize(props) {

    // changes the page size from prop
    // also changes page to 1 to not cause crash
    const onChange = (event) => {
        props.setPageSize(event.target.value);
        props.setPageNumber(1);
    }

    return (
        <div>
            <label>Results per page:</label>
            <select onChange={onChange}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    )
}
export default PageSize;