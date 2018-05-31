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
    const { name, city, state, description, huntLargePhotoURL, long_description, star_rating, starting_location  } = markerModalContent;
    console.log(markerModalContent)

    return (
        <Modal isVisible={showMarkerModal} animationIn="slideInUp" animationTiming="300">
          <View style={styles.modalView}>
            <Image 
              style={styles.huntBanner} 
              source={{uri: huntLargePhotoURL }}
            />
            <View style={styles.headerWrap}>
              <Text style={styles.headerText}>{name}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text>{`Starting Location: ${starting_location}`}</Text>
              <Text>{description}</Text>
            </View>
            <TouchableOpacity style={styles.hideBtn} onPress={this.toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 20,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  huntBanner: {
    alignSelf: 'stretch',
    height: 180
  },
  headerWrap: {
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: '#2EC4B6',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerText: {
    color: '#f2f2f2',
    fontSize: 22,
    fontWeight: 'bold',
  
  },
  textWrap: {
    padding: 10,
  },

  hideBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#2EC4B6',
    bottom: 10,
    margin: 10,
    position: 'absolute',
    alignItems: 'center',
  }
});

const mapStateToProps = ({ showMarkerModal, markerModalContent }) => ({
  showMarkerModal,
  markerModalContent
})

const mapDispatchToProps = dispatch => ({
  toggleMarkerModal: () =>  dispatch(toggleMarkerModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(MarkerModal);
