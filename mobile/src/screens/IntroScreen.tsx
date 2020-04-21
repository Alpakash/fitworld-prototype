import React, { useContext, useState } from 'react'
import { Button, Text, TouchableHighlight, View } from 'react-native'
import styled, { ThemeContext } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { client } from '../App'
import { magicString, postRequest } from '../AuthPost'
import AppNavigation from "../navigations/AppNavigation";
import ButtonWithoutIcon from "../components/ButtonWithoutIcon";
import { ButtonText } from "../components/typography/Typography";

const GET_TOKEN = gql`{ token @client }`;

const H1 = styled(Text)`
font-size: 40px;
color: ${ props => props.theme.brown.color };
background-color: ${ props => props.theme.brown.bg };
`;

export interface IIntroSteps {
    firstStepComplete?: null | boolean;
    secondStepComplete?: null | boolean;
    introComplete?: boolean;
}

const IntroScreen = ({ navigation }: any) => {
    const { data: tokenData } = useQuery(GET_TOKEN);
    const theme = useContext(ThemeContext);
    const authenticated = (tokenData !== undefined);
    const [introSteps, setIntroSteps] = useState<IIntroSteps>({
        firstStepComplete: null,
        secondStepComplete: null,
        introComplete: false
    });

    const renderIntroFirstStep = () =>
        <View>
            <Text>Intro pagina: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus erat in nunc
                laoreet, vel aliquam nisi suscipit. Suspendisse non viverra metus. Fusce iaculis metus vitae
                elit auctor tincidunt. Maecenas tincidunt lorem orci, at luctus felis auctor eu. Nullam
                convallis, augue ut vulputate molestie, enim nisl suscipit turpis, ut imperdiet turpis nisl in
                tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Ut suscipit molestie feugiat. Ut varius in ante at elementum. Donec et erat mollis, vulputate
                odio a, tempus eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere</Text>
            <ButtonWithoutIcon width={ 125 } click={ () => setIntroSteps({ firstStepComplete: true }) }>
                Continue
            </ButtonWithoutIcon>
        </View>;

    const renderIntroSecondStep = () =>
        <View>
            <Text>- Initializing stuff</Text>
            <Text>- Creating account</Text>
            <Text>- Getting things ready</Text>

            <ButtonWithoutIcon click={() => initializing()} width={200}>
                <ButtonText>Go to home screen</ButtonText>
            </ButtonWithoutIcon>
        </View>;

    const initializing = () => {
        postRequest('https://api.fitworld.io/auth/anon', { "magicString": `${ magicString() }` })
            .then(data => {
                    client.getClient().writeData({
                        data: {
                            token: `${ data.token }`
                        }
                    });

                    setIntroSteps({
                        firstStepComplete: false,
                        secondStepComplete: true,
                        introComplete: true
                    });
                }
            );
    };

    // If the firstStep is not complete, the introSteps are not complete and no tokenData
    if (!introSteps.firstStepComplete && !introSteps.introComplete && !authenticated) {
        return renderIntroFirstStep();
        // If the firstStep is complete, the introSteps are not complete and no tokenData
    } else if (introSteps.firstStepComplete && !introSteps.introComplete && !authenticated) {
        return renderIntroSecondStep();
        // if the introSteps are complete or tokenData available
    } else if (introSteps.introComplete || authenticated) {
        return <AppNavigation/>
    } else return null;
};

export default IntroScreen;
