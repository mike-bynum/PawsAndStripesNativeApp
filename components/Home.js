import React, { Component} from 'react'
import { Button } from 'react-native'
import { TouchableOpacity, Picker, StyleSheet, View, Text, Image, Dimensions, Alert } from 'react-native'
import { WheelPicker, DatePicker, TimePicker} from 'react-native-wheel-picker-android'


import ValidationScreen from './Validation.js'


 class Home extends Component{
    static navigationOptions = {header:null }
    
   // When the Hour Picker wheel changes set the hour_value
   // variable to be returned in view2
    _setHour = (hour) => {
        this.hour_value = hour;
        // Alert.alert("Hour is: " + this.hour_value);
        console.log("Hour is: " + this.hour_value);
   }
   // Getter method to return hour_value.. Doesn't work :-(
   _getHour = () => {
       return this.hour_value;
   }

   arr = ["1 Hour","2 Hours","3 Hours"
            ,"4 Hours","5 Hours","6 Hours"
            ,"7 Hours","8 Hours","9 Hours"
            ,"10 Hours","11 Hours","12 Hours"];
            
    now = new Date();
   


   //Used to let the user select the number of hours volunteered

   render() {
    const {navigate, passProps} = this.props.navigation;
    return (
       <View  style = {styles.container}> 
            <Image source={require('./img/paws-screen2-bg.png')}
                style = {styles.container}>
            {/*
                * HEADER 
            */}
                <Text style = {styles.header}>
                    Please enter your volunteer time below
                </Text>

            {/*
                * DATE PICKER
            
            <DatePicker
            initdate={now.toISOString()}
            onDateSelected={ (date) => this.onDateSelected(date)}
            style = {styles.datePicker}
            />
            */}
        
            
            {/*
                * TIME PICKER
            */}
            
            <View style={styles.wp_view}>
                <WheelPicker
                    onItemSelected={(event) => {this._setHour(event["data"])}}
                    isCurved
                    visibleItemCount={2}
                    itemSpace={1}
                    itemTextSize={70}
                    itemTextColor="#9c8158"
                    data={this.arr}
                    style = {styles.wheelpicker}
                />     
            </View>
        

            {/*
                * SUBMIT BUTTON
            */}
                <TouchableOpacity onPress ={ () => {navigate('Validation', ({date: "7/14/2017", hours: 6}))}} style = {styles.submit}>
                    <Text style = {styles.text}>
                        Submit 
                    </Text>
                </TouchableOpacity>
            </Image>
        </View>
    );
   }
}
export default Home

const styles =  StyleSheet.create({
        
    container: { 
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',

    },
    bgImg:{
        flex:1
    },
    label:{
        color: "white",
        fontSize: 15,
        // marginBottom:10,
        // marginTop:70,
    },
    wp_text:{
        

    },
    wp_view:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width:150,
        height:150,
        borderWidth:3,
        borderRadius: 300,
        borderColor: "white",
        
        // marginTop: 100,
        // marginBottom: 100,
        paddingTop:10,
        paddingBottom:10,
       

    
    },
    wheelpicker: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width:140, 
        height:120,
        // marginTop: 15,
        // marginBottom: 15,
        borderRadius: 500,
        borderColor: "white",
        borderWidth:2
      
    },
    datePicker: {
        width: 50,
        height: 100,
        // marginBottom: 10,
        // marginTop: 10,
        paddingLeft: 500,
        backgroundColor: 'white'

    },
     header: {
        alignItems: 'flex-start',
         textAlign: 'center',
         color: 'white',
         fontSize: 18
         
     },
     picker: {
         backgroundColor: '#E5E5E5'
     },
    submit: {
       justifyContent: 'flex-end',
       width: 200,
    //    marginTop: 150,
    //    marginBottom: 25,
       height: 75,
       backgroundColor: 'white',
       borderRadius: 50,
    
    },

    text: { 
        width: 200,
        height: 75,
        borderRadius: 50,
        marginTop: 25,
        padding: 20,
        paddingTop: 15,
        fontSize: 30,
        textAlign: 'center',
    }
})