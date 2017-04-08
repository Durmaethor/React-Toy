import React from 'react';
import styled from 'styled-components';

export default function Greet({ firstName, lastName}) {
  return (
    <StyledGreet color='green'>
        Hello {firstName} {lastName}. How are you?
    </StyledGreet>
  );
}

const StyledGreet = styled.h1`
    color: ${props => props.color};
`;