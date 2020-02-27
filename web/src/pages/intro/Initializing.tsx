import React, { useContext } from 'react';
import styled, { ThemeContext } from "styled-components";
import { OverrideThemeProvider } from "fitworld-common";
import { Link } from 'react-router-dom'

const Title = styled.h1`
color: ${props => props.theme.brown.color};
background-color: ${props => props.theme.brown.bg};
`;

const Initializing = () => {
    const theme = useContext(ThemeContext);

    return (
      <div>
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
                <Title>Initializing page</Title>
                <Link to={ '/' }>Go to home</Link>

            </OverrideThemeProvider>
        </OverrideThemeProvider>
      </div>
    );
};

export default Initializing;
