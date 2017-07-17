
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import {Alert} from 'react-native';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';



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

        if(!this.state.user){
            console.log("Login.js -- No User found, display Gmail Login Button");
            return(
                <View style={styles.container}>
                    <Image source = {require('./img/paws-screen1-bg.png')} style = {styles.bgImgContainer}>
                        <View style = {styles.loginView}>
                            <TouchableOpacity onPress = { () => {this._signIn();}} style = {styles.buttonContainer}>
                                <Image source = {require('./img/google_button_icon.png')} style = {styles.buttonImage} />
                                <Text style = {styles.buttonText}>
                                    Sign in with Google
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
            );
        }

        if(this.state.user) {
            console.log("Login.js -- User: " + this.state.user.name + "was found, display 'Splash' screen");
            return this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Home', params: {user: this.state.user}})); 
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
    loginView : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    bgImgContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    buttonImage:{
        width: 48,
        height: 48,

    },
    buttonText:{
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        paddingTop: 8,
        paddingLeft: 24

    },
    buttonContainer:{
        paddingTop: 15,
        flexDirection: 'row',
        height: 75,
        justifyContent: 'center',
        backgroundColor: '#4285F4',
        }
});

