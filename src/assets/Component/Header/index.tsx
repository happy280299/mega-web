import { Link } from "react-router-dom";
import { HeaderContainer, HeaderLogo, HeaderNav, HeaderWrapper, ListNav } from "./styled";

interface NavInterface {
  text: string;
  link: string;
}

const Header = () => {
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
        <HeaderNav>
          <ListNav>
            {listNavigation.map((item: NavInterface, index: number) => (
              <li key={index}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ListNav>
        </HeaderNav>
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
