import { ButtonContainer } from "./styled";

interface ButtonInterface {
  text: string;
}
const ButtonCommon = ({ text }: ButtonInterface) => {
  return (
    <ButtonContainer>
      {text}
      <svg className="glow-container">
        <defs>
          <linearGradient
            id="stroke-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stop-color="rgba(210, 55, 81, 0.5)"></stop>
            <stop offset="100%" stop-color="rgba(179, 55, 210, 0.5)"></stop>
          </linearGradient>
        </defs>
        <rect
          className="glow-blur"
          rx="40"
          pathLength="100"
          stroke-linecap="round"
        ></rect>
        <rect
          className="glow-line"
          rx="40"
          pathLength="100"
          stroke-linecap="round"
        ></rect>
      </svg>
    </ButtonContainer>
  );
};

export default ButtonCommon;
