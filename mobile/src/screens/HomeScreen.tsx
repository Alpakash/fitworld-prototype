import React from 'react'
import { StatusBar, Text, View } from 'react-native'

function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor="orange"/>
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text>Home Screen</Text>
      </View>
    </>
  )
}

export default HomeScreen
