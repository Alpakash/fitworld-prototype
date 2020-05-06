import React from 'react';
import styled from "styled-components/native";
import {Dimensions, GestureResponderEvent, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Math.round(Dimensions.get('window').width);
const iconsWidth = (width - 30) / 3;

const ButtonStyle = styled(TouchableOpacity)`
flex: 1;
width: ${iconsWidth}px;
height: 54px;
justify-content: center;
align-items: center;
`;

const Button = (props: { type: string, active?: boolean, onPress?: (event: GestureResponderEvent) => void }) => {
    return (
        <View>
            <ButtonStyle onPress={props.onPress}>
                <Icon name={props.type}/>
            </ButtonStyle>
        </View>
    );
};


export default Button;
