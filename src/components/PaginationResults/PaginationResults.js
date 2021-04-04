import React from 'react';
import './paginationResults.css';

const PaginationResults = props => {
  const {
    handleSearch,
    lastPage,
    page,
    search,
    btnIniPagDisable,
    btnFinPagDisable,
  } = props;

  return (
    <>
      <div id="_pagination">
        <div id="_paginationInfo">
          <button
            id="_previousPag"
            disabled={btnIniPagDisable}
            onClick={() => handleSearch(search, page - 1)}
          >
            Previous
          </button>
          <span id="_pagSpan" className="_pagSpan">
            Page {page} of {lastPage}
          </span>
          <button
            id="_nextPag"
            disabled={btnFinPagDisable}
            onClick={() => handleSearch(search, page + 1)}
          >
            Next{' '}
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationResults;
