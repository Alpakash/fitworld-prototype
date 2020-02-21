import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'


const HomeScreen = ({ navigation }: any) => {
    return (
        <>
            <StatusBar backgroundColor="orange"/>
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View>
                        <Text>Hello world</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default HomeScreen
