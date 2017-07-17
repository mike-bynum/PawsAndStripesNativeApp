import React, { Component} from 'react';
import { Button } from 'react-native';
import { TouchableOpacity, StyleSheet, View, Text,Image,Alert, Dimensions } from 'react-native';

class Success extends Component {
    static navigationOptions = {header:null }
     // When the submit button is triggered call the next page, and set the state
   _submit = () => {
       Alert.alert("The Selected Time is:" + this.hour_value);
   }

   render() {
       const {navigate} = this.props.navigation;
    return(
        <View style = {styles.container}>
            <Image source={require('./img/paws-screen4-bg.png')}
            style = {[styles.container, styles.bgImg]}>

            <Text style = {styles.thank_you}>
                Thank You!
            </Text>

            <TouchableOpacity onPress={ () => {navigate('Home')}} style = {styles.submit}>
                        <Text style = {styles.edit_text}>
                            submit more hours
                        </Text>
                </TouchableOpacity>

            </Image>
        </View>
    )
   }
}
export default Success

const styles = StyleSheet.create({
     container: { 
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black',

    },
    bgImg:{
        flex:1
    },
    submit: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'black',
         marginTop: 250,
        width: 380,
        height: 60,
    },
    edit_text: {
        fontSize: 20,
        color: '#9c8158'
    },
    thank_you: {
        justifyContent: 'flex-start', 
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginBottom:100,
        marginTop: 100
    }
})