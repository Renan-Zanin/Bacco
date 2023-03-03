import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideContent,
  NavButton,
} from "./Sidebar";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            <SideContent>home</SideContent>
          </SidebarLink>
          <SidebarLink to="prizes" onClick={toggle}>
            <SideContent>prêmios</SideContent>
          </SidebarLink>
          <SidebarLink to="preparation" onClick={toggle}>
            <SideContent>preparo</SideContent>
          </SidebarLink>
          <SidebarLink to="institutional" onClick={toggle}>
            <SideContent>institucional</SideContent>
          </SidebarLink>
          <SidebarLink to="clients" onClick={toggle}>
            <SideContent>clientes</SideContent>
          </SidebarLink>
          <SidebarLink to="depositions" onClick={toggle}>
            <SideContent>depoimentos</SideContent>
          </SidebarLink>
          <div>
            <NavButton>Loja online</NavButton>
          </div>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
