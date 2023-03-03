import styled from "styled-components";

interface LinkProps {
  imagemLink: string;
  width: number;
  height: number;
}

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};

  padding-top: 81.17px;
  padding-bottom: 80.44px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterData = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 124.54px;
`;

export const FooterLogo = styled.img`
  width: 106.38px;
  height: 65.1px;
  margin-bottom: 124.85px;
`;

export const FooterInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 21.39px;
`;

export const FooterInfos = styled.p`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 130%;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 159.69px;
  padding-left: 7.41px;
  height: 324.35px;
`;

export const NavItem = styled.nav`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 130%;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 22.22px;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 324.35px;
  justify-content: end;
  margin-right: 214.3px;
`;

export const PaymentText = styled.p`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 130%;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 22.22px;
`;

export const PaymentItems = styled.img`
  width: 285.72px;
  height: 71.39px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const ContactTitle = styled.p`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 120%;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 22.22px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 21.76px;
`;

export const Wrapper = styled.div`
  align-items: flex-start;
  margin-bottom: 155.95px;
`;

export const ContactText = styled.p`
  font-size: ${({ theme }) => theme.font_size.XSM}px;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 120%;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ContactItems = styled.img`
  width: 24.01px;
  height: 24.41px;
  margin-right: 33.66px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 182.46px;
  height: 31.99px;
`;

export const ContactLinks = styled.a<LinkProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url(${(props) => props.imagemLink});
`;
