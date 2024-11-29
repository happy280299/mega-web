import { Link } from "react-router-dom";
import {
  ButtonMobile,
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderWrapper,
  ListNav,
} from "./styled";
import { useContext, useState } from "react";
import { ContextProviderWrapper } from "../../../Context";

interface NavInterface {
  text: string;
  link: string;
}

const Header = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;
  const [isMenu, setIsMenu] = useState(false)

  const handleOpenMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo>
          <img
            src="/assets/images/common/header_logo.svg"
            width={208}
            height={47}
            loading="lazy"
            alt="Mega"
          />
        </HeaderLogo>
        <HeaderNav className={isMenu ? 'is-active' : ''}>
          <ListNav>
            {listNavigation.map((item: NavInterface, index: number) => (
              <li key={index}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ListNav>
        </HeaderNav>
        {!isDesktop && (
          <ButtonMobile onClick={()=>handleOpenMenu()} className={isMenu ? 'active-open' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </ButtonMobile>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const listNavigation = [
  {
    text: "HIRE US",
    link: "#",
  },
  {
    text: "Start",
    link: "#",
  },
  {
    text: "About",
    link: "#",
  },
  {
    text: "Blog",
    link: "#",
  },
  {
    text: "Contact",
    link: "#",
  },
];

export default Header;
