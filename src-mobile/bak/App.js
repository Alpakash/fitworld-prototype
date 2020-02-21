import React, { useState } from 'react'
import 'react-native-gesture-handler'
import HomeScreen from './pages/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import InstaScreen from './pages/InstaScreen'
import Food from './assets/food-and-restaurant.svg'
import { ThemeProvider } from 'styled-components/native'
import Theme from './lib/theming/theme'

const Tab = createBottomTabNavigator()

const App: () => React$Node = () => {
  const { theme } = Theme

  const [appTheme, setTheme] = useState(theme.light)
  const toggleTheme = () => {
    if (appTheme === theme.light) {
      setTheme(theme.dark)
    } else {
      setTheme(theme.light)
    }
  }
  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme.light}>
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
