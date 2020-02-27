import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { OverrideThemeProvider } from "fitworld-common";
import styled, { ThemeContext } from "styled-components";

const Title = styled.h1`
color: ${props => props.theme.brown.color};
`;

const Introduction = () => {
    const theme = useContext(ThemeContext);

    return (
            <OverrideThemeProvider overrideTheme={ {
                ...theme,
                brown: {
                    color: "brown"
                }
            } }>
                <div>
                    <Title>Introduction page</Title>
                    <Link to={ "/init" }>Go to init page</Link>
                </div>
            </OverrideThemeProvider>
    );
};

export default Introduction;
