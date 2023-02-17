import { useState } from "react";
import { ClientsSection } from "./components/ClientsSection";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { InstitutionalSection } from "./components/InstitutionalSection";
import { Preparation } from "./components/Preparation";
import { Prizes } from "./components/Prizes";
import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DepositionsSection } from "./components/DepositionsSection";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HeroSection />
      <Prizes />
      <FeaturedProducts />
      <Preparation />
      <InstitutionalSection />
      <ClientsSection />
      <DepositionsSection />
      <Footer />
    </div>
  );
}

export default App;
