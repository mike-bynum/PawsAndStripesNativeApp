import React, { Component} from 'react';
import { Button } from 'react-native';
import { TouchableOpacity, StyleSheet, View, Text,Image,Alert, Dimensions } from 'react-native';


class Validation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPress: false
        }
            
    }
    static navigationOptions = {
        header:null,
    } 
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
       const {params} = this.props.navigation.state;
       const {navigate} = this.props.navigation;
       hours = params.hours;
       date = params.date.toDateString("yyyy-mm-dd");
        return (
            /*
             * Main Container
             */
            <View style={styles.container}>
                <Text style={styles.text_small}>
                    you volunteered for
                </Text>

                {/*
                    * Pass Hours from state
                */}
                <Text style={styles.text_big}>
                   {hours} Hours
                </Text>

                <Text style={styles.text_small}>
                    on
                </Text>

                 {/*
                    * Pass Dates from state
                */}
                <Text style={styles.text_big}>
                    {date}
                </Text>

                <Text style={styles.text_small}>
                    is that correct?
                </Text>

                 {/*
                    * Main Functionality:
                    *If
                */}

                    <TouchableOpacity style = {styles.submit} disabled={this.state.isPress}  onPress={   (event) => {
                
                     // Initialize Request to server
                     
                     if(!this.state.isPress) {
                         this.state.isPress = true; 
                         console.log("Pressed Button"); 
                         var request = new XMLHttpRequest();
                        request.onreadystatechange =  (e) => {
                            if (request.readyState != 4) {
                                console.warn('Could not communicate with the server');
                                return;
                            }
                            if (request.status === 200) {
    
                                console.warn('success', request.responseText);
                                navigate('Success',{user: params.user, date: date, hours:hours}) 
                            } else {
                                console.warn('error');
                            }
                        };
                        request.open('GET', 'http://www.academicstudysolutions.com/pawsstripes/?email=test@test.com&fname=joe&lname=dirt&hours=8&date=2001-05-20' );
                        request.send();  

                     }
                    

                    }}>
                    <Text style = {styles.submitText}>
                        YES! 
                    </Text>
                </TouchableOpacity>
             

                <TouchableOpacity onPress={ () => {navigate('Home', {user: params.user, date: date, hours: hours})}} style = {styles.edit}>
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