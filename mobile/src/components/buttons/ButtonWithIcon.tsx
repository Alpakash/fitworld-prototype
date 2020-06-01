import React from 'react';
import styled from 'styled-components/native';
import {GestureResponderEvent, View} from "react-native";
import {StyledButton} from "./StyledButton";
import {ButtonText, ButtonTextWhite} from "../typography/Typography";

const LeftTouchable = styled(StyledButton)`
  border-top-right-radius: 0px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 20px;
`;

const RightTouchable = styled(StyledButton)`
  border-top-right-radius: 20px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 0px;
`;

interface IButtonProps {
    textColor?: string;
    style?: object;
    border?: string;
    leftIcon?: any;
    rightIcon?: any;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    white?: boolean;
}

const ButtonWithIcon: React.FC<IButtonProps> = (props) => {
    const leftStyling = {
        borderTopRightRadius: !!props.rightIcon ? 0 : 20,
        borderBottomRightRadius: !!props.rightIcon ? 0 : 20,
        ...props.style
    };
    const textStyling = {paddingLeft: props.leftIcon ? 10 : 0};
    const descendants = (
        !!props.white
            ? (
                <ButtonTextWhite style={textStyling}>
                    {props.children}
                </ButtonTextWhite>
            )
            : (
                <ButtonText style={textStyling}>
                    {props.children}
                </ButtonText>
            )
    );
    const emptyCb = () => undefined;

    return (
        <View style={{flexDirection: "row"}}>
            {/* left */}
            {!!props.leftIcon && <LeftTouchable activeOpacity={0.7} onPress={props.onLeftPress ?? emptyCb} style={leftStyling} border={props.border ?? undefined}>
                {props.leftIcon}
                {descendants}
            </LeftTouchable>
            }

            {!props.leftIcon && props.children &&
            <LeftTouchable activeOpacity={0.7} onPress={props.onLeftPress ?? emptyCb} style={leftStyling} border={props.border ?? undefined}>
                {descendants}
            </LeftTouchable>}

            {!!props.rightIcon && <RightTouchable activeOpacity={0.7} onPress={props.onRightPress ?? emptyCb} style={props.style ?? {}} border={props.border ?? undefined}>
                {props.rightIcon}
            </RightTouchable>
            }
        </View>
    );
};

export default ButtonWithIcon;
