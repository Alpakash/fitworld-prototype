import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from "./navigations/BottomNavigation"

class App extends React.Component<any, any> {

  render() {
    return (
    <NavigationContainer>
      <BottomNavigation/>
    </NavigationContainer>
      )
  }
}

export default App
