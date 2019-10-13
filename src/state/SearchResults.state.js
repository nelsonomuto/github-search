import { put, debounce, call, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  SEARCH,
  SEARCH_INPUT,
  CANCEL_SEARCH,
  RESULTS_FOUND,
  SEARCH_ERROR,
  UPDATE_CANCEL_TOKEN_SOURCE
} from '../actions/SearchResults.actions';
import { apiSearch } from '../api';

export const searchResultsActions = {
  search: payload => ({ type: SEARCH, payload }),
  cancelSearch: payload => ({ type: CANCEL_SEARCH, payload }),
  resultsFound: payload => ({ type: RESULTS_FOUND, payload }),
  searchError: payload => ({ type: SEARCH_ERROR, payload })
};

export const initialState = {
  searchTerm: '',
  cancelTokenSource: axios.CancelToken.source(),
  results: [],
  error: '',
  loading: false
};

let cancelCount = 0;
export const searchResultsReducers = (state = initialState, action) => {
  const { searchTerm, results, error } = action.payload || {};
  switch (action.type) {
    case SEARCH_INPUT:
      return { ...state, searchTerm };
    case SEARCH: {
      return { ...state, loading: true };
    }
    case UPDATE_CANCEL_TOKEN_SOURCE: {
      const cancelTokenSource = axios.CancelToken.source();
      cancelTokenSource.id = ++cancelCount;
      return { ...state, cancelTokenSource, cancelCount };
    }
    case CANCEL_SEARCH: {
      return { ...state, loading: false };
    }
    case RESULTS_FOUND: {
      return { ...state, results, loading: false };
    }
    case SEARCH_ERROR: {
      return { ...state, error, loading: false };
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

const getCancelTokenSource = state => state.searchResults.cancelTokenSource;

function* cancelSearch() {
  const cancelTokenSource = yield select(getCancelTokenSource);
  console.log('cancelling search...', {
    cancelTokenSourceId: cancelTokenSource.id
  });
  cancelTokenSource.cancel();
  yield put({
    type: UPDATE_CANCEL_TOKEN_SOURCE
  });
}

function* search(action) {
  const { searchTerm } = action.payload;
  yield put({ type: CANCEL_SEARCH });
  try {
    yield put({ type: SEARCH });
    const cancelTokenSource = yield select(getCancelTokenSource);
    console.log('calling search api....', {
      cancelTokenSourceId: cancelTokenSource.id
    });
    const results = yield call(apiSearch, { searchTerm, cancelTokenSource });
    yield put({ type: RESULTS_FOUND, payload: { results } });
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log('Request canceled', err.message);
    }
    yield put({
      type: SEARCH_ERROR,
      payload: { error: err.message }
    });
  }
}
