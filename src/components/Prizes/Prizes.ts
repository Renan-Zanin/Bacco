import styled from "styled-components";
import prizes_bg from "../../assets/prizes_bg.png";

interface PrizesProps {
  height: number;
  width: number;
  padding?: number;
}

export const PrizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 213.05px;
  padding-bottom: 319.61px;
  padding-left: 357.17px;
  align-items: center;
  margin: 0 auto;
  height: 1200px;
  background-position: center;
  position: relative;

  z-index: 2;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #000000 -9.2%, rgba(0, 0, 0, 0) 109.61%);
    z-index: 1;
    background-position: center;
  }

  @media screen and (max-width: 768px) {
    padding-left: 144px;
    height: 800.33px;
    padding-top: 100px;
  }

  @media screen and (max-width: 480px) {
    padding-left: 90px;
    height: 500.66px;
    padding-top: 50px;
  }
`;

export const PrizesBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${prizes_bg});
  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;
`;

export const PrizesContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const PrizesWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const PrizesImg = styled.img<PrizesProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding-right: ${(props) => props.padding}px;
  padding-left: ${(props) => props.padding}px;

  @media screen and (max-width: 768px) {
    width: ${(props) => props.width * 0.8}px;
    height: ${(props) => props.height * 0.8}px;
    padding-right: ${(props) => props.padding! * 0.8}px;
    padding-left: ${(props) => props.padding! * 0.8}px;
  }

  @media screen and (max-width: 480px) {
    width: ${(props) => props.width * 0.5}px;
    height: ${(props) => props.height * 0.5}px;
    padding-right: ${(props) => props.padding! * 0.5}px;
    padding-left: ${(props) => props.padding! * 0.5}px;
  }
`;

export const PrizeTitle = styled.h1`
  width: 568.79px;
  word-break: break-word;
  text-align: start;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.XXXL}px;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 498.15px;
    font-size: ${({ theme }) => theme.font_size.XL_R}px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    font-size: ${({ theme }) => theme.font_size.X}px;
    margin-bottom: 10px;
  }
`;

export const PrizeDescription = styled.p`
  width: 689.3px;
  word-break: break-word;
  text-align: start;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.LG}px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    width: 540px;
    font-size: ${({ theme }) => theme.font_size.MD}px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 310px;
    font-size: ${({ theme }) => theme.font_size.SM}px;
    margin-bottom: 30px;
  }
`;

export const AboutButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  padding: 20px;
  font-family: ${({ theme }) => theme.font_family.Novecento};
  font-size: ${({ theme }) => theme.font_size.MD}px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    filter: brightness(1.2);
    transform: (1.05);
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM_R}px;
    padding: 10px;
  }
`;
