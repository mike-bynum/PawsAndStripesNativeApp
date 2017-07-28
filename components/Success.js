import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

/**
 * The Success component diplays a thank you message and a button to return to the Home screen 
 * upon successful submission of hours to the backend. If a user navigates back from this screen
 * using the back button on their phone the app will be minimized.
 */
class Success extends Component {
    static navigationOptions = {header:null }

   constructor(props){
       super(props);
       this.handleBackButton = this.handleBackButton.bind(this);
   }
    /**
     * Add the listener to handle the back navigation from hardware input.
     */   
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    /**
     * Remove the listener when the page is destroyed so normal functionality is maintained.
     */
    componentWillUnmount(){
         BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    /**
     * The function that is called when the hardware back button is pressed. Navigates the user back
     * to the home page.
     */
    handleBackButton(){
        const {params} = this.props.navigation.state;
        const user = params.user
        {this.props.navigation.dispatch(NavigationActions
            .reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Home', params: {user: user}})
                ]
            })
        )};
        return true;
    }
    /**
     * Displays the success screen to the user with a thank you message and a button to return to the home page
     * to enter new information.
     */
    render() {
        const {params} = this.props.navigation.state;
        const user = params.user
        /**
         * Navigation action that removes precious pages from the navigation stack, removing the 
         * possibilty that the user can navigate back to a previous page and submit the same hours
         * again accidentaly.
         */
        const resetAction = NavigationActions.reset({
           index: 0,
           actions: [
               NavigationActions.navigate({routeName: 'Home', params: {user: user}})
           ]
        })

        return(
            <View style = {styles.container}>
                <Image source={require('./img/paws-screen4-bg-hi_res.png')} style = {styles.bgImgContainer}>
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
    