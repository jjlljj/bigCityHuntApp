import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Modal from "react-native-modal";
import { toggleMarkerModal } from '../../actions';

class MarkerModal extends Component {

  toggleModal = () => {
    this.props.toggleMarkerModal()
  }

  render() {
    const { showMarkerModal, markerModalContent } = this.props;
    const { name, city, state, description, huntMediumPhotoURL, long_description, star_rating, starting_location  } = markerModalContent;
    console.log(markerModalContent)

    return (
        <Modal isVisible={showMarkerModal}>
          <View style={{ flex: 1 }}>
            <Text>{name}</Text>
            <TouchableOpacity onPress={this.toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    );
  }
}

const mapStateToProps = ({ showMarkerModal, markerModalContent }) => ({
  showMarkerModal,
  markerModalContent
})

const mapDispatchToProps = dispatch => ({
  toggleMarkerModal: () =>  dispatch(toggleMarkerModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(MarkerModal);
