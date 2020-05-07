import React from 'react';
import {Text, View} from "react-native";

const Splash = () => {
    return (
        <View style={{
        shadowColor: "#000",
            shadowOffset: {
            width: 0,
                height: 7,
        },
        shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
    }}>
            <Text>loading cache this should be some splash screen</Text>
        </View>
    );
};

export default Splash;
