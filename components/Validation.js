import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

/**
 * The Validation component displays the hours and date the user selected on the Home screen
 * so that they can verify that the information is correct before they submit the data to the
 * backend for insertion into the database.
 */
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

    /**
     * Displays the hours and date that the user entered with a button to submit and a button to edit.
     */
    render() {       
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;
        /**
         * Navigation action for submitting the data to the backend and sending the user to the success screen.
         */
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Success' , params: {user: params.user}})
            ]
       })
       /**
        * Navigation action to send to user to the Home screen when they need to edit their input.
        */
       const backAction = NavigationActions.back({
       })

        var userName = params.user.name;
        var fName = userName.split(" ")[0];
        var lName = userName.split(" ")[1]; 
        var email = params.user.email;

        hours = params.hours;
        var date = params.date;
        var day = ("0" + date.getDay()).substr(-2);
        var month = ("0" + date.getMonth()).substr(-2);
        var year = date.getFullYear(); 
        dateString = year + "-" + month + "-" + day;

        var hoursDisplay = "hours";

        if(hours < 2){
            hoursDisplay = "hour";
        }

        return (
            /*
             * Main Container
             */
            <View style={styles.container}>
                <Text style={styles.text_small}>
                    you volunteered for
                </Text>

                {/* Passed Hours from Home */}
                <Text style={styles.text_big}>
                   {hours} {hoursDisplay}
                </Text>

                <Text style={styles.text_small}>
                    on
                </Text>

                 {/* Pass Dates from state */}
                <Text style={styles.text_big}>
                    {dateString}
                </Text>

                <Text style={styles.text_small}>
                    is that correct?
                </Text>
                {/* Button to submit correct user information */}
                <TouchableOpacity style = {styles.submit} disabled={this.state.isPress}  onPress={   (event) => {
                    /**
                    * Initialize the request to the server
                    */
                    if(!this.state.isPress) {
                        this.state.isPress = true; 
                        console.log("Attempting to Submit Hours to backend"); 
                        var request = new XMLHttpRequest();
                        request.onreadystatechange =  (e) => {
                            if (request.readyState != 4) {
                                console.log('Could not communicate with the server');
                                console.log('Request Status: ' + request.readyState); 
                                return;
                            }
                            if (request.status === 200) {
                                console.log('Communication to backend was successful'); 
                                console.log('', request.responseText);
                                this.props.navigation.dispatch(resetAction) 
                            } else {
                                console.warn('error');
                            }
                        };
                        var query = 'http://www.academicstudysolutions.com/pawsstripes/?email='+email +'&fname=' + fName + '&lname=' + lName + '&hours=' + hours + '&date=' + dateString;
                        console.log(query);
                        request.open('GET', query);
                        request.send();  
                    }                
                }}>
                    <Text style = {styles.submitText}>
                        YES! 
                    </Text>
                </TouchableOpacity>
                {/* Button to go back to the previous page and change the date or hours */}
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