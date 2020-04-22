import React from 'react'
import { Button, ScrollView, StatusBar, View } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from "@react-native-community/async-storage"
import Toggle from "../components/Toggle";

const HomeScreen = () => {
    return (
        <ScrollView>
            <StatusBar backgroundColor="orange"/>
            <Button title={ 'clear the cache' } onPress={ () => AsyncStorage.clear() }/>
            <AuthGet/>
            <Toggle/>
        </ScrollView>
    )
};

export default HomeScreen
