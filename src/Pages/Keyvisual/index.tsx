import {
  Galaxy,
  GalaxyFog,
  GalaxyFog2,
  KeyvisualContainer,
  KeyvisualContent,
} from "./styled";
import ButtonCommon from "../../assets/Component/Button";
import AtomOrbitCanvas from "../../assets/Component/Orbit";
import { LayoutHand, WrapperCommon } from "../../Layout/styled";

const Keyvisual = () => {
  return (
    <div>
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
      <KeyvisualContainer>
        <AtomOrbitCanvas />
        <WrapperCommon>
          <KeyvisualContent>
            <h1 className="title">Bridging Your Idea to the digital world</h1>
            <p className="text">Your experts in mobile and web development</p>
            <ButtonCommon text="CONTACT US" />
          </KeyvisualContent>
        </WrapperCommon>
        <Galaxy></Galaxy>
        <GalaxyFog></GalaxyFog>
        <GalaxyFog2></GalaxyFog2>
      </KeyvisualContainer>
    </div>
  );
};

export default Keyvisual;
