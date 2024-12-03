import { motion, useScroll, useTransform } from "framer-motion";
import {
  DeveloperContainer,
  DeveloperMoon,
  DeveloperMoon2,
  DeveloperMoonBig,
  DeveloperWrapper,
} from "./styled";
import { useRef } from "react";

const Developer = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const weX = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);
  const developX = useTransform(scrollYProgress, [0, 0.5], ["100%", "58%"]);

  return (
    <DeveloperContainer ref={containerRef}>
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
            <>
              <motion.span style={{ x: weX }} className="text-we">
                WE
              </motion.span>
              <motion.span style={{ x: developX }} className="text-develop">
                DEVELOP
              </motion.span>
            </>
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
