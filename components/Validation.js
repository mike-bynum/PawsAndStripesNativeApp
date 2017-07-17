import React, { Component} from 'react';
import { Button } from 'react-native';
import { TouchableOpacity, StyleSheet, View, Text,Image,Alert, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';


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
       const resetAction = NavigationActions.reset({
           index: 0,
           actions: [
               NavigationActions.navigate({routeName: 'Success'})
           ]
       })
       const backAction = NavigationActions.back({
       })


       hours = params.hours;
       date = params.date;


        var userName = params.user.name;
        var fName = userName.split(" ")[0];
        var lName = userName.split(" ")[1]; 
        var email = params.user.email;
        {/*
            * params can return  {
                params.user.name
                params.user.email
                params.hours
                params.date
            }
        */}

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

       date = params.date.toDateString("yyyy-mm-dd");

            /*
             * Main Container
             */

        return (
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
                    {date.toDateString()}
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
                                navigate('Success',{user: params.user, date: date, hours:hours}) 
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

                <TouchableOpacity onPress={ () => {navigate('Home')}} style = {styles.edit}>
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