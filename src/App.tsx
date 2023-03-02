import { useState } from "react";
import { ClientsSection } from "./components/ClientsSection";
import { Prizes } from "./components/Prizes";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { InstitutionalSection } from "./components/InstitutionalSection";
import { Preparation } from "./components/Preparation";
import { Products } from "./components/Products";
import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DepositionsSection } from "./components/DepositionsSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
      <Products />
      <Prizes />
      <Preparation />
      <InstitutionalSection />
      <ClientsSection />
      <DepositionsSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
