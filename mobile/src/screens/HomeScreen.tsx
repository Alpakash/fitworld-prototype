import React from 'react'
import { Button, StatusBar, Text, View } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from "@react-native-community/async-storage"
import ButtonWithoutIcon from "../components/ButtonWithoutIcon"
import { H1TitleBigBig, H2ItalicNormal } from "../components/typography/Typography";

const HomeScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor="orange"/>
        <Button title={'clear the cache'} onPress={() => AsyncStorage.clear()}/>
        <AuthGet/>
      <H1TitleBigBig>H1TitleBigBig</H1TitleBigBig>
        <H2ItalicNormal>H2ItalicNormal</H2ItalicNormal>
        <Text style={{fontFamily: "Nunito Sans Bold Italic", fontSize: 50}}>YOOO</Text>
        <ButtonWithoutIcon title={"Continue"} click={() => console.log("HELLO")}/>
    </View>
  )
};

export default HomeScreen
