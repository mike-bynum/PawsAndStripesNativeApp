import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  TouchableOpacity,
  Button
} from 'react-native';

import { StackNavigator, Navigator } from 'react-navigation'



class ValidationScreen extends Component{
  static navigationOptions = {header: null}
  render() {
    
    return (
      <View>
        <Text>
          Validation!
        </Text>
        
      </View>
    );
  }
}

export default ValidationScreen