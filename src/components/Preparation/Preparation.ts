import styled from "styled-components";

interface DescriptionProps {
  width: number;
}
interface DescriptionPropsRight {
  width: number;
  margin: number;
}

interface BgProps {
  image: string;
}

export const PreparationContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;

  padding: 160px 497.89px 207.68px 497.89px;
  width: "100%";
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
`;

export const DrinkStepLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  z-index: 0;
`;
export const DrinkRightBg = styled.div<BgProps>`
  display: flex;
  margin-left: -20px;
  width: 449.46px;
  height: 379.46px;
  background: url(${(props) => props.image});
  mix-blend-mode: hard-light;
  filter: brightness(2.8);
  opacity: 0.2;
  align-items: center;
  justify-content: center;
  background-size: cover;
  z-index: 1;
`;

export const Step = styled.img`
  margin-left: -19px;
  z-index: 20;
  margin-right: 30px;
`;

export const StepRight = styled.img`
  z-index: 20;
`;

export const StepImg = styled.img`
  z-index: 20;
  position: absolute;
  margin-left: -300px;
`;

export const StepImgRight = styled.img`
  z-index: 20;
  position: absolute;
  margin-left: 500.06px;
`;

export const StepDescriptionRight = styled.p<DescriptionPropsRight>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  line-height: 120%;
  font-weight: 400;
  width: ${(props) => props.width}px;
  margin-left: ${(props) => props.margin}px;
  margin-right: 30px;
  text-align: end;
`;

export const StepDescription = styled.p<DescriptionProps>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  line-height: 120%;
  font-weight: 400;
  width: ${(props) => props.width}px;
`;

export const StepSpan = styled.span`
  font-weight: 800;
`;
