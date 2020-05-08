import React from 'react'
import { Button, ScrollView, StatusBar, Text, TextInput } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import Toggle from '../components/Toggle'
import styled from 'styled-components'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InputWithIcon from "../components/InputWithIcon";

const ToggleText = styled(Text)<{ active: boolean }>`
  color: ${ props => props.active ? 'white' : 'grey' };
`

const Home = () => {
    return (
        <ScrollView>
            <StatusBar backgroundColor="orange"/>
            <Button title={ 'clear the cache' } onPress={ () => AsyncStorage.clear() }/>
            <AuthGet/>
            <Toggle>
                {
                    (obj: { currentIndex: any}) => {
                        // on ComponentDidMount the currentIndex got a default number from state
                        // when clicked the object changes and gets a nested index inside currentIndex
                        const firstIndexActiveOnLoad = (typeof obj.currentIndex === 'number') ? obj.currentIndex : obj.currentIndex.index;

                        return [
                            (myIndex: number) =>
                                <ToggleText
                                    active={ myIndex === firstIndexActiveOnLoad }>
                                    <MaterialCommunityIcons
                                    name={ "view-sequential" } size={ 30 }/></ToggleText>,
                            (myIndex: number) => <ToggleText
                                active={ myIndex === obj.currentIndex.index }><MaterialCommunityIcons
                                name={ "view-stream" }
                                size={ 30 }/></ToggleText>
                        ]
                    }
                }
            </Toggle>

            <InputWithIcon/>
        </ScrollView>
    )
}

export default Home
