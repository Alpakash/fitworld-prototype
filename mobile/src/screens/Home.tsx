import React, { useState } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import AuthGet from '../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InputWithIcon from "../components/InputWithIcon";
import ButtonWithIcon from "../components/buttons/ButtonWithIcon";
import Col from "../components/layout/Col";
import Row from "../components/layout/Row";
import BackgroundShape6 from "../assets/svg/background_shape_6.svg"
import {ButtonText, H1, H1BoldWhite, H3White} from "../components/typography/Typography";
import {getPeriodOfDay} from "../util/getPeriodOfDay";
import Toggle from "../components/Toggle";

const ToggleText = styled(Text)<{ active: boolean }>`
  color: ${ props => props.active ? 'white' : 'lightgrey' };
`;

const CacheButton = styled(Button)`
  align-self:flex-start;
`;

const Home = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [listView, setListView] = useState({});

    const toggleListView = (ListView: string) => {
        setListView(ListView);
    };

    const ToggleData = (obj: { currentIndex: any }) => {
        // on ComponentDidMount the currentIndex got a default number from state
        // when clicked the object changes and gets a nested index inside currentIndex
        const firstIndexActiveOnLoad = (typeof obj.currentIndex === 'number') ? obj.currentIndex : obj.currentIndex.index;

        return [
            (myIndex: number) =>
                <ToggleText
                    // onPress={ () => toggleListView("expanded") }
                    active={ myIndex === firstIndexActiveOnLoad }>
                    <MaterialCommunityIcons
                        name={ "view-sequential" } size={ 30 }/></ToggleText>,
            (myIndex: number) => <ToggleText
                // onPress={ () => toggleListView("simple") }
                active={ myIndex === obj.currentIndex.index }><MaterialCommunityIcons
                name={ "view-stream" }
                size={ 30 }/></ToggleText>
        ]
    };


    return (
        <View>
            {/* SVG is always 205 height */}
            <View
                style={{height: 205, flexDirection: "column", justifyContent: "space-between", alignContent: "center"}}>
                <BackgroundShape6 style={ { position: "absolute" } }/>
            <View style={ { justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    flex: 1
                }}>
                        <H3White style={{alignSelf: "center"}}>
                            Have a wonderful
                        </H3White>
                        <H1BoldWhite style={{alignSelf: "center"}}>
                            {getPeriodOfDay()}
                        </H1BoldWhite>
                </View>
                <View style={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingBottom: 30 } }>
                <Row style={{alignSelf: "center"}}>
                    <Col size={ 1 }/>
                    <Col size={ 10 }>
                        <InputWithIcon icon={ "search" } placeholder={ "Search here..." }/>
                    </Col>
                    <Col size={ 1 }/>
                </Row></View>
            </View>

            <ScrollView style={{paddingTop: 20}}>

                <Row>
                    <Col size={ 1 }/>
                    <Col size={ 5 }>
                        <Toggle>
                            { ToggleData }
                        </Toggle>
                    </Col>

                    <Col size={ 5 }>
                        <ButtonWithIcon
                            icon="filter-outline"
                            size={35}
                            click={ () => setShowFilter(!showFilter) }>
                            <ButtonText style={ { paddingTop: 3 } }>Filter Options</ButtonText>
                        </ButtonWithIcon>
                    </Col>
                    <Col size={ 1 }/>
                </Row>

                { Array(4)
                    .fill(null)
                    .map((x, index) => <Row key={ `i${ index }` }>
                        <Col size={ 1 }/>
                        <Col elevation={ 4 }
                             size={ 10 }
                             style={ {
                                 backgroundColor: "white",
                                 marginTop: 5,
                                 marginBottom: 5,
                                 padding: 10,
                                 borderRadius: 10
                             } }>
                            <H1>
                                hi
                            </H1>
                        </Col>
                        <Col size={ 1 }/>
                    </Row>)
                }

                <View style={ { margin: 30, flexDirection: "row" } }>
                    <CacheButton title={ 'clear the cache' }
                                 onPress={ () => AsyncStorage.clear() }/>
                </View>
                <View>
                    <AuthGet/>
                </View>
                { showFilter ? <Text>Hello Filter!</Text> : <Text>Filter hidden</Text> }

            </ScrollView>
        </View>
    )
};

export default Home;
