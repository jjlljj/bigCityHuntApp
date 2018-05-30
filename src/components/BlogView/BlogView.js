import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BlogView extends Component {
  static navigationOptions = {
    title: 'Blog',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> I am blog view </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  }
})

export default BlogView;
