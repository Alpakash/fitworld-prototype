import React, { useContext, useMemo } from 'react';
import styled from "styled-components";
import { Text, View } from "react-native";
import { compareAsc, formatISO, format } from 'date-fns';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { HomeContext } from "../../contexts/HomeContext";
import { DefaultProps } from "../../typings/DefaultProps";
import { ButtonText } from "../typography/Typography";

const Container = styled(View)`
    background-color: ${ ({ theme }) => theme.background.ghostWhite };
    border-radius: 10px;
    justify-content: space-between;
    padding: 10px;
    flex: 10;
    margin: 5px 0;
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
            .sort((a: any, b: any) => compareAsc(a, b))
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


        return Object.entries(splittedDates)
            .reduce((acc: object, cur: [string, unknown], idx: any, src: any) => {
                const [key, value] = cur as unknown as [string, Training[]];
                const time = new Date(value[0].time)
                time.setMinutes(0);
                time.setHours(0);
                time.setMilliseconds(0);
                let objKey = formatISO(time)
                // @ts-ignore
                if (!!acc[objKey]) {
                    // @ts-ignore
                    acc[objKey] = {
                        // @ts-ignore
                        ...acc[objKey],
                        [key]: value
                    }
                } else {
                    // @ts-ignore
                    acc[objKey] = {
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

            {
                Object.entries(splittedDates)
                    .map((x, idx) => {
                        const [key, value] = x as unknown as [string, Training[]];
                        return Object.entries(value)
                            .map((v, idx2) => {
                                const [vKey, vValue] = v as unknown as [string, Training[]];
                                return vValue
                                    .map((z: Training, zIdx: number) => {
                                    return (
                                        <>
                                            { zIdx === Object.keys(value).length - 1 && (
                                                <ButtonText>{format(new Date(key), "EEEE dd-LL-uuuu")}</ButtonText>
                                            ) }
                                            <Text>{ formatISO(new Date(z.time)) } - { z.training.name }</Text>
                                        </>
                                    )
                                })
                            })
                    })
            }

        </View>
    )
};

export default TrainingList;

//                                  <Row key={ `training-${ y.id }` }>
//                                     <Col size={ 1 }/>
//                                     <Container style={ { elevation: 4 } }>
//                                         <View style={ { flex: 2 } }>
//                                             <Row>
//                                                 <H6 style={ { marginTop: 5, marginRight: 10 } }>
//                                                     {/* @ts-ignore */}
//                                                     <Text>{ format(y.time, "HH:mm") }</Text>
//                                                 </H6>
//                                                 <H3Bold>
//                                                     { y.training.name }
//                                                 </H3Bold>
//                                             </Row>
//                                             <H6><Distance/> { <BodyText>{ Math.floor(y.distanceInMeters) }</BodyText> } KM</H6>
//                                             <H6><Pin/> { <BodyText>{ y.location.address.city }</BodyText> }</H6>
//                                             { ctx.homeHeader.listView.listViewToggle == "expanded" ?
//                                                 <TrainingListButton click={() => console.log("HI")} style={{marginLeft: 50}}>
//                                                     <>
//                                                         <Text style={ { borderBottomWidth: 2 } }>
//                                                             Make reservation
//                                                         </Text>
//                                                         <MaterialCommunityIcons name={ "chevron-right" } size={ 25 }/>
//                                                     </>
//                                                 </TrainingListButton> : null
//                                             }
//                                         </View>
//
//                                         <Price expandedList={ ctx.homeHeader.listView.listViewToggle }>
//                                             <H2>€{y.price}</H2>
//                                         </Price>
//                                     </Container>
//
//                                     {
//                                         ctx.homeHeader.listView.listViewToggle == "expanded" ?
//                                             <Col size={ 4 }>
//                                                 <Image
//                                                     style={ { marginLeft: 5, borderRadius: 10 } }
//                                                     source={ {
//                                                         // uri: `${ y.training.images.url }`,
//                                                         uri: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//                                                         width: 80,
//                                                         height: 125
//                                                     } }/>
//                                             </Col> : null
//                                     }
//                                     <Col size={ 1 }/>
//                                 </Row>
