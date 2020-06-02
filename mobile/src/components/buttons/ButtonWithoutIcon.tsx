import React from 'react';
import styled from 'styled-components/native';
import {GestureResponderEvent, TouchableHighlight} from "react-native";
import {ButtonText, ButtonTextWhite} from "../typography/Typography";
import {StyledButton} from "./StyledButton";

const StyledButton = styled(TouchableHighlight)<{border: string | undefined}>`
    padding: 10px 24px;
    background-color: #212121;
    border-radius: 5px;
    align-items: center;
    ${({border}) => !!border ? `border: ${border}` : ""}
`;

interface IButtonProps {
    color?: string;
    click: (event: GestureResponderEvent) => void;
    style?: object;
    border?: string;
    white?: boolean;
}

const ButtonWithoutIcon: React.FC<IButtonProps> = (props) => {
    const descendants = (
        !!props.white
            ? (
                <ButtonText>
                    {props.children}
                </ButtonText>
            )
            : (
            <ButtonTextWhite>
                {props.children}
            </ButtonTextWhite>
            )
    );

    return (
        <>
            <StyledButton style={{...props.style}} border={props.border ?? undefined} onPress={props.click} activeOpacity={0.65}>
                {descendants}
            </StyledButton>
        </>
    );
};

export default ButtonWithoutIcon;
