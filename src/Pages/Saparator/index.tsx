import { SaparatorContainer, SaparatorWrapper } from './styled'

const Saparator = () => {
  return (
    <SaparatorContainer>
      <SaparatorWrapper>
        <img src="/assets/images/saparator/saturnFog.webp" alt="" className="saparator-fog" />
        <div className="block-middle">
          <img src="/assets/images/saparator/saturn--mobile.webp" alt="" className="saparator-saturn" />
        </div>
        <img src="/assets/images/saparator/saturnMoon.webp" alt="" className="separator-first" />
        <img src="/assets/images/saparator/saturnMoon2.webp" alt="" className="separator-second" />
      </SaparatorWrapper>
    </SaparatorContainer>
  )
}

export default Saparator