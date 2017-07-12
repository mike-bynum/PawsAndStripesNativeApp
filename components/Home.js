import React, { Component} from 'react'
import { Button } from 'react-native'
import { TouchableOpacity, Picker, StyleSheet, View, Text, Dimensions } from 'react-native'
import { WheelPicker, DatePicker, TimePicker} from 'react-native-wheel-picker-android'


const Home = () => {


    const handlePress=() => false
    let { width, height } = Dimensions.get('window');

   _onValueChange = (hour, minute) => {
       console.log("Selected time: ", hour, ': ', minute);
   };
   //Used to let the user select the number of hours volunteered
   let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12];
   let now = new Date();


       return (

      
         <View style = {styles.container}>
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
                onItemSelected={(event) => {console.log(event)}}
                isCurved
                isCyclic
                visibleItemCount={2}
                itemSpace={50}
                itemTextSize={150}
                inidcatorColor="red"
                data={arr}
                style = {styles.wheelpicker}/>
    </View>

    

        {/*
            * SUBMIT BUTTON
        */}
            <TouchableOpacity style = {styles.submit}>
                <Text style = {styles.text}>
                    Submit 
                </Text>
            </TouchableOpacity>
            
           
       
        </View>
    );
}
export default Home

const styles =  StyleSheet.create({
        
        container: { 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: 650,
        width: 600

    },
    wp_text:{
        fontSize: 50
    },
    wp_view:{
        width:100,
        height:100,
        borderWidth:2,
        borderRadius: 500,
        borderColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 100,

    
    },
    wheelpicker: {
        width:300, 
        height:150,
        marginBottom: 100,
        marginTop: 100,
      
    },
    datePicker: {
        width: 50,
        height: 100,
        marginBottom: 10,
        marginTop: 10,
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
       marginBottom: 25,
       height: 75,
       backgroundColor: 'white',
       borderRadius: 50,
    
    },

    text: { 
        width: 200,
        height: 75,
        borderRadius: 50,
        padding: 20,
        paddingTop: 15,
        fontSize: 30,
        textAlign: 'center',
    }
})