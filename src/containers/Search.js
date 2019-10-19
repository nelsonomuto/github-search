import React from 'react';
import SearchBar from '../components/SearchBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchActions } from '../actions';
import PropTypes from 'prop-types';

Search.propTypes = {
  searchInput: PropTypes.func,
  cancelSearch: PropTypes.func,
  searchResults: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool,
  })
};
function Search({
  searchInput,
  cancelSearch,
  searchResults,
}) {
  const { loading, error } = searchResults;

  const onSearch = searchTerm => searchInput(searchTerm);

  return (
    <SearchBar
      loading={loading}
      error={error}
      onSearch={onSearch}
      onCancelSearch={cancelSearch}
    />
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(searchActions, dispatch);
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults
  };
}
