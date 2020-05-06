import React from 'react'
import Home from '../screens/Home'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from "../screens/Splash";
import Typography from "../screens/Typography";

const Tab = createBottomTabNavigator();

const GET_TOKEN = gql`{ token @client}`;

const AppNavigation = () => {
    const {data: tokenData} = useQuery(GET_TOKEN);
    const authenticated = (tokenData !== undefined);

    return (
        <NavigationContainer>
            <Tab.Navigator backBehavior={"none"} tabBarOptions={{"showIcon": true}}>
                {authenticated ? <Tab.Screen name={"Home"}
                                             component={Home}
                                             options={{
                                                 tabBarLabel: "Homie",
                                                 tabBarIcon: ({color, size}) => (
                                                     <MaterialCommunityIcons name={"home"} color={color} size={size}/>
                                                 )
                                             }}/> : null}
                {authenticated ? <Tab.Screen name={"Splash"}
                                             component={Splash}
                                             options={{
                                                 tabBarLabel: "Splash",
                                                 tabBarIcon: ({color, size}) => (
                                                     <MaterialCommunityIcons name={"image-filter-vintage"} color={color}
                                                                             size={size}/>
                                                 )
                                             }}/> : null}

                {authenticated ? <Tab.Screen name={"Typography"}
                                             component={Typography}
                                             options={{
                                                 tabBarLabel: "Typography",
                                                 tabBarIcon: ({color, size}) => (
                                                     <MaterialCommunityIcons name={"pen"} color={color} size={size}/>
                                                 )
                                             }}/> : null}
            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigation
