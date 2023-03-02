import {
  DrinkLeftBg,
  DrinkRightBg,
  DrinkStepLeft,
  PreparationContainer,
  SectionTitle,
  Step,
  StepDescription,
  StepDescriptionRight,
  StepImg,
  StepImgRight,
  StepRight,
  StepSpan,
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
    <PreparationContainer>
      <SectionTitle>
        como preparar os
        <br /> concentrados da bacco spirit
      </SectionTitle>
      <DrinkStepLeft>
        <DrinkLeftBg image={step1_bg} />
        <StepImg src={drink1} data-aos="fade-right" />
        <Step src={step1} />
        <StepDescription width={219.85} data-aos="fade-left">
          Primeiro, coloque <StepSpan>gelo</StepSpan> no copo/caneca
        </StepDescription>
      </DrinkStepLeft>

      <DrinkStepLeft>
        <StepDescriptionRight width={234.65} margin={180} data-aos="fade-right">
          Adicione <StepSpan>50 ml do concentrado</StepSpan> de sua preferência
        </StepDescriptionRight>
        <StepRight src={step2} />
        <DrinkRightBg image={step2_bg} />
        <StepImgRight src={drink2} data-aos="fade-left" />
      </DrinkStepLeft>

      <DrinkStepLeft>
        <DrinkLeftBg image={step3_bg} />
        <StepImg src={drink3} data-aos="fade-right" />
        <Step src={step3} />
        <StepDescription width={309.97} data-aos="fade-left">
          Complete com a quantidade de{" "}
          <StepSpan>água descrita na embalagem</StepSpan> e misture
        </StepDescription>
      </DrinkStepLeft>

      <DrinkStepLeft>
        <StepDescriptionRight width={234.65} margin={180} data-aos="fade-right">
          Adicione <StepSpan>50 ml do concentrado</StepSpan> de sua preferência
        </StepDescriptionRight>
        <StepRight src={step4} />
        <DrinkRightBg image={step4_bg} />
        <StepImgRight src={drink4} data-aos="fade-left" />
      </DrinkStepLeft>
    </PreparationContainer>
  );
}
