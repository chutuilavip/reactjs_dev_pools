import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }`;

const SwapLoading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div`
  width: 120px;
  height: 120px;
  border-top: 4px solid rgb(237, 44, 73);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
export { SwapLoading, Loader };
