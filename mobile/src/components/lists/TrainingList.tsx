import React, { useMemo } from 'react';
import Row from "../layout/Row";
import Col from "../layout/Col";
import { BodyText, H2, H3Bold, H6 } from "../typography/Typography";
import styled from "styled-components";
import { Image, Text, View } from "react-native";
import { format } from 'date-fns';
import Distance from '../../assets/svg/distance_sign.svg';
import Pin from '../../assets/svg/location_pin.svg';
import ListDivider from "./ListDivider";

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

type Training = {
    date: Date,
    name: string,
    distance: number,
    location: string,
}

const trainings: Training[] = [
    {
        date: new Date(2020, 4, 28, 8, 29),
        name: "Swimming",
        distance: 25.4,
        location: "Dolfinarium"
    }, {
        date: new Date(2020, 4, 28, 8, 47),
        name: "Kickboxing",
        distance: 23.2,
        location: "Colosseum"
    },
    {
        date: new Date(2020, 4, 28, 8, 42),
        name: "Kickboxing",
        distance: 23.2,
        location: "Colosseum"
    }, {
        date: new Date(2020, 4, 28, 9, 22),
        name: "Boxing",
        distance: 5,
        location: "The Ring"
    },
    {
        date: new Date(2020, 4, 28, 9, 45),
        name: "YO",
        distance: 5,
        location: "Groet plaats"
    },
    {
        date: new Date(2020, 4, 28, 11, 50),
        name: "YO",
        distance: 5,
        location: "Groet plaats"
    },
];

const splittedDates: any = {};
const now = new Date();
const sortedTrainings = trainings
    .sort((a: any, b: any) => a.date - b.date)
    .map(({ date, ...rest }, i) => {
        let dateKey;
        const val = { date, ...rest };
        if (date.getMinutes() >= 0 && date.getMinutes() <= 30) {
            dateKey = new Date(now.getFullYear(), now.getMonth(), now.getDate(), date.getHours(), 0)
        } else if (date.getMinutes() <= 59 && date.getMinutes() > 30) {
            dateKey = new Date(now.getFullYear(), now.getMonth(), now.getDate(), date.getHours(), 30)
        }
        //@ts-ignore
        if (Array.isArray(splittedDates[dateKey])) {
            // @ts-ignore
            splittedDates[dateKey].push(val)
        } else {
            // @ts-ignore
            splittedDates[dateKey] = [val];
        }
        return { date, ...rest };
    });

const TrainingList = (props: { expandedList: string }) => {
    useMemo(() => sortedTrainings, [trainings]);

    return (
        <>
            {
                Object.entries(splittedDates)
                    .map((x, idx) => {
                        const [key, value] = x as unknown as [string, Training[]];
                        return <>
                            <ListDivider>{ format(Date.parse(key), "HH:mm") }</ListDivider>
                            { value.map(y =>
                                <Row key={ idx }>
                                    <Col size={ 1 }/>
                                    <Container style={ { elevation: 4 } }>
                                        <View style={ { flex: 2 } }>
                                            <Row>
                                                <H6 style={ { marginTop: 5, marginRight: 10 } }>
                                                    <Text>{ format(y.date, "HH:mm") }</Text>
                                                </H6>
                                                <H3Bold>
                                                    { y.name }
                                                </H3Bold>
                                            </Row>
                                            <H6><Distance/> { <BodyText>{ y.distance }</BodyText> } KM</H6>
                                            <H6><Pin/> { <BodyText>{ y.location }</BodyText> }</H6>
                                        </View>
                                        <Price>
                                            <H2>€0,00</H2>
                                        </Price>
                                    </Container>
                                    {
                                        props.expandedList == "expanded" ?
                                            <Col size={ 4 }>
                                                <Image
                                                    style={ { marginLeft: 5, borderRadius: 10 } }
                                                    source={ {
                                                        uri: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
                                                        width: 80,
                                                        height: 99
                                                    } }/>
                                            </Col> : null
                                    }
                                    <Col size={ 1 }/>
                                </Row>
                            ) }
                        </>
                    })
            }
        </>
    );
};

export default TrainingList;
