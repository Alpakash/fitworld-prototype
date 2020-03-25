import React, { useContext } from 'react';
import styled, { ThemeContext } from "styled-components";
import { OverrideThemeProvider, Queries } from "fitworld-common";
import { Link } from 'react-router-dom'
import Login from '../../containers/Login'
import axios from 'axios'

const Title = styled.h1`
color: ${props => props.theme.brown.color};
background-color: ${props => props.theme.brown.bg};
`;

// Create a anon user when this page is being visited
axios.post('https://api.fitworld.io/auth/anon', {
  magicString: "h5o4a6ow92kmm1JWiodwjidWJDioJWIODJWIODJOAKLSJDKWHDKWAwjd92dj282"
})
  .then(function (response) {
    axios.get('https://api.fitworld.io/auth/me', {
      headers: {
        'Authorization': `Bearer ${ response.data.token }`
      }
    })
      .then(r => console.log(`Role: ${r.data.type}`))
      .catch(err => console.log(err))
  })
  .catch((err) => console.log(err));


const Initializing = () => {
    const theme = useContext(ThemeContext);

    return (
      <div>
            <OverrideThemeProvider overrideTheme={{
                ...theme,
                brown: {
                    color: "red"
                }
            }}>
                <Title>Initializing page</Title>
                <Link to={ '/loggedIn' }>Go to login</Link>

            <Login />
            </OverrideThemeProvider>
      </div>
    );
};

export default Initializing;
