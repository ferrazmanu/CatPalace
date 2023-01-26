import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing._30};
  max-width: 420px;

  .button {
    max-width: 100% !important;
  }
`;

export const ImageProduct = styled.a`
  background-color: ${({ theme }) => theme.colors.quarternary};
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  min-height: 230px;
  position: relative;

  img {
    object-fit: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .product-name {
    font-size: ${({ theme }) => theme.fontSizes.medium_32};
    font-family: ${({ theme }) => theme.fonts.primary_medium};
    text-align: center;
    display: flex;
    line-height: 1;
  }
`;

export const Price = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.medium_30};
`;
