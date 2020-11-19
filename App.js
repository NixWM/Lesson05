/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {BoatList} from './Boats';
import {MovieList} from './Movies';
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <Text style={styles.appTitle}>GetABoat - For Sale</Text>
        <BoatList />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  appTitle: {
    backgroundColor: Colors.black,
    color: '#749589',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default App;
