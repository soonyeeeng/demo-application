// PlaceDetailSheet Component
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { Carousel } from '@ant-design/react-native';
import { GOOGLE_API_KEY, GOOGLE_API_HOST } from '@env';

const PlaceDetailSheet = ({ suggestionsDetail, screenHeight, showDetail }) => {
  const carouselRef = useRef(null);

  return (
    <BottomSheet
      isOpen={Object.keys(suggestionsDetail).length > 0}
      sliderMinHeight={Object.keys(suggestionsDetail).length > 0 ? 50 : 0}
      sliderMaxHeight={screenHeight}
      wrapperStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      {showDetail && Object.keys(suggestionsDetail).length > 0 ? (
        <ScrollView style={styles.sheetContent}>
          {suggestionsDetail.photos?.length > 0 ? (
            <Carousel style={styles.wrapper} infinite autoplay ref={carouselRef}>
              {suggestionsDetail.photos.map((photo, index) => (
                <Image
                  key={index}
                  style={styles.photo}
                  source={{
                    uri: `${GOOGLE_API_HOST}/photo?maxwidth=400&photo_reference=${photo.photo_reference}&key=${GOOGLE_API_KEY}`,
                  }}
                />
              ))}
            </Carousel>
          ) : (
            <Text style={styles.noPhotoText}>No Photos Available</Text>
          )}

          <View style={styles.sheetContentDesc}>
            <Text style={styles.formattedAddress}>
              {suggestionsDetail.formatted_address || 'No Address Available'}
            </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(suggestionsDetail.url)}>
              <Text style={styles.linkText}>View on Google Maps</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : null}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sheetContent: {
    paddingBottom: 10,
  },
  sheetContentDesc: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  formattedAddress: {
    fontSize: 16,
    marginBottom: 10,
  },
  photo: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  noPhotoText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10,
  },
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default PlaceDetailSheet;