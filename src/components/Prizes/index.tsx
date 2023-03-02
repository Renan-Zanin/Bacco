import {
  AboutButton,
  PrizeDescription,
  PrizesContainer,
  PrizesImg,
  PrizesWrapper,
  PrizeTitle,
} from "./Prizes";
import cnvd from "../../assets/cnvd.png";
import wva from "../../assets/wva.png";
import hkiwsc from "../../assets/hkiwsc.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Prizes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <PrizesContainer>
      <div data-aos="fade-right">
        <PrizesWrapper>
          <PrizesImg src={wva} height={85} width={67.74} />
          <PrizesImg src={cnvd} height={111.19} width={110.73} padding={3.45} />
          <PrizesImg src={hkiwsc} height={92.76} width={92.76} />
        </PrizesWrapper>
        <PrizeTitle data-aos="fade-right">
          Lorem ipsum dolor sit amet
        </PrizeTitle>
        <PrizeDescription data-aos="fade-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </PrizeDescription>
        <AboutButton data-aos="fade-right">leia mais sobre</AboutButton>
      </div>
    </PrizesContainer>
  );
}
