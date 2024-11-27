import styled from "styled-components";

export const KeyvisualContainer = styled.section`
  height: calc(1lvh * 100);
  .rive-react-container {
    background-color: transparent;
    aspect-ratio: 1;
    width: calc(35 * 1lvh);
    position: absolute;
    top: calc(40 * 1lvh);
    right: 20vw;
  }
  @media (max-width: 2000px) {
    .rive-react-container {
      right: 17vw;
    }
  }
`;
export const KeyvisualContent = styled.div`
  position: absolute;
  top: 35%;
  left: 10%;
  z-index: 20;
  .title {
    letter-spacing: 2.5px;
    font-size: 92px;
    font-weight: 700;
    line-height: 1.2em;
    width: 910px;
  }
  .text {
    font-size: 32px;
    font-weight: 500;
    margin: 32px 0 60px;
  }
`;
export const Galaxy = styled.div`
  width: 100vw;
  height: 50vh;
  position: absolute;
  bottom: -25%;
  z-index: 10;
  -webkit-mask-image: linear-gradient(to top, transparent 20%, black 50%);
  mask-image: linear-gradient(to top, transparent 20%, black 50%);
  background-image: url("/assets/images/common/galaxy.webp");
  background-size: 100% 50vh;
  pointer-events: none;
`;
export const GalaxyFog = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: -25%;
  top: 120%;
  z-index: 10;
  mix-blend-mode: exclusion;
  opacity: 0.75;
  background-image: url("/assets/images/keyvisual/galaxy-fog.webp");
  background-size: 100% 100vh;
  pointer-events: none;
`;
export const GalaxyFog2 = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0%;
  scale: -1 1;
  top: 100%;
  z-index: 10;
  mix-blend-mode: exclusion;
  opacity: 0.75;
  background-image: url(/assets/images/home/galaxy-fog2.webp);
  background-size: 100vw 100vh;
  pointer-events: none;
`;
