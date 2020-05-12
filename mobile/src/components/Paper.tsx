import React, {PropsWithChildren} from "react";
import styled from "styled-components/native";
import {View} from "react-native";
import {breakpoints} from "../constants";
import {DefaultProps} from "../typings/DefaultProps";

const Container = styled(View)`
  background-color: ${({theme}) => theme.background.ghostWhite};
  max-width: ${breakpoints.sm * 0.60}px;
  padding: 16px;
  border-radius: 12px;
`;
export const Paper = (props: DefaultProps<{ elevation: number, style?: object }>) => {
    return (
        <Container style={{
            ...props.style,
            // TODO iOS, this effect is only possible on android
            elevation: props.elevation ?? 4
        }}>
            {props.children}
        </Container>
    );
};
