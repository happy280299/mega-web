import { useContext, useEffect, useState } from "react";
import Contact from "../Contact";
import Developer from "../Developer";
import Keyvisual from "../Keyvisual";
import Mobile from "../Mobile";
import Saparator from "../Saparator";
import Universal from "../Universal";
import WebApplication from "../Web";
import { ContextProviderWrapper } from "../../Context";
import { CircleContainer } from "./styled";

const Landing = () => {
  const [circles, setCircles] = useState<any>([]);
  const { isDesktop } = useContext(ContextProviderWrapper)!;
  // Generate random circles
  useEffect(() => {
    const generateCircles = () => {
      const newCircles = Array.from({ length: isDesktop ? 40 : 10 }, () => ({
        size: Math.random() * 8, // random size
        top: Math.random() * 100, // random top position (percentage)
        left: Math.random() * 100, // random left position (percentage)
        duration: Math.random() * 10 + 5, // random animation duration
      }));
      setCircles(newCircles);
    };

    generateCircles();
  }, []);

  return (
    <div>
      <CircleContainer>
        {circles.map((circle: any, index: any) => (
          <div
            key={index}
            className="circle"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              top: `${circle.top}%`,
              left: `${circle.left}%`,
              animationDuration: `${circle.duration}s`,
              background: `rgba(255, 255, 255, .5)`,
            }}
          ></div>
        ))}
      </CircleContainer>
      <Keyvisual />
      <Developer />
      <Mobile />
      <Saparator />
      <WebApplication />
      <Universal />
      <Contact />
    </div>
  );
};

export default Landing;
