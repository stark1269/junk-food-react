import { styled, keyframes } from "styled-components";

const animate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  animation: ${animate} 2s linear infinite;
`;