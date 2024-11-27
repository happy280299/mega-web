import styled from "styled-components";

export const LayoutLandingContainer = styled.div`
  
  width: 100%;
  min-height: 200vh;
  overflow: hidden;
  background-color: #000;
`;
export const LayoutLandingWrapper = styled.div`
  position: relative;
`;
export const WrapperCommon = styled.div`
  padding: 100px 5vw 0;
`;
export const LayoutHand = styled.div`
  .hand-top {
    position: absolute;
    top: -15vh;
    right: 5vw;
    width: auto;
    height: 70vh;
  }
  .hand-bottom {
    position: absolute;
    right: 27vw;
    width: auto;
    height: 60vh;
    bottom: -20vh;
  }
  @media (min-width: 768px) and (max-width: 1420px) {
    .hand-top {
      right: 1vw;
    }
    .hand-bottom {
      right: 22vw;
    }
  }
`
