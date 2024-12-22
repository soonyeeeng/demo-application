import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSuggestions,
  clearSuggestionsDetail,
  fetchSuggestions,
  fetchSuggestionsDetail,
} from '../redux/actions/suggestionsActions';
import { Dimensions } from 'react-native'; // Import Dimensions API
import * as _ from 'lodash';

export const usePlaceSearch = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(state => state.suggestions.suggestions);
  const suggestionsDetail = useSelector(state => state.suggestionsDetail.suggestionsDetail);

  // Screen dimensions
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922; // Default zoom level
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [region, setRegion] = useState({
    latitude: 3.1528159497669783,
    longitude: 101.6865431641927,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [showDetail, setShowDetail] = useState(false);
  const [marker, setMarker] = useState(null);
  const [query, setQuery] = useState('');

  const onSearchChange = text => {
    dispatch(fetchSuggestions(text));
    setQuery(text);
  };

  const onSuggestionSelect = item => {
    if (item) {
      setQuery(item.description);
      setShowDetail(true);
      dispatch(fetchSuggestionsDetail(item.place_id));
      dispatch(clearSuggestions());
    }
  };

  useEffect(() => {
    if (!_.isEmpty(suggestionsDetail)) {
      const { lat, lng } = suggestionsDetail.geometry.location;
      setRegion(prev => ({
        ...prev,
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }));
      setMarker({ latitude: lat, longitude: lng, title: suggestionsDetail.name });
    }
  }, [suggestionsDetail, LATITUDE_DELTA, LONGITUDE_DELTA]);

  const onCancel = () => {
    setQuery('');
    setMarker(null);
    setShowDetail(false);
    dispatch(clearSuggestions());
    dispatch(clearSuggestionsDetail());
  };
  
  return {
    suggestions,
    suggestionsDetail,
    query,
    region,
    marker,
    showDetail,
    onSearchChange,
    onSuggestionSelect,
    onCancel,
    setRegion,
  };
};
