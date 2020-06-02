import React, {FunctionComponent, useContext} from 'react';
import {View} from "react-native";
import BackgroundShape7 from "../assets/svg/background_shape_7.svg";
import {H1BoldWhite, H6BoldWhite} from "../components/typography/Typography";
import styled from "styled-components";
import Row from "../components/layout/Row";
import Col from '../components/layout/Col';
import ButtonWithoutIcon from "../components/buttons/ButtonWithoutIcon";
import {useTheme} from "../util/useTheme";
import {client} from "../GraphQLClient";
import AsyncStorage from "@react-native-community/async-storage";
import {RootContext} from "../contexts/RootContext";
import {StackNavigationProp} from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";


const Container = styled(View)`
  height: 100%;
  width: 100%;
`;

interface OwnProps {
    // passed via react-navigation because this is a screen component
    navigation: any;
}

type Props = OwnProps;

const Profile: FunctionComponent<Props> = (props) => {
    const theme = useTheme();
    const enableSupport = false;
    const rootCtx = useContext(RootContext);

    const onRequestFeatureClick = () => {

    };

    const onReportAProblemClick = () => {

    };

    const onLogoutAndResetAppClick = () => {
        AsyncStorage.clear()
            .then(x => {
                SplashScreen.show();
                props.navigation.navigate("Home")
                rootCtx.forceAppReRender();
            })

    };

    return (
        <Container>
            <BackgroundShape7 style={{position: "absolute"}}/>
            <Row style={{marginTop: 25, marginBottom: 25}}>
                <Col size={1}/>
                <Col size={10}>
                    <H1BoldWhite>My profile</H1BoldWhite>
                    {enableSupport && (<>
                        <ButtonWithoutIcon click={onRequestFeatureClick} style={{
                            backgroundColor: theme.palette.secondary.main,
                            marginTop: 25
                        }}>
                            <H6BoldWhite>
                                Request a feature
                            </H6BoldWhite>
                        </ButtonWithoutIcon>

                        < ButtonWithoutIcon click={onReportAProblemClick} style={{
                            backgroundColor: theme.palette.tertiary.main,
                            marginTop: 25
                        }}>
                            <H6BoldWhite>
                                Report a problem
                            </H6BoldWhite>
                        </ButtonWithoutIcon>
                    </>)
                    }
                    <View style={{justifyContent: "flex-end", height: "90%"}}>
                        <ButtonWithoutIcon click={onLogoutAndResetAppClick} style={{
                            backgroundColor: theme.palette.common.white,
                            marginTop: 25,
                        }}>
                            <H6BoldWhite style={{color: theme.palette.error.main}}>
                                Logout & Reset app
                            </H6BoldWhite>
                        </ButtonWithoutIcon>
                    </View>
                </Col>
                <Col size={1}/>
            </Row>
        </Container>
    );
};

export default Profile;
