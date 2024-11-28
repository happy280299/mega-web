import React from "react";
import {
  CardContainer,
  CardInner,
  CardItem,
  MobileContainer,
  MobileGradian,
  MobileImage,
  MobileText,
  MobileWrapper,
} from "./styled";

const Mobile = () => {
  return (
    <MobileContainer>
      <MobileWrapper>
        <MobileText>
          <h2 className="mobile-title">Mobile applications</h2>
          <p className="mobile-text">
            Modern consumers prioritize a tailored, pocket-sized experience.
          </p>
        </MobileText>
        <MobileGradian></MobileGradian>
        <MobileImage>
          <img
            src="/assets/images/mobile/main.svg"
            alt=""
            className="image-main"
          />
          <img
            src="/assets/images/mobile/second.svg"
            alt=""
            className="image-second"
          />
          <img
            src="/assets/images/mobile/second.svg"
            alt=""
            className="image-third"
          />
          <div className="icon-ui"></div>
          <div className="icon-play"></div>
          <div className="icon-ux"></div>
          <div className="icon-chart"></div>
          <div className="icon-html"></div>
          <div className="mobile-gradian"></div>
          <div className="mobile-gradian2"></div>
          <img
            className="mobile-floor"
            src="/assets/images/mobile/floor.webp"
            alt=""
          />
        </MobileImage>
        <CardContainer>
          <CardInner>
            {cardItem.map((item, index) => (
              <CardItem key={index}>
                <img
                  src={item.img}
                  width={100}
                  height={100}
                  loading="lazy"
                  alt={item.title}
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </CardItem>
            ))}
          </CardInner>
        </CardContainer>
      </MobileWrapper>
    </MobileContainer>
  );
};

const cardItem = [
  {
    img: "/assets/images/mobile/wireframes.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/uiux.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/3d.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/ar.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/payments.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/notifications.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
];

export default Mobile;
