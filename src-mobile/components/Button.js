import React from 'react'
import { StyledComponents } from '../lib/index';
import styled from 'styled-components';

const StyledButton = styled.TouchableHighlight`${StyledComponents.button}`;

const ButtonText = styled.Text`
text-align: center;
color: ${props => props.textColor};
font-size: 18px;
font-weight: bold;
`;

const Button = (props) => {
  return (
      <StyledButton>
        <ButtonText textColor={props.textColor}>
          {props.text}
        </ButtonText>
      </StyledButton>
  )
}

export default Button