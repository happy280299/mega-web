import styled from "styled-components";

export const CircleContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 3;
  pointer-events: none;
  .circle {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    animation: float 10s infinite;
  }
  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-50px) translateX(50px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
`;
