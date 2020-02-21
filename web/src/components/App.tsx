import React, { useContext} from 'react'
import { ThemeContext } from 'styled-components'
import styled from "styled-components";
import OverrideThemeProvider from './theming/OverrideThemeProvider'

const Title = styled.h1`
  color: ${props => props.theme.brown.color}
`;

function App() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <OverrideThemeProvider overrideTheme={{
        ...theme,
        brown: {
          color: "blue",
          bg: "black"
        },

      }}>

        <OverrideThemeProvider overrideTheme={{
          ...theme,
          brown: {
            color: "red"
          }
        }}>
          <div>
            <Title>hello world</Title>

          </div>
        </OverrideThemeProvider>
      </OverrideThemeProvider>
    </>
  )
}

export default App
