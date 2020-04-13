import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import IntroScreen from '../screens/IntroScreen'
import InitScreen from "../screens/InitScreen";
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const GET_TOKEN = gql`
    { token @client}
`;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const IntroNavigation = () => {
  const {loading, error, data: tokenData} = useQuery(GET_TOKEN);

  if (loading) return <View><Text>'Loading...'</Text></View>;
  if (error) return <View><Text>`Error! ${error.message}`</Text></View>;
  const authenticated = (tokenData !== undefined);
    /*
           1. Init screen -> HomeScreen
           2. Homescreen
               2.1. Tabs: Profiel, notifications etc
       */

  return (
      <NavigationContainer>
            <Stack.Navigator>
          {
                authenticated
                ?
                    <>
                        <Stack.Screen name="HomeScreen" component={HomeScreen} />
                        <Stack.Screen name="InitScreen" component={InitScreen} />
                    </>
                :   <Stack.Screen name="IntroScreen" component={IntroScreen} />
          }
            </Stack.Navigator>
                    </NavigationContainer>
  )
};

export default IntroNavigation
