import React, { Component} from 'react'
import { Button } from 'react-native'
import { TouchableOpacity, Picker, StyleSheet, View, Text, Image, Dimensions, Alert } from 'react-native'
import { WheelPicker} from 'react-native-wheel-picker-android'
import DateTimePicker from 'react-native-modal-datetime-picker';

import ValidationScreen from './Validation.js'


 class Home extends Component{
    static navigationOptions =({ navigation }) => ({
        header:null,
    });
    
    state={ isDatePickerVisible: false, chosenDate: new Date(), hours: 1};

   // When the Hour Picker wheel changes set the hour_value
   // variable to be returned in view2
    _setHour = (hour) => {
        this.setState({hours: hour.data});
        // Alert.alert("Hour is: " + this.hour_value);
   }


   _showDatepicker = () => this.setState({ isDatePickerVisible: true});
   _hideDatepicker = () => this.setState({ isDatePickerVisible: false});

   _handleDatePicked = (date) => {
       this.setState({chosenDate: date});
       this._hideDatepicker();
   }

   arr = [1,2,3,4,5,6,7,8,9,10,11,12];       
   now = new Date();

   //Used to let the user select the number of hours volunteered

   render() {
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    const date = new Date();
    const dateInfo = this.state.chosenDate;
    
    var userName = "";
    var fName;
    var lName;

    console.log("Home.js -- Inside Home page"); 
    {/*
        * params can return  {
            params.user.name : string
            params.user.email : string
            params.hours : string
            params.date : Date 
        }
    */}
     var index = 0;
    {/*
     * Test if the user had previous values
     * Entered and wanted to adjust them
    */}
    if(params) {
        if(params.hours){
            index = params.hours - 1;
            this.setState({hours: params.hours});
        }
        if(params.user){
            userName = params.user.name;
            fName = userName.split(" ")[0];
            lName = userName.split(" ")[1]; 
        }
    }

    return (
        <View  style = {styles.container}> 
            <Image source={require('./img/paws-screen2-bg-hi_res.png')}
                style = {styles.bgImgContainer}>
                {/*
                    * HEADER 
                */}
                <Text style = {styles.header}>
                    Hi <Text style={styles.userInfo}> {fName} </Text> 
                    Please enter your volunteer time below
                </Text>
                {/*
                    * DATE PICKER
                */}
                <View>
                    <Text onPress={this._showDatepicker} style={styles.date_picker}> {("0" + (dateInfo.getMonth() + 1)).toString().substr(-2)} <Text style={styles.gold_text_large}>|</Text> {("0" + dateInfo.getDate()).toString().substr(-2)} <Text style={styles.gold_text_large}>|</Text> {dateInfo.getFullYear().toString().substr(-2)}</Text>
                    <View style={styles.center_align}><Text style={styles.gold_text}>Date</Text></View>
                </View>
                
                <DateTimePicker
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDatepicker}
                    date={this.state.chosenDate}
                    maximumDate={new Date()}
                />

                {/*
                    * TIME PICKER
                */}
                
                <View style={styles.wp_view}>
                    <Text style={styles.gold_text_hours}>Hours</Text>  
                        <WheelPicker
                            onItemSelected={this._setHour}
                            isCurved
                            isAtmospheric
                            visibleItemCount={2}
                            itemSpace={50}
                            itemTextSize={170}
                            itemTextColor="white"
                            selectedItemPosition={index}
                            data={this.arr}
                            style = {styles.wheelpicker}
                        /> 
                    
                </View>
        
                {/*
                    * SUBMIT BUTTON
                */}
                <View style={styles.submit_box}>
                    <TouchableOpacity onPress ={ () => {
                       navigate('Validation',{user: params.user, date: this.state.chosenDate, hours:this.state.hours}) 
                                               console.log("Sending: [" + params.user +","+this.state.chosenDate+","+this.state.hours+"] to Validation.js");

                    }}
                        style = {styles.submit} >
                        <Text style = {styles.text}>
                            Submit 
                        </Text>
                    </TouchableOpacity>
                </View>
            </Image>
        </View>
    );
   }
}
export default Home

const styles =  StyleSheet.create({
        
    container: { 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    bgImgContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    label:{
        color: "white",
        fontSize: 15,
        // marginBottom:10,
        // marginTop:70,
    },
    center_align:{
        justifyContent:'center',
        alignItems: 'center',
    },
    wp_text:{
        
    },
    wp_view:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width:175,
        height:175,
        borderWidth:3,
        borderRadius: 300,
        borderColor: "white",
        
        // marginTop: 100,
        // marginBottom: 100,
        paddingTop:10,
        paddingBottom:10,
        marginBottom: 20 
    },
    date_picker:{
        fontSize: 60,
        color: 'white'
    },
    gold_text: {
        fontFamily: 'sans-serif-medium',
        fontSize: 22,
        color: '#9c8158',
        justifyContent:'center',
        top: -10
    },
    gold_text_hours: {
        fontFamily: 'sans-serif-medium',
        fontSize: 22,
        color: '#9c8158',
        top: 56,
        left: 45
    },
    gold_text_large: {
        fontFamily: 'sans-serif-thin',
        fontSize: 72,
        color: '#9c8158',
    },
    wheelpicker: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width:140, 
        height:120,
        left: -30,
        top: -20,
        // marginTop: 15,
        // marginBottom: 15,
        borderRadius: 500,
        borderColor: "white",
        borderWidth:2
      
    },
    userInfo: {
        color: '#9c8158'
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
        alignItems: 'center',
         textAlign: 'left',
         color: 'white',
         fontSize: 18,
         marginTop: 20      
     },
     picker: {
         backgroundColor: '#E5E5E5'
     },
    submit: {
       justifyContent: 'flex-end',
       width: 200,
       height: 75,
       marginTop: 25,
       backgroundColor: 'white',
       borderRadius: 50,
    },
    submit_box:{
        alignSelf: 'stretch',
        height: 125,
        backgroundColor: 'black',
        alignItems: 'center'
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
        color: 'black'
    }
})