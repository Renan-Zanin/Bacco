import styled from "styled-components";
import hero from "../../assets/hero.png";

interface WhatsProps {
  imageLink: string;
  width: number;
  height: number;
}

export const HeroContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 189.93px;
  padding-bottom: 219.93px;
  align-items: center;
  margin: 0 auto;
  padding-left: 18.75%;
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
    padding-left: 100px;
  }

  @media screen and (max-width: 480px) {
    height: 350px;
    padding-left: 40px;
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

  word-break: break-word;
  margin-bottom: 70px;
  @media screen and (max-width: 768px) {
    margin-bottom: 38px;
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
    font-size: ${({ theme }) => theme.font_size.XL}px;
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
    font-size: ${({ theme }) => theme.font_size.XL}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.X}px;
  }
`;

export const HeroButton = styled.a`
  background-color: ${({ theme }) => theme.colors.red};
  line-height: 120%;
  padding: 20px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font_size.MD}px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
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

export const WhatsappButton = styled.a<WhatsProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url(${(props) => props.imageLink});
  position: absolute;
  right: 9%;
  bottom: 9.5%;
  z-index: 10;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.8);

    :hover {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 480px) {
    transform: scale(0.6);
    right: 2%;
    bottom: 2%;
    :hover {
      transform: scale(0.7);
    }
  }
`;
