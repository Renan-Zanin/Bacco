import {
  BuyProductLink,
  ProductImage,
  ProductItems,
  ProductName,
  ProductsContainer,
  ProductsWrapper,
  SectionTitle,
} from "./Products";
import moscow_mule from "../../assets/moscow_mule.png";
import fire from "../../assets/fire.png";
import apple_pie from "../../assets/apple_pie.png";
import cosmopolitan from "../../assets/cosmopolitan.png";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export function Products() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <ProductsContainer>
      <SectionTitle data-aos="fade-down">produtos em destaque</SectionTitle>
      <ProductsWrapper data-aos="fade-down">
        <ProductItems>
          <ProductImage src={moscow_mule} />
          <ProductName data-aos="fade-down">Moscow Mule</ProductName>
          <BuyProductLink href="#" data-aos="fade-down">
            comprar
          </BuyProductLink>
        </ProductItems>
        <ProductItems>
          <ProductImage src={fire} />
          <ProductName data-aos="fade-down">Fire</ProductName>
          <BuyProductLink href="#" data-aos="fade-down">
            comprar
          </BuyProductLink>
        </ProductItems>
        <ProductItems>
          <ProductImage src={apple_pie} />
          <ProductName data-aos="fade-down">Apple Pie</ProductName>
          <BuyProductLink href="#" data-aos="fade-down">
            comprar
          </BuyProductLink>
        </ProductItems>
        <ProductItems>
          <ProductImage src={cosmopolitan} />
          <ProductName data-aos="fade-down">Cosmopolitan</ProductName>
          <BuyProductLink href="#" data-aos="fade-down">
            comprar
          </BuyProductLink>
        </ProductItems>
      </ProductsWrapper>
    </ProductsContainer>
  );
}
