// actions/dataActions.js
export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS';
export const FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS';
export const FETCH_SUGGESTIONS_ERROR = 'FETCH_SUGGESTIONS_ERROR';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';

export const FETCH_SUGGESTIONS_DETAIL = 'FETCH_SUGGESTIONS_DETAIL';
export const FETCH_SUGGESTIONS_DETAIL_SUCCESS =
  'FETCH_SUGGESTIONS_DETAIL_SUCCESS';
export const FETCH_SUGGESTIONS_DETAIL_ERROR = 'FETCH_SUGGESTIONS_DETAIL_ERROR';
export const CLEAR_SUGGESTIONS_DETAIL = 'CLEAR_SUGGESTIONS_DETAIL';

//Get Suggestions Detail
export const fetchSuggestions = query => ({
  type: FETCH_SUGGESTIONS,
  payload: query, // Pass the query as payload
});
export const fetchSuggestionsSuccess = data => ({
  type: FETCH_SUGGESTIONS_SUCCESS,
  payload: data,
});
export const fetchSuggestionsError = error => ({
  type: FETCH_SUGGESTIONS_ERROR,
  payload: error,
});

export const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS,
});
//************************* */
//Get Suggestions Detail//
export const fetchSuggestionsDetail = query => ({
  type: FETCH_SUGGESTIONS_DETAIL,
  payload: query,
});
export const fetchSuggestionsDetailSuccess = data => ({
  type: FETCH_SUGGESTIONS_DETAIL_SUCCESS,
  payload: data,
});
export const fetchSuggestionsDetailError = error => ({
  type: FETCH_SUGGESTIONS_DETAIL_ERROR,
  payload: error,
});
export const clearSuggestionsDetail = () => ({
  type: CLEAR_SUGGESTIONS_DETAIL,
});

