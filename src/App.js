import React from "react";
import styled, { css } from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  margin-left: 1rem;
  margin-top: 1rem;
  ${props => props.huge && 
    css`
    // props 사용가능
    width: 10rem;
    height: 10rem;
  `}
`;

function App() {
  return (
    <>
      <Circle color='black' />
      <Circle color='blue' huge />
    </>
    
  )
}

export default App;
