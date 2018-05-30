import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MapViewContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> I am map view </Text>
      </View>
    )
  }
}

export default MapViewContainer;
