import React from 'react';
import { View } from "react-native";
import styled from "styled-components";

const RowView = styled(View)`
flex-direction: row;
`;

const Row: React.FC = (props) => {
    return (
        <RowView>
            {props.children}
        </RowView>
    );
};

export default Row;
