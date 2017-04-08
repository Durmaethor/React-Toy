import React from 'react';
import styled from 'styled-components';

export default function Greet({ firstName, lastName, fontSize}) {
  return (
    <StyledGreet 
        color='green'
        fontSize={ fontSize }
    >
        Hello {firstName} {lastName}. How are you?
    </StyledGreet>
  );
}

const StyledGreet = styled.h1`
    color: ${props => props.color};
    font-size: ${props => props.fontSize + 'px'};
`;