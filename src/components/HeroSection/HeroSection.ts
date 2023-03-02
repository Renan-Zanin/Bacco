import styled from "styled-components";
import hero from "../../assets/hero.png";

export const HeroContainer = styled.section`
  display: flex;
  padding: 189.93px 360px 219.93px;
  width: "100%";
  align-items: center;
  background: linear-gradient(90deg, #000000 -2.41%, rgba(0, 0, 0, 0) 109.61%),
    url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroTextContainer = styled.div`
  flex-direction: column;
  width: 790.65px;
  height: 344.14px;
  word-break: break-word;
  margin-bottom: 70px;
`;

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.font_size.XXXL}px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 130%;
  font-weight: 400;
`;

export const HeroSpan = styled.span`
  font-size: ${({ theme }) => theme.font_size.XXXL}px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 130%;
  font-weight: 800;
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
  :hover {
    filter: brightness(1.2);
    transition: filter 0.2s ease-in-out;
  }
`;
