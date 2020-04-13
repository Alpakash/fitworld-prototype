import React from 'react';
import { View, Text, Button } from 'react-native';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

const GET_SESSION = gql`
    query {
        searchSessions(trainingName: "ipsa", paginationOpts:{page: 0, pageSize: 100}) {
            id
            capacity
            time
            price
        }
    }
`;

const InitScreen = ({navigation}: any) => {
// const {data}= useQuery(GET_SESSION);
// console.log(data);

    return (
        <View>
            <Text>- Initializing stuff</Text>
            <Text>- Creating account</Text>
            <Text>- Getting things ready</Text>
            <Button title={"Go to home screen"} onPress={() => {navigation.navigate('HomeScreen')}}/>
        </View>
    );
};

export default InitScreen;
