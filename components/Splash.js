import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';


class Splash extends Component{
    static navigationOptions = {header: null}

    render(){
        const {navigate} =this.props.navigation;
        const {params} = this.props.navigation.state;
        var userName = params.user.name;
        var fName = userName.split(" ")[0];
        var lName = userName.split(" ")[1]; 

        console.log("Splash.js -- Inside splash screen"); 

        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress={ () => {
                    console.log("Splash.js -- Navigating to 'Home' screen"); 
                    navigate('Home', {user: params.user})}} style = {styles.submit}>
                    <Image source = {require('./img/paws-screen1-bg.png')} style = {styles.bgImgContainer}>
                        <View style = {styles.trackerView}>
                            <Text style = {styles.trackerText}>
                                Volunteer Tracker
                            </Text> 
                        </View>
                        <Text style = {styles.continueText}>
                                Tap anywhere to continue.
                            </Text>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }

}

export default Splash

const styles = StyleSheet.create({
     container: { 
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    bgImgContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain'

    },
    submitContainer: {
        flex: 1,
        justifyContent: 'center',
        width: 200,
        height: 75,
        backgroundColor: 'black',
        borderRadius: 50,
    
    },
    trackerText: {
        fontFamily: 'StardosStencil-Regular',
        fontSize: 48,
        textAlign: 'center',
        color: 'white'
    },
    userText: {
        fontFamily: 'StardosStencil-Regular',
        fontSize: 40,
        textAlign: 'center',
        color: 'black'
    },
    trackerView: {
        marginTop: 40,
        alignSelf: 'stretch',
        backgroundColor: '#9c8158'
    },
    continueText: {
        color: 'white',
        textAlign: 'center'
    }
})