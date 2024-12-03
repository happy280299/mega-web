import {
  Galaxy,
  GalaxyFog,
  GalaxyFog2,
  KeyvisualContainer,
  KeyvisualContent,
  KeyvisualMain,
} from "./styled";
import ButtonCommon from "../../assets/Component/Button";
import AtomOrbitCanvas from "../../assets/Component/Orbit";
import { LayoutHand, WrapperCommon } from "../../Layout/styled";
import { useContext } from "react";
import { ContextProviderWrapper } from "../../Context";
import { TypeAnimation } from "react-type-animation";

const Keyvisual = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;
  return (
    <KeyvisualMain>
      {isDesktop && (
        <LayoutHand>
          <img
            className="hand-top"
            src="/assets/images/common/handTop.svg"
            loading="lazy"
            alt=""
          />
          <img
            className="hand-bottom"
            src="/assets/images/common/handBottom.svg"
            loading="lazy"
            alt=""
          />
        </LayoutHand>
      )}
      <KeyvisualContainer>
        <AtomOrbitCanvas />
        <WrapperCommon>
          <KeyvisualContent>
            <h1 className="title">
              <TypeAnimation
                sequence={[
                  "Bridging Your Idea to the digital world",
                  1000,
                  "",
                  500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text">Your experts in mobile and web development</p>
            <ButtonCommon text="CONTACT US" />
          </KeyvisualContent>
        </WrapperCommon>
        <Galaxy></Galaxy>
        <GalaxyFog></GalaxyFog>
        <GalaxyFog2></GalaxyFog2>
      </KeyvisualContainer>
    </KeyvisualMain>
  );
};

export default Keyvisual;
