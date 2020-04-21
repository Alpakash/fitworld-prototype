import React from 'react'
import { Button, ScrollView, StatusBar } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from "@react-native-community/async-storage"

const HomeScreen = () => {
    return (
        <ScrollView>
            <StatusBar backgroundColor="orange"/>
            <Button title={ 'clear the cache' } onPress={ () => AsyncStorage.clear() }/>
            <AuthGet/>
        </ScrollView>
    )
};

export default HomeScreen
