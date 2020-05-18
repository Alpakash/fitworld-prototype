import React from 'react';
import { View } from "react-native";
import {DefaultProps} from "../../typings/DefaultProps";

const Col = (props: DefaultProps<{size: number}>) => {
    return (
        <View {...props} style={{...props.style, flex: props.size}}>
            {props.children}
        </View>
    );
};

export default Col;
