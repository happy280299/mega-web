import styled from "styled-components";

export const DeveloperContainer = styled.div`
  position: relative;
  margin-top: 50vh;
`;
export const DeveloperWrapper = styled.div``;
export const DeveloperMoon = styled.div`
  margin: 0 auto;
  width: 10%;
  height: auto;
  display: block;
`;
export const DeveloperMoonBig = styled.div`
  width: 40%;
  aspect-ratio: 1;
  margin: 200px 0;
  position: relative;
  .image-moon {
    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 25%;
      mix-blend-mode: color-dodge;
      z-index: 10;
    }
  }
  .image-gradian {
    background: radial-gradient(
      70% 60% at 50% 50%,
      hsla(350.32, 62.25%, 51.18%, 0.66) 0%,
      hsla(350.32, 62.25%, 51.18%, 0.626) 3.5%,
      hsla(350.32, 62.25%, 51.18%, 0.584) 6.2%,
      hsla(350.32, 62.25%, 51.18%, 0.536) 8.5%,
      hsla(350.32, 62.25%, 51.18%, 0.482) 10.5%,
      hsla(350.32, 62.25%, 51.18%, 0.424) 12.6%,
      hsla(350.32, 62.25%, 51.18%, 0.365) 15%,
      hsla(350.32, 62.25%, 51.18%, 0.305) 18.1%,
      hsla(350.32, 62.25%, 51.18%, 0.246) 22.1%,
      hsla(350.32, 62.25%, 51.18%, 0.191) 27.4%,
      hsla(350.32, 62.25%, 51.18%, 0.139) 34.1%,
      hsla(350.32, 62.25%, 51.18%, 0.093) 42.6%,
      hsla(350.32, 62.25%, 51.18%, 0.055) 53.1%,
      hsla(350.32, 62.25%, 51.18%, 0.025) 66%,
      hsla(350.32, 62.25%, 51.18%, 0.007) 81.6%,
      hsla(350.32, 62.25%, 51.18%, 0) 100%
    );
    width: 100%;
    aspect-ratio: 1;
    z-index: -10;
    position: absolute;
    left: 60%;
    opacity: 0.7;
    scale: 1.7;
  }
  .block-text {
    position: absolute;
    width: 100%;
    aspect-ratio: 1;
    left: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-weight: 800;
    span {
      font-size: 12vw;
      &:nth-child(1) {
        transform: translate(-100%);
      }
      &:nth-child(2) {
        margin-top: -5vw;
        transform: translate(230%);
      }
    }
  }
`;
export const DeveloperMoon2 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    width: 5%;
    height: auto;
    display: block;
  }
`;
