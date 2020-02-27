import React, { useContext } from 'react';
import styled, { ThemeContext } from "styled-components";
import { OverrideThemeProvider } from "fitworld-common";
import {Link} from "react-router-dom";
const Title = styled.h1`
color: ${props => props.theme.brown.color};
`;

const Initializing = () => {
    const theme = useContext(ThemeContext);

    return (
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
                    <Title>Initializing page</Title>
                    <Link to={"/home"}>Go back to home</Link>
                </div>

            </OverrideThemeProvider>
        </OverrideThemeProvider>
    );
};

export default Initializing;
