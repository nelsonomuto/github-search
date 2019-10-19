import { put, debounce, select, takeLatest } from 'redux-saga/effects';
import {
  SEARCH_INPUT,
  CANCEL_SEARCH,
  START_NEW_SEARCH,
  SET_SEARCH_ERROR,
  SET_SEARCH_RESULTS,
  SET_SEARCH_REPO_QUERY,
  SET_SEARCH_LOADING
} from '../actions';

export const initialState = {
  searchRepoQuery: () => {}, // apollo client search repo query placeholder
  searchTerm: '', // user input
  results: [],
  error: '',
  loading: false
};

export const searchResultsReducers = (state = initialState, action) => {
  switch (action.type) {
    case START_NEW_SEARCH: {
      return { ...state, loading: true };
    }
    case SEARCH_INPUT: {
      return { ...state, searchTerm: action.payload };
    }
    case CANCEL_SEARCH: {
      return { ...state, loading: false };
    }
    case SET_SEARCH_RESULTS: {
      return { ...state, results: action.payload || [] };
    }
    case SET_SEARCH_ERROR: {
      return { ...state, error: action.payload || '', loading: false };
    }
    case SET_SEARCH_REPO_QUERY: {
      return { ...state, searchRepoQuery: action.payload };
    }
    case SET_SEARCH_LOADING: {
      return { ...state, loading: action.payload || false };
    }
    default: {
      return state;
    }
  }
};

export const searchResultsSagas = [
  debounce(1000, SEARCH_INPUT, search),
  takeLatest(CANCEL_SEARCH, cancelSearch)
];

function* cancelSearch() {
  // TODO: cancel any pending search requests
}

const getSearchRepoQuery = state => state.searchResults.searchRepoQuery;

function* search(action) {
  const searchTerm = action.payload;
  yield put({ type: CANCEL_SEARCH });
  yield put({ type: START_NEW_SEARCH });
  const searchRepoQuery = yield select(getSearchRepoQuery);
  searchRepoQuery({
    variables: {
      searchTerm
    }
  })
}
