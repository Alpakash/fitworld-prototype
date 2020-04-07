import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import IntroScreen from '../screens/IntroScreen'
import { graphql } from '@apollo/react-hoc'
import gql from 'graphql-tag'

const Tab = createBottomTabNavigator();

const BottomNavigation = ({data}: any) => {
  return (
    <Tab.Navigator>
      {(data.token !== undefined) ? <Tab.Screen name={"LoggedIn"} component={HomeScreen}/> : <Tab.Screen name={"Intro"} component={IntroScreen}/>}
      {/*<Tab.Screen name={"Intro"} component={IntroScreen}/>*/}
      {/*<Tab.Screen name={"LoggedIn"} component={HomeScreen}/>*/}
    </Tab.Navigator>
  )
}

export default graphql(gql`{ token @client }`)(BottomNavigation)
