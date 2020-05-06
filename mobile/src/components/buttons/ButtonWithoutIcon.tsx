import React from 'react';
import styled from 'styled-components/native';
import {GestureResponderEvent, TouchableHighlight} from "react-native";
import {ButtonText} from "../typography/Typography";

const StyledButton = styled(TouchableHighlight)`
    padding: 10px 24px;
    background-color: #212121;
    border-radius: 5px;
    align-items: center;
`;

interface IButtonProps {
    color?: string;
    click: (event: GestureResponderEvent) => void;
    style?: object;
}

const ButtonWithoutIcon: React.FC<IButtonProps> = (props) => {
    return (
        <>
            <StyledButton style={{...props.style}} onPress={props.click}>
                <ButtonText>{props.children}</ButtonText>
            </StyledButton>
        </>
    );
};

export default ButtonWithoutIcon;
