import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import IntroScreen from '../screens/IntroScreen'

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Intro"} component={IntroScreen}/>
      <Tab.Screen name={"Home"} component={HomeScreen}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation
