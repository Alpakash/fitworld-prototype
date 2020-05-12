import React, {Component} from 'react';
import {ToastAndroid, View} from "react-native";
import {DefaultProps} from "../../typings/DefaultProps";
import styled from "styled-components";
import {BodyText, BodyTextBold, H3Bold} from "../../components/typography/Typography";
import {Divider} from "../../components/Divider";
import ButtonWithoutIcon from "../../components/buttons/ButtonWithoutIcon";
import {BaseContainer} from "../../components/BaseContainer";
import {checkMultiple, PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {compose} from "recompose";
import {withApollo} from "@apollo/react-hoc";
import {ApolloClient} from "apollo-client";
import gql from "graphql-tag"
import {createAnonymousAccount} from "../../util/createAnonymousAccount";

const Container = styled(BaseContainer)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  padding: 20px;
`;

interface DataItem {
    id: string,
    title: string,
    description: string,
}

interface Props {
    toggleModal: () => void,
    client: ApolloClient<any>
}

class ModalContent extends Component<DefaultProps<Props>, {}> {
    data = [
        {
            id: "1",
            title: "Location",
            description: <><BodyText>We need your location so we can check what trainings are relative to your
                position. {"\n\n"}We only use your position when you location-related views open.</BodyText>
                <BodyTextBold> Promised.</BodyTextBold></>
        },
        {
            id: "2",
            title: "Contacts",
            description: "This is completely optional and we won't ask for this right now.\n\nIf you want to make use of the feature to import your friends we'll ask for your contacts, that's all."
        }
    ] as DataItem[];

    handlePermissions = () => {
        let listOfPermissions = [
            PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ];

        checkMultiple(listOfPermissions)
            .then(
                statuses => {
                    for (const statusConstant of listOfPermissions) {
                        const checkedStatus = statuses[statusConstant];
                        if (!!checkedStatus) {
                            if (checkedStatus === "granted") {
                                listOfPermissions = listOfPermissions.filter(x => x === statusConstant)
                            }
                        }
                    }
                    requestMultiple(listOfPermissions)
                        .then(
                            statusesRequested => {
                                if (listOfPermissions.filter(
                                    x => statusesRequested[x] === "granted"
                                ).length === listOfPermissions.length) {
                                    createAnonymousAccount()
                                        .then(token => {
                                            this.props.client.writeData({
                                                data: {
                                                    onboardingComplete: true,
                                                    token
                                                }
                                            });
                                            // after write re-render on AppNavigation, causing this overlay to not be rendered anymore
                                            // TODO maybe a nicer animation than just "it gone now lol"
                                        })
                                } else {
                                    ToastAndroid.showWithGravity(
                                        "We're sorry, but you need to accept all permissions before you can use the app.",
                                        ToastAndroid.SHORT,
                                        ToastAndroid.CENTER,
                                    );
                                }
                            }
                        )
                }
            )
    };

    render() {

        return (
            <Container>
                {
                    this.data.map((x, idx) =>
                        <View key={`permissions-${idx}`}>
                            <View style={{flexDirection: "row"}}>
                                <H3Bold style={{alignSelf: "flex-start", paddingRight: 10}}>
                                    {x.title}
                                </H3Bold>
                                <BodyText style={{alignSelf: "center", maxWidth: "70%"}}>
                                    {x.description}
                                </BodyText>

                            </View>
                            {idx !== this.data.length - 1 &&
                            <Divider style={{marginTop: 10, marginBottom: 10}}/>
                            }
                        </View>
                    )
                }
                <ButtonWithoutIcon style={{marginTop: 30}} click={this.handlePermissions}>
                    accept
                </ButtonWithoutIcon>
            </Container>
        );
    }
}

export default compose<any, any>(
    withApollo
)(ModalContent);
