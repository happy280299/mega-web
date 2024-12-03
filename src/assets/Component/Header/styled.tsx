import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  left: 0;
  width: 100%;
  padding: 25px 5vw;
  background: linear-gradient(rgba(3, 10, 18, 0.9) 60%, transparent);
  @media screen and (max-width: 1024px) {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100vw;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderLogo = styled.div`
  @media screen and (max-width: 1024px) {
    img {
      width: 85px;
    }
  }
`;
export const HeaderNav = styled.div`
  width: 60%;
  @media screen and (max-width: 1023px) {
    backdrop-filter: blur(50px);
    width: 100vw;
    height: calc(1lvh * 100 - 80px);
    position: fixed;
    top: 80px;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: scroll;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;
    transform: translateY(10px);
    &.is-active {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  }
`;
export const ListNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 4%;
  justify-content: flex-end;
  a {
    font-size: 18px;
    position: relative;
    padding-bottom: 2px;
    &:before {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      transition: all 0.26s ease;
      height: 2px;
      background-color: #fff;
      width: 0;
    }
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1023px) {
    margin: auto 0;
    flex-direction: column;
    width: 100vw;
    overflow: scroll;
    align-items: center;
    text-align: center;
    gap: 32px;
    justify-content: center;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
`;
export const ButtonMobile = styled.button`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  transition: all 0.5s ease;
  -webkit-tap-highlight-color: transparent;
  span {
    display: block;
    border-radius: 3px;
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    transition: all 0.5s ease;
  }
  &.active-open {
    span {
      &:nth-child(1) {
        opacity: 0;
        translate: -200px -100px;
        transform: rotate(134deg);
      }
      &:nth-child(2) {
        transform: translateY(0px) rotate(134deg);
      }
      &:nth-child(3) {
        transform: translateY(-10px) rotate(225deg);
      }
    }
  }
`;
