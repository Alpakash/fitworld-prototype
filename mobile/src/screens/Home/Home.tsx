import React from 'react'
import {Button, ScrollView, View} from 'react-native'
import AuthGet from '../../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components'
import Col from "../../components/layout/Col";
import Row from "../../components/layout/Row";
import {H1} from "../../components/typography/Typography";
import {HomeHeader} from "./HomeHeader";

const CacheButton = styled(Button)`
  align-self: flex-start;
`;

const Home = () => {
    return (
        <View>
            <HomeHeader/>
            <ScrollView style={{paddingTop: 20}}>

                {Array(4)
                    .fill(null)
                    .map((x, index) => <Row key={`i${index}`}>
                        <Col size={1}/>
                        <Col elevation={4}
                             size={10}
                             style={{
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
                </View>
                <View>
                    <AuthGet/>
                </View>

            </ScrollView>
        </View>
    )
};

export default Home;
