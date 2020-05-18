import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from "react-native";
import styled from "styled-components";
import {useTheme} from "../util/useTheme";
import Col from "../components/layout/Col";

interface OwnProps {
    state: any,
    descriptors: any,
    navigation: any,
}

type Props = OwnProps;

const Container = styled(View)<{elevation: number}>`
  background-color: ${({theme}) => theme.palette.common.white};
  flex-direction: row;
  z-index:2;
  justify-content: space-between;
  align-content: space-between;
  padding: 10px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const IconContainer = styled(TouchableOpacity)`
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const TabBar: FunctionComponent<Props> = ({state, descriptors, navigation}) => {
    const theme = useTheme();

    const routeRenderer = (route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
        const Icon =
            options.tabBarIcon !== undefined
                ? options.tabBarIcon
                : null;

        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
        };

        const onLongPress = () => {
            navigation.emit({
                type: 'tabLongPress',
                target: route.key,
            });
        };

        return (
            <IconContainer
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{flex: 12 / state.routes.length}}
            >

                <Icon size={40} color={"#FFF"} style={{alignSelf: "center"}}/>
            </IconContainer>
        );
    };

    return (
        <>
            <View style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: theme.background.ghostWhite,
                zIndex: -1
            }}/>
            <Container elevation={20} style={{
                // RN-only, cant use SC
                // borderStyle: 'solid',
                // borderTopWidth: 2,
                // borderTopColor: theme.palette.primary.main,
            }}>
                <Col size={1}/>
                {state.routes.map(routeRenderer)}
                <Col size={1}/>
            </Container>
        </>
    );
};

export default TabBar;
