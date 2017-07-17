import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';



class Success extends Component {
    static navigationOptions = {header:null }
     // When the submit button is triggered call the next page, and set the state
   _submit = () => {
       Alert.alert("The Selected Time is:" + this.hour_value);
   }

   constructor(props){
       super(props);
       this.handleBackButton = this.handleBackButton.bind(this);
   }
   
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount(){
         BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


   handleBackButton(){
        {this.props.navigation.dispatch(NavigationActions
            .reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Home'})
                ]
            })
        )};
        return true;
    }

    render() {
        const resetAction = NavigationActions.reset({
           index: 0,
           actions: [
               NavigationActions.navigate({routeName: 'Home'})
           ]
       })


    return(
        <View style = {styles.container}>
            <Image source={require('./img/paws-screen4-bg-hi_res.png')}
            style = {styles.bgImgContainer}>

            <Text style = {styles.thank_you}>
                Thank You!
            </Text>

            <TouchableOpacity onPress={ () => {this.props.navigation.dispatch(resetAction)}} style = {styles.submit}>
                        <Text style = {styles.edit_text}>
                            submit more hours
                        </Text>
                </TouchableOpacity>

            </Image>
        </View>
    )
   }
}
export default Success

const styles = StyleSheet.create({
     container: { 
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
    submit: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'black',
         marginTop: 250,
        width: 380,
        height: 60,
    },
    edit_text: {
        fontSize: 20,
        color: '#9c8158'
    },
    thank_you: {
        justifyContent: 'flex-start', 
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginBottom:100,
        marginTop: 100
    }
})