import { combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { all } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  searchResultsReducers,
  searchResultsSagas,
  initialState as searchResultsInitialState
} from './SearchResults.state';

export const history = createBrowserHistory();

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    searchResults: searchResultsReducers
  });

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([...searchResultsSagas]);
}

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Nelson Github Search'
      })
    : compose;

const enhancers = applyMiddleware(routerMiddleware(history), sagaMiddleware);

export const store = createStore(
  rootReducer(history),
  {
    searchResults: searchResultsInitialState
  },
  composeEnhancers(enhancers)
);

sagaMiddleware.run(rootSaga);
