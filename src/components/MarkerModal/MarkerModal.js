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
            <View style={styles.huntBanner}>
              <Image 
                source={{uri: huntLargePhotoURL }}
                style={{flex: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12}} 
              />
            </View>
            <View style={styles.headerWrap}>
              <Text style={styles.headerText}>{name}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text>{`Starting Location: ${starting_location}`}</Text>
              <Text>{description}</Text>
            </View>
            <TouchableOpacity style={styles.hideBtn} onPress={this.toggleModal}>
              <Text style={{color: '#f2f2f2', fontSize: 14, fontWeight: 'bold'}}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 30,
    marginHorizontal: 20,
    position: 'relative',
  },
  huntBanner: {
    alignSelf: 'stretch',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  headerWrap: {
    alignSelf: 'stretch',
    alignContent: 'center',
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
    alignItems: 'center',
    backgroundColor: '#2EC4B6',
    borderRadius: 4,
    bottom: 0,
    margin: 20,
    padding: 10,
    position: 'absolute',
    width: 240,
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
