import React, { Component} from 'react'
import { Button } from 'react-native'
import { TouchableOpacity, Picker, StyleSheet, View, Text, Image, Dimensions, Alert } from 'react-native'
import { WheelPicker} from 'react-native-wheel-picker-android'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { NavigationActions } from 'react-navigation';

import ValidationScreen from './Validation.js'

/**
 * The Home component is where the user selects the day and number of hours that
 * they volunteered. This data is passed forward to the Validation component.
 */
 class Home extends Component{
    static navigationOptions =({ navigation }) => ({
        header:null,
    });

    state={ isDatePickerVisible: false, chosenDate: new Date(), hours: 1};

   /**
    * Changes the state for the hours the user volunteered.
    */
    _setHour = (hour) => {
        this.setState({hours: hour.data});
   }

   /**
    * Shows the date picker when the date bar is clicked on.
    */
   _showDatepicker = () => this.setState({ isDatePickerVisible: true});
   /**
    * Hides the date picker once a date has been selected or the modal
    * looses focus.
    */
   _hideDatepicker = () => this.setState({ isDatePickerVisible: false});
   /**
    * Sets the state for the date that the user is inputing hours for.
    */
   _handleDatePicked = (date) => {
       this.setState({chosenDate: date});
       this._hideDatepicker();
   }

   arr = [1,2,3,4,5,6,7,8,9,10,11,12];       
   now = new Date();

   /**
    * Creates the view used to selects the day and hours that the 
    * user volunteered on.
    */
   render() {
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    const date = new Date();
    const dateInfo = this.state.chosenDate;
    
    var userName = "";
    var fName;
    var lName;
    
    const resetAction = NavigationActions.reset({
           index: 0,
           actions: [
               NavigationActions.navigate({routeName: 'Login', params: {isLoggedOut: true}})
           ]
    })

     var index = 0;

     /**
      * Test if the page was navigated to from the validation page,
      * if so set the values of the date and hour picker, otherwise 
      * use defaults.
      */
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
    /**
     * The display for the logout button, welcome message, date picker, hours picker, and submit button.
     */
    return (
        <View  style = {styles.container}> 
            <Image source={require('./img/paws-screen2-bg-hi_res.png')}
                style = {styles.bgImgContainer}>
                {/* LOG OUT */}
                <Text onPress={() => {this.props.navigation.dispatch(resetAction)}} style={styles.gold_text_logout}>log out</Text>

                {/* HEADER */}
                <View style = {styles.header}>
                    <View><Text style={styles.header_welcome}>Welcome {fName},</Text></View>
                    <View><Text style = {styles.subheader_welcome}>Please enter your volunteer time below</Text></View>
                </View>
                {/* DATE PICKER */}
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
                    minimumDate={new Date().setDate(new Date().getDate() - 60)}
                />

                {/* TIME PICKER */}
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
        
                {/* SUBMIT BUTTON */}
                <View style={styles.submit_box}>
                    <TouchableOpacity onPress ={ () => {
                        navigate('Validation',{user: params.user, date: this.state.chosenDate, hours:this.state.hours})}} 
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
        paddingTop:10,
        paddingBottom:10,
        marginBottom: 20 
    },
    date_picker:{
        fontSize: 60,
        color: 'white'
    },
    header_welcome: {
        fontSize: 24,
        color: 'white'
    },
    subheader_welcome:{
        fontSize: 18,
        color: 'white'
    },
    gold_text: {
        fontFamily: 'sans-serif-medium',
        fontSize: 22,
        color: '#9c8158',
        top: -10
    },
    gold_text_logout:{
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        color: '#9c8158',
        marginLeft: 280,
        marginTop: 10,
        marginBottom: 0
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
        paddingLeft: 500,
        backgroundColor: 'white'
    },
    gold_small: {
        fontSize: 14,
        color: '#9c8158',
        alignItems: 'flex-end',
    },
     header: {
        alignItems: 'center',
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