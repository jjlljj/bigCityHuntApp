import React, { Component } from 'react';
import { WebView } from 'react-native';

class BlogView extends Component {
  static navigationOptions = {
    title: 'Blog',
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://letsroam.com/explorer/)'}}
        style={{marginTop: 20}}
      />
    )
  }
}

export default BlogView;
