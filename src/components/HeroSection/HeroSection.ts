import styled from "styled-components";
import hero from "../../assets/hero.png";

export const HeroContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 189.93px;
  padding-bottom: 219.93px;
  align-items: center;
  margin: 0 auto;
  padding-left: 360px;
  position: relative;
  height: 900px;
  background-position: center;
  z-index: 2;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      #000000 -2.41%,
      rgba(0, 0, 0, 0) 109.61%
    );
    z-index: 1;
    background-position: center;
  }

  @media screen and (max-width: 768px) {
    padding-left: 144px;
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    padding-left: 90px;
    height: 350px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${hero});
  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const HeroTextContainer = styled.div`
  z-index: 3;
  flex-direction: column;
  width: 790.65px;
  height: 344.14px;
  word-break: break-word;
  margin-bottom: 70px;
  @media screen and (max-width: 768px) {
    width: 616.26px;
    margin-bottom: 38px;
    height: 253px;
  }

  @media screen and (max-width: 480px) {
    width: 316.26px;
    margin-bottom: 19px;
    height: 150px;
  }
`;

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.font_size.XXXL}px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 130%;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.XL_R}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.X}px;
  }
`;

export const HeroSpan = styled.span`
  font-size: ${({ theme }) => theme.font_size.XXXL}px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 130%;
  font-weight: 800;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.XL_R}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.X}px;
  }
`;

export const HeroButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  line-height: 120%;
  padding: 20px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font_size.MD}px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
  }
`;
