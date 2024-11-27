import styled from "styled-components";

export const ButtonContainer = styled.button`
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 18px 60px;
  font-size: 18px;
  font-weight: 400;
  background: transparent;
  border-radius: 40px;
  border: 2px solid #ffffff75;
  cursor: pointer;
  position: relative;
  --container-offset: 50px;
  -webkit-tap-highlight-color: transparent;
  animation: 2s linear 0s infinite normal forwards running stroke-move;
  &:hover {
    .glow-container {
      opacity: 1;
    }
  }
  .glow-container {
    position: absolute;
    width: calc(100% + 50px + 4px);
    height: calc(100% + 50px + 4px);
    inset: calc((50px / -2) - 2px);
    pointer-events: none;
    opacity: 0;
    transition: opacity .7s;
  }
  .glow-blur, .glow-line {
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    x: calc(50px / 2);
    y: calc(50px / 2);
    fill: transparent;
    stroke-width: 5px;
    stroke-dasharray: 20px 30px;
  }
  .glow-blur {
    stroke: url(#stroke-gradient);
    filter: blur(5px);

  }
  .glow-line {
    stroke-width: 2px;
    stroke: url(#stroke-gradient);
}
  @keyframes stroke-move {
    0% {
      stroke-dashoffset: 0px;
    }
    100% {
      stroke-dashoffset: -100px;
    }
  }
`;
