import React from 'react'
import { StyledComponents } from '../lib/index';
import styled from 'styled-components';

const StyledButton = styled.button`${StyledComponents.button}`;

const Button = (props) => {
  return (
    <div>
      <StyledButton>{props.text}</StyledButton>
    </div>
  )
}

export default Button