import React, { useRef } from 'react';
import { Animated, TextInput, View } from "react-native";
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled(View)`
background-color: ${ ({ theme }) => theme.background.ghostWhite };
flex-direction: row;
align-items: center;
justify-content: space-around;
border-radius: 25px;
`;

const SearchInput = styled(TextInput)`
background-color: ${ ({ theme }) => theme.background.ghostWhite };
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
    const flexAnim = useRef(new Animated.Value(1)).current;
    const paddingAnimation = useRef(new Animated.Value(0)).current;

    const onSelect = () => {
        // use animations if the input value is filled
        if (!value) {
            Animated.spring(iconOpacity, {
                toValue: 0
            }).start()

            Animated.spring(paddingAnimation, {
                toValue: 30
            }).start()

            Animated.spring(flexAnim, {
                toValue: 0,
            }).start()
        }
    };

    const onDeselect = () => {
        // use animations if the input value is filled
        if (!value) {
            Animated.spring(iconOpacity, {
                toValue: 1
            }).start()

            Animated.spring(flexAnim, {
                toValue: 1,
                bounciness: 0
            }).start()
        }
    };


    return (
        <>
            <Container style={ { elevation: 4 } }>
                {/* Animated opacity for icon*/ }
                <Animated.View style={ {
                    position: "absolute",
                    left: 20,
                    opacity: iconOpacity
                } }>
                    <Icon name={ props.icon } size={ 25 } color="lightgrey"/>
                </Animated.View>
                {/* Animated flex for input field*/ }
                <Animated.View style={ { flex: flexAnim } }/>
                <Animated.View style={ { flex: 1, flexBasis: 50, paddingLeft: paddingAnimation } }>
                    <SearchInput
                        onChangeText={ text => onChangeText(text) }
                        placeholder={ props.placeholder }
                        onFocus={ onSelect }
                        onBlur={ onDeselect }
                        value={ value }
                    />
                </Animated.View>
                <Animated.View style={ { flex: flexAnim } }/>
            </Container>
        </>
    );
};

export default InputWithIcon;
