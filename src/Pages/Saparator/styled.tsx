import styled from "styled-components";

export const SaparatorContainer = styled.div`
  width: 100%;
  height: auto;
  min-width: 1500px;
  position: relative;
  @media (max-width: 1500px) {
    transform: translate(calc((1500px - 100vw) / -2));
  }
`;
export const SaparatorWrapper = styled.div`
  .saparator-fog {
    width: 100%;
  }
  .saparator-saturn {
    position: absolute;
    top: 23%;
    left: 40%;
    width: 18%;
  }
  .separator-first,
  .separator-second {
    width: 2%;
    position: absolute;
  }
  .separator-first {
    top: 30%;
    left: 59%;
  }
  .separator-second {
    top: 60%;
    left: 37%;
  }
`;
