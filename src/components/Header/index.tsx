import logo from "../../assets/logo.svg";
import {
  HeaderContainer,
  LogoImage,
  MenuIcon,
  MobileIcon,
  NavbarContainer,
  NavButton,
  NavItem,
  NavLinks,
  NavMenu,
} from "./Header";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

interface NavbarProps {
  toggle: () => void;
  isOpen: boolean;
}

export function Header({ toggle, isOpen }: NavbarProps) {
  const [showMenu, setShowMenu] = useState(false);

  function handleScroll() {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <HeaderContainer showMenu={showMenu}>
      <NavbarContainer isOpen={isOpen}>
        <LogoImage src={logo} alt="" showMenu={showMenu} />
        <MobileIcon onClick={toggle} showMenu={showMenu}>
          <MenuIcon />
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
          <NavButton
            href="https://rvbbf8uvjsyz6sl3-72485830968.shopifypreview.com"
            target="_blank"
          >
            Loja online
          </NavButton>
        </NavMenu>
      </NavbarContainer>
    </HeaderContainer>
  );
}
