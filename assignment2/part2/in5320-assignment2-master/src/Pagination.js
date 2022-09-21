import React  from "react";

/* [Step 4] Allows users to change page of table*/
function Pagination(props) {

    const pageNumber = props.pageNumber
    const lastPage = props.lastPage

    // changes to previous page
    const onPrevClick = () => {
        props.setPageNumber(pageNumber - 1);
    }

    // changes to next page
    const onNextClick = () => {
        props.setPageNumber(pageNumber + 1);
    }

    // disables previous if on first page, or next button if on last page
    return (
        <div>
            <button disabled={pageNumber===1} onClick={onPrevClick} className="pageButton">
                <i>🡸</i>
            </button>
            {`page ${pageNumber} of ${lastPage}`}
            <button disabled={pageNumber===lastPage} onClick={onNextClick} className="pageButton">
                <i>🡺</i>
            </button>
        </div>
    )
}
export default Pagination;