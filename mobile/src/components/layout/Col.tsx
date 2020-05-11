import React from 'react';
import { View } from "react-native";

const Col = (props: any) => {
    return (
        <View {...props} style={{...props.style, flex: props.size}}>
            {props.children}
        </View>
    );
};

export default Col;
