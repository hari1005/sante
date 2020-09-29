 import React from 'react'
 import {View,Component,StyleSheet,Text} from 'react-native' 
 import WelcomeScreen from './Screens/WelcomeScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import { createAppContainer } from 'react-navigation'
   
export default function App(){
  return(
    <AppContainer/>

    );
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen
  },
  BottomTab:{
   screen:AppTabNavigator
  }
})
const AppContainer=createAppContainer(switchNavigator);