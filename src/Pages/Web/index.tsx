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
  MobileGradian,
  MobileText,
} from "../Mobile/styled";
import {
  WebApplicationContainer,
  WebApplicationImages,
  WebApplicationWrapper,
} from "./styled";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { ContextProviderWrapper } from "../../Context";
import { useContext } from "react";

const WebApplication = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;

  return (
    <WebApplicationContainer>
      <WebApplicationWrapper>
        <MobileText>
          <h2 className="mobile-title">Web applications</h2>
          <p className="mobile-text">
            From pocket to desktop - unlock the power of larger screens.
          </p>
        </MobileText>
        <MobileGradian></MobileGradian>
        <WebApplicationImages>
          <img
            src="/assets/images/web/laptop.webp"
            alt=""
            className="web-laptop"
          />
          <img
            src="/assets/images/web/frame.svg"
            alt=""
            className="web-frame"
          />
          <img
            src="/assets/images/web/screen.svg"
            alt=""
            className="web-screen"
          />
          <img
            src="/assets/images/web/wireframe.svg"
            alt=""
            className="web-wireframe"
          />
          <img
            src="/assets/images/web/floor.webp"
            alt=""
            className="web-floor"
          />
          <img
            src="/assets/images/web/planet1.webp"
            alt=""
            className="web-plannet1"
          />
          <img
            src="/assets/images/web/planet2.webp"
            alt=""
            className="web-plannet2"
          />
          <div className="web-gradian"></div>
        </WebApplicationImages>
        <CardContainer>
          {isDesktop ? (
            <CardInner>
              {cardItem.map((item, index) => (
                <CardItem key={index}>
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
      </WebApplicationWrapper>
    </WebApplicationContainer>
  );
};

const cardItem = [
  {
    img: "/assets/images/mobile/wireframes.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/uiux.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/3d.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/ar.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
  {
    img: "/assets/images/mobile/payments.svg",
    title: "Wireframes",
    description:
      "Every great project starts with a solid blueprint. We start from sketch to get the bigger picture",
  },
];

export default WebApplication;
