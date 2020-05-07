import React from 'react'
import { Button, ScrollView, StatusBar, Text } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import Toggle from '../components/Toggle'
import styled from 'styled-components'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ToggleText = styled(Text)`
color: ${ props => props.active ? 'white' : 'grey' };
`

const HomeScreen = () => {
    return (
        <ScrollView>
            <StatusBar backgroundColor="orange"/>
            <Button title={ 'clear the cache' } onPress={ () => AsyncStorage.clear() }/>
            <AuthGet/>
            <Toggle>
                {
                    (obj: { currentIndex: any }) => {
                        // on ComponentDidMount the currentIndex got a default number from state
                        // when clicked the object changes and gets a nested index inside currentIndex
                        const firstIndexActiveOnLoad = (typeof obj.currentIndex === 'number') ? obj.currentIndex : obj.currentIndex.index;

                        return [
                            (myIndex: number) => <ToggleText
                                active={ myIndex === firstIndexActiveOnLoad }><MaterialCommunityIcons
                                name={ "view-sequential" } size={ 30 }/></ToggleText>,
                            (myIndex: number) => <ToggleText
                                active={ myIndex === obj.currentIndex.index }><MaterialCommunityIcons
                                name={ "view-stream" }
                                size={ 30 }/></ToggleText>
                        ]
                    }
                }
            </Toggle>
        </ScrollView>
    )
}

export default HomeScreen


// const activeChecker = (Elem: any, ElemProps: any) => (myIndex: any, currentIndex: any) => {
//   const active = myIndex === currentIndex
//   return React.createElement(Elem, {...ElemProps, active}, {});
// }
// activeChecker(Text, { style: { backgroundColor: 'black' }, children: <><Text>awdawds</Text></> }),
