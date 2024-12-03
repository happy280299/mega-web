// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-coverflow";
import {
  CardContainer,
  CardInner,
  CardItem,
  CardSlideMobile,
  MobileContainer,
  MobileGradian,
  MobileImage,
  MobileText,
  MobileWrapper,
} from "./styled";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { ContextProviderWrapper } from "../../Context";
import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";

const animations = [
  { className: "icon-ui", delay: 1 },
  { className: "icon-play", delay: 1.5 },
  { className: "icon-ux", delay: 1.2 },
  { className: "icon-chart", delay: 2 },
  { className: "icon-html", delay: 1.9 },
  { className: "mobile-gradian", delay: 1.6 },
  { className: "mobile-gradian2", delay: 1.7 },
];

const Mobile = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;
  const containerRef = useRef(null);
  const refList = useRef(null);
  const isInView = useInView(containerRef, { margin: "-50px 0px -50px 0px" });

  const defaultAnimation = {
    initial: { transform: "translateZ(-100px) scale(0)" },
    animate: isInView
      ? { transform: "translateZ(0px) scale(1)" }
      : { transform: "translateZ(-100px) scale(0)" },
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  };

  return (
    <MobileContainer>
      <MobileWrapper>
        <MobileText>
          <h2 className="mobile-title">Mobile applications</h2>
          <p className="mobile-text">
            Modern consumers prioritize a tailored, pocket-sized experience.
          </p>
        </MobileText>
        <MobileGradian></MobileGradian>
        <MobileImage
          ref={containerRef}
          initial={{ transform: "translateY(100px)" }}
          animate={
            isInView
              ? { transform: "translateY(0)" }
              : { transform: "translateY(100px)" }
          }
        >
          <img
            src="/assets/images/mobile/main.svg"
            alt=""
            className="image-main"
          />
          <motion.img
            src="/assets/images/mobile/second.svg"
            alt=""
            className="image-second"
            initial={{ transform: "translate(0%, 0%) rotate(0deg)" }}
            animate={
              isInView
                ? { transform: "translate(-40%, 10%) rotate(-17deg)" }
                : { transform: "translate(0%, 0%) rotate(0deg)" }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.img
            src="/assets/images/mobile/second.svg"
            alt=""
            className="image-third"
            animate={
              isInView
                ? { transform: "translate(-76%, 25%) rotate(-33deg)" }
                : { transform: "translate(0%, 0%) rotate(0deg)" }
            }
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut",
            }}
          />
          {animations.map(({ className, delay }) => (
            <motion.div
              key={className}
              className={className}
              initial={defaultAnimation.initial}
              animate={defaultAnimation.animate}
              transition={{ ...defaultAnimation.transition, delay }}
            ></motion.div>
          ))}
          <img
            className="mobile-floor"
            src="/assets/images/mobile/floor.webp"
            alt=""
          />
        </MobileImage>
        <CardContainer ref={refList}>
          {isDesktop ? (
            <CardInner>
              {cardItem.map((item, index) => (
                <CardItem
                  key={index}
                  initial={{ transform: "translate(0%, 50%)", opacity: 0 }}
                  animate={
                    isInView
                      ? { transform: "translate(0%, 0%)", opacity: 1 }
                      : { transform: "translate(0%, 0%)", opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: item.delay,
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={item.img}
                    width={100}
                    height={100}
                    loading="lazy"
                    alt={item.title}
                  />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </CardItem>
              ))}
            </CardInner>
          ) : (
            <CardSlideMobile>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                initialSlide={2}
                loop={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="swiper-mobile"
              >
                {cardItem.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CardItem>
                      <img
                        src={item.img}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt={item.title}
                      />
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </CardItem>
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardSlideMobile>
          )}
        </CardContainer>
      </MobileWrapper>
    </MobileContainer>
  );
};

const cardItem = [
  {
    img: "/assets/images/mobile/wireframes.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
    delay: 0,
  },
  {
    img: "/assets/images/mobile/uiux.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
    delay: 0.5,
  },
  {
    img: "/assets/images/mobile/3d.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
    delay: 1,
  },
  {
    img: "/assets/images/mobile/ar.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
    delay: 1.5,
  },
  {
    img: "/assets/images/mobile/payments.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
    delay: 2,
  },
  {
    img: "/assets/images/mobile/notifications.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
    delay: 2.5,
  },
];

export default Mobile;
