import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';


class Splash extends Component{
    static navigationOptions = {header: null}

    render(){
        const {navigate} =this.props.navigation;

        return(
            <View style = {styles.container}>
                <Image source = {require('./img/paws-screen1-bg.png')} style = {styles.container}>
                     <TouchableOpacity onPress={ () => {navigate('Home')}} style = {styles.submit}>
                        <Text style = {styles.edit_text}>
                            Press to continue...
                        </Text>
                    </TouchableOpacity>
                </Image>
            </View>
        )
    }

}

export default Splash

const styles = StyleSheet.create({
     container: { 
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
        submit: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'black',
        width: 380,
        height: 60,
    },

})