import React, { useEffect } from 'react';
import GlobalStyles from '../elements/global-styles';
import Search from './Search';
import Results from './Results';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_REPO } from '../api/query';
import { appActions } from '../actions';

App.propTypes = {
  setSearchLoading: PropTypes.func,
  setSearchError: PropTypes.func,
  setSearchResults: PropTypes.func,
  setSearchRepoQuery: PropTypes.func
};
function App({
  setSearchLoading,
  setSearchError,
  setSearchRepoQuery,
  setSearchResults
}) {
  const [searchRepoQuery, { loading, error, data }] = useLazyQuery(SEARCH_REPO);
  useEffect(() => {
    setSearchRepoQuery(searchRepoQuery);
  }, [setSearchRepoQuery, searchRepoQuery]);

  useEffect(() => {
    setSearchLoading(loading);
  }, [setSearchLoading, loading]);

  useEffect(() => {
    setSearchError(error);
  }, [setSearchError, error]);

  useEffect(() => {
    const results = data && data.search.edges.map(edge => edge.node);
    setSearchResults(results);
  }, [setSearchResults, data]);

  return (
    <>
      <GlobalStyles />
      <Search />
      <Results />
    </>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(App);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}
