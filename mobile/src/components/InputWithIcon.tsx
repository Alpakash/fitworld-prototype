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

interface Props {
    placeholder: string;
    icon: string;
}

const InputWithIcon: React.FC<Props> = (props) => {
    const [value, onChangeText] = React.useState('');
    const iconOpacity = useRef(new Animated.Value(1)).current;
    const scrollAnim = useRef(new Animated.Value(0)).current;

    // overflow: none; wanneer er text is niet animeren
    const fadeOut = () => {
        Animated.spring(iconOpacity, {
            toValue: 0
        }).start()

        Animated.spring(scrollAnim, {
            toValue: -60
        }).start()
    };

    const fadeIn = () => {
        Animated.spring(iconOpacity, {
            toValue: 1
        }).start()

        Animated.spring(scrollAnim, {
            toValue: 0,
            bounciness: 0
        }).start()
    };

    return (
        <>
            <Container style={ { elevation: 4 } }>
                {/* Empty space before the icon */}
                <Col size={ 2 }/>
                <Animated.View style={{opacity: iconOpacity}}>
                        <Icon name={ props.icon } size={ 25 } color="lightgrey"/>
                </Animated.View>
                {/* Empty space after the icon */}
                <Col size={ 3 }/>
                <Animated.View style={{
                    transform: [{ translateX: scrollAnim }],
                }}>
                <SearchInput
                    onChangeText={ text => onChangeText(text) }
                    onFocus={fadeOut}
                    onBlur={fadeIn}
                    placeholder={props.placeholder}
                    value={ value }
                />
                </Animated.View>
                {/* Empty space after the placeholder text */}
                <Col size={ 7 }/>
            </Container>

            {/* Dummy check for a word on Input field */}
            <View style={ { alignSelf: 'center', marginTop: 5, marginBottom: 10 } }>
                { value.includes("yo") ? <Text>You typed in "yo" somewhere!</Text> :
                    <Text>String doesn't contain the word "yo"</Text> }
            </View>
        </>
    );
};

export default InputWithIcon;
