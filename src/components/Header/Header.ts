import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

interface NavbarContainerProps {
  isOpen: boolean;
}

export const HeaderContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 100;

  padding: 40px;
  align-items: center;
  position: sticky;

  @media screen and (max-width: 1519px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div<NavbarContainerProps>`
  display: flex;
  justify-content: space-between;
  z-index: 101;
  width: 100%;
  padding: 0 135px;
  max-width: 1920px;
  opacity: ${({ isOpen }) => (isOpen ? "50%" : "100%")};

  @media screen and (max-width: 768px) {
    max-width: 700px;
    padding: 0 70px;
  }

  @media screen and (max-width: 480px) {
    max-width: 400px;
    padding: 0 40px;
  }
`;

export const LogoImage = styled.img`
  max-width: 50%;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1519px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 39px;
`;

export const NavLinks = styled(LinkS)`
  font-size: ${({ theme }) => theme.font_size.SM}px;
  font-family: ${({ theme }) => theme.font_family.Novecento};

  font-weight: 600;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  padding: 0 20px;
  height: 100%;
  align-items: center;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &.active {
    color: ${({ theme }) => theme.colors.red};
  }
  :hover {
    color: ${({ theme }) => theme.colors.red};
  }

  @media screen and (max-width: 1600px) {
    font-size: 1.25rem;
  }
`;

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 20px;
  text-transform: uppercase;
  border: none;
  font-family: ${({ theme }) => theme.font_family.Novecento};
  font-size: ${({ theme }) => theme.font_size.SM}px;
  font-weight: 600;
  border: none;
  line-height: 130%;
  padding: 15px 20px 10px 20px;
  cursor: pointer;
  border: none;

  transition: all 0.2s ease-in-out;
  :hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;

export const MobileIcon = styled.button`
  display: none;
  border: none;

  @media screen and (max-width: 1519px) {
    display: block;
    position: absolute;
    top: 25%;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: ${({ theme }) => theme.font_size.MD}px;

    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
  }
`;
