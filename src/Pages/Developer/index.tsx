import React from "react";
import {
  DeveloperContainer,
  DeveloperMoon,
  DeveloperMoon2,
  DeveloperMoonBig,
  DeveloperWrapper,
} from "./styled";

const Developer = () => {
  return (
    <DeveloperContainer>
      <DeveloperWrapper>
        <DeveloperMoon>
          <img
            src="/assets/images/developer/planet1.webp"
            width={215}
            height={215}
            loading="lazy"
            alt="Moon"
          />
        </DeveloperMoon>
        <DeveloperMoonBig>
          <div className="image-moon">
            <img
              src="/assets/images/developer/moon.webp"
              width={500}
              height={504}
              loading="lazy"
              alt="Moon"
            />
          </div>
          <div className="image-gradian"></div>
          <div className="block-text">
            <span>WE</span>
            <span>DEVELOP</span>
          </div>
        </DeveloperMoonBig>
        <DeveloperMoon2>
          <img
            src="/assets/images/developer/planet2.webp"
            width={95}
            height={95}
            loading="lazy"
            alt="Moon"
          />
        </DeveloperMoon2>
      </DeveloperWrapper>
    </DeveloperContainer>
  );
};

export default Developer;
