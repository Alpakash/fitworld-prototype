import React from 'react';
import Row from "../layout/Row";
import Col from "../layout/Col";
import { View } from "react-native";
import { Divider } from "../Divider";
import { IDefaultProps } from "fitworld-common/lib/common/src/interfaces/IDefaultProps";
import { H1Bold } from "../typography/Typography";

const ListDivider: React.FC<IDefaultProps> = (props) => {
    return (
                <H1Bold>{ props.children }</H1Bold>
    );
};

export default ListDivider;
