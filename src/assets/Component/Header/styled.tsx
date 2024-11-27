import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  left: 0;
  width: 100%;
  padding: 25px 5vw;
  background: linear-gradient(rgba(3, 10, 18, .9) 60%, transparent);
`
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderLogo = styled.div``
export const HeaderNav = styled.div`
  width: 60%;
`
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
      transition: all .26s ease;
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
`