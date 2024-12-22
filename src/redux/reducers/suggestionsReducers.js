import {
  CLEAR_SUGGESTIONS,
  FETCH_SUGGESTIONS,
  FETCH_SUGGESTIONS_ERROR,
  FETCH_SUGGESTIONS_SUCCESS,
} from '../actions/suggestionsActions';

const initialState = {
  suggestions: [],
  loading: false,
  error: null,
};

const suggestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUGGESTIONS:
      return {...state, loading: true, error: null};
    case FETCH_SUGGESTIONS_SUCCESS:
      return {...state, loading: false, suggestions: action.payload};
    case FETCH_SUGGESTIONS_ERROR:
      return {...state, loading: false, error: action.error};

    case CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: [], // Clear suggestions when this action is dispatched
      };

    default:
      return state;
  }
};

export default suggestionsReducer;
