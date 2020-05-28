import React from 'react';
import { View } from "react-native";
import {DefaultProps} from "../../typings/DefaultProps";
import styled from "styled-components";

const ColView = styled(View)`
  justify-content: center;
  align-content: center;
`;

const Col = (props: DefaultProps<{size: number}>) => {
    return (
        <ColView {...props} style={{...props.style, flex: props.size}}>
            {props.children}
        </ColView>
    );
};

export default Col;
