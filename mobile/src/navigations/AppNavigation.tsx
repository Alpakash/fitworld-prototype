import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from "../screens/SplashScreen";

const Tab = createBottomTabNavigator();

const GET_TOKEN = gql`{ token @client}`;

const AppNavigation = () => {
  const {data: tokenData} = useQuery(GET_TOKEN);
  const authenticated = (tokenData !== undefined);

    return (
        <NavigationContainer>
            <Tab.Navigator backBehavior={"none"} tabBarOptions={{"showIcon": true}}>
                {authenticated ? <Tab.Screen name={"Home"}
                                             component={HomeScreen}
                                             options={{
                                                 tabBarLabel: "Homie",
                                                 tabBarIcon: ({color, size}) => (
                                                    <MaterialCommunityIcons name={"home"} color={color} size={size}/>
                                                 )
                                             }}/> : null}
                {authenticated ? <Tab.Screen name={"Splash"}
                                             component={SplashScreen}
                                             options={{
                                                 tabBarLabel: "Splash",
                                                 tabBarIcon: ({color, size}) => (
                                                     <MaterialCommunityIcons name={"image-filter-vintage"} color={color} size={size}/>
                                                 )
                                             }}/> : null}
              </Tab.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigation
