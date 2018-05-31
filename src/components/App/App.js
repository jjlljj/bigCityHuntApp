import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/rootReducer';
import MapViewContainer from '../MapViewContainer/MapViewContainer.js';
import BlogView from '../BlogView/BlogView.js';

const store = createStore(rootReducer);

const routeConfig = {
  Map: {
    screen: MapViewContainer
  },
  Blog: {
    screen: BlogView 
  },
};

const navConfig = {
  tabBarPosition: "bottom",
  tabBarOptions: {
    activeTintColor: "#f2f2f2",
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: "#666",
    padding: 20,
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
};

const RootNav = createBottomTabNavigator(routeConfig, navConfig);


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RootNav />
      </Provider>
    );
  }
}

