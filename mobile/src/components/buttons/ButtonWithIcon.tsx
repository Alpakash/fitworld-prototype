import React from 'react';
import styled from 'styled-components/native';
import { GestureResponderEvent, TouchableWithoutFeedback, View } from "react-native";
import theme from "fitworld-common/lib/common/src/theming/theme";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Row from "../layout/Row";

const StyledButton = styled(View)<{ border: string | undefined }>`
    padding: 5px 0;
    align-items: center;
    background-color: ${ theme.background.ghostWhite };
    border-radius: 20px;
    margin: 10px 0;
`;

interface IButtonProps {
    textColor?: string;
    click: (event: GestureResponderEvent) => void;
    style?: object;
    border?: string;
    icon: string;
}

const ButtonWithIcon: React.FC<IButtonProps> = (props) => {
    return (
        <>
            <TouchableWithoutFeedback onPress={ props.click }>
                <StyledButton style={ { ...props.style } } border={ props.border ?? undefined }>
                    <Row style={{alignItems: 'center'}}>
                        <MaterialIcon name={ props.icon } size={ 35 }/>
                        { props.children }
                    </Row>
                </StyledButton>
            </TouchableWithoutFeedback>
        </>
    );
};

export default ButtonWithIcon;
