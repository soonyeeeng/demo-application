import { CLEAR_SUGGESTIONS_DETAIL, FETCH_SUGGESTIONS_DETAIL, FETCH_SUGGESTIONS_DETAIL_ERROR, FETCH_SUGGESTIONS_DETAIL_SUCCESS } from "../actions/suggestionsActions";

const initialState = {
  suggestionsDetail: {},
  loading: false,
  error: null,
};

const suggestionsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUGGESTIONS_DETAIL:
      return {...state, loading: true, error: null};
    case FETCH_SUGGESTIONS_DETAIL_SUCCESS:
      return {...state, loading: false, suggestionsDetail: action.payload};
    case FETCH_SUGGESTIONS_DETAIL_ERROR:
      return {...state, loading: false, error: action.error};
    case CLEAR_SUGGESTIONS_DETAIL:
      return {
        ...state,
        suggestions: [], // Clear suggestions when this action is dispatched
      };

    default:
      return state;
  }
};

export default suggestionsDetailReducer;
