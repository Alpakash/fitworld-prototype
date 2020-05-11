import React from 'react'
import { Button, ScrollView, StatusBar, Text } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import Toggle from '../components/Toggle'
import styled from 'styled-components'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InputWithIcon from "../components/InputWithIcon";
import Col from "../components/layout/Col";
import Row from "../components/layout/Row";

const ToggleText = styled(Text)<{ active: boolean }>`
  color: ${ props => props.active ? 'white' : 'grey' };
`
const ToggleData = (obj: { currentIndex: any }) => {
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
};

const Home = () => {
    return (
        <ScrollView>
            <StatusBar backgroundColor="orange"/>
            <Button title={ 'clear the cache' } onPress={ () => AsyncStorage.clear() }/>
            <AuthGet/>
            <Row>
                <Col size={ 1 }/>
                <Col size={ 10 }>
                    <InputWithIcon/>
                </Col>
                <Col size={ 1 }/>
            </Row>
            <Row>
                <Col size={ 1 }/>
                <Col size={ 5 }>
                    <Toggle>
                        { ToggleData }
                    </Toggle>
                </Col>
                <Col size={ 1 }/>
                <Col size={ 4 }>
                    <Toggle>
                        {/*Should turn into Filter Component*/}
                        { ToggleData }
                    </Toggle>
                </Col>
                <Col size={ 1 }/>
            </Row>

        </ScrollView>
    )
}

export default Home
