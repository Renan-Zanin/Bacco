import logo from "../../assets/logo.svg";
import {
  HeaderContainer,
  LogoImage,
  NavButton,
  NavItem,
  NavMenu,
} from "./Header";

export function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={logo} alt="" />
      <NavMenu>
        <NavItem>Home</NavItem>
        <NavItem>prêmios</NavItem>
        <NavItem>preparo</NavItem>
        <NavItem>insticucional</NavItem>
        <NavItem>clientes</NavItem>
        <NavItem>depoimentos</NavItem>
        <NavButton>Loja online</NavButton>
      </NavMenu>
    </HeaderContainer>
  );
}
