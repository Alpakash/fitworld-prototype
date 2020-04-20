import React from 'react'
import { Button, ScrollView, StatusBar, Text, View } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from "@react-native-community/async-storage"
import ButtonWithoutIcon from "../components/ButtonWithoutIcon"
import {
  H1Subtitle,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H1Bold,
  H1Italic,
  H1Light,
  H1BoldItalic,
  H1LightItalic,
  H2Subtitle,
  H3Subtitle,
  H6Subtitle,
  H5Subtitle,
  H4Subtitle,
  H3LightItalic,
  H3Light,
  H4Italic,
  H4Bold,
  H6Light,
  H3BoldItalic,
  H2BoldItalic,
  H2Italic,
  H2LightItalic,
  H4Light,
  H6LightItalic,
  H5BoldItalic,
  H3Bold,
  H5Italic,
  H5LightItalic,
  H6Bold,
  H3Italic,
  H2Bold,
  H5Bold,
  H4BoldItalic,
  H5Light,
  H6Italic,
  H6BoldItalic,
  H2Light, H4LightItalic
} from "../components/typography/Typography";

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
