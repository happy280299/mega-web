import styled from "styled-components";

export const ContactContainer = styled.div`
  margin-top: 25vh;
  position: relative;
  padding: 0 16px 100px;

  @media (max-width: 1024px) {
    padding: 0 16px 60px;
  }
`;
export const ContactWrapper = styled.div``;
export const ContactBanner = styled.div`
  position: relative;
  .gradian {
    position: absolute;
    bottom: -200px;
    left: -16px;
    width: calc(100% + 32px);
    height: 700px;
    z-index: 20;
    background: radial-gradient(
      50% 50% at 50% 50%,
      hsla(349.94, 63.27%, 51.96%, 0.3),
      hsla(349.94, 63.27%, 51.96%, 0.2878) 5.79%,
      hsla(349.94, 63.27%, 51.96%, 0.26736) 10.88%,
      hsla(349.94, 63.27%, 51.96%, 0.24047) 15.63%,
      hsla(349.94, 63.27%, 51.96%, 0.20889) 20.37%,
      hsla(349.94, 63.27%, 51.96%, 0.17439) 25.46%,
      hsla(349.94, 63.27%, 51.96%, 0.13875) 31.25%,
      hsla(349.94, 63.27%, 51.96%, 0.10373) 38.08%,
      hsla(349.94, 63.27%, 51.96%, 0.07111) 46.3%,
      hsla(349.94, 63.27%, 51.96%, 0.04266) 56.25%,
      hsla(349.94, 63.27%, 51.96%, 0.02014) 68.29%,
      hsla(349.94, 63.27%, 51.96%, 0.00533) 82.75%,
      hsla(349.94, 63.27%, 51.96%, 0)
    );
    pointer-events: none;
  }
  .banner-title {
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    padding: 132px 0;
  }
  @media (max-width: 1024px) {
    .gradian {
      bottom: unset;
      top: -430px;
    }
    .banner-title {
      font-size: 30px;
    }
  }
  @media (max-width: 600px) {
    .banner-title {
      padding: 50px 0;
    }
  }
`;
export const ContactPlannet = styled.img`
  position: absolute;
  top: -40%;
  left: 65%;
  translate: -50% 0;
  z-index: 2000;
  width: 1920px;
  mix-blend-mode: color-dodge;
  opacity: 0.3;
  pointer-events: none;
  animation: spin 200s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const ContactForm = styled.form`
  width: 100%;
  max-width: 578px;
  margin: 0 auto;
  background-color: #ffffff1a;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  padding: 70px 44px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  .title-contact {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 64px;
    align-self: flex-start;
  }
  .form-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .form-footer-inner {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background: none;
    font-family: Mulish;
    font-size: 18px;
    font-weight: 400;
    padding: 21px 100px;
    border-radius: 32px;
    cursor: pointer;
    transition: padding ease 0.3s 0.3s, box-shadow ease 0.3s;
    border: 1px solid #fff;
    position: relative;
    margin-right: 32px;
    &:hover {
      box-shadow: 0 0 5px 1px #ffffff80, inset 0 0 5px 1px #ffffff80;
    }
  }
  .text {
    width: 59px;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;
  }
  .form-button {
    position: absolute;
    height: 60%;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .form-button__tick {
    stroke: #fff;
    fill: none;
    stroke-width: 2px;
    stroke-dashoffset: 100px;
    stroke-dasharray: 100px;
    transition: stroke-dashoffset 1s ease;
  }
  @media (max-width: 1024px) {
    .title-contact {
      font-size: 24px;
    }
    .form-footer {
      justify-content: center;
    }
    .form-footer-inner {
      margin-right: 0;
    }
  }
`;

export const InputContact = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 60px;
  .input-label {
    top: -8px;
    left: 0;
    font-size: 16px;
    color: #fff;
    position: absolute;
    transition: all 0.3s ease;
    &.is-area {
      position: static;
    }
  }
  .input-label[data-is-focused="true"] {
    translate: -5px -14px;
    scale: 0.8;
  }
  .input,
  .textarea {
    outline: none;
    cursor: text;
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    display: inline;
    font-size: 16px;
    font-family: Mulish;
    transition: all 0.3s ease;
    padding-bottom: 5px;
    border-radius: 0;
  }
  .input {
    &:hover {
      background: linear-gradient(
        transparent 0%,
        rgba(255, 255, 255, 0.1) 150%
      );
    }
  }
  .textarea {
    display: block;
    padding: 10px;
    border-radius: 6px;
    margin-top: 10px;
    resize: none;
    border: 1px solid #fff;
    height: 120px;
  }
  .error {
    color: rgba(192, 32, 59, 0.7);
    position: absolute;
    top: 32px;
    left: 0;
    transform: translateY(10px);
    opacity: 0;
    transition: all 0.3s ease;
  }
`;
export const FormArea = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 60px;
  .textarea {
    display: block;
    padding: 10px;
    border-radius: 6px;
    margin-top: 10px;
    resize: none;
    border: 1px solid #fff;
    height: 120px;
    width: 100%;
    outline: none;
  }
  .error {
    color: rgba(192, 32, 59, 0.7);
    position: absolute;
    top: 32px;
    left: 0;
    transform: translateY(10px);
    opacity: 0;
    transition: all 0.3s ease;
  }
`;
