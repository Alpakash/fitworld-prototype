import React, {useState} from 'react'
import {Button, ScrollView, View} from 'react-native'
import AuthGet from '../../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components'
import Col from "../../components/layout/Col";
import Row from "../../components/layout/Row";
import {H1} from "../../components/typography/Typography";
import {HomeHeader} from "./HomeHeader";
import {HomeContext} from "../../contexts/HomeContext";

const CacheButton = styled(Button)`
  align-self: flex-start;
`;

const Home = () => {
    const [filterOpened, setFilterOpened] = useState(true);
    const [homeHeaderRangeFilter, setHomeHeaderRangeFilter] = useState(25000);
    const [start, setStartDate] = useState(new Date());
    const [end, setEndDate] = useState(new Date());
    const [showStartDate, setShowStartDate] = useState(false);
    const [showEndDate, setShowEndDate] = useState(false);
    const [showTimeStart, setShowTimeStart] = useState(false);
    const [showTimeEnd, setShowTimeEnd] = useState(false);
    const [timeStart, setTimeStart] = useState(new Date());
    const [timeEnd, setTimeEnd] = useState(new Date());

    const genericHandler = (close: (b: boolean) => void, update: (b: any) => void) => (event: any, selectedDate: any) => {
        if (!selectedDate) {
            // abort mission
            close(false);
        } else {
            close(false);
            update(new Date(selectedDate));
        }
    };

    return (
        <HomeContext.Provider value={{
            homeHeader: {
                filterOpened,
                setFilterOpened,
                filters: {
                    range: {
                        // otherwise we make the slider controlled which causes issues with perf
                        // slight hack.
                        defaultValue: 25000,
                        value: homeHeaderRangeFilter,
                        onValueChanged: setHomeHeaderRangeFilter
                    },
                    date: {
                        timeStart,
                        timeEnd,
                        showStartDate,
                        showEndDate,
                        showTimeEnd,
                        showTimeStart,
                        setShowTimeEnd,
                        setShowTimeStart,
                        setShowStartDate,
                        setShowEndDate,
                        startDefaultValue: new Date(),
                        endDefaultValue: new Date(),
                        start,
                        end,
                        onStartDateChange: genericHandler(setShowStartDate, setStartDate),
                        onEndDateChange: genericHandler(setShowEndDate, setEndDate),
                        onTimeStartChange: genericHandler(setShowTimeStart, setTimeStart),
                        onTimeEndChange: genericHandler(setShowTimeEnd, setTimeEnd)
                    }
                }
            }
        }}>
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
        </HomeContext.Provider>
    )
};

export default Home;
