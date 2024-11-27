import styled from "styled-components";

export const MobileContainer = styled.div`
  padding-top: calc(1lvh * 20);
`;
export const MobileWrapper = styled.div`
  max-width: 1920px;
  /* padding: 0 100px; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  padding: 0 100px;
`;
export const MobileText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  /* opacity: 0; */
  position: relative;
  z-index: 10;
  .mobile-title {
    font-size: clamp(50px, 6vw, 110px);
    font-weight: 700;
    white-space: break-spaces;
    line-height: clamp(54px, 6vw, 114px);
  }
  .mobile-text {
    font-size: clamp(24px, 2vw, 32px);
    font-weight: 400;
    white-space: break-spaces;
  }
`;
export const MobileGradian = styled.div`
  pointer-events: none;
  width: 200%;
  transform: translateY(-50%);
  top: 50%;
  left: -120%;
  aspect-ratio: 1;
  opacity: 0.7;
  position: absolute;
  background: radial-gradient(
    70% 70% at 50% 50%,
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
  z-index: -50;
`;
export const MobileImage = styled.div`
  position: relative;
  width: 50%;
  max-width: 1000px;
  margin: 0 auto;
  aspect-ratio: 2;
  /* opacity: 0; */
  scale: 1.2;
  .image-main {
    position: absolute;
    width: 31%;
    top: -34%;
    left: 44%;
    z-index: 30;
  }
  .image-second {
    position: absolute;
    width: 31%;
    top: -34%;
    left: 44%;
    z-index: 20;
    transform: translate(-40%, 10%) rotate(-17deg);
  }
  .image-third {
    position: absolute;
    width: 31%;
    top: -34%;
    left: 44%;
    z-index: 10;
    transform: translate(-76%, 25%) rotate(-33deg);
  }
  .icon-ui, .icon-ux, .icon-chart, .icon-play, .icon-html {
    position: absolute;
    background-color: #3b2637d9;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 16px;
    z-index: 50;
    transform: translateZ(0) scale(1);
    will-change: transform;
  }
  .icon-ui {
    width: 12%;
    aspect-ratio: 1.2;
    top: -26%;
    left: 27%;
    background-image: url("/assets/images/mobile/ui.svg");
    background-size: 25%;
  }
  .icon-play {
    width: 17%;
    aspect-ratio: 1.4;
    top: 30%;
    left: 11%;
    background-image: url("/assets/images/mobile/play.svg");
    background-size: 45%;
  }
  .icon-ux {
    width: 17%;
    aspect-ratio: 1.4;
    top: 93%;
    left: 20%;
    background-image: url("/assets/images/mobile/ux.svg");
    background-size: 35%;
  }
  .icon-chart {
    width: 17%;
    aspect-ratio: 1.3;
    top: -18%;
    left: 69%;
    background-image: url("/assets/images/mobile/chart.svg");
    background-size: 60%;
  }
  .icon-html {
    width: 13%;
    aspect-ratio: 1.3;
    top: 11%;
    left: 77%;
    background-image: url("/assets/images/mobile/html.svg");
    background-size: 60%;
  }
`;
