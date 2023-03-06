import {
  HeroBg,
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroSpan,
  HeroText,
  HeroTextContainer,
} from "./HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <HeroContainer id="home">
      <HeroBg />
      <HeroContent data-aos="fade-right">
        <HeroTextContainer data-aos="fade-right">
          <HeroText>
            Os <HeroSpan>melhores</HeroSpan> kits e bebidas para você{" "}
            <HeroSpan>impressionar!</HeroSpan>
          </HeroText>
        </HeroTextContainer>
        <HeroButton
          data-aos="fade-right"
          href="https://rvbbf8uvjsyz6sl3-72485830968.shopifypreview.com/collections/frontpage"
          target="_blank"
        >
          Comprar agora
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
}
