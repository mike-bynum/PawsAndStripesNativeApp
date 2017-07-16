/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  TouchableOpacity,
  Button
} from 'react-native';

import Routes from './router/Router.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Validation from './components/Validation.js';
import Success from './components/Success.js';

import { StackNavigator } from 'react-navigation';

const PawsAndStripesNativeApp = StackNavigator({
  Login: {screen: Login},
  Home: {screen: Home},
  Validation: {screen: Validation},
  Success: {screen: Success}
},  {
  initialRouteName: 'Login',
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor:"black"// '#F5FCFF',
  }
});

AppRegistry.registerComponent('PawsAndStripesNativeApp', () => PawsAndStripesNativeApp);
