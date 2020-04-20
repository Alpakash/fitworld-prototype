import React from 'react'
import { Button, ScrollView, StatusBar, Text, View } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from "@react-native-community/async-storage"
import ButtonWithoutIcon from "../components/ButtonWithoutIcon"

const HomeScreen = () => {
  // @ts-ignore
  return (
    <ScrollView>
      <StatusBar backgroundColor="orange"/>
        <Button title={'clear the cache'} onPress={() => AsyncStorage.clear()}/>
        <AuthGet/>
        <ButtonWithoutIcon title={"Continue"} click={() => console.log("HELLO")}/>
    </ScrollView>
  )
};

export default HomeScreen
