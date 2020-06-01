import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FirstComponent = styled.div`
  margin: 100px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  animation: ${rotate} 2s linear infinite;
`
