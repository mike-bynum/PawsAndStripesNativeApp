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

import { StackNavigator } from 'react-navigation';
import Home from './components/Home.js';
import Verify from './components/Verify.js';
import Farewell from './components/Farewell.js';

const PawsAndStripesNativeApp = StackNavigator ({

Home: { screen: Home},

})
 {/* 
  render() {
    return (

     
      <View style={styles.container}>
        <Home/> <Verify/>  
       <Farewell/>
      </View>
      
    );
  }
  */}

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"// '#F5FCFF',
  }
});

AppRegistry.registerComponent('PawsAndStripesNativeApp', () => PawsAndStripesNativeApp);
