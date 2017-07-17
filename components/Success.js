import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
<<<<<<< HEAD



=======
>>>>>>> Update to navigation to reduce the memory the app uses by poping the navigation stack upon completion of hour submission. Also added functionality to the android back button to navigate home from the success screen.


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
        this.state
    }

    componentWillUnmount(){
         BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
<<<<<<< HEAD
=======


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
        const {params} = this.props.navigation.state;
        const user = params.user
        const resetAction = NavigationActions.reset({
           index: 0,
           actions: [
               NavigationActions.navigate({routeName: 'Home', params: {user: user}})
           ]
       })


    return(
        <View style = {styles.container}>
            <Image source={require('./img/paws-screen4-bg-hi_res.png')}
            style = {styles.bgImgContainer}>
>>>>>>> Update to navigation to reduce the memory the app uses by poping the navigation stack upon completion of hour submission. Also added functionality to the android back button to navigate home from the success screen.


<<<<<<< HEAD
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
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;

        return(
            <View style = {styles.container}>
                <Image source={require('./img/paws-screen4-bg-hi_res.png')}
                    style = {styles.bgImgContainer}>
                    <Text style = {styles.thank_you}>
                        Thank You!
                    </Text>
                    <TouchableOpacity onPress={ () => {navigate('Home', {user:params.user})}} style = {styles.submit}>
=======
            <TouchableOpacity onPress={ () => {this.props.navigation.dispatch(resetAction)}} style = {styles.submit}>
>>>>>>> Update to navigation to reduce the memory the app uses by poping the navigation stack upon completion of hour submission. Also added functionality to the android back button to navigate home from the success screen.
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
    