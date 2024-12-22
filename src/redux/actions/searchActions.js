
export const ADD_SEARCH = 'ADD_SEARCH';

export const addSearch = (searchText) => ({
  type: ADD_SEARCH,
  payload: searchText,
});