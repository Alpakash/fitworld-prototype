import React, {useState} from 'react'
import {Button, ScrollView, Text, View} from 'react-native'
import AuthGet from '../../AuthGet'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components'

import {HomeHeader} from "./HomeHeader";
import {HomeContext} from "../../contexts/HomeContext";
import TrainingList from "../../components/lists/TrainingList";

const CacheButton = styled(Button)`
  align-self: flex-start;
`;

const Home = () => {
    const [filterOpened, setFilterOpened] = useState(true);
    const [listViewToggle, setListViewToggle] = useState("expanded");
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
                listView: {
                    listViewToggle,
                    setListViewToggle
                },

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
                        <TrainingList/>
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
