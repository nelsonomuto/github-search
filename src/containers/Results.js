import React from 'react';
import ResultsGrid from '../components/ResultsGrid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

Results.propTypes = {
  searchResults: PropTypes.shape({
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
    results: PropTypes.array
  })
};
function Results({ searchResults: { loading, error, results, searchTerm } }) {
  return (
    <ResultsGrid
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      results={results}
    />
  );
}

export default connect(mapStateToProps)(Results);

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults
  };
}
