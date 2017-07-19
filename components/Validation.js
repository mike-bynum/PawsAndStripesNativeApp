import React, { Component} from 'react';
import { Button } from 'react-native';
import { TouchableOpacity, StyleSheet, View, Text,Image,Alert, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';


class Validation extends Component {
    static navigationOptions = {header:null } 
    hour = "";
    date = ""; 

     // When the submit button is triggered call the next page, and set the state
   _submit = () => {
       Alert.alert("Your date and time are correct");
   }
   _edit = () => {
       Alert.alert("You chose to edit your time"); 
   }

   render() {
       const {navigate} = this.props.navigation;
       const resetAction = NavigationActions.reset({
           index: 0,
           actions: [
               NavigationActions.navigate({routeName: 'Success'})
           ]
       })
       const backAction = NavigationActions.back({
       })
        return (
            <View style={styles.container}>
                <Text style={styles.text_small}>
                    you volunteered for
                </Text>

                <Text style={styles.text_big}>
                    Hours
                </Text>

                <Text style={styles.text_small}>
                    on
                </Text>

                <Text style={styles.text_big}>
                    Date
                </Text>

                <Text style={styles.text_small}>
                    is that correct?
                </Text>

                <TouchableOpacity onPress={ () => {this.props.navigation.dispatch(resetAction)}} style = {styles.submit}>
                    <Text style = {styles.submitText}>
                        YES! 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => {this.props.navigation.dispatch(backAction)}} style = {styles.edit}>
                    <Text style = {styles.edit_text}>
                        no, I need to edit my time
                    </Text>
                </TouchableOpacity>

            </View>
        );
   }
}

export default Validation

const styles =  StyleSheet.create({
   
    container: { 
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text_big: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20
    },
    text_small: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 20
    },
     submit: {
       justifyContent: 'center',
       alignItems: 'center',
       width: 220,
       marginBottom: 25,
       marginTop: 40,
       height: 75,
       backgroundColor: 'white',
       borderRadius: 50,
    
    },
    submitText: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'
    },
    edit_text: {
        marginTop: 15,
        fontSize: 20,
        color: '#9c8158'
    },
    edit: {
        marginTop: 40
    }
})