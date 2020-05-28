import React from 'react';
import Row from "../layout/Row";
import Col from "../layout/Col";
import { BodyText, H1Bold } from "../typography/Typography";
import styled from "styled-components";
import { View } from "react-native";
import { isSameDay, isSameHour } from 'date-fns';

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
        date: new Date(2020, 4, 27, 8, 59),
        name: "Swimming",
        distance: 25.4,
        location: "Dolfinarium"
    }, {
        date: new Date(2020, 4, 27, 8, 0),
        name: "Kickboxing",
        distance: 23.2,
        location: "Colosseum"
    }, {
        date: new Date(2020, 4, 27, 9, 0),
        name: "Boxing",
        distance: 5,
        location: "The Ring"
    },
    {
        date: new Date(2020, 4, 27, 9, 59),
        name: "YO",
        distance: 5,
        location: "Groet plaats"
    },
];

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const splittedDates: any = {};
const now = new Date();
let last: Date | undefined = undefined;
Array(24 * 2)
    .fill(undefined)
    .map((x, i) => {
        if (i === 0) {
            last = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
            //@ts-ignore
            return splittedDates[last] = [];
        } else if (!!last) {
            if (last.getMinutes() === 30) {
                last.setHours(last.getHours() + 1)
                last.setMinutes(0, 0, 0);
            } else if (last.getMinutes() === 0) {
                last.setMinutes(30, 0, 0);
            }
            //@ts-ignore
            return splittedDates[last] = [];
        }
    })

let arr = Object.keys(splittedDates)
for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    splittedDates[val] =
        trainings.filter(({ date, name }, i2) => {
                if (isSameDay(new Date(val), date)) {
                    if (isSameHour(new Date(val), date)) {
                        if (i === arr.length - 1) {
                            // since it's the end of the day, we're assured a date won't end up in the next day or something
                            return date.getMinutes() >= new Date(val).getMinutes()
                        } else {
                            let next = new Date(arr[i + 1]).getMinutes();
                            return date.getMinutes() >= new Date(val).getMinutes() && (next === 0 ? 59 : next - 1) >= date.getMinutes()
                        }
                    }
                }
            }
        )
}

const TrainingList = (props: { expandedList: string }) => {
    return (
        <>

            {
                Object.entries(splittedDates)
                    .map((x) => {
                        const [key, value] = x as unknown as [string, Training[]];
                        return <Row key={ `bla-${ key }` }>
                            <Col size={ 2 }/>
                            <Col size={ 10 }>
                                <H1Bold>
                                    { key }
                                </H1Bold>
                                { value.map(y => <BodyText>{ JSON.stringify(y.date) }\n</BodyText>) }
                            </Col>
                            <Col size={ 2 }/>
                        </Row>
                    })
            }

            {/*{ Object.entries(splittedDates).map((x: [string, unknown], idx: any) =>*/ }
            {/*    <Row key={ idx }>*/ }
            {/*        <Col size={ 1 }/>*/ }
            {/*        <Container style={ { elevation: 4 } }>*/ }
            {/*            <View style={ { flex: 2 } }>*/ }
            {/*                <Row>*/ }
            {/*                    <H6 style={ { marginTop: 5, marginRight: 10 } }>*/ }
            {/*                        { JSON.stringify(x) }*/ }
            {/*                    </H6>*/ }
            {/*                </Row>*/ }
            {/*            </View>*/ }
            {/*            <Price>*/ }
            {/*                <H2>€0,00</H2>*/ }
            {/*            </Price>*/ }

            {/*        </Container>*/ }
            {/*        {*/ }
            {/*            props.expandedList == "expanded" ?*/ }
            {/*                <Col size={ 4 } style={ { elevation: 4 } }>*/ }
            {/*                    <Image*/ }
            {/*                        style={ { marginTop: 3, marginLeft: 5, borderRadius: 10 } }*/ }
            {/*                        source={ {*/ }
            {/*                            uri: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",*/ }
            {/*                            width: 89,*/ }
            {/*                            height: 100*/ }
            {/*                        } }/>*/ }
            {/*                </Col> : null*/ }
            {/*        }*/ }
            {/*        <Col size={ 1 }/>*/ }
            {/*    </Row>*/ }
            {/*) }*/ }
        </>
    );
};

export default TrainingList;
