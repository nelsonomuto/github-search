import React from 'react';
import GlobalStyles from '../elements/global-styles';
import Search from '../components/Search';
import Results from '../components/Results';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appActions } from '../actions';
import PropTypes from 'prop-types';

App.propTypes = {
  searchInput: PropTypes.func,
  cancelSearch: PropTypes.func,
  searchResults: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool,
    results: PropTypes.array
  })
};
function App({ searchInput, cancelSearch, searchResults }) {
  const { loading, error, results } = searchResults;
  return (
    <>
      <GlobalStyles />
      <Search
        loading={loading}
        error={error}
        onSearch={searchTerm => searchInput({ searchTerm })}
        onCancelSearch={cancelSearch}
      />
      <Results loading={loading} error={error} results={results} />
    </>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults
  };
}
