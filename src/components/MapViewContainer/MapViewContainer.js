import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchHunts } from '../../api/apiCalls.js'; 
import { addHunts } from '../../actions';
import MapView, { Marker } from 'react-native-maps';

const markerIcon = require('./assets/marker-icon.png')

class MapViewContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  }

  componentDidMount = () => {
    this.getCityHunts()
  }

  getCityHunts = async() => {
    try {
      const hunts = await fetchHunts()
      this.props.addHunts(hunts)
    } catch (error) {
      console.log(error)
    }
  }

  renderHuntMarkers = () => {
    let { hunts } = this.props

    if (hunts.length) {
      return hunts.map(hunt => {
        return (
          <Marker
            style={{width: 28, height: 34}} 
            key={`hunt${hunt.hunt_id}`}
            coordinate={{latitude: parseFloat(hunt.lat), longitude: parseFloat(hunt.long)}}
            onCalloutPress={() => this.handleCalloutPress(hunt.name)}
            title={hunt.name}
            centerOffset={{x: -6, y: -20}}
            calloutOffset={{x: 0, y: -24}}
          >
            <Image source={markerIcon} style={{width: 24, height: 36, marginLeft: -6, marginTop: -20}} />
          </Marker>
        )
      })
    }
  }

  handleCalloutPress = huntName => {
    console.log(huntName)
  }

  render() {

    return (
       <MapView
        style={styles.container}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 39.747523,
          longitude: -104.9920755,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        { this.renderHuntMarkers() }
      </MapView>
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

const mapStateToProps = ({hunts}) => ({
  hunts
})

const mapDispatchToProps = dispatch => ({
  addHunts: hunts => dispatch(addHunts(hunts))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapViewContainer)
