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
import {format} from 'date-fns';

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

// [
//     "2020-05-05:10:05:00"
//     "2020-05-05:10:05:00"
//     "2020-05-05:10:05:00"
//     "2020-05-05:10:05:00"
//
//     "2020-05-05:12:05:00"
//     "2020-05-05:12:05:00"
// ]
//
//
// {
//     new Date().30 min: [
//     wdaw
//     wadawd
//     awd
// ],
//     new Date().60: [
//     awdaw
//     dwa
//     da
//     w
// ]
// }

console.log(new Date().toTimeString());
console.log(format(new Date(), "HH-mm"));

const sortedDates = {

}

const SimpleList = () => {
    return (
        <>
            <View style={{marginTop: 100}}/>
            <ListDivider>11:30</ListDivider>
<Text>{new Date().toTimeString()}</Text>
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


            {/*{ Array(1)*/}
            {/*    .fill(null)*/}
            {/*    .map(x => <Row>*/}
            {/*        <Col size={ 1 }/>*/}
            {/*        <Col elevation={ 4 } size={ 10 } style={ {*/}
            {/*            backgroundColor: "white",*/}
            {/*            marginTop: 5,*/}
            {/*            marginBottom: 5,*/}
            {/*            padding: 10,*/}
            {/*            borderRadius: 10*/}
            {/*        } }>*/}
            {/*            <Row>*/}
            {/*                <Col size={ 9 }><H3Bold>Swimming</H3Bold></Col>*/}
            {/*                <Col size={ 5 }><H1>7,00</H1></Col>*/}
            {/*            </Row>*/}

            {/*            <H6>12,5 KM</H6>*/}
            {/*            <H6>Het Dolfinarium</H6>*/}
            {/*        </Col>*/}
            {/*        <Col size={ 1 }/>*/}
            {/*    </Row>)*/}
            {/*}*/}
        </>
    );
};

export default SimpleList;
