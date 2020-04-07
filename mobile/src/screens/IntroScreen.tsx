import React, { useContext, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import styled, { ThemeContext } from 'styled-components'
import {OverrideThemeProvider} from 'fitworld-common'
import { useApolloClient, useMutation, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { client } from '../App'

const GET_TOKEN = gql`{ token @client }`;

const H1 = styled(Text)`
font-size: 40px;
color: ${props => props.theme.brown.color};
background-color: ${props => props.theme.brown.bg};
`

const IntroScreen = ({ navigation }: any) => {
  const { data } = useQuery(GET_TOKEN);
  const myString: number = 575;
  const theme = useContext(ThemeContext);


  return (
    <>
      <View>
      <OverrideThemeProvider overrideTheme={ {
        ...theme,
        brown: {
          color: 'yellow',
          bg: 'black'
        }
      } }>
        <Button title={'write token to cache'} onPress={() => {
        client.getClient().writeData({
          data: {
            token: "123456789"
          }
        })
      }}>
      </Button>
        <Text>cached message is: {data !== undefined ? data.token : null}</Text>
          <H1 onPress={ () => navigation.navigate('Intro') }>hello world { myString }</H1>
      </OverrideThemeProvider>
    </View>
</>
  )
}

export default IntroScreen
