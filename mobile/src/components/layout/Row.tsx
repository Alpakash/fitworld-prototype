import React from 'react';
import { View } from "react-native";
import styled from "styled-components";
import {DefaultProps} from "../../typings/DefaultProps";

const RowView = styled(View)`
flex-direction: row;
`;

const Row: React.FC<DefaultProps<{}>> = (props) => {
    return (
        <RowView style={props.style ?? {}}>
            {props.children}
        </RowView>
    );
};

export default Row;
