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
  View
} from 'react-native';
import Home from './components/Home.js';

export default class PawsAndStripesNativeApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black"// '#F5FCFF',
  }
});

AppRegistry.registerComponent('PawsAndStripesNativeApp', () => PawsAndStripesNativeApp);
