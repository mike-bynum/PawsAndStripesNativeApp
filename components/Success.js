import React, { Component} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image, BackHandler, NativeModules, AppRegistry } from 'react-native';
import { NavigationActions } from 'react-navigation';
import RNExitApp from 'react-native-exit-app';


class Success extends Component {
    static navigationOptions = {header:null }
     // When the submit button is triggered call the next page, and set the state
   _submit = () => {
       Alert.alert("The Selected Time is:" + this.hour_value);
   }

    //    const {navigate} = this.props.navigation;
    //    const {params} = this.props.navigation.state;

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
            <Image source={require('./img/paws-screen4-bg-hi_res.png')} style = {styles.bgImgContainer}>
                <Text style = {styles.thank_you}>
                    Thank You!
                </Text>
                    {/*
                        * Button Actions
                    */}
                    <View style={styles.action_bar}>
                        <View style={styles.submit_view}>
                            <TouchableOpacity onPress={ () => {this.props.navigation.dispatch(resetAction)}} style = {styles.submit}>
                                <Text style = {styles.submit_text}>
                                        submit more hours
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.exit_view}>
                            <TouchableOpacity onPress = {() => 
                                BackHandler.exitApp() 
                            } stlye = {styles.exit}>
                                <Text style = {styles.exit_text}>
                                    exit
                                </Text>
                            </TouchableOpacity>
                       </View>
                    </View>
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
    
        flexDirection: 'column',
        alignItems: 'center', 
        borderRightWidth: 2,
        borderRightColor: '#9c8158',
    },
    submit_view: {
        flex: 1,
        alignItems: 'flex-end',
        marginLeft: 160,
    },
    submit_text: {
        paddingTop: 5,
        paddingRight: 42, 
        textAlign: 'center',
        fontSize: 20,
        color: '#9c8158',
    },
    exit: {
        flexDirection: 'column', 
        alignItems: 'center', 
       
    },
    exit_view: {
        flex: 1,
        alignItems: 'flex-start',    
    },
     exit_text: {
         paddingTop: 5,
         paddingLeft: 30,
         textAlign: 'center', 
        fontSize: 20,
        color: '#9c8158'
    },
    action_bar: {
        height: 50,
        alignSelf: 'stretch', 
        justifyContent: 'center',
        flexDirection: 'row'
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