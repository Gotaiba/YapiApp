import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import LoginScreen from './screens/login'
import RegistrationScreen from './screens/Registration'
import ActivationCode from './screens/activationCode'

export default class App extends React.Component {
 
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}
 const AppStackNavigator=createStackNavigator({
  Login:LoginScreen,
  Registration:{
    screen:RegistrationScreen  
  },
  ActivationCode:ActivationCode
},
{
  initialRouteName: "Login",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "transparent",
      height:50,
      marginTop:10    
    },
    headerTitleStyle: {
      fontWeight: "bold",    
      zIndex: 1,
      color:"#333",
      fontSize: 18,
      textAlign:'center',
      lineHeight: 23
    }, 
    animationEnabled: true
  }
}
);
