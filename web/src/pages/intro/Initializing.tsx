import React, { useContext } from 'react';
import styled, { ThemeContext } from "styled-components";
import { OverrideThemeProvider, Queries } from "fitworld-common";
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

const Title = styled.h1`
color: ${props => props.theme.brown.color};
background-color: ${props => props.theme.brown.bg};
`;


const Initializing = () => {
    const theme = useContext(ThemeContext);
    const {loading, error, data} = useQuery(Queries.getPeople);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: ${error} </p>;

    return (
      <div>
            <OverrideThemeProvider overrideTheme={{
                ...theme,
                brown: {
                    color: "red"
                }
            }}>
                <Title>Initializing page</Title>
                <Link to={ '/' }>Go to home</Link>

                {data.allPersons.map(({id, name, gender, height}: any, index: number) =>
                <div key={id}>
                  <ul>
                    <li>{name} - {gender} - {height}CM</li>
                  </ul>
                </div>
                )}
            </OverrideThemeProvider>
      </div>
    );
};

export default Initializing;
