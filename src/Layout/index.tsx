import { Outlet } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import { LayoutLandingContainer, LayoutLandingWrapper } from "./styled";
import Header from "../assets/Component/Header";
import Footer from "../assets/Component/Footer";

const LayoutLanding = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 2,
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
