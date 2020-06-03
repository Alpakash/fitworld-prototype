import React from 'react';
import styled from 'styled-components';
import { GestureResponderEvent, TouchableHighlight } from "react-native";

const ListButton = styled(TouchableHighlight)`
    flex-wrap: wrap;
    flex-direction: row;
`;

interface IButtonProps {
    textColor?: string;
    style?: object;
    border?: string;
    rightIcon?: any;
    click?: (event: GestureResponderEvent) => void;
}

const ButtonWithIcon: React.FC<IButtonProps> = (props) => {
    return (
        <ListButton onPress={props.click}>
            { props.children }
        </ListButton>
);
};

export default ButtonWithIcon;
