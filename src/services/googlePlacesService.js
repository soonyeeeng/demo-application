import { from } from 'rxjs'; // Importing from RxJS to convert promises to observables
import { GOOGLE_API_KEY, GOOGLE_API_HOST } from '@env'; // Ensure GOOGLE_API_HOST is defined in your .env

export const fetchPlaceDetails = (placeId) => {
  const url = `${GOOGLE_API_HOST}/details/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`;

  return from(
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.status === 'OK') {
          return data.result;
        } else {
          throw new Error(`Google API Error: ${data.status}`);
        }
      })
      .catch(error => {
        console.error('Fetch Error:', error);
        throw error; // Propagate error for further handling
      })
  );
};

export const fetchPlaceSuggestions = (input) => {
  const url = `${GOOGLE_API_HOST}/autocomplete/json?input=${input}&key=${GOOGLE_API_KEY}`;

  return from(
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.predictions) {
          return data.predictions;
        } else {
          return [];
        }
      })
      .catch(error => {
        console.error('Fetch Error:', error);
        return []; // Return an empty array in case of error
      })
  );
};
