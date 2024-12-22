// MapComponent
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const MapComponent = ({ region, marker }) => {
  return (
    <MapView
      style={styles.map}
      region={region}
      key={`${region.latitude}-${region.longitude}`}>
      {marker && (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapComponent;