import React from 'react'
import { Button, StatusBar, Text, View } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from "@react-native-community/async-storage"


const HomeScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor="orange"/>
        <Button title={'clear the cache'} onPress={() => AsyncStorage.clear()}/>
        <Text style={{fontSize: 40, textAlign: 'center'}}>Home Screen</Text>
        <AuthGet/>
    </View>
  )
};

export default HomeScreen
