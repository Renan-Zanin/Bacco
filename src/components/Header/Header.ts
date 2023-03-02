import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray100};
  justify-content: space-between;

  padding: 40px 189.5px;
  width: "100%";
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 183px;
  height: 111.99px;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavItem = styled.nav`
  font-size: ${({ theme }) => theme.font_size.SM}px;
  font-family: ${({ theme }) => theme.font_family.Novecento};
  font-weight: 600;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  padding: 0 20px;
  cursor: pointer;
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

  :hover {
    filter: brightness(1.2);
    transition: filter 0.2s ease-in-out;
  }
`;
