import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import IntroScreen from '../screens/IntroScreen'
import gql from 'graphql-tag'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const GET_TOKEN = gql`
    { token @client}
`;

const BottomNavigation = () => {
  const {loading, error, data: tokenData} = useQuery(GET_TOKEN);

  if (loading) return <View><Text>'Loading...'</Text></View>;
  if (error) return <View><Text>`Error! ${error.message}`</Text></View>;
  const authenticated = (tokenData !== undefined);

    return (
          <Tab.Navigator>
            {authenticated ? <Tab.Screen name={"LoggedIn"} component={HomeScreen}/> : null}
            {!authenticated ? <Tab.Screen name={"not Authenticated"} component={IntroScreen}/> : null}
          </Tab.Navigator>
    )
};

export default BottomNavigation
