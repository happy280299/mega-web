import styled from "styled-components";

export const WebApplicationContainer = styled.div`
  max-width: 1920px;
  padding: 0 100px;
  margin: 0 auto;
  position: relative;
`;
export const WebApplicationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const WebApplicationImages = styled.div`
  position: relative;
  width: 50%;
  max-width: 1000px;
  margin: 32px auto 0;
  aspect-ratio: 2;
  /* opacity: 0; */
  img {
    position: absolute;
  }
  .web-laptop {
    width: 117%;
    left: -6%;
    top: -23%;
  }
  .web-frame {
    width: 57%;
    top: 2%;
    left: 39%;
    transform: translate(-12%, -6%);
  }
  .web-screen {
    width: 59%;
    z-index: 10;
    top: 1%;
    left: 38%;
    transform: translate(-22%, -13%) scale(0.95);
  }
  .web-wireframe {
    width: 50%;
    left: 30%;
    top: -15%;
    z-index: 20;
  }
  .web-floor {
    width: 150%;
    z-index: -10;
    top: 89%;
    left: -25%;
  }
  .web-plannet1 {
    top: 2%;
    left: 2%;
    width: 16%;
  }
  .web-plannet2 {
    left: 22%;
    top: -4%;
    width: 6%;
  }
  .web-gradian {
    position: absolute;
    top: -250%;
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
    width: 300%;
    aspect-ratio: 1;
    z-index: -20;
    pointer-events: none;
  }
`;
