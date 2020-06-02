import React from 'react';
import styled from 'styled-components/native';
import { GestureResponderEvent, TouchableWithoutFeedback, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Row from "../layout/Row";

const StyledButton = styled(View)<{ border: string | undefined }>`
    padding: 5px 0;
    align-items: center;
    background-color: ${({theme}) => theme.background.ghostWhite };
    border-radius: 20px;
    margin: 10px 0;
`;

const ButtonRow = styled(Row)<{right?: boolean}>`
align-items: center;
flex-direction: ${(props) => props.right ? "row-reverse" : "row"};
`;

interface IButtonProps {
    textColor?: string;
    click: (event: GestureResponderEvent) => void;
    style?: object;
    border?: string;
    icon: string;
    size: number;
    right?: boolean;
}

const ButtonWithIcon: React.FC<IButtonProps> = (props) => {
    return (
            <TouchableWithoutFeedback onPress={ props.click }>
                <StyledButton style={ { ...props.style } } border={ props.border ?? undefined }>
                    {/* if right is true, icon will appear on the right side */}
                    <ButtonRow right={props.right}>
                        <MaterialIcon name={ props.icon } size={ props.size }/>
                        { props.children }
                    </ButtonRow>
                </StyledButton>
            </TouchableWithoutFeedback>
    );
};

export default ButtonWithIcon;
