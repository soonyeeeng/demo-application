// epics/suggestionsEpic.js
import {ofType} from 'redux-observable';
import {map, mergeMap, catchError, debounceTime} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  fetchPlaceDetails,
  fetchPlaceSuggestions,
} from '../../services/googlePlacesService';
import {
  FETCH_SUGGESTIONS,
  fetchSuggestionsSuccess,
  fetchSuggestionsError,
  FETCH_SUGGESTIONS_DETAIL,
  fetchSuggestionsDetailSuccess,
  fetchSuggestionsDetailError,
} from '../actions/suggestionsActions';

export const suggestionsEpic = action$ =>
  action$.pipe(
    ofType(FETCH_SUGGESTIONS), // Listen for the FETCH_SUGGESTIONS action
    debounceTime(200), //Wait for the user to stop typing for 500ms
    mergeMap(action => {
      const query = action.payload; // Extract the search query (payload)
      return fetchPlaceSuggestions(query).pipe(
        map(response => fetchSuggestionsSuccess(response)),
        catchError(error => of(fetchSuggestionsError(error))),
      );
    }),
  );
export const suggestionsDetailEpic = action$ =>
  action$.pipe(
    ofType(FETCH_SUGGESTIONS_DETAIL), // Listen for the FETCH_SUGGESTIONS_DETAIL action
    mergeMap(action => {
      const query = action.payload; // Extract the search query (payload)
      return fetchPlaceDetails(query).pipe(
        map(response => fetchSuggestionsDetailSuccess(response)),
        catchError(error => of(fetchSuggestionsDetailError(error))),
      );
    }),
  );
