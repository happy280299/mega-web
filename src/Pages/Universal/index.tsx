import React from "react";
import {
  BlockImage,
  BlockRoad,
  UniversalContainer,
  UniversalContent,
  UniversalWrapper,
} from "./styled";

const Universal = () => {
  return (
    <UniversalContainer>
      <UniversalWrapper>
        <UniversalContent>
          <h2 className="title">ONE CODE TO RULE THEM ALL</h2>
          <p className="description">
            Build to all screens without compromises
          </p>
          <img
            src="/assets/images/Universal/planet.webp"
            alt=""
            className="panet"
          />
          <div className="universal-gradient"></div>
        </UniversalContent>
        <BlockImage>
          <img
            src="/assets/images/Universal/web.webp"
            alt=""
            className="image-web"
          />
          <img
            src="/assets/images/Universal/tablet.webp"
            alt=""
            className="image-tablet"
          />
          <img
            src="/assets/images/Universal/mobile.webp"
            alt=""
            className="image-mobile"
          />
          <img
            src="/assets/images/Universal/watch.webp"
            alt=""
            className="image-watch"
          />
        </BlockImage>
        <BlockRoad>
          <div className="lines">
            <div className="dot"></div>
            <div className="line"></div>
            <div className="dot"></div>
            <div className="line"></div>
            <div className="dot"></div>
          </div>
          <div className="content-road">
            {dataroad.map((item, index)=>(
            <div key={index} className="content-inner">
              <h3 className="title-inner">{item.title}</h3>
              <p className="description">{item.description}</p>
            </div>
            ))}
          </div>
        </BlockRoad>
      </UniversalWrapper>
    </UniversalContainer>
  );
};

const dataroad = [
  {
    title: 'One code',
    description: 'Maintain all platforms with a single codebase and target millions of devices'
  },
  {
    title: 'One code',
    description: 'Maintain all platforms with a single codebase and target millions of devices'
  },
  {
    title: 'One code',
    description: 'Maintain all platforms with a single codebase and target millions of devices'
  },
]

export default Universal;
