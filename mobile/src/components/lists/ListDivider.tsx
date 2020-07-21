import React from 'react';
import Row from "../layout/Row";
import Col from "../layout/Col";
import { View } from "react-native";
import { IDefaultProps } from "fitworld-common/lib/common/src/interfaces/IDefaultProps";
import { H1Bold } from "../typography/Typography";
import styled from 'styled-components';

const Flexin = styled(View)`
flex: 1;
align-items: center;
margin: 10px 0;
`;

const ListDivider: React.FC<IDefaultProps> = (props) => {
    return (
        <Flexin>
                <H1Bold>{props.children}</H1Bold>
        </Flexin>

    );
};

export default ListDivider;
