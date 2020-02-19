import React from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import WelcomeHeader from '../components/welcomeHeader'
import RNComponents from '../components/RN-components'
import GridLayout from '../components/grid'


const HomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar
        currentHeight
        backgroundColor="orange"
        barStyle="dark-xcontent"/>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <WelcomeHeader
            onPress={() => navigation.navigate('Insta')}
            title={'Welcome back'}
            name={'Avatar, the last air bender'}/>
          <RNComponents/>
          <GridLayout/>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen
