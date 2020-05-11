import React from 'react';
import { Text, TextInput, View } from "react-native";
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
    const [focusInput, setFocusInput] = React.useState(false);

    return (
        <>
            <Container style={ { elevation: 4 } }>
                {/* something to fill up space */ }
                <Col size={ 1 }/>
                { focusInput ? null : <Icon style={ { flex: 2 } } name="search" size={ 25 } color="lightgrey"/> }
                <SearchInput
                    onChangeText={ text => onChangeText(text) }
                    onFocus={ () => setFocusInput(true) }
                    onBlur={ () => setFocusInput(false) }
                    placeholder={ 'Search here...' }
                    value={ value }
                />
                <Col size={ 3 }/>
            </Container>
            <View style={{alignSelf: 'center', marginTop: 5, marginBottom: 10}}>
                { value.includes("yo") ? <Text>You typed in "yo" somewhere!</Text> :
                    <Text>String doesn't contain the word "yo"</Text> }
            </View>
        </>
    );
};

export default InputWithIcon;
