import {
  START_NEW_SEARCH,
  SEARCH_INPUT,
  CANCEL_SEARCH
} from './SearchResults.actions';

import {
  SET_SEARCH_ERROR,
  SET_SEARCH_LOADING,
  SET_SEARCH_RESULTS,
  SET_SEARCH_REPO_QUERY
} from './App.actions';

export {
  START_NEW_SEARCH,
  SEARCH_INPUT,
  CANCEL_SEARCH,
  SET_SEARCH_ERROR,
  SET_SEARCH_LOADING,
  SET_SEARCH_RESULTS,
  SET_SEARCH_REPO_QUERY
}

export const searchActions = {
  searchInput: payload => ({ type: SEARCH_INPUT, payload }),
  cancelSearch: () => ({ type: CANCEL_SEARCH })
}

export const appActions = {
  setSearchRepoQuery: payload => ({ type: SET_SEARCH_REPO_QUERY, payload}),
  setSearchLoading: payload => ({ type: SET_SEARCH_LOADING, payload}),
  setSearchResults: payload => ({ type: SET_SEARCH_RESULTS, payload}),
  setSearchError: payload => ({ type: SET_SEARCH_ERROR, payload})
}