import React, { useContext, useMemo } from 'react';
import styled from "styled-components";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { compareAsc, formatISO, format } from 'date-fns';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { HomeContext } from "../../contexts/HomeContext";
import { DefaultProps } from "../../typings/DefaultProps";
import { BodyText, ButtonText, H2, H3Bold, H5Bold, H6 } from "../typography/Typography";
import Col from "../layout/Col";
import Row from "../layout/Row";
import ButtonWithIcon from "../buttons/ButtonWithIcon";
import ListDivider from "./ListDivider";
import Pin from '../../assets/svg/location_pin.svg'
import Distance from '../../assets/svg/distance_sign.svg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled(View)`
    background-color: ${ ({ theme }) => theme.background.ghostWhite };
    border-radius: 10px;
    justify-content: space-between;
    padding: 10px;
    flex-direction: row;
    margin: 5px 0;
`;

const Price = styled(View)<{ expandedList?: string }>`
    flex: 1;
    padding-right: ${ (props) => props.expandedList == "expanded" ? 0 : 20 }px;
    align-items: flex-end;
    justify-content: center;
`;

type Session = {
    id: number,
    time: string | Date,
    training: {
        name: string,
        images: { url: string }[]
    },
    distanceInMeters: number,
    location: { address: { city: string } },
    price: number
}

const GET_TRAININGS = gql`
    query GET_TRAININGS(
        $paginationOpts: PaginationOpts!,
        $rangeInMeters: Float!,
        $currentLocation: FindAllSessionsCoordinatesInputType!,
        $start: DateTime!,
        $end: DateTime!
    ){
        findAllSessions(
            currentLocation: $currentLocation,
            paginationOpts: $paginationOpts,
            rangeInMeters: $rangeInMeters,
            start: $start,
            end: $end
        ) { id
            time
            price
            training {
                name
                images {
                    url
                    alt
                }
            }
            location {
                address {
                    city
                }
            }
            distanceInMeters
        }
    }
`;


const TrainingList: React.FC<DefaultProps<{}>> = (props) => {
    const ctx = useContext(HomeContext);
    const startDate = ctx.homeHeader.filters.date.start;
    const endDate = ctx.homeHeader.filters.date.end;
    let startTime = ctx.homeHeader.filters.date.timeStart;
    let endTime = ctx.homeHeader.filters.date.timeEnd;

    useMemo(() => {
        startDate.setMonth(1);
        startDate.setHours(startTime.getHours());
        startDate.setMinutes(startTime.getMinutes());
        endDate.setHours(endTime.getHours());
        endDate.setMinutes(endTime.getMinutes());
    }, [startDate, endDate])

    const { loading, error, data } = useQuery(GET_TRAININGS, {
        variables: {
            currentLocation: { latitude: 52, longitude: 5 },
            paginationOpts: { page: 0, pageSize: 100 },
            rangeInMeters: 500000,
            // rangeInMeters: ctx.homeHeader.filters.range.value,
            start: formatISO(startDate),
            end: formatISO(endDate),
        }
    });

    let splittedDates: any = {};
    const now = new Date();

    const sortTrainings = () => {
        data.findAllSessions
            .sort((a: any, b: any) => compareAsc(new Date(a.time), new Date(b.time)))
            .map(({ time, ...rest }: Session, i: number) => {
                time = new Date(time);
                let dateKey;
                const val = { time, ...rest };
                if (time.getMinutes() >= 0 && time.getMinutes() <= 29) {
                    dateKey = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), 0)
                } else if (time.getMinutes() <= 59 && time.getMinutes() > 29) {
                    dateKey = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), 30)
                }
                //@ts-ignore
                if (Array.isArray(splittedDates[dateKey])) {
                    // @ts-ignore
                    splittedDates[dateKey].push(val)
                } else {
                    // @ts-ignore
                    splittedDates[dateKey] = [val];
                }
                return { time, ...rest };
            });


        return Object.entries(splittedDates)
            .reduce((acc: object, cur: [string, unknown], idx: any, src: any) => {
                const [key, value] = cur as unknown as [string, Session[]];
                const time = new Date(value[0].time)
                time.setMinutes(0);
                time.setHours(0);
                time.setMilliseconds(0);
                time.setSeconds(0);
                let objKey = time;
                const segment = key;
                // @ts-ignore
                if (!!acc[objKey]) {
                    // @ts-ignore
                    acc[objKey] = {
                        // @ts-ignore
                        ...acc[objKey],
                        // @ts-ignore
                        [key]: value
                    }
                } else {
                    // @ts-ignore
                    acc[objKey] = {
                        // @ts-ignore
                        [key]: value
                    };
                }
                return acc;
            }, {});

    }

    if (loading) {
        console.log("loading");
        if (error) {
            console.log(error);
        }
    } else {
        if (error) {
            console.log(error)
        } else {
            splittedDates = sortTrainings();
        }
    }

    return (
        <View style={ props.style ?? {} }>
            { loading ? <Text>Loading...</Text> : null }
            { error ? <Text>Error! { error.message }</Text> : null }
            <Row>
                <Col size={ 1 }/>
                <Col size={ 10 }>
                    <View>
                        {
                            Object.entries(splittedDates)
                                .map(([key, value]: [string, unknown], index) => {
                                    // inject/return (day header here)

                                    return <React.Fragment key={ key }>
                                        <ListDivider>{ format(new Date(key), "EEEE") }</ListDivider>
                                        { Object.entries(value as any)
                                            .map(([key2, value2], index2) => {
                                                // inject/return segment header here
                                                return <View key={ key2 }>
                                                    <H5Bold>{ format(new Date(key2), "HH:mm") }</H5Bold>
                                                    <View>
                                                        { (value2 as any).map((session: Session, idx: number) => {
                                                            // return individual session component here
                                                            const canShowExpanded = ctx.homeHeader.listView.listViewToggle == "expanded" && session.training.images.length > 0;
                                                            return (
                                                                <Container key={ `${ key2 }-${ idx }` }>
                                                                    <Row style={ { flex: canShowExpanded ? 8 : 12 } }>
                                                                        <Col
                                                                            size={ 8 }>
                                                                            <Row>
                                                                                <H6 style={ {
                                                                                    marginTop: 5,
                                                                                    marginRight: 10
                                                                                } }>
                                                                                    <Text>{ format(new Date(session.time), "HH:mm") }</Text>
                                                                                </H6>
                                                                                <H3Bold>
                                                                                    { session.training.name }
                                                                                </H3Bold>
                                                                            </Row>
                                                                            <H6> {
                                                                                <BodyText><Distance/> { Math.floor(session.distanceInMeters) }
                                                                                </BodyText> } KM</H6>
                                                                            <H6>{
                                                                                <BodyText><Pin/> { session.location.address.city }
                                                                                </BodyText> }</H6>
                                                                            { canShowExpanded &&
                                                                            <View>
                                                                                <TouchableWithoutFeedback
                                                                                    style={ { backgroundColor: "white", alignSelf: "flex-end" } }>
                                                                                    <Row>
                                                                                        <Text
                                                                                            style={ { borderBottomWidth: 2 } }>
                                                                                            Make reservation
                                                                                        </Text>
                                                                                        <MaterialCommunityIcons
                                                                                            name={ "chevron-right" }
                                                                                            size={ 25 }/>
                                                                                    </Row>
                                                                                </TouchableWithoutFeedback>

                                                                                </View>
                                                                            }
                                                                        </Col>
                                                                        <Col size={ 4 }>
                                                                            <Price
                                                                                expandedList={ ctx.homeHeader.listView.listViewToggle }>
                                                                                <H2>€{ session.price }</H2>
                                                                            </Price>
                                                                        </Col>
                                                                    </Row>
                                                                    {
                                                                        canShowExpanded &&
                                                                        <Row style={ { flex: 4 } }>
                                                                            <Image
                                                                                style={ {
                                                                                    marginLeft: 5,
                                                                                    borderRadius: 10
                                                                                } }
                                                                                source={ {
                                                                                    uri: `${ session.training.images[0].url }`,
                                                                                    width: 80,
                                                                                    height: 125
                                                                                } }/>
                                                                        </Row>
                                                                    }
                                                                </Container>
                                                            );
                                                        }) }
                                                    </View>
                                                </View>
                                            }) }
                                    </React.Fragment>
                                })
                                .map(x => {
                                    return x;
                                })
                        }
                    </View>
                </Col>
                <Col size={ 1 }/>
            </Row>
        </View>
    )
};

export default TrainingList;



