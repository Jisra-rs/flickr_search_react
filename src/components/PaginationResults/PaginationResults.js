import React from 'react';
import './PaginationResults.css';

const PaginationResults = ({
  handleSearch,
  lastPage,
  page,
  search,
  btnIniPagDisable,
  btnFinPagDisable,
}) => (
  <div className="pagination">
    <div className="paginationInfo">
      <button
        disabled={btnIniPagDisable}
        onClick={() => handleSearch(search, page - 1)}
      >
        Previous
      </button>
      <span className="pagSpan">
        Page {page} of {lastPage}
      </span>
      <button
        disabled={btnFinPagDisable}
        onClick={() => handleSearch(search, page + 1)}
      >
        Next{' '}
      </button>
    </div>
  </div>
);

export default PaginationResults;
