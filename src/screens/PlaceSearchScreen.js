import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import AutoCompleteInput from '../components/AutoCompleteInput';

import PlaceDetailSheet from '../components/PlaceDetailSheet';
import { usePlaceSearch } from '../hooks/usePlaceSearch';
import { requestLocationPermission, getLocation } from '../services/locationService';
import { Toast } from '@ant-design/react-native';
import MapComponent from '../components/MapComponent';

const PlaceSearchScreen = () => {
  const {
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
  } = usePlaceSearch();

  const screenHeight = Dimensions.get('window').height * 0.6;

  useEffect(() => {
    const initLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        try {
          const location = await getLocation();
          onSearchChange('');
          setRegion(prev => ({
            ...prev,
            latitude: location.latitude,
            longitude: location.longitude,
          }));
        } catch (errMessage) {
          Toast.fail({ content: errMessage, position: 'bottom' });
        }
      }
    };
    initLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AutoCompleteInput
        query={query}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        onSuggestionSelect={onSuggestionSelect}
        onCancel={onCancel}
        placeholder="Search Here"
        cancelText="Cancel"
        allowClear={query.length > 0}
      />
      <MapComponent region={region} marker={marker} />
      <PlaceDetailSheet
        suggestionsDetail={suggestionsDetail}
        screenHeight={screenHeight}
        showDetail={showDetail}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default PlaceSearchScreen;
