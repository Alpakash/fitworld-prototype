import React from 'react'
import styled from 'styled-components';
import Button from './Button'
import Query from './query'
import Mutation from './mutation'

const HeaderStyle = styled.div`
  min-height: calc(100vh - 25px);
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header = () => {
  return (
    <HeaderStyle>
      Yo Fitworld!
      <Button>Hello!</Button>
      {/* Query and mutation via the Starwars API*/}
      <Query/>
      <Mutation/>
    </HeaderStyle>
  )
}

export default Header
