import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Modal from "react-native-modal";

class MarkerModal extends Component {
  state = {
    isModalVisible: true
  };

  toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });
  

  render() {
    return (
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this.toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    );
  }
}

export default MarkerModal;
