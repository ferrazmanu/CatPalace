import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform: translate(0, 0); }
  10%, 30%, 50%, 70%, 90% { transform: translate(-5px, 0); }
  20%, 40%, 60%, 80% { transform: translate(5px, 0); }
  100% { transform: translate(0, 0); }
`;

export const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 3;
  height: 48px;
  width: 48px;
  transition: all 0.3s ease;

  &:hover {
    animation: ${shake} 0.1s;
    animation-iteration-count: 3;
  }

  a {
    display: flex;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    aspect-ratio: 1;
  }
`;
