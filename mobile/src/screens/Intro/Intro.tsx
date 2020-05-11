import React, {useState} from 'react'
import {Text, View} from 'react-native'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import AppNavigation from "../../navigations/AppNavigation";
import ButtonWithoutIcon from "../../components/buttons/ButtonWithoutIcon";
import {ButtonText} from "../../components/typography/Typography";
import {client} from "../../GraphQLClient";
import {magicString} from "../../util/magicString";
import {postRequest} from "../../AuthPost";
import IntroBackground from "../../assets/svg/intro-background.svg";
import First from "./First";

const GET_TOKEN = gql`{ token @client }`;

export interface IIntroSteps {
    firstStepComplete?: null | boolean;
    secondStepComplete?: null | boolean;
    introComplete?: boolean;
}

const Intro = () => {
    const {data: tokenData} = useQuery(GET_TOKEN);
    const authenticated = (tokenData !== undefined);
    const [introSteps, setIntroSteps] = useState<IIntroSteps>({
        firstStepComplete: null,
        secondStepComplete: null,
        introComplete: false
    });

    const renderIntroSecondStep = () =>
        <View>
            <Text>1. Initializing stuff</Text>
            <Text>2. Creating account</Text>
            <Text>3. Getting things ready</Text>

            <ButtonWithoutIcon click={() => initializing()}
                               style={{alignSelf: 'flex-start', marginLeft: 10, marginTop: 10}}>
                <ButtonText>Go to home screen</ButtonText>
            </ButtonWithoutIcon>
        </View>;

    const initializing = () => {
        postRequest('https://api.fitworld.io/auth/anon', {"magicString": `${magicString()}`})
            .then(data => {
                    client.getClient().writeData({
                        data: {
                            token: `${data.token}`
                        }
                    });

                    setIntroSteps({
                        secondStepComplete: true,
                        introComplete: true
                    });
                }
            );
    };

    // If the firstStep is not complete, the introSteps are not complete and no tokenData
    if (!introSteps.firstStepComplete && !introSteps.introComplete && !authenticated) {
        return (<First setIntroSteps={setIntroSteps} />);
        // If the firstStep is complete, the introSteps are not complete and no tokenData
    } else if (introSteps.firstStepComplete && !introSteps.introComplete && !authenticated) {
        return renderIntroSecondStep();
        // if the introSteps are complete or tokenData available
    } else if (introSteps.introComplete || authenticated) {
        return <AppNavigation/>
    } else return null;
};

export default Intro;
