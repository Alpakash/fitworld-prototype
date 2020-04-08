import React, { useEffect } from 'react'
import { Button, StatusBar, Text, View } from 'react-native'
import { client } from '../App'
import { OverrideThemeProvider } from 'fitworld-common'
import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'

const GET_TOKEN = gql`{ token @client }`;
const GET_PERSONS = gql`{
    allPersons {
        id
        name
        gender
    }
}`

const HomeScreen = () => {
  const {data} = useQuery(GET_TOKEN);
  const { data: personData } = useQuery(GET_PERSONS)

  return (
    <>
      <StatusBar backgroundColor="orange"/>
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text>Home Screen</Text>
        <Text>{data !== undefined ? data.token : null}</Text>
        <Text>{JSON.stringify(personData, null , 4)}</Text>

      </View>
    </>
  )
}

export default HomeScreen
