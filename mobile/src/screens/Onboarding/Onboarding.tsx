import Carousel, {CarouselStatic} from 'react-native-snap-carousel';
import React, {Component} from "react";
import {Animated, Button, Dimensions, View, Text, TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import {H1BoldWhite, H2BoldWhite, H3White} from "../../components/typography/Typography";
import styled, {withTheme} from "styled-components/native";
import BackgroundShape3 from "../../assets/svg/background_shape_3.svg";
import Arrow from "../../assets/svg/arrow.svg";
import {compose} from "recompose";
import {DefaultProps} from "../../typings/DefaultProps";
import ButtonWithoutIcon from "../../components/buttons/ButtonWithoutIcon";
import Modal from 'react-native-modal';
import ModalContent from "./ModalContent";

const Entry = styled(View)<{ bg: string }>`
  flex: 1;
  opacity: 1 !important;
  background-color: ${
    ({bg}) => bg
};
  margin: 70px 0;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled(View)`
  flex: 1;
  background-color: #251D34;
`;

class Onboarding extends Component<DefaultProps<{}>> {
    private _carousel!: CarouselStatic<any>;
    state = {
        entries: [
            {
                title: "Hi there!",
                description: "You can use this app to make reservations for trainings in your nearby vicinity."
            },
            {
                title: "",
                description: "Or socialize with friends, making reservations as a group."
            },
            {
                title: "That's all you need!",
                description: "We'll ask for some permissions and we'll give explanations for each one. Then you're all set."
            }
        ],
        viewport: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        },
        swipeAnim: new Animated.Value(0),
        isModalVisible: false,
    };

    toggleModal = (val: boolean | undefined = undefined) =>
    {
        let toggle = !this.state.isModalVisible;
        if (val !== undefined) {
            toggle = val;
        }
        this.setState({
            isModalVisible: toggle
        });
    };

    componentDidMount(): void {
        setInterval(() => {
            Animated.spring(this.state.swipeAnim, {
                //@ts-ignore
                toValue: this.state.swipeAnim.__getValue() === 10 ? 0 : 10,
                mass: 2
            }).start()
        }, 1500)
    }

    _renderItem = ({item, index}: any) => {
        let bg;

        switch (index) {
            case 0:
                bg = "#212121";
                break;
            case 1:
                bg = this.props.theme?.palette.error.main;
                break;
            case 2:
                bg = this.props.theme?.palette.info.main;
                break;
        }

        return (
            //@ts-ignore
            <Entry bg={"#212121"} elevation={4}>
                <H1BoldWhite style={{alignSelf: "center", top: 40}}>{item.title}</H1BoldWhite>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    paddingLeft: 10,
                    paddingRight: 10,

                }}>
                    <H3White style={{alignSelf: "center"}}>{item.description}</H3White>
                </View>
                {index === this.state.entries.length - 1 &&
                <View style={
                    {
                        alignContent: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignSelf: "flex-end",
                    }
                }>
                    <ButtonWithoutIcon border={"1px white"} style={{backgroundColor: "#212121"}} click={() => this.toggleModal()}>
                        Get started
                    </ButtonWithoutIcon>
                </View>
                }
                {index === 0 &&
                <View style={
                    {
                        alignContent: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignSelf: "flex-end",
                    }
                }>
                    <H2BoldWhite style={{
                        alignSelf: "center",
                        paddingRight: 10
                    }}>
                        Swipe
                    </H2BoldWhite>
                    <Animated.View style={[
                        {
                            left: this.state.swipeAnim
                        },
                        {
                            alignSelf: "center",
                        }
                    ]}>
                        <Arrow/>
                    </Animated.View>
                </View>
                }
            </Entry>
        );
    };

    render() {
        return (
            <Container
                onLayout={() => {
                    this.setState({
                        viewport: {
                            width: Dimensions.get('window').width,
                            height: Dimensions.get('window').height
                        }
                    });
                }}
            >
                <BackgroundShape3
                    style={{position: "absolute", top: "20%", zIndex: this.props.theme?.zIndex.get("background")}}/>
                <Carousel
                    ref={(c: any) => {
                        this._carousel = c;
                    }}
                    style={{flex: 1}}
                    data={this.state.entries}
                    layout={"stack"}
                    inactiveSlideOpacity={1}
                    renderItem={this._renderItem}
                    sliderWidth={Math.round(this.state.viewport.width)}
                    itemWidth={Math.round(this.state.viewport.width) * 0.75}
                />
                <Modal
                    isVisible={this.state.isModalVisible}
                    onSwipeComplete={() => this.toggleModal(false)}
                    onBackdropPress={() => this.toggleModal(false)}
                    swipeDirection={['down']}
                    style={{
                        justifyContent: 'flex-end',
                        margin: 0,
                    }}
                >
                    <ModalContent toggleModal={this.toggleModal}/>
                </Modal>

            </Container>
        );
    }
}

export default compose<any, any>(
    withTheme
)(Onboarding);
