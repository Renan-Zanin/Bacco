import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarProps>`
  position: fixed;
  z-index: 1000;
  width: 60%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};

  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  box-shadow: -5px 0 20px 10px rgba(0, 0, 0, 0.5);
  transition: 0.8s all ease;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({ theme }) => theme.colors.red};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 60px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(7, 40px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    transition: 0.2s ease-in-out;
  }
`;

export const NavButton = styled.button`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
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

export const SideContent = styled.p`
  transition: all 0.5s ease-in;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    transition: all 0.5s ease-in;
  }
`;
