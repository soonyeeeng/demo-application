// reducers/searchReducer.js
import { ADD_SEARCH } from "../actions/searchActions";

const initialState = {
  searchHistory: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return {
        ...state,
        searchHistory: [action.payload, ...state.searchHistory], // Add new search at the beginning
      };
    default:
      return state;
  }
};

export default searchReducer;
