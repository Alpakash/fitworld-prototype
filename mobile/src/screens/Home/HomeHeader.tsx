import {Animated, Text, View} from "react-native";
import {H2BoldWhite, H4, H5, H5Bold, H6, H6Bold} from "../../components/typography/Typography";
import Row from "../../components/layout/Row";
import Col from "../../components/layout/Col";
import React, {useContext, useRef} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Toggle from "../../components/Toggle";
import {useTheme} from "../../util/useTheme";
import BackgroundShape6 from "../../assets/svg/background_shape_6.svg"
import FilterIconDropdown from "../../assets/svg/filter_icon_dropdown.svg"
import DividerVertical from "../../assets/svg/divider_vertical.svg"
import CloseIcon from "../../assets/svg/close_icon.svg"
import InputWithIcon from "../../components/InputWithIcon";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import styled from "styled-components";
import {HomeContext} from "../../contexts/HomeContext";
import Slider from "@react-native-community/slider";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {format} from "date-fns";
import ButtonWithoutIcon from "../../components/buttons/ButtonWithoutIcon";

const ToggleText = styled(Text)<{ active: boolean }>`
  color: ${props => props.active ? 'white' : 'lightgrey'};
`;

const FilterButtonContainer = styled(Animated.View)<{ headerHeight: number }>`
  position: absolute;
  width: 100%;
  height: ${({headerHeight}) => headerHeight}px;
  z-index: -1;
  padding: 10px 0;
`;

export const HomeHeader = () => {
    const headerHeight = 215;
    const marginPaddingAnim = useRef(new Animated.Value(0)).current;
    const theme = useTheme();
    const ctx = useContext(HomeContext);


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

    const filters = [
        [
            "Range",
            <View>
                <Slider
                    style={{marginTop: 10, marginBottom: 10}}
                    value={ctx.homeHeader.filters.range.defaultValue}
                    onValueChange={ctx.homeHeader.filters.range.onValueChanged}
                    minimumValue={0}
                    maximumValue={50000}
                    step={250}
                    minimumTrackTintColor={theme?.palette.primary.main}
                    maximumTrackTintColor={theme?.palette.primary.main}
                    thumbTintColor={theme?.palette.secondary.main}
                />
                <H5Bold style={{alignSelf: "center"}}>
                    {ctx.homeHeader.filters.range.value < 1000
                        ? ctx.homeHeader.filters.range.value + "m"
                        : ctx.homeHeader.filters.range.value / 1000 + "km"
                    }
                </H5Bold>
            </View>,
        ],
        [
            "Date",
            <View>
                {
                    ctx.homeHeader.filters.date.showStartDate &&
                        <RNDateTimePicker
                            mode="date"
                            is24Hour={true}
                            value={new Date()}
                            onChange={ctx.homeHeader.filters.date.onStartDateChange}
                        />
                }
                {
                    ctx.homeHeader.filters.date.showEndDate &&
                        <RNDateTimePicker

                            mode="date"
                            is24Hour={true}
                            value={new Date()}
                            onChange={ctx.homeHeader.filters.date.onEndDateChange}
                        />
                }
                <Row style={{marginLeft: 10, marginRight: 10}}>
                    <Col size={5.5}>
                        <ButtonWithoutIcon style={{
                            paddingTop: 5,
                            paddingRight: 8,
                            paddingBottom: 5,
                            paddingLeft: 8
                        }} click={() => ctx.homeHeader.filters.date.setShowStartDate(true)}>
                            {format(ctx.homeHeader.filters.date.start, "dd-MM-yyyy")}
                        </ButtonWithoutIcon>
                    </Col>

                    <Col size={1}>
                        <H6Bold style={{alignSelf: "center"}}>
                            to
                        </H6Bold>
                    </Col>

                    <Col size={5.5}>
                        <ButtonWithoutIcon style={{
                            paddingTop: 5,
                            paddingRight: 8,
                            paddingBottom: 5,
                            paddingLeft: 8
                        }} click={() => ctx.homeHeader.filters.date.setShowEndDate(true)}>
                            {format(ctx.homeHeader.filters.date.end, "dd-MM-yyyy")}
                        </ButtonWithoutIcon>
                    </Col>
                </Row>
            </View>
        ],
        [
            "Time",
            <View>
                {
                    ctx.homeHeader.filters.date.showTimeStart &&
                        <RNDateTimePicker
                            mode="time"
                            textColor={"red"}
                            is24Hour={true}
                            value={new Date()}
                            onChange={ctx.homeHeader.filters.date.onTimeStartChange}

                        />
                }
                {
                    ctx.homeHeader.filters.date.showTimeEnd &&
                        <RNDateTimePicker
                            mode="time"
                            is24Hour={true}
                            value={new Date()}
                            onChange={ctx.homeHeader.filters.date.onTimeEndChange}
                        />
                }
                <Row style={{marginLeft: 10, marginRight: 10}}>
                    <Col size={4}>
                        <H6Bold style={{alignSelf: "center"}}>
                            between
                        </H6Bold>
                    </Col>

                    <Col size={4}>
                        <ButtonWithoutIcon style={{
                            paddingTop: 5,
                            paddingRight: 8,
                            paddingBottom: 5,
                            paddingLeft: 8
                        }} click={() => ctx.homeHeader.filters.date.setShowTimeStart(true)}>
                            {format(ctx.homeHeader.filters.date.timeStart, "HH:mm")}
                        </ButtonWithoutIcon>
                    </Col>

                    <Col size={2}>
                        <H6Bold style={{alignSelf: "center"}}>
                            and
                        </H6Bold>
                    </Col>

                    <Col size={4}>
                        <ButtonWithoutIcon style={{
                            paddingTop: 5,
                            paddingRight: 8,
                            paddingBottom: 5,
                            paddingLeft: 8
                        }} click={() => ctx.homeHeader.filters.date.setShowTimeEnd(true)}>
                            {format(ctx.homeHeader.filters.date.timeEnd, "HH:mm")}
                        </ButtonWithoutIcon>
                    </Col>
                </Row>
            </View>
        ]
    ];

    return (
        <Animated.View
            style={{
                height: headerHeight,
                flexDirection: "column",
                alignContent: "center",
                marginBottom: marginPaddingAnim
            }}>
            <BackgroundShape6 style={{position: "absolute"}}/>

            <FilterButtonContainer style={{top: marginPaddingAnim}} headerHeight={headerHeight}>
                <Row>
                    <Col size={1}/>
                    <Col size={10} style={{justifyContent: "space-between", height: "100%"}}>
                        {filters.map((x, i) =>
                            <Row key={`idx-${i}`}>
                                <Col size={3} style={{minHeight: 60}}>
                                    <DividerVertical style={{position: "absolute", left: "100%"}}/>
                                    <H4>
                                        {x[0]}
                                    </H4>
                                </Col>
                                <Col size={9} style={{alignSelf: "center"}}>
                                    {x[1]}
                                </Col>
                            </Row>
                        )}
                    </Col>
                    <Col size={1}/>
                </Row>
            </FilterButtonContainer>

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
                                    ctx.homeHeader.filterOpened
                                        ? <FilterIconDropdown/>
                                        : <CloseIcon/>
                                }
                                onLeftPress={() => {
                                    ctx.homeHeader.setFilterOpened(!ctx.homeHeader.filterOpened);
                                    Animated.spring(marginPaddingAnim, {
                                        toValue: ctx.homeHeader.filterOpened ? headerHeight : 0,
                                    }).start();
                                }}
                                white={!ctx.homeHeader.filterOpened}
                                style={{
                                    backgroundColor: ctx.homeHeader.filterOpened
                                        ? theme?.palette.common.white
                                        : theme?.palette.secondary.main
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
