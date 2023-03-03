import logo from "../../assets/logo.svg";
import {
  HeaderContainer,
  LogoImage,
  MobileIcon,
  NavbarContainer,
  NavButton,
  NavItem,
  NavLinks,
  NavMenu,
} from "./Header";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  toggle: () => void;
  isOpen: boolean;
}

export function Header({ toggle, isOpen }: NavbarProps) {
  return (
    <HeaderContainer>
      <NavbarContainer isOpen={false}>
        <LogoImage src={logo} alt="" />
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-191.98}
            >
              home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="prizes"
              smooth={true}
              duration={500}
              spy={true}
              offset={-191.98}
            >
              prêmios
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="preparation"
              smooth={true}
              duration={500}
              spy={true}
              offset={-191.98}
            >
              preparo
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="institutional"
              smooth={true}
              duration={500}
              spy={true}
              offset={-191.98}
            >
              institucional
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="clients"
              smooth={true}
              duration={500}
              spy={true}
              offset={-191.98}
            >
              clientes
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              to="depositions"
              smooth={true}
              duration={500}
              spy={true}
              offset={-191.98}
            >
              depoimentos
            </NavLinks>
          </NavItem>
          <NavButton>Loja online</NavButton>
        </NavMenu>
      </NavbarContainer>
    </HeaderContainer>
  );
}
