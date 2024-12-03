import styled from "styled-components";

export const UniversalContainer = styled.div`
  padding: 300px 0;

  @media (max-width: 1024px) {
    padding-bottom: 100px;
  }
`;
export const UniversalWrapper = styled.div``;
export const UniversalContent = styled.div`
  position: relative;
  .title {
    font-size: clamp(40px, 10vw, 94px);
    font-weight: 700;
    opacity: 0.6;
    text-align: center;
  }
  .description {
    font-size: clamp(24px, 5vw, 45px);
    margin-top: 32px;
    font-weight: 400;
    opacity: 0.6;
    text-align: center;
  }
  .panet {
    position: absolute;
    width: 500px;
    top: -250px;
    left: 50%;
    translate: -50% 0;
    z-index: -10;
    height: auto;
  }
  .universal-gradient {
    pointer-events: none;
    position: absolute;
    top: 0;
    right: -45%;
    transform: translateY(-45%);
    width: 100%;
    aspect-ratio: 1;
    background: radial-gradient(
      60% 60% at 50% 50%,
      hsla(350.32, 62.25%, 51.18%, 0.4),
      hsla(350.32, 62.25%, 51.18%, 0.38373) 5.79%,
      hsla(350.32, 62.25%, 51.18%, 0.35648) 10.88%,
      hsla(350.32, 62.25%, 51.18%, 0.32063) 15.63%,
      hsla(350.32, 62.25%, 51.18%, 0.27852) 20.37%,
      hsla(350.32, 62.25%, 51.18%, 0.23252) 25.46%,
      hsla(350.32, 62.25%, 51.18%, 0.185) 31.25%,
      hsla(350.32, 62.25%, 51.18%, 0.13831) 38.08%,
      hsla(350.32, 62.25%, 51.18%, 0.09481) 46.3%,
      hsla(350.32, 62.25%, 51.18%, 0.05688) 56.25%,
      hsla(350.32, 62.25%, 51.18%, 0.02685) 68.29%,
      hsla(350.32, 62.25%, 51.18%, 0.00711) 82.75%,
      hsla(350.32, 62.25%, 51.18%, 0)
    );
  }
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;
export const BlockImage = styled.div`
  padding: 25vw 0;
  position: relative;
  width: 50%;
  margin: 0 auto;
  img {
    position: absolute;
    border: 1px solid #fff;
    padding: 6px;
    border-radius: 16px;
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    /* opacity: 0; */
  }
  .image-web {
    width: 100%;
    left: 0;
    top: 50%;
    translate: 0 -50%;
    z-index: 10;
  }
  .image-tablet {
    width: 45%;
    top: 75%;
    left: -20%;
    /* translate: 0 -50%; */
    z-index: 20;
  }
  .image-mobile {
    width: 25%;
    left: 80%;
    top: 68%;
    /* translate: 0 -50%; */
    z-index: 30;
  }
  .image-watch {
    width: 15%;
    left: 70%;
    top: 90%;
    /* translate: 0 -50%; */
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    z-index: 40;
    border: none;
  }
  @media (max-width: 1024px) {
    .image-web {
      top: 125%;
      width: 300%;
    }
    .image-tablet {
      width: 120%;
      top: 175%;
    }
    .image-mobile {
      width: 75%;
      left: 50%;
      top: 220%;
    }
    .image-watch {
      width: 60%;
      top: 280%;
      left: 20%;
    }
  }
`;
export const BlockRoad = styled.div`
  padding-top: 300px;
  .lines {
    display: flex;
    width: 60%;
    margin: 0 auto;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 0 6px #fffc;
      /* transform: scale(1); */
    }
    .line {
      width: 50%;
      height: 1px;
      background-color: #fff;
      translate: 0 4.5px;
      transform-origin: left;
      /* transform: scaleX(1); */
    }
  }
  .content-road {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content-inner {
      width: 30%;
      text-align: center;
    }
    .title-inner {
      font-size: 32px;
      margin: 40px 0;
      font-weight: 300;
    }
    .description {
      font-size: 24px;
      line-height: 34px;
      font-weight: 300;
      margin: 0 auto;
      max-width: 450px;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 130vw;
    display: flex;
    padding: 0 40px;
    background: radial-gradient(
      100% 70% at 0% 40%,
      hsla(350.32, 62.25%, 51.18%, 0.4),
      hsla(350.32, 62.25%, 51.18%, 0.38373) 5.79%,
      hsla(350.32, 62.25%, 51.18%, 0.35648) 10.88%,
      hsla(350.32, 62.25%, 51.18%, 0.32063) 15.63%,
      hsla(350.32, 62.25%, 51.18%, 0.27852) 20.37%,
      hsla(350.32, 62.25%, 51.18%, 0.23252) 25.46%,
      hsla(350.32, 62.25%, 51.18%, 0.185) 31.25%,
      hsla(350.32, 62.25%, 51.18%, 0.13831) 38.08%,
      hsla(350.32, 62.25%, 51.18%, 0.09481) 46.3%,
      hsla(350.32, 62.25%, 51.18%, 0.05688) 56.25%,
      hsla(350.32, 62.25%, 51.18%, 0.02685) 68.29%,
      hsla(350.32, 62.25%, 51.18%, 0.00711) 82.75%,
      hsla(350.32, 62.25%, 51.18%, 0)
    );
    .lines {
      width: 10%;
      flex-direction: column;
      transform: translateY(10px);
      .line {
        width: 1px;
        height: 190px;
        translate: 4.5px 0;
        transform-origin: top;
      }
    }
    .content-road {
      justify-content: flex-start;
      width: 90%;
      flex-direction: column;
      text-align: left;
      .content-inner {
        width: 100%;
        height: 200px;
        text-align: left;
      }
      .title-inner {
        font-size: 24px;
        margin: 0 0 32px;
      }
      .description {
        font-size: 16px;
        line-height: 22px;
        margin: 0;
      }
    }
  }
`;
