import { useContext, useRef } from "react";
import {
  BlockImage,
  BlockRoad,
  UniversalContainer,
  UniversalContent,
  UniversalWrapper,
} from "./styled";
import { motion, useInView } from "framer-motion";
import { ContextProviderWrapper } from "../../Context";

const Universal = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;
  const refTop = useRef(null);
  const refBottom = useRef(null);
  const isInViewTop = useInView(refTop, { margin: `${isDesktop ? '-300px 0px 0px 0px' : '0px 0px 0px 0px' }` });
  const isInViewBottom = useInView(refBottom, {
    margin: `${isDesktop ? '-400px 0px -400px 0px' : '-40px 0px -40px 0px'}`,
  });

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
        <BlockImage ref={refTop}>
          <motion.img
            src="/assets/images/Universal/web.webp"
            alt=""
            className="image-web"
            initial={{ opacity: 0 }}
            animate={isInViewTop ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.img
            src="/assets/images/Universal/tablet.webp"
            alt=""
            className="image-tablet"
            initial={{ opacity: 0, transform: "translate(0, 0)" }}
            animate={
              isInViewTop
                ? { opacity: 1, transform: "translate(0, -50%)" }
                : { opacity: 0, transform: "translate(0, 0)" }
            }
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          />
          <motion.img
            src="/assets/images/Universal/mobile.webp"
            alt=""
            className="image-mobile"
            initial={{ transform: "translate(0, 0)", opacity: 0 }}
            animate={
              isInViewTop
                ? { transform: "translate(0, -50%)", opacity: 1 }
                : { transform: "translate(0, 0)", opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          />
          <motion.img
            src="/assets/images/Universal/watch.webp"
            alt=""
            className="image-watch"
            initial={{ transform: "translate(0, 0)", opacity: 0 }}
            animate={
              isInViewTop
                ? { transform: "translate(0, -50%)", opacity: 1 }
                : { transform: "translate(0, 0)", opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
          />
        </BlockImage>
        <BlockRoad ref={refBottom}>
          <div className="lines">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInViewBottom ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              className="dot"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInViewBottom ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="line"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInViewBottom ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              className="dot"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInViewBottom ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
              className="line"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInViewBottom ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
              className="dot"
            ></motion.div>
          </div>
          <div className="content-road">
            {dataroad.map((item, index) => (
              <motion.div
                initial={{ transform: "translate(0, 50%)", opacity: 0 }}
                animate={
                  isInViewBottom
                    ? { transform: "translate(0, 0)", opacity: 1 }
                    : { transform: "translate(0, 50%)", opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: item.delay,
                  ease: "easeOut",
                }}
                key={index}
                className="content-inner"
              >
                <h3 className="title-inner">{item.title}</h3>
                <p className="description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </BlockRoad>
      </UniversalWrapper>
    </UniversalContainer>
  );
};

const dataroad = [
  {
    title: "One code",
    description:
      "Maintain all platforms with a single codebase and target millions of devices",
    delay: 1,
  },
  {
    title: "One code",
    description:
      "Maintain all platforms with a single codebase and target millions of devices",
    delay: 1.5,
  },
  {
    title: "One code",
    description:
      "Maintain all platforms with a single codebase and target millions of devices",
    delay: 2,
  },
];

export default Universal;
