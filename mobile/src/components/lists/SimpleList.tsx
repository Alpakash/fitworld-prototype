import React from 'react';
import Row from "../layout/Row";
import Col from "../layout/Col";
import { H1, H3Bold, H6 } from "../typography/Typography";
import styled from "styled-components";
import { View, Text } from "react-native";
import Distance from "../../assets/svg/distance_sign.svg";
import Pin from "../../assets/svg/location_pin.svg";
import { Divider } from "../Divider";
import ListDivider from "./ListDivider";
import { compareDesc, format, formatDistance } from 'date-fns';

const Container = styled(View)`
background-color: ${ ({ theme }) => theme.background.ghostWhite };
border-radius: 10px;
justify-content: space-between;
padding: 10px;
flex: 10;
margin: 5px 0;
flex-direction: row;
`;

const Price = styled(View)`
flex: 1;
padding-right: 20px;
align-items: flex-end;
justify-content: center;
`;

const trainingTimes = [
    new Date(),
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10)
]

const sortedDates = {

}

console.log(trainingTimes.sort(compareDesc));

console.log(
    formatDistance(
        new Date(1986, 3, 4, 11, 32, 0),
        new Date(1986, 3, 4, 9, 32, 0),
        { addSuffix: true }
    )
)

const SimpleList = () => {
    return (
        <>
            <View style={{marginTop: 100}}/>
            <ListDivider>{JSON.stringify(format(new Date().setMinutes(30), 'HH:mm'))}</ListDivider>
            <Text>{JSON.stringify(new Date().toTimeString())}</Text>
            <Text>{JSON.stringify(format(new Date().setMinutes(60), "HH:mm"))}</Text>
            <Text>{JSON.stringify(format(new Date().setMinutes(90), "HH:mm"))}</Text>
            <Text>{JSON.stringify(format(new Date().setMinutes(120), "HH:mm"))}</Text>

            <Row>
                <Col size={ 1 }/>
                <Container style={{elevation: 4}}>
                        <View style={{flex: 1}}>
                            <H3Bold>Swimming</H3Bold>
                            <H6><Distance/> 12,5 KM</H6>
                            <H6><Pin/> Het Dolfinarium</H6>
                        </View>
                        <Price>
                            <H1>€7,00</H1>
                        </Price>
                </Container>
                <Col size={ 1 }/>
            </Row>
            </>
    );
};

export default SimpleList;
