import {
  DrinkLeftBg,
  DrinkRightBg,
  DrinkStepLeft,
  DrinkStepRight,
  PreparationContainer,
  SectionTitle,
  Step,
  StepDescription,
  StepDescriptionRight,
  StepDescriptionRight4,
  StepImg,
  StepImgRight,
  StepRight,
  StepSpan,
  StepWrapper,
  StepWrapperRight,
  StepWrapperRight4,
} from "./Preparation";
import step1 from "../../assets/step1.png";
import drink1 from "../../assets/drink1.png";
import step1_bg from "../../assets/step1_bg.png";
import step2 from "../../assets/step2.png";
import drink2 from "../../assets/drink2.png";
import step2_bg from "../../assets/step2_bg.png";
import step3 from "../../assets/step3.png";
import drink3 from "../../assets/drink3.png";
import step3_bg from "../../assets/step3_bg.png";
import step4 from "../../assets/step4.png";
import drink4 from "../../assets/drink4.png";
import step4_bg from "../../assets/step4_bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Preparation() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <PreparationContainer id="preparation">
      <SectionTitle data-aos="fade-down">
        como preparar os
        <br /> concentrados da bacco spirit
      </SectionTitle>

      <DrinkStepLeft>
        <DrinkLeftBg image={step1_bg} />
        <StepWrapper>
          <StepImg src={drink1} data-aos="fade-up" width={189.38} />
          <Step src={step1} data-aos="fade-left" width={72.35} />
          <StepDescription width={219.85} data-aos="fade-down">
            Primeiro, coloque<StepSpan> gelo </StepSpan> no copo/ caneca
          </StepDescription>
        </StepWrapper>
      </DrinkStepLeft>

      <DrinkStepRight>
        <StepWrapperRight>
          <StepDescriptionRight width={234.65} data-aos="fade-up">
            Adicione <StepSpan>50ml do concentrado</StepSpan> de sua preferĂȘncia
          </StepDescriptionRight>
          <StepRight src={step2} data-aos="fade-right" width={72.35} />
          <StepImgRight src={drink2} data-aos="fade-down" width={190.84} />
        </StepWrapperRight>
        <DrinkRightBg src={step2_bg} />
      </DrinkStepRight>

      <DrinkStepLeft>
        <DrinkLeftBg image={step3_bg} />
        <StepWrapper>
          <StepImg src={drink3} data-aos="fade-up" width={190.84} />
          <Step src={step3} data-aos="fade-left" width={72.35} />
          <StepDescription width={290.97} data-aos="fade-down">
            Complete com a quantida de
            <StepSpan> ĂĄgua descrita na embalagem</StepSpan> e misture
          </StepDescription>
        </StepWrapper>
      </DrinkStepLeft>

      <DrinkStepRight>
        <StepWrapperRight4>
          <StepDescriptionRight4 width={302.11} data-aos="fade-up">
            Pronto! Para Moscow Mule finalize com a
            <StepSpan> espuma de gengibre</StepSpan> da Bacco Spirit
          </StepDescriptionRight4>
          <StepRight src={step4} data-aos="fade-right" width={72.35} />
          <StepImgRight src={drink4} data-aos="fade-down" width={177.94} />
        </StepWrapperRight4>
        <DrinkRightBg src={step4_bg} />
      </DrinkStepRight>
    </PreparationContainer>
  );
}
