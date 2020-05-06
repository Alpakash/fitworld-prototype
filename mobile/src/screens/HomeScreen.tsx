import React from 'react'
import { Button, ScrollView, StatusBar, Text } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import Toggle from '../components/Toggle'
import styled from 'styled-components'

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
            // If currentIndex is an object when onPress (scroll method is not clicked yet) load the currentIndex state
            const firstIndexActive = (typeof obj.currentIndex === 'number') ? obj.currentIndex : obj.currentIndex.index;

            return [
              (myIndex: number) => <ToggleText
                active={ myIndex === firstIndexActive}>Hi</ToggleText>,
              (myIndex: number) => <ToggleText
                active={ myIndex === obj.currentIndex.index }>Hey</ToggleText>
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
