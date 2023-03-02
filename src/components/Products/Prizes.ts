import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 160px 200.77px 180.42px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.font_size.XL};
  color: ${({ theme }) => theme.colors.red};
  line-height: 130%;
  margin-bottom: 100px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 43.72px;
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
`;

export const ProductName = styled.p`
  font-size: ${({ theme }) => theme.font_size.MD}px;
  line-height: 130%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20.43px;
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
    transition: color 0.2s ease-in-out;
  }
`;
