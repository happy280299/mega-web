import React from 'react'
import { MobileContainer, MobileGradian, MobileImage, MobileText, MobileWrapper } from './styled'

const Mobile = () => {
  return (
    <MobileContainer>
      <MobileWrapper>
        <MobileText>
          <h2 className="mobile-title">Mobile applications</h2>
          <p className="mobile-text">Modern consumers prioritize a tailored, pocket-sized experience.</p>
        </MobileText>
        <MobileGradian></MobileGradian>
        <MobileImage>
          <img src="/assets/images/mobile/main.svg" alt="" className="image-main" />
          <img src="/assets/images/mobile/second.svg" alt="" className="image-second" />
          <img src="/assets/images/mobile/second.svg" alt="" className="image-third" />
          <div className="icon-ui"></div>
          <div className="icon-play"></div>
          <div className="icon-ux"></div>
          <div className="icon-chart"></div>
          <div className="icon-html"></div>
        </MobileImage>
      </MobileWrapper>
    </MobileContainer>
  )
}

export default Mobile