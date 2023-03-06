import styled from "styled-components";

interface DescriptionProps {
  width: number;
}
interface BgProps {
  image: string;
}

interface ImgProps {
  width: number;
}

export const PreparationContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: center;
  padding-top: 160px;
  padding-bottom: 160px;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding-top: 90px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 60px;
    padding-left: 40px;
    padding-right: 10px;
  }
`;

export const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.XL}px;
  width: 90%;
  word-break: break-word;
  text-transform: uppercase;
  padding-bottom: 64.41px;
  text-align: center;
  line-height: 130%;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.X}px;
    padding-bottom: 44.41px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
    padding-bottom: 4.41px;
  }
`;

export const DrinkStepLeft = styled.div`
  position: relative;
  @media screen and (max-width: 480px) {
    margin-left: 55px;
  }
`;
export const DrinkStepRight = styled.div`
  position: relative;
  @media screen and (max-width: 480px) {
    margin-bottom: 50px;
    margin-left: 55px;
  }
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

  @media screen and (max-width: 768px) {
    height: 300.54px;
    width: auto;
  }

  @media screen and (max-width: 480px) {
    height: 200.54px;
    width: auto;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90px;
  left: -298.03px;

  @media screen and (max-width: 768px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 80px;
  }
`;

export const StepWrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90px;
  left: -338.03px;

  @media screen and (max-width: 768px) {
    margin-left: 25px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 155px;
    margin-bottom: 200px;
  }
`;

export const StepWrapperRight4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90px;
  left: -405.57px;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 480px) {
    left: -250px;
    margin-left: 45px;
  }
`;

export const Step = styled.img<ImgProps>`
  z-index: 20;
  margin-right: 30px;
  margin-left: 78.03px;
  width: ${(props) => props.width}px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: ${(props) => props.width * 0.8}px;
    margin-right: 30px;
    margin-left: 60.03px;
  }

  @media screen and (max-width: 480px) {
    width: ${(props) => props.width * 0.4}px;
    margin-right: 20px;
    margin-left: 25.03px;
  }
`;

export const StepDescription = styled.p<DescriptionProps>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  line-height: 120%;
  font-weight: 400;
  text-align: start;
  flex-grow: 1;
  word-break: normal;
  width: ${(props) => props.width}px;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.XSM_R}px;
    width: ${(props) => props.width * 0.7}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
    width: ${(props) => props.width * 0.3}px;
  }
`;

export const StepSpan = styled.span`
  font-weight: 800;
`;

export const DrinkRightBg = styled.img`
  display: flex;
  width: 449.46px;
  height: 379.46px;
  mix-blend-mode: hard-light;
  filter: brightness(2.8);
  opacity: 0.2;
  align-items: center;
  justify-content: center;
  background-size: cover;
  margin-right: -400px;

  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 250.54px;
    width: auto;
  }

  @media screen and (max-width: 480px) {
    height: 150.54px;
    width: auto;
  }
`;

export const StepRight = styled.img<ImgProps>`
  z-index: 20;
  margin-left: 30px;
  margin-right: 78.03px;

  width: ${(props) => props.width}px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: ${(props) => props.width * 0.8}px;
    margin-right: 40px;
    margin-left: 15.03px;
  }

  @media screen and (max-width: 480px) {
    width: ${(props) => props.width * 0.4}px;
    margin-right: 30px;
    margin-left: 10.03px;
  }
`;

export const StepImg = styled.img<ImgProps>`
  z-index: 20;

  width: ${(props) => props.width}px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: ${(props) => props.width * 0.8}px;
  }

  @media screen and (max-width: 480px) {
    width: ${(props) => props.width * 0.4}px;
    margin-left: 60px;
  }
`;

export const StepImgRight = styled.img<ImgProps>`
  z-index: 20;

  width: ${(props) => props.width}px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: ${(props) => props.width * 0.8}px;
  }

  @media screen and (max-width: 480px) {
    width: ${(props) => props.width * 0.4}px;
  }
`;

export const StepDescriptionRight = styled.p<DescriptionProps>`
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
    width: ${(props) => props.width * 0.4}px;
  }
`;
