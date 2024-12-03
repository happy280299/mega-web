import styled from "styled-components";

export const FooterContaier = styled.div`
  padding: 50px 0;
  border-top: 1px solid #d13751;
  @media (min-width: 767.98px) and (max-width: 1450px) {
    padding: 50px;
  }
  /* @media (max-width: 1420px) {
    padding-bottom: 200px;
  } */
`;
export const FooterWrapper = styled.div`
  max-width: 1470px;
  width: 100%;
  margin: 0 auto;
  .title-footer {
    font-size: clamp(24px, 5vw, 32px);
    font-weight: 400;
  }
`;
export const FooterDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 64px;
  @media (min-width: 1420px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1420px) {
    padding: 0 30px;
  }
`;
export const FooterLogo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  img {
    width: 85px;
    height: auto;
    cursor: pointer;
    pointer-events: all;
  }
  @media (max-width: 1420px) {
    align-items: center;
  }
`;
export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  font-weight: 400;
  width: max-content;
  flex-shrink: 0;
  strong {
    color: #838383;
    font-weight: unset;
    margin-right: 8px;
  }
  p {
    display: flex;
    gap: 8px;
  }
`;
export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 20px);
  grid-auto-flow: column;
  gap: 16px;
  font-size: 16px;
  font-weight: 400;
  max-width: 320px;
  width: 100%;
  strong {
    grid-column: 1 / 3;
    color: #838383;
    font-weight: unset;
    margin-right: 8px;
  }
`;
