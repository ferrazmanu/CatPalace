import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing._30};
  max-width: 420px;
  max-height: 500px;

  .button {
    max-width: 100% !important;
  }

  &:hover {
    .product-name {
      text-decoration: underline;
    }

    img {
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    height: 100%;
    padding: 10px;
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
  overflow: hidden;

  img {
    object-fit: cover;
  }

  @media only screen and (max-width: 1024px) {
    min-height: 200px;
  }

  @media only screen and (max-width: 768px) {
    min-height: 160px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .product-name {
    font-size: ${({ theme }) => theme.fontSizes.medium_32};
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    text-align: center;
    display: flex;
    line-height: 1;

    @media only screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSizes.medium_30};
    }

    @media only screen and (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.medium_24};
    }
  }
`;

export const Price = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.medium_30};

  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
  }
`;
