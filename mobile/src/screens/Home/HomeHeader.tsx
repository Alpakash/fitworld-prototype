import {Animated, Text, View} from "react-native";
import {H2BoldWhite} from "../../components/typography/Typography";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import React, {useRef, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Toggle from "../../components/Toggle";
import {useTheme} from "../../util/useTheme";
import BackgroundShape6 from "../../assets/svg/background_shape_6.svg"
import FilterIconDropdown from "../../assets/svg/filter_icon_dropdown.svg"
import InputWithIcon from "../../components/InputWithIcon";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import styled from "styled-components";

const ToggleText = styled(Text)<{ active: boolean }>`
  color: ${props => props.active ? 'white' : 'lightgrey'};
`;

export const HomeHeader = () => {
    const [showFilter, setShowFilter] = useState(true);
    const headerSizeAnim = useRef(new Animated.Value(215)).current;
    const theme = useTheme();

    const ToggleData = (obj: { currentIndex: any }) => {
        const firstIndexActiveOnLoad = (typeof obj.currentIndex === 'number') ? obj.currentIndex : obj.currentIndex.index;
        return [
            (myIndex: number) =>
                <ToggleText
                    // onPress={ () => toggleListView("expanded") }
                    active={myIndex === firstIndexActiveOnLoad}>
                    <MaterialCommunityIcons
                        name={"view-sequential"} size={30}/></ToggleText>,
            (myIndex: number) => <ToggleText
                // onPress={ () => toggleListView("simple") }
                active={myIndex === obj.currentIndex.index}><MaterialCommunityIcons
                name={"view-stream"}
                size={30}/></ToggleText>
        ]
    };

    return (
        <Animated.View
            style={{
                height: headerSizeAnim,
                flexDirection: "column",
                alignContent: "center"
            }}>
            <BackgroundShape6 style={{position: "absolute"}}/>
            <View style={{
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center",
                paddingTop: 25,
                paddingBottom: 25,
            }}>
                <H2BoldWhite style={{alignSelf: "center"}}>
                    What's on the agenda today?
                </H2BoldWhite>
            </View>

            <View style={{flex: 1}}>
                <View style={{
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingBottom: 5,
                }}>
                    <Row style={{alignSelf: "center"}}>
                        <Col size={1}/>
                        <Col size={10}>
                            <InputWithIcon icon={"search"} placeholder={"Search here..."}/>
                        </Col>
                        <Col size={1}/>
                    </Row>
                </View>
                <Row
                >
                    <Col size={1}/>
                    <Col size={5}>
                        <Toggle>
                            {ToggleData}
                        </Toggle>
                    </Col>

                    <Col size={5} style={{justifyContent: "flex-end", flexDirection: "row"}}>
                        <View style={{alignContent: "center", justifyContent: "center"}}>
                            <ButtonWithIcon
                                leftIcon={
                                    <FilterIconDropdown/>
                                }
                                onLeftPress={() => {
                                    setShowFilter(!showFilter);
                                    Animated.spring(headerSizeAnim, {
                                        toValue: showFilter ? 300 : 215,
                                    }).start();
                                }}
                                style={{
                                    backgroundColor: theme?.palette.common.white
                                }}>
                                Filter Options
                            </ButtonWithIcon>
                        </View>
                    </Col>
                    <Col size={1}/>
                </Row>
            </View>
        </Animated.View>
    );
};
