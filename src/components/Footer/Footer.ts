import styled from "styled-components";

interface LinkProps {
  imagemLink: string;
  width: number;
  height: number;
}

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${({ theme }) => theme.colors.white};

  padding: 81.17px 210.32px 80.44px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 61.17px 18.25% 60.44px;

    grid-column-gap: 50px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 41.17px 10.25% 40.44px;
  }
`;

export const FooterData = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 324.54px;
  width: 100%;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const FooterLogo = styled.img`
  width: 106.38px;
  height: 65.1px;
  margin-bottom: 124.85px;
  @media (max-width: 768px) {
    margin-bottom: 67px;
  }

  @media (max-width: 480px) {
    margin-bottom: 47px;
  }
`;

export const FooterInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 21.39px;

  @media (max-width: 768px) {
    margin-bottom: 10 px;
  }
`;

export const FooterInfos = styled.p`
  font-size: ${({ theme }) => theme.font_size.XSM_R}px;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 130%;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 159.69px;
  padding-left: 7.41px;
  height: 324.35px;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
  @media (max-width: 480px) {
    margin-right: 0px;

    grid-column: 1;
    align-items: start;
  }
`;

export const NavItem = styled.nav`
  font-size: ${({ theme }) => theme.font_size.XSM_R}px;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 130%;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 22.22px;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 324.35px;
  justify-content: end;
  margin-right: 214.3px;

  @media (max-width: 768px) {
    margin-right: 0px;
    margin-top: 100px;

    grid-row: 2;
    grid-column: 2;
    justify-content: start;
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;

    margin-top: 20px;
    grid-row: 3;
    grid-column: 1;
    justify-content: start;
  }
`;

export const PaymentText = styled.p`
  font-size: ${({ theme }) => theme.font_size.XSM_R}px;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 130%;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 22.22px;

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM}px;
  }
`;

export const PaymentItems = styled.img`
  width: 285.72px;
  height: 71.39px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 768px) {
    margin-right: 0px;

    grid-row: 2;
    grid-column: 1;
    align-items: start;
  }
  @media (max-width: 480px) {
    grid-row: 4;
    grid-column: 1;
    justify-content: start;
    margin-top: -150px;
  }
`;

export const ContactTitle = styled.p`
  font-size: ${({ theme }) => theme.font_size.XSM_R}px;
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
  font-size: ${({ theme }) => theme.font_size.XSM_R}px;
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

  @media (max-width: 768px) {
    margin-right: 0px;
    margin-top: -100px;
    grid-row: 4;
    grid-column: 4;
    align-items: start;
  }

  @media (max-width: 480px) {
    grid-row: 5;
    grid-column: 1;
    margin-top: -125px;
  }
`;

export const ContactLinks = styled.a<LinkProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url(${(props) => props.imagemLink});
`;
