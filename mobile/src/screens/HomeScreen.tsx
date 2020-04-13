import React from 'react'
import { Button, StatusBar, Text, ScrollView } from 'react-native'
import { OverrideThemeProvider } from 'fitworld-common'
import gql from 'graphql-tag'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import AuthGet from '../AuthGet'
import AsyncStorage from "@react-native-community/async-storage"
import BottomNavigation from "../navigations/BottomNavigation";




const HomeScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="orange"/>
      <ScrollView>
        <Button title={'clear the cache'} onPress={() => AsyncStorage.clear()}/>
        <Text style={{fontSize: 40, textAlign: 'center'}}>Home Screen</Text>
        <AuthGet/>
          {/*<BottomNavigation/>*/}
      </ScrollView>
    </>
  )
}

export default HomeScreen
