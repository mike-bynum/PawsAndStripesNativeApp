import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';


class Splash extends Component{
    static navigationOptions = {header: null}

    render(){
        const {navigate} =this.props.navigation;

        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress={ () => {navigate('Home')}} style = {styles.submit}>
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