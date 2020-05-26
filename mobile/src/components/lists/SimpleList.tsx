import React from 'react';
import Row from "../layout/Row";
import Col from "../layout/Col";
import { H2, H3Bold, H6 } from "../typography/Typography";
import styled from "styled-components";
import { Image, View } from "react-native";
import Distance from "../../assets/svg/distance_sign.svg";
import Pin from "../../assets/svg/location_pin.svg";
import ListDivider from "./ListDivider";
import { format } from 'date-fns';

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

// loop through training array, through object elements and scan date prop
// do while loop: if there are classes in the upcoming 30 minutes don't stop and put them in the 30 minute box
// if in the next thirty minutes there are classes, push the dates in the array Trainings.

// check for upcoming classes from this hour
// console.log(`${ trainings.map(x => JSON.stringify(x)) }`)

// console.log(dateNow)
// console.log(trainings[2].date)
// console.log(thirty);
// console.log(new Date(2020, 4, 25, 22, 41));
// console.log(new Date(Date.UTC(2020, 5, 25, 22, 33)));
// console.log(new Date().setUTCMinutes(30));

// const trainings = {
// 30min: [
// {name, date, location, distance},
// {name, date, location, distance},
// {name, date, location, distance},
// ],
// 60min: [
// {name, date, location, distance},
// {name, date, location, distance},
// {name, date, location, distance},
// ],
// 90min: [
// {name, date, location, distance},
// {name, date, location, distance},
// {name, date, location, distance},
// ]}

const trainings = [
    {
        date: new Date(2020, 4, 26, 13, 55),
        name: "Swimming",
        distance: 25.4,
        location: "Dolfinarium"
    }, {
        date: new Date(2020, 4, 26, 13, 0),
        name: "Kickboxing",
        distance: 23.2,
        location: "Colosseum"
    }, {
        date: new Date(2020, 4, 26, 13, 20),
        name: "Boxing",
        distance: 5,
        location: "The Ring"
    },
    {
        date: new Date(2020, 4, 26, 13, 50),
        name: "YO",
        distance: 5,
        location: "Groet plaats"
    },
];

const sorted = trainings.slice().sort((a: any, b: any) => a.date - b.date);

const pushedDates: { [key: string]: Array<object> } = {};
const arrayThirty = [];

let i = 0;
let c = 1;
do {
    const startDate = new Date(Date.now());
    const endDate = new Date(Date.now() + (30 * c) * 60 * 1000);

    console.log(`${ c }: endDate ${ endDate }`)
    console.log(`${ i }: startDate: ${ new Date(Date.now() + 30 * i * 60 * 1000) }`);

    if (sorted[i].date > startDate && sorted[i].date < endDate) {
        arrayThirty.push(sorted[i]);

        if (sorted[i].date > endDate) {
            c++;
        }
    }

    i++;
} while (i < sorted.length);

pushedDates["hello"] = arrayThirty;

const SimpleList = (props: { expandedList: string }) => {

    return (
        <>
            <ListDivider>{ format(new Date().getTime(), "HH:mm") }</ListDivider>
            { pushedDates.hello.map((x: any, idx: number) =>
                <Row key={ idx }>
                    <Col size={ 1 }/>
                    <Container style={ { elevation: 4 } }>
                        <View style={ { flex: 2 } }>
                            <Row>
                                <H6 style={ { marginTop: 5, marginRight: 10 } }>
                                    { format(x.date, "HH:mm") }
                                </H6>
                                <H3Bold>{ x.name } </H3Bold>
                            </Row>
                            <H6><Distance/> { x.distance } KM</H6>
                            <H6><Pin/> { x.location }</H6>
                        </View>
                        <Price>
                            <H2>€0,00</H2>
                        </Price>
                    </Container>
                    {
                        props.expandedList == "expanded" ?
                            <Col size={ 4 }>
                                    <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}/>
                            </Col> : null
                    }
                    <Col size={ 1 }/>
                </Row>
            ) }
        </>
    );
};

export default SimpleList;
