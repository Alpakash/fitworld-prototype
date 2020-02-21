import React, { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ThemeProvider } from 'styled-components/native'
// import {Theme} from 'fitworld-common'


const Tab = createBottomTabNavigator();

const App = () => {
  // const { theme } = Theme;
  //
  // const [appTheme, setTheme] = useState(theme.light);
  // const toggleTheme = () => {
  //   if (appTheme === theme.light) {
  //     setTheme(theme.dark)
  //   } else {
  //     setTheme(theme.light)
  //   }
  // };

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={{}}>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen}
                        options={{
                          title: 'FitWorld Intro Page',
                          tabBarLabel: 'Home',
                        }}/>
          </Tab.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </>
  )
}

export default App
