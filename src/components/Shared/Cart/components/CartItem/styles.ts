import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .product-name {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    width: 100%;
    line-height: 1;
  }

  @media only screen and (max-width: 420px) {
    .product-name {
      font-size: ${({ theme }) => theme.fontSizes.small_18};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  .remove {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .quantity {
    max-width: 100px;
    height: 42px;
  }

  @media only screen and (max-width: 420px) {
    .quantity {
      max-width: 80px;
      height: 32px;
    }
  }
`;

export const ImageProduct = styled.a`
  background-color: ${({ theme }) => theme.colors.quarternary};
  width: 100%;
  height: 100px;
  max-width: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  @media only screen and (max-width: 420px) {
    height: 70px;
    max-width: 70px;
  }
`;

export const Price = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
  white-space: nowrap;

  @media only screen and (max-width: 420px) {
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }
`;
