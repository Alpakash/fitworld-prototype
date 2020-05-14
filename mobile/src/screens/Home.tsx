import React from 'react'
import {Button, ScrollView, Text, View} from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InputWithIcon from "../components/InputWithIcon";
import Col from "../components/layout/Col";
import Row from "../components/layout/Row";
import BackgroundShape6 from "../assets/svg/background_shape_6.svg"
import {H1, H1BoldWhite, H3White} from "../components/typography/Typography";

const ToggleText = styled(Text)<{ active: boolean }>`
  color: ${props => props.active ? 'white' : 'grey'};
`
const ToggleData = (obj: { currentIndex: any }) => {
    // on ComponentDidMount the currentIndex got a default number from state
    // when clicked the object changes and gets a nested index inside currentIndex
    const firstIndexActiveOnLoad = (typeof obj.currentIndex === 'number') ? obj.currentIndex : obj.currentIndex.index;

    return [
        (myIndex: number) =>
            <ToggleText
                active={myIndex === firstIndexActiveOnLoad}>
                <MaterialCommunityIcons
                    name={"view-sequential"} size={30}/></ToggleText>,
        (myIndex: number) => <ToggleText
            active={myIndex === obj.currentIndex.index}><MaterialCommunityIcons
            name={"view-stream"}
            size={30}/></ToggleText>
    ]
};

const CacheButton = styled(Button)`
  align-self:flex-start;
`;

const Home = () => {
    return (
        <View>
            {/* SVG is always 205 height */}
            <View
                style={{height: 205, flexDirection: "column", justifyContent: "space-between", alignContent: "center"}}>
                <BackgroundShape6 style={{position: "absolute"}}/>
                <View style={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    flex: 1
                }}>
                        <H3White style={{alignSelf: "center"}}>
                            Have a wonderful
                        </H3White>
                        <H1BoldWhite style={{alignSelf: "center"}}>
                            Afternoon
                        </H1BoldWhite>
                </View>
                <View style={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingBottom: 30
                }}>
                    <Row style={{alignSelf: "center"}}>
                        <Col size={1}/>
                        <Col size={10}>
                            <InputWithIcon icon={"search"} placeholder={"Search here..."}/>
                        </Col>
                        <Col size={1}/>
                    </Row>
                </View>
            </View>

            <ScrollView style={{paddingTop: 20}}>

                <Row>
                    <Col size={1}/>
                    <Col size={5}>
                        {/*<Toggle>*/}
                        {/*    { ToggleData }*/}
                        {/*</Toggle>*/}
                    </Col>

                    <Col size={5}>
                        {/*Should turn into Filter Component*/}
                        <Text>Filter Component</Text>
                    </Col>
                    <Col size={1}/>
                </Row>

                {Array(20)
                    .fill(null)
                    .map((x, i) => <Row key={`how-${i}`}>
                        <Col size={1}/>
                        <Col elevation={4} size={10} style={{
                            backgroundColor: "white",
                            marginTop: 5,
                            marginBottom: 5,
                            padding: 10,
                            borderRadius: 10
                        }}>
                            <H1>
                                hi
                            </H1>
                        </Col>
                        <Col size={1}/>
                    </Row>)
                }

                <View style={{margin: 30, flexDirection: "row"}}>
                    <CacheButton title={'clear the cache'}
                                 onPress={() => AsyncStorage.clear()}/>
                    <View>
                        <AuthGet/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default Home
