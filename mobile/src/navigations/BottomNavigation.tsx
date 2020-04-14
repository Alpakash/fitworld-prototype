import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import SplashScreen from "../screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const GET_TOKEN = gql`
    { token @client}
`;

const BottomNavigation = () => {
  const {data: tokenData} = useQuery(GET_TOKEN);
  const authenticated = (tokenData !== undefined);
console.log(authenticated);

    return (
        <NavigationContainer>
            <Tab.Navigator>
                {authenticated ? <Tab.Screen name={"LoggedIn"} component={HomeScreen}/> : null}
                {authenticated ? <Tab.Screen name={"Splash"} component={SplashScreen}/> : null}
              </Tab.Navigator>
        </NavigationContainer>
    )
};

export default BottomNavigation
