import {combineReducers} from 'redux';

import searchReducer from './searchReducer';
import suggestionsReducer from './suggestionsReducers';
import suggestionsDetailReducer from './suggestionsDetailReducers';

export default combineReducers({
  suggestions: suggestionsReducer,
  suggestionsDetail: suggestionsDetailReducer,
  search: searchReducer,
});
