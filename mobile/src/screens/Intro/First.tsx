import React, {Component} from 'react';
import {View} from "react-native";
import IntroBackground from "../../assets/svg/intro-background.svg";
import ButtonWithoutIcon from "../../components/buttons/ButtonWithoutIcon";
import styled from "styled-components/native";
import {IIntroSteps} from "./Intro";
import {Paper} from "../../components/Paper";
import {BaseContainer} from "../../components/BaseContainer";
import {Logo} from "../../components/Logo";
import {H6Bold} from "../../components/typography/Typography";
import {Divider} from "../../components/Divider";

interface Props {
    setIntroSteps: (step: IIntroSteps) => void
}

const Background = styled(IntroBackground)`
  position: absolute;
`;

const Container = styled(BaseContainer)`
  flex: 1;
  justify-content: center;
`;


class First extends Component<Props, {}> {
    render() {
        return (
            <Container>
                <Background width="100%" height="100%"/>
                <View style={{alignSelf: "center"}}>
                    <Logo style={{alignSelf: "center"}}/>
                    <Paper elevation={4}>
                        <H6Bold>
                            An on-demand way to book trainings, no more subscriptions.
                        </H6Bold>
                        <Divider/>
                        <H6Bold>
                            Socialize with your sport friends.
                        </H6Bold>
                        <Divider/>
                        <H6Bold>
                            Explore and discover new places to train.
                        </H6Bold>
                        <ButtonWithoutIcon style={{alignSelf: 'flex-end', marginTop: 20}}
                                           click={() => this.props.setIntroSteps({firstStepComplete: true})}>
                            Continue
                        </ButtonWithoutIcon>
                    </Paper>
                </View>
            </Container>
        );
    }
}

export default First;
