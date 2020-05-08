import React from 'react';
import { Dimensions, TextInput, View } from "react-native";
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const Container = styled(View)`
flex: 1;
background-color: white;
flex-direction: row;
align-items: center;
border-radius: 25px;
margin: 10px ${width/10}px;
width: 311px;
`;

const SearchInput = styled(TextInput)`
background-color: white;
border-color: gray;
font-size: 20px;
border-radius: 25px;
flex: 7;
`;

const InputWithIcon = () => {
    const [value, onChangeText] = React.useState('');

    return (
        <Container style={ { elevation: 4 } }>
            <View style={ { flex: 1 } }/>
            <Icon style={ { flex: 2 } } name="search" size={ 25 } color="lightgrey"/>
            <SearchInput
                onChangeText={ text => onChangeText(text) }
                placeholder={ 'Search here...' }
                value={ value }
            />
        </Container>
    );
};

export default InputWithIcon;
