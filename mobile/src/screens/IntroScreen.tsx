import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import styled, { ThemeContext } from 'styled-components'
import {OverrideThemeProvider} from 'fitworld-common'

const H1 = styled(Text)`
font-size: 40px;
color: ${props => props.theme.brown.color};
background-color: ${props => props.theme.brown.bg};
`


const IntroScreen = ({ navigation }: any) => {
  const myString: number = 575
  const theme = useContext(ThemeContext);

  return (
    <View>
      <OverrideThemeProvider overrideTheme={ {
        ...theme,
        brown: {
          color: 'yellow',
          bg: 'black'
        }
      } }>
          <H1 onPress={ () => navigation.navigate('home') }>hello world { myString }</H1>
      </OverrideThemeProvider>
    </View>
  )
}

export default IntroScreen
