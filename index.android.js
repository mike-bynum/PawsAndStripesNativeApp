/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native'
import Login from './components/Login.js';
import Home from './components/Home.js';
import Validation from './components/Validation.js';
import Success from './components/Success.js';

import { StackNavigator } from 'react-navigation';

console.disableYellowBox = true
/**
 * Creates the stack navigation routes and registers the apps.
 */
const PawsAndStripesNativeApp = StackNavigator({
  Login: {screen: Login},
  Home: {screen: Home},
  Validation: {screen: Validation},
  Success: {screen: Success}
},  {
  transitionConfig: () => ({ screenInterpolator: () => null}),
  initialRouteName: 'Login',
});


AppRegistry.registerComponent('PawsAndStripesNativeApp', () => PawsAndStripesNativeApp);
