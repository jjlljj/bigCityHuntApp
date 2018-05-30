import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchHunts } from '../../api/apiCalls.js'; 
import { addHunts } from '../../actions';
import MapView, { Marker } from 'react-native-maps';

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
      console.log('hunts', hunts[0])
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    let { hunts } = this.props

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
        { hunts.length &&
          <Marker
            coordinate={{latitude: parseFloat(hunts[0].lat), longitude: parseFloat(hunts[0].long)}}
            title={"Cool Marker"}
          />
        }
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
