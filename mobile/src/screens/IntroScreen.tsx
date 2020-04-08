import React, { useContext } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import styled, { ThemeContext } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { client } from '../App'
import { OverrideThemeProvider } from 'fitworld-common'

const GET_TOKEN = gql`{ token @client }`



const H1 = styled(Text)`
font-size: 40px;
color: ${ props => props.theme.brown.color };
background-color: ${ props => props.theme.brown.bg };
`

const IntroScreen = ({ navigation }: any) => {
  const { data: tokenData } = useQuery(GET_TOKEN)
  const myString: number = 575
  const theme = useContext(ThemeContext)

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
          <Button title={'write token to cache'} onPress={() => {
            client.getClient().writeData({
              data: {
                token: "123456789"
              }
            })
          }}>
          </Button>
          <Text>cached message is: {tokenData !== undefined ? tokenData.token : null}</Text>
          <H1 onPress={ () => navigation.navigate('Intro') }>hello world { myString }</H1>
        </OverrideThemeProvider>
        <Text>
          {JSON.stringify(tokenData, null , 4)}

        </Text>

      </ScrollView>
    </>
  )
}

export default IntroScreen
