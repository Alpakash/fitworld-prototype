import React from 'react'
import { Button, ScrollView, StatusBar, View } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from "@react-native-community/async-storage"

const HomeScreen = () => {
    return (
        <ScrollView>
            <StatusBar backgroundColor="orange"/>
            <Button title={ 'clear the cache' } onPress={ () => AsyncStorage.clear() }/>
            <AuthGet/>
            {/*<SwitchSelector*/}
            {/*    initial={0}*/}
            {/*    onPress={value => console.log(value)}*/}
            {/*    selectedColor={'#fff'}*/}
            {/*    buttonColor={'#000'}*/}
            {/*    height={33}*/}
            {/*    options={[*/}
            {/*        { label: "---", value: "female"},*/}
            {/*        { label: "--", value: "male"}*/}
            {/*    ]}*/}
            {/*/>*/}
        </ScrollView>
    )
};

export default HomeScreen
