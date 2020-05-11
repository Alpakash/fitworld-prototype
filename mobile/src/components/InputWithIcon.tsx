import React, { useRef } from 'react';
import { Animated, Text, TextInput, View } from "react-native";
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Col from "./layout/Col";

const Container = styled(View)`
background-color: white;
flex-direction: row;
align-items: center;
border-radius: 25px;
`;

const SearchInput = styled(TextInput)`
background-color: white;
border-color: gray;
font-size: 20px;
border-radius: 25px;
`;

const InputWithIcon = () => {
    const [value, onChangeText] = React.useState('');
    const iconOpacity = useRef(new Animated.Value(1)).current;
    const scrollAnim = useRef(new Animated.Value(0)).current;

    const fadeOut = () => {
        Animated.timing(iconOpacity, {
            toValue: 0,
            duration: 300
        }).start()

        Animated.timing(scrollAnim, {
            toValue: -60,
            duration: 300
        }).start()
    };

    const fadeIn = () => {
        Animated.timing(iconOpacity, {
            toValue: 1,
            duration: 300
        }).start()

        Animated.timing(scrollAnim, {
            toValue: 0,
            duration: 300
        }).start()
    };

    return (
        <>
            <Container style={ { elevation: 4 } }>
                {/* something to fill up space */ }
                <Col size={ 1 }/>
                <Animated.View style={{opacity: iconOpacity, flex: 2}}>
                        <Icon name="search" size={ 25 } color="lightgrey"/>
                </Animated.View>

                <Animated.View style={{
                    transform: [{ translateX: scrollAnim }],
                }}>
                <SearchInput
                    onChangeText={ text => onChangeText(text) }
                    onFocus={fadeOut}
                    onBlur={fadeIn}
                    placeholder={ 'Search here...' }
                    value={ value }
                />
                </Animated.View>
                <Col size={ 3 }/>
            </Container>
            <View style={ { alignSelf: 'center', marginTop: 5, marginBottom: 10 } }>
                { value.includes("yo") ? <Text>You typed in "yo" somewhere!</Text> :
                    <Text>String doesn't contain the word "yo"</Text> }
            </View>
        </>
    );
};

export default InputWithIcon;
