import styled from "styled-components";
import prizes_bg from "../../assets/prizes_bg.png";

interface PrizesProps {
  height: number;
  width: number;
  padding?: number;
}

export const PrizesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, #000000 -9.2%, rgba(0, 0, 0, 0) 109.61%),
    url(${prizes_bg});
  padding-left: 375.17px;
  padding-top: 213.05px;
  padding-bottom: 319.61px;
  width: "100%";
  justify-content: start;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PrizesWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 80px;
`;

export const PrizesImg = styled.img<PrizesProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding-right: ${(props) => props.padding}px;
  padding-left: ${(props) => props.padding}px;
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
  :hover {
    filter: brightness(1.2);
    transition: filter 0.2s ease-in-out;
  }
`;
