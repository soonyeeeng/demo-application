
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as AntDProvider} from '@ant-design/react-native';
import PlaceSearchScreen from './src/screens/PlaceSearchScreen';
import store from './src/redux/store';
import {StyleSheet, View} from 'react-native';
import SearchHistory from './src/screens/SearchHistory';


const App = () => (
  <ReduxProvider store={store}>
    <AntDProvider>
      <View style={styles.container}>
        <PlaceSearchScreen />
        {/* <SearchHistory /> */}
      </View>
    </AntDProvider>
  </ReduxProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
});

export default App;
