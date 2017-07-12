import {WheelPicker, DatePicker, TimePicker} from 'react-native-wheel-picker-android'
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//REFERENCE: https://www.npmjs.com/package/react-native-wheel-picker-android

class Pickers extends Component {
    render() {
        let now = new Date()
        let WheelPickerData = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                            'Friday', 'Saturday', 'Sunday'];

        return (
            <View style={styles.container}>
                <WheelPicker
                    onItemSelected={ (event) =>this.onItemSelected(event)}
                    isCurved
                    data={WheelPickerData}
                    style={styles.wheelPicker}/>
                <DatePicker
                    initDate = {now.toISOString()}
                    onDateSelected={(date)=>this.onDateSelected(date)}/>
                <TimePicker
                    initDate={now.toISOString()}
                    onTimeSelected={(date) =>this.onTimeSelected(date)}/>
            </View>
        );
    }

    onItemSelected(event){
        //Do something
    }
    onDateSelected(date){
        //Do something
    }
    onTimeSelected(date){
        //Do something
    }
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    wheelPicker: {
        width:200,
        height: 150
    }
});

module.exports = Pickers;