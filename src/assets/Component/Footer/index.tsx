import { Link } from "react-router-dom";
import {
  FooterContact,
  FooterContaier,
  FooterDetail,
  FooterLogo,
  FooterNavigation,
  FooterWrapper,
} from "./styled";
import { ContextProviderWrapper } from "../../../Context";
import { useContext } from "react";

const Footer = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;
  return (
    <FooterContaier>
      <FooterWrapper>
        {isDesktop && <h2 className="title-footer">Contact our local office</h2>}
        <FooterDetail>
          <FooterLogo>
            <img
              src="/assets/images/common/codemask.svg"
              width={200}
              height={45}
              loading="lazy"
              alt="Mega"
            />
          </FooterLogo>
          <FooterContact>
            <strong>General Enquiries</strong>
            <p>
              <strong>Phone : </strong>
              <a href="#">000000</a>
            </p>
            <p>
              <strong>Email : </strong>
              <a href="#">000000</a>
            </p>
          </FooterContact>
          <FooterContact>
            <strong>General Enquiries</strong>
            <p> HCM City</p>
            <p> HCM City</p>
            <p> HCM City</p>
          </FooterContact>
          <FooterNavigation>
            <strong>Navigation</strong>
            {navigation.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.text}
              </Link>
            ))}
          </FooterNavigation>
        </FooterDetail>
      </FooterWrapper>
    </FooterContaier>
  );
};
const navigation = [
  {
    text: "Start",
    link: "#",
  },
  {
    text: "Start",
    link: "#",
  },
  {
    text: "Start",
    link: "#",
  },
  {
    text: "Start",
    link: "#",
  },
  {
    text: "Start",
    link: "#",
  },
  {
    text: "Start",
    link: "#",
  },
  {
    text: "Start",
    link: "#",
  },
  {
    text: "Start",
    link: "#",
  },
];

export default Footer;
