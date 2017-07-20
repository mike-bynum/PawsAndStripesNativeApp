
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import {Alert} from 'react-native';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';



class Login extends Component {
    static navigationOptions = {header:null}
    constructor(props){
        super(props);
        this.state = {
            user: null
        };
    }


    componentDidMount(){
        this._setupGoogleSignin();
    }

    render() {
        const { navigate } = this.props.navigation;
        if(!this.state.user){
            console.log("Login.js -- No User found, display Gmail Login Button");
            return(
                <View style={styles.container}>
                    <Text style={styles.txt}>
                        Welcome to the Lucky Paws Time Tracker app.
                        Please Sign in with Google to continue.
                    </Text>
                    <GoogleSigninButton style={styles.login} 
                        color={GoogleSigninButton.Color.Dark} 
                        size={GoogleSigninButton.Size.Standard.icon}
                        onPress = { () => {this._signIn();}}
                    />
                </View>
            );
        }

        if(this.state.user) {
            console.log("Login.js -- User: " + this.state.user.name + "was found, display 'Splash' screen");
            return navigate('Splash', {user: this.state.user}); 
        }
    }


    async _setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true});
            await GoogleSignin.configure({
                webClientId: '1076761594654-utkunpdbm4e30voj0kvuinr1v3s70ibt.apps.googleusercontent.com',
                offlineAccess: false
            });

            const user = await GoogleSignin.currentUserAsync();
            //console.log("USER: " + user.name);
            this.setState({user});
        }
        catch(err) {
            console.log("Play services error", err.code, err.message); 
        }
    }

     _signIn() {
        GoogleSignin.signIn()
        .then((user) => {
        //console.log(user);
        this.setState({user: user});
        })
        .catch((err) => {
        console.log('WRONG SIGNIN', err.stack);
        })
        .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done();
  }
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  txt: {
      fontSize: 18, 
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
       marginBottom: 20
    },
    logout: {
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 100,
        alignItems: 'center',
        width: 300,
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 10
    },
    login : {
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 100,
        alignItems: 'center',
        width: 300, 
        height: 50,
    },
    headers : {
        color: 'blue'
    },
    userInfo: {
        color: 'gray'
    }
});

