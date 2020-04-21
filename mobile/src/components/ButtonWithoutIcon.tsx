import React from 'react';
import styled from 'styled-components';
import { GestureResponderEvent, TouchableHighlight } from "react-native";
import { ButtonText } from "./typography/Typography";

const StyledButton = styled(TouchableHighlight)`
    padding: 5px 0;
    background-color: #212121;
    border-radius: 5px;
    align-items: center;
`;

interface IButtonProps {
    color?: string;
    click: (event: GestureResponderEvent) => void;
    width: number;
}

const ButtonWithoutIcon: React.FC<IButtonProps> = (props) => {
    return (
        <>
            <StyledButton style={{width: props.width}} onPress={props.click}>
                <ButtonText>{props.children}</ButtonText>
            </StyledButton>
        </>
    );
};

export default ButtonWithoutIcon;
