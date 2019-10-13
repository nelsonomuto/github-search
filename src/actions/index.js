import {
  SEARCH_INPUT,
  CANCEL_SEARCH
} from './SearchResults.actions';

export const appActions = {
  searchInput: payload => ({ type: SEARCH_INPUT, payload }),
  cancelSearch: () => ({ type: CANCEL_SEARCH })
}