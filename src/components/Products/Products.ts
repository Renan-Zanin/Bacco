import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 160px;
  padding-bottom: 180.42px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 60px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.font_size.XL}px;
  color: ${({ theme }) => theme.colors.red};
  line-height: 130%;
  margin-bottom: 100px;
  font-weight: 800;
  text-transform: uppercase;
  width: 90%;
  word-break: normal;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.X}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.MD}px;
  }
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 43.72px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 21.72px;
    grid-row-gap: 43.72px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 23.72px;
  }
`;

export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: 349.75px;
  height: 500.3px;
  margin-bottom: 35.14px;

  @media screen and (max-width: 768px) {
    width: 244.83px;
    height: 350.21px;
    margin-bottom: 24.6px;
  }
`;

export const ProductName = styled.p`
  font-size: ${({ theme }) => theme.font_size.MD}px;
  line-height: 130%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20.43px;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
    margin-bottom: 14.3px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM_R}px;
  }
`;

export const BuyProductLink = styled.a`
  font-size: ${({ theme }) => theme.font_size.MD}px;
  font-family: ${({ theme }) => theme.font_family.Novecento};
  line-height: 130%;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray200};
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.colors.gray300};
    transition: color 0.1s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.SM}px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.font_size.XSM_R}px;
  }
`;
