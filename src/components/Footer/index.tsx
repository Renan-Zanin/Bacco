import {
  ContactContainer,
  ContactItems,
  ContactLinks,
  ContactText,
  ContactTitle,
  ContactWrapper,
  FooterContainer,
  FooterData,
  FooterInfos,
  FooterInfosContainer,
  FooterLogo,
  LinksContainer,
  NavContainer,
  NavItem,
  PaymentContainer,
  PaymentItems,
  PaymentText,
  Wrapper,
} from "./Footer";
import logo from "../../assets/logo.svg";
import payment from "../../assets/payment.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

export function Footer() {
  return (
    <FooterContainer>
      <FooterData>
        <FooterLogo src={logo} />
        <FooterInfosContainer>
          <FooterInfos>bacco spirit ltda.</FooterInfos>

          <FooterInfos>cnpj 00.000.000/0001-00</FooterInfos>
        </FooterInfosContainer>
        <FooterInfos>© bacco spirit 2023.</FooterInfos>

        <FooterInfos>todos os direitos reservados.</FooterInfos>
      </FooterData>
      <NavContainer>
        <NavItem>home</NavItem>
        <NavItem>prêmios</NavItem>
        <NavItem>preparo</NavItem>
        <NavItem>institucional</NavItem>
        <NavItem>clientes</NavItem>
        <NavItem>depoimentos</NavItem>
        <NavItem>história</NavItem>
      </NavContainer>

      <PaymentContainer>
        <PaymentText>formas de pagamento</PaymentText>
        <PaymentItems src={payment} />
      </PaymentContainer>

      <ContactContainer>
        <ContactTitle>Contato</ContactTitle>
        <Wrapper>
          <ContactWrapper>
            <ContactItems src={phone} />
            <ContactText>(00) 0000-0000</ContactText>
          </ContactWrapper>
          <ContactWrapper>
            <ContactItems src={mail} />
            <ContactText>contato@bacco.com</ContactText>
          </ContactWrapper>
        </Wrapper>
        <LinksContainer>
          <ContactLinks
            href="https://www.facebook.com/baccospiritbr/"
            target="_blank"
            imagemLink={facebook}
            height={31.99}
            width={16.52}
          />
          <ContactLinks
            href="https://www.instagram.com/baccospirit/"
            target="_blank"
            imagemLink={instagram}
            height={31.99}
            width={31.47}
          />
          <ContactLinks
            href="https://www.youtube.com/channel/UC0bt9hZCaz5ED2WNYFhcbiQ"
            target="_blank"
            imagemLink={youtube}
            height={28.61}
            width={40.06}
          />
        </LinksContainer>
      </ContactContainer>
    </FooterContainer>
  );
}
