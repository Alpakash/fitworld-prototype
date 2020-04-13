import React, { useContext } from 'react'
import { Button, ScrollView, Text } from 'react-native'
import styled, { ThemeContext } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { client } from '../App'
import { OverrideThemeProvider } from 'fitworld-common'
import { magicString, postRequest } from '../AuthPost'

const GET_TOKEN = gql`{ token @client }`;

const H1 = styled(Text)`
font-size: 40px;
color: ${ props => props.theme.brown.color };
background-color: ${ props => props.theme.brown.bg };
`

const IntroScreen = ({ navigation }: any) => {
  const { data: tokenData } = useQuery(GET_TOKEN);
  const myString: number = 575;
  const theme = useContext(ThemeContext);

  // post request to /auth/anon with magic string -> response is token
 const storeToken = () => {
   postRequest('https://api.fitworld.io/auth/anon', { "magicString": `${magicString()}` })
     .then(data => {
       client.getClient().writeData({
         data: {
           token: `${data.token}`
         }
       });

         navigation.navigate('InitScreen');
       }
     )
  };

  return (
    <>
      <ScrollView>
        <OverrideThemeProvider overrideTheme={ {
          ...theme,
          brown: {
            color: 'yellow',
            bg: 'black'
          }
        } }>
          <Button title={'write token to cache'} onPress={() => storeToken()}/>
          <Text>cached message is: {tokenData !== undefined ? tokenData.token : null}</Text>
        </OverrideThemeProvider>
      </ScrollView>
    </>
  )
}

export default IntroScreen
