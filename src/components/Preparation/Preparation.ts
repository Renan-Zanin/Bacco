import styled from "styled-components";

interface DescriptionProps {
  width: number;
}
interface DescriptionPropsRight {
  width: number;
}
interface BgProps {
  image: string;
}

export const PreparationContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: center;

  padding-top: 160px;
  padding-bottom: 160px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 90px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 60px;
  }
`;

export const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.XL}px;
  width: 940.57px;
  word-break: break-word;
  text-transform: uppercase;
  padding-bottom: 64.41px;
  text-align: center;
  line-height: 130%;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.X}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
  }
`;

export const DrinkStepLeft = styled.div`
  position: relative;
`;
export const DrinkStepRight = styled.div`
  position: relative;
`;

export const DrinkLeftBg = styled.div<BgProps>`
  display: flex;
  width: 435.72px;
  height: 405.54px;
  background: url(${(props) => props.image});
  mix-blend-mode: hard-light;
  filter: brightness(2.8);
  opacity: 0.2;
  align-items: center;
  justify-content: center;
  background-size: cover;
  margin-left: -400px;
  z-index: 0;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90px;
  left: -298.03px;
`;

export const StepWrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90px;
  left: -338.03px;
`;

export const Step = styled.img`
  z-index: 20;
  margin-right: 30px;
  margin-left: 78.03px;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }

  @media screen and (max-width: 480px) {
    max-width: 60%;
  }
`;

export const StepDescription = styled.p<DescriptionProps>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  line-height: 120%;
  font-weight: 400;
  text-align: start;
  flex-grow: 1;
  width: ${(props) => props.width}px;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.XSM_R}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
  }
`;

export const StepSpan = styled.span`
  font-weight: 800;
`;

export const DrinkRightBg = styled.div<BgProps>`
  display: flex;
  width: 449.46px;
  height: 379.46px;
  background: url(${(props) => props.image});
  mix-blend-mode: hard-light;
  filter: brightness(2.8);
  opacity: 0.2;
  align-items: center;
  justify-content: center;
  background-size: cover;
  margin-right: -500px;

  z-index: 1;
`;

export const StepRight = styled.img`
  z-index: 20;
  margin-left: 30px;
  margin-right: 78.03px;
`;

export const StepImg = styled.img`
  z-index: 20;
`;

export const StepImgRight = styled.img`
  z-index: 20;
`;

export const StepDescriptionRight = styled.p<DescriptionPropsRight>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  line-height: 120%;
  font-weight: 400;
  width: ${(props) => props.width}px;
  margin-right: 30px;
  text-align: end;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.XSM_R}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
  }
`;
