import React from 'react'
import 'react-native-gesture-handler'
import HomeScreen from './pages/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import InstaScreen from './pages/InstaScreen'
import Food from './assets/food-and-restaurant.svg'

const Tab = createBottomTabNavigator()

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={this.state.theme}>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen}
                      options={{
                        title: 'FitWorld Intro Page',
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="home" color={color} size={size}/>
                        )
                      }}/>


                      <Tab.Screen name="Insta"
                      component={InstaScreen}
                      options={{
                        tabBarLabel: 'Insta',
                        tabBarIcon: ({ color, size }) => (
                          <Food width={25}/>
                        )
                      }}/>
        </Tab.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </>
  )
}

export default App
