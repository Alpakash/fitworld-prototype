import React from 'react'
import Home from '../screens/Home/Home'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from "../screens/Splash";
import Typography from "../screens/Typography";
import {createStackNavigator} from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding/Onboarding";
import TabBar from "./TabBar";
import CalendarIcon from "../assets/svg/tabBar/calendar_icon.svg";
import HomeIcon from "../assets/svg/tabBar/home_icon.svg";
import NotificationIcon from "../assets/svg/tabBar/notification_icon.svg";
import ProfileIcon from "../assets/svg/tabBar/profile_icon.svg";

import CalendarActiveIcon from "../assets/svg/tabBar/calendar_active_icon.svg";
import HomeActiveIcon from "../assets/svg/tabBar/home_active_icon.svg";
import NotificationActiveIcon from "../assets/svg/tabBar/notification_active_icon.svg";
import ProfileActiveIcon from "../assets/svg/tabBar/profile_active_icon.svg";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const GET_TOKEN = gql`
    { 
        onboardingComplete @client 
        token @client
    }`;

const AppNavigation = () => {
    const nav = [
        {
            comp: Home,
            icon: HomeIcon,
            activeIcon: HomeActiveIcon,
            label: "Home"
        },
        {
            comp: Home,
            icon: CalendarIcon,
            activeIcon: CalendarActiveIcon,
            label: "My bookings"
        },
        {
            comp: Splash,
            icon: NotificationIcon,
            activeIcon: NotificationActiveIcon,
            label: "Notifications"
        },
        {
            comp: Profile,
            icon: ProfileIcon,
            activeIcon: ProfileActiveIcon,
            label: "Profile"
        }
    ] as {comp: any, icon: any, activeIcon: any, label: string}[];

    //@ts-ignore
    const { data: { onboardingComplete } } = useQuery(GET_TOKEN);
    return (
        <NavigationContainer>
            {!onboardingComplete && (
                <Stack.Navigator>
                    <Stack.Screen name="Onboarding" component={Onboarding}  options={{
                        headerShown: false
                    }}/>
                </Stack.Navigator>
            )}

            {onboardingComplete && (
                <Tab.Navigator
                    tabBar={props => <TabBar {...props}/>}
                    backBehavior={"none"}
                    tabBarOptions={{"showIcon": true}}
                >
                    {nav.map(x => <Tab.Screen
                        key={x.label}
                        name={x.label}
                        component={x.comp}
                        options={{
                            tabBarLabel: x.label,
                            tabBarIcon: ({style, isFocused}: any) => (
                                isFocused
                                    ? <x.activeIcon style={style}/>
                                    : <x.icon style={style}/>
                            )
                        }}
                    />)}
                </Tab.Navigator>
            )}
        </NavigationContainer>
    )
};

export default AppNavigation
