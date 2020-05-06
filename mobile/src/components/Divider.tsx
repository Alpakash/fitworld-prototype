import Svg, {Path} from "react-native-svg";
import {DefaultProps} from "../typings/DefaultProps";
import React from "react";
import {View} from "react-native";

export const Divider = (props: DefaultProps<{}>) => {
    return (
        <View style={{
            marginTop: 7,
            marginBottom: 7
        }}>

            <Svg width={"100%"} height={2} viewBox="0 0 90 2" fill="none" preserveAspectRatio={"none"} {...props}>
                <Path d="M0 1h90" stroke="#CACACA"/>
            </Svg>
        </View>
    )
};
