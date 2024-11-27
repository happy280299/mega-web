import React from 'react'
import { Galaxy, GalaxyFog, KeyvisualContainer, KeyvisualContent } from './styled'
import ButtonCommon from '../../assets/Component/Button'
import AtomOrbitCanvas from '../../assets/Component/Orbit'
import { LayoutHand, WrapperCommon } from '../../Layout/styled'

const Keyvisual = () => {
  return (
    <>
      <LayoutHand>
          <img className="hand-top" src='/assets/images/common/handTop.svg' loading='lazy' alt='' />
          <img className="hand-bottom" src='/assets/images/common/handBottom.svg' loading='lazy' alt='' />
        </LayoutHand>
      <KeyvisualContainer>
        <AtomOrbitCanvas />
        <WrapperCommon>
          <KeyvisualContent>
            <h1 className="title">Mega</h1>
            <p className='text'>Your experts in mobile and web development</p>
            <ButtonCommon text='CONTACT US' />
          </KeyvisualContent>
        </WrapperCommon>
        <Galaxy></Galaxy>
        <GalaxyFog></GalaxyFog>
      </KeyvisualContainer>
    </>
  )
}

export default Keyvisual