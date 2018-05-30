import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

class MapViewContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  }

  render() {
    return (
       <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default MapViewContainer;
