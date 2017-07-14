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
import Home from './components/Home.js';

import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = { title: 'Welcome',};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          Home
        </Text>
        <Button
          onPress={() => navigate('Validation')}
          title = 'Validation'
        />
      </View>
      
    );
  }
}

class ValidationScreen extends Component{
  static navigationOptions = {title: "Validation"}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          Validation!
        </Text>
        
      </View>
    );
  }
}

const PawsAndStripesNativeApp = StackNavigator({
  Home: {screen: HomeScreen},
  Validation: {screen: ValidationScreen},
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor:"black"// '#F5FCFF',
  }
});

AppRegistry.registerComponent('PawsAndStripesNativeApp', () => PawsAndStripesNativeApp);
