import React, {useRef, useState} from 'react'
import {Animated, View} from 'react-native'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ButtonWithoutIcon from "../../components/buttons/ButtonWithoutIcon";
import {HeroBoldWhite, HeroWhite} from "../../components/typography/Typography";
import {withTheme} from "styled-components";
import {compose} from "recompose";
import styled from "styled-components/native";
import {BaseContainer} from "../../components/BaseContainer";
import {DefaultProps} from "../../typings/DefaultProps";
import Zero from "./explainations/Zero";

const GET_TOKEN = gql`{ token @client }`;

const Container = styled(BaseContainer)`
  flex: 1;
  background-color: ${({theme}) => theme.palette.primary.main}
`;

const ExplainContainer = styled(BaseContainer)`
  flex: 1;
  background-color: ${({theme}) => theme.palette.info.main};
  border-radius: 10px;
`;

const CarouselContainer = styled(Animated.View)`
  flex: 1;
  margin: 10px;
`;

const Intro = (props: DefaultProps<{}>) => {
    const {data: tokenData} = useQuery(GET_TOKEN);
    const authenticated = (tokenData !== undefined);
    const [index, setIndex] = useState<number>(0);

    const offsetAnim = useRef(new Animated.Value(0)).current;


    // const initializing = () => {
    //     postRequest('https://api.fitworld.io/auth/anon', {"magicString": `${magicString()}`})
    //         .then(data => {
    //                 client.getClient().writeData({
    //                     data: {
    //                         token: `${data.token}`
    //                     }
    //                 });
    //
    //                 setIntroSteps({
    //                     firstStepComplete: false,
    //                     secondStepComplete: true,
    //                     introComplete: true
    //                 });
    //             }
    //         );
    // };


    return (
        <Container>
            <View style={{alignSelf: "center", paddingTop: 50, paddingBottom: 10}}>
                <HeroWhite style={{alignSelf: "center"}}>
                    Welcome to
                </HeroWhite>
                <HeroBoldWhite style={{alignSelf: "center"}}>Fitworld</HeroBoldWhite>
            </View>
            <CarouselContainer style={[{
                marginLeft: offsetAnim
            }]}>
                <ExplainContainer>
                    <Zero/>
                </ExplainContainer>
            </CarouselContainer>
            <View style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                paddingRight: 10,
                paddingLeft: 10,
                justifyContent: "flex-end",
            }}>
                <ButtonWithoutIcon style={{
                    alignSelf: "flex-end",
                    backgroundColor: props.theme?.palette.secondary.main
                }}
                                   click={() => {
                                       Animated.spring(offsetAnim, {
                                           toValue: 400
                                       }).start()
                                   }}>
                    Next
                </ButtonWithoutIcon>
            </View>
        </Container>
    );
};

export default compose(
    withTheme
)(Intro);
