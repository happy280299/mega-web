import { Outlet, useLocation } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import { LayoutHand, LayoutLandingContainer, LayoutLandingWrapper } from "./styled";
import Header from "../assets/Component/Header";
import Footer from "../assets/Component/Footer";

const LayoutLanding = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 3,
      }}
    >
      <LayoutLandingContainer id="home">
        <LayoutLandingWrapper>
          <Header />
          <Outlet />
          <Footer />
        </LayoutLandingWrapper>
      </LayoutLandingContainer>
    </ReactLenis>
  );
};

export default LayoutLanding;
