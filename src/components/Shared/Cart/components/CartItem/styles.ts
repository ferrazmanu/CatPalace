import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 420px) {
    gap: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  .product-name {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
    display: flex;
    width: 100%;
    line-height: 1;
  }

  .top-info {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  .variants {
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }

  @media only screen and (max-width: 420px) {
    gap: 5px;

    .product-name {
      font-size: ${({ theme }) => theme.fontSizes.small_18};
    }

    .top-info {
      gap: 5px;
    }
  }
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
    gap: 10px;

    .quantity {
      max-width: 80px;
      height: 32px;
    }
  }
`;

export const ImageProduct = styled.a`
  background-color: ${({ theme }) => theme.colors.quarternary};
  width: 100%;
  height: 130px;
  max-width: 120px;
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
    height: 90px;
    max-width: 90px;
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
