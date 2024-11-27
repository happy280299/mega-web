import styled from "styled-components";

export const OrbitContaier = styled.div`
  width: calc(35 * 1lvh);
  .rive-react {
    width: 100% !important;
    aspect-ratio: 1;
    animation: 3s ease 0s infinite normal none running drift;
  }
  @keyframes drift {
    0%,100% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
  }
`