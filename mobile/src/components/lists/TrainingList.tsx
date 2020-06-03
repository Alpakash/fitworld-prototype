import React, { useContext, useMemo } from 'react';
import Row from "../layout/Row";
import Col from "../layout/Col";
import { BodyText, H2, H3Bold, H6 } from "../typography/Typography";
import styled from "styled-components";
import { Image, Text, View } from "react-native";
import { format } from 'date-fns';
import Distance from '../../assets/svg/distance_sign.svg';
import Pin from '../../assets/svg/location_pin.svg';
import ListDivider from "./ListDivider";
import TrainingListButton from "../buttons/TrainingListButton";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { HomeContext } from "../../contexts/HomeContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled(View)`
background-color: ${ ({ theme }) => theme.background.ghostWhite };
border-radius: 10px;
justify-content: space-between;
padding: 10px;
flex: 10;
margin: 5px 0;
flex-direction: row;
`;

const Price = styled(View)<{ expandedList?: string }>`
flex: 1;
padding-right: ${ (props) => props.expandedList == "expanded" ? 0 : 20 }px;
align-items: flex-end;
justify-content: center;
`;

type Training = {
    id: number,
    time: string | Date,
    training: {name: string, images: {url: string}},
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

const TrainingList = () => {
    const ctx = useContext(HomeContext);
    const { loading, error, data } = useQuery(GET_TRAININGS, {
        variables: {
            currentLocation: { latitude: 52, longitude: 5 },
            paginationOpts: { page: 0, pageSize: 100 },
            rangeInMeters: 500000,
            start: "2020-01-01T14:39:27.000Z",
            end: "2020-12-30T14:39:27.000Z"
        }
    });

    const splittedDates: any = {};
    const now = new Date();

    const sortTrainings = () => data.findAllSessions
        .sort((a: any, b: any) => a.time - b.time)
        .map(({ time, ...rest }: Training, i: number) => {
            time = new Date(time);
            let dateKey;
            const val = { time, ...rest };
            if (time.getMinutes() >= 0 && time.getMinutes() <= 30) {
                dateKey = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time.getHours(), 0)
            } else if (time.getMinutes() <= 59 && time.getMinutes() > 30) {
                dateKey = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time.getHours(), 30)
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


    loading ? console.log("loading") : sortTrainings();
    // const trainingsMemoized = useMemo(() => sortTrainings(), [data]);

    return (
        <>
            { loading ? <Text>Loading...</Text> : null }
            { error ? <Text>Error! { error.message }</Text> : null }

            {
                Object.entries(splittedDates)
                    .map((x, idx) => {
                        const [key, value] = x as unknown as [string, Training[]];
                        return <>
                            <ListDivider key={`divider-${idx}`}>{ format(Date.parse(key), "HH:mm") }</ListDivider>
                            { value.map(y =>
                                <Row key={ `training-${ y.id }` }>
                                    <Col size={ 1 }/>
                                    <Container style={ { elevation: 4 } }>
                                        <View style={ { flex: 2 } }>
                                            <Row>
                                                <H6 style={ { marginTop: 5, marginRight: 10 } }>
                                                    {/* @ts-ignore */}
                                                    <Text>{ format(y.time, "HH:mm") }</Text>
                                                </H6>
                                                <H3Bold>
                                                    { y.training.name }
                                                </H3Bold>
                                            </Row>
                                            <H6><Distance/> { <BodyText>{ Math.floor(y.distanceInMeters) }</BodyText> } KM</H6>
                                            <H6><Pin/> { <BodyText>{ y.location.address.city }</BodyText> }</H6>
                                            { ctx.homeHeader.listView.listViewToggle == "expanded" ?
                                                <TrainingListButton click={() => console.log("HI")} style={{marginLeft: 50}}>
                                                    <>
                                                        <Text style={ { borderBottomWidth: 2 } }>
                                                            Make reservation
                                                        </Text>
                                                        <MaterialCommunityIcons name={ "chevron-right" } size={ 25 }/>
                                                    </>
                                                </TrainingListButton> : null
                                            }
                                        </View>

                                        <Price expandedList={ ctx.homeHeader.listView.listViewToggle }>
                                            <H2>€{y.price}</H2>
                                        </Price>
                                    </Container>

                                    {
                                        ctx.homeHeader.listView.listViewToggle == "expanded" ?
                                            <Col size={ 4 }>
                                                <Image
                                                    style={ { marginLeft: 5, borderRadius: 10 } }
                                                    source={ {
                                                        // uri: `${ y.training.images.url }`,
                                                        uri: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                                                        width: 80,
                                                        height: 125
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
