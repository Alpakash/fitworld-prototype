import React from 'react';
import styled from 'styled-components/native';
import {GestureResponderEvent, TouchableHighlight} from "react-native";
import {ButtonText} from "../typography/Typography";
import {StyledButton} from "./StyledButton";


interface IButtonProps {
    color?: string;
    click: (event: GestureResponderEvent) => void;
    style?: object;
    border?: string
}

const ButtonWithoutIcon: React.FC<IButtonProps> = (props) => {
    return (
        <>
            <StyledButton style={{...props.style}} border={props.border ?? undefined} onPress={props.click}>
                <ButtonText>{props.children}</ButtonText>
            </StyledButton>
        </>
    );
};

export default ButtonWithoutIcon;
