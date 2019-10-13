import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { ResultsGridWrapper, Error } from '../elements';
import { AgGridReact } from 'ag-grid-react';

Results.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  results: PropTypes.array
};
const columnDefs = [
  {
    headerName: 'Name',
    field: 'name',
    width: 350
  },
  {
    headerName: 'Description',
    field: 'description',
    width: 450
  }
];
export default function Results({ loading, error, results = [] }) {
  if (loading) {
    return <Skeleton count={1} height={300} />;
  }
  if (error) {
    return <Error>{error}</Error>;
  }
  const onRowDoubleClicked = ({ data: { url } }) => {
    window.open(url);
  };

  return (
    <ResultsGridWrapper>
      {results.length > 0 && (
        <>
          <p>Double click row to go to repo</p>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={results}
            onRowDoubleClicked={onRowDoubleClicked}
          />
        </>
      )}
    </ResultsGridWrapper>
  );
}
