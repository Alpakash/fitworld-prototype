import React, { useRef, useState } from 'react';
import { Animated, Dimensions, PanResponder, Platform, View } from 'react-native'
import styled from 'styled-components';
import Button from "./Button";

const width = Math.round(Dimensions.get('window').width);

const Metrics = {
    containerWidth: width - 30,
    switchWidth: width / 2.7
};

const Container = styled(View)`
width: ${ Metrics.containerWidth }px;
height: 55px;
flex-direction: row;
background-color: lightgrey;
border-color: lightgrey;
align-items: center;
justify-content: center;
border-width: 1px;
border-radius: 27.5px;
`;

const MultiSwitch = styled(Animated.View)`
flex-direction: row;
position: absolute;
top: 0;
left: 0;
background-color: white;
border-radius: 28px;
height: 53px;
align-items: center;
justify-content: center;
width: ${ Metrics.switchWidth }px;
`;


const Toggle = (props: { parentScrollDisabled?: boolean, disableScroll?: boolean }) => {
    const [disableParentScroll, setDisableParentScroll] = useState(false);
    const [disablePanScroll, setDisablePanScroll] = useState(false);
    const thresholdDistance = width - 8 - width / 2.4;
    const [selectedPosition, setSelectedPosition] = useState(0);
    const [posValue, setPosValue] = useState(0);
    const position = useRef(new Animated.Value(0)).current;


    const panResponder = useRef(
        PanResponder.create({
            // Ask to be the responder
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            // Called when gesture starts
            onPanResponderGrant: (evt, gestureState) => {
                if (!disableParentScroll) {
                    setDisablePanScroll(false);
                    setDisableParentScroll(true);
                }
            },
            // Called when the user is dragging
            onPanResponderMove: (evt, gestureState) => {
                let finalValue = gestureState.dx + posValue;
                if (
                    finalValue >= 0 &&
                    finalValue <= thresholdDistance
                )
                    position.setValue(posValue + gestureState.dx);
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            // Called when user releases all touches
            onPanResponderRelease: (evt, gestureState) => {
                let finalValue = gestureState.dx + posValue;
                setDisableParentScroll(true);
                setDisablePanScroll(true);

                if (gestureState.dx > 0) {
                    if (finalValue >= 0 && finalValue <= 30) {
                        rocketSelected();
                    } else if (finalValue >= 30 && finalValue <= 121) {
                        homeSelected();
                    } else if (finalValue >= 121 && finalValue <= 280) {
                        if (gestureState.dx > 0) {
                            appleSelected();
                        } else {
                            homeSelected();
                        }
                    }
                } else {
                    if (finalValue >= 78 && finalValue <= 175) {
                        homeSelected();
                    } else if (finalValue >= -100 && finalValue <= 78) {
                        rocketSelected();
                    } else {
                        appleSelected();
                    }
                }
            },
            onPanResponderTerminate: (evt, gestureState) => {},
            onShouldBlockNativeResponder: (evt, gestureState) => {
                return true;
            },
        }),
    ).current;

    const rocketSelected = () => {
        Animated.timing(position, {
            toValue: Platform.OS === "ios" ? -2 : 0,
            duration: 100
        }).start();
        setTimeout(() => {
            setPosValue(Platform.OS === "ios" ? -2 : 0);
        }, 100);
        setSelectedPosition(0);

    };

    const homeSelected = () => {
        Animated.timing(position, {
            toValue: Metrics.containerWidth / 2 - Metrics.switchWidth / 2,
            duration: 100
        }).start();

        setTimeout(() => {
            setPosValue(Metrics.containerWidth / 2 - Metrics.switchWidth / 2);
        }, 100);
        setSelectedPosition(1);
    };

    const appleSelected = () => {
        Animated.timing(position, {
            toValue:
                Platform.OS === "ios"
                    ? Metrics.containerWidth - Metrics.switchWidth
                    : Metrics.containerWidth - Metrics.switchWidth - 2,
            duration: 100
        }).start();
        setTimeout(() => {
            setPosValue(Platform.OS === "ios"
                ? Metrics.containerWidth - Metrics.switchWidth
                : Metrics.containerWidth - Metrics.switchWidth - 2);
        }, 100);
        setSelectedPosition(2);
    };

    const getStatus = () => {
        switch (selectedPosition) {
            case 0:
                return "rocket";
            case 1:
                return "home";
            case 2:
                return "apple";
            default:
                return "question"
        }
    };

    return (
        <Container>
            <Button type="rocket"/>
            <Button type="home"/>
            <Button type="apple"/>
            <MultiSwitch
                {...panResponder.panHandlers}
                style={ {
                    elevation: 4,
                    shadowOpacity: 0.31,
                    shadowRadius: 10,
                    shadowColor: 'grey',
                    transform: [{ translateX: position }]
                } }>
                <Button type={`${getStatus()}`} active={true} />
            </MultiSwitch>
        </Container>
    );
};

export default Toggle;
