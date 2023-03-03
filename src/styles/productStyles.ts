import styled from "styled-components";

export const Product = styled.div`
  .product-name {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.big_48};
      font-family: ${({ theme }) => theme.fonts.primary_medium};
      font-weight: 500;
    }
  }

  .price {
    .previous-price {
      font-size: ${({ theme }) => theme.fontSizes.medium_24};
      color: rgba(0, 0, 0, 0.5);
      text-decoration: line-through;
    }

    .current-price {
      font-size: ${({ theme }) => theme.fontSizes.medium_36};
      font-family: ${({ theme }) => theme.fonts.primary_medium};
    }
  }

  .to-details {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
    text-decoration: underline;
  }
`;

export const ProductSummary = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing._30};

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const SwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: fit-content;
  gap: 10px;

  .swiper {
    .swiper-slide {
      height: 500px;
      position: relative;
      background-color: #fff;
      border-radius: 10px;
      overflow: hidden;

      img {
        object-fit: cover;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .swiper-thumbs {
    height: 96px;
    padding-left: 7px;

    .swiper-wrapper,
    .swiper-slide {
      height: inherit;
    }

    .swiper-wrapper {
      justify-content: center;
    }

    .swiper-slide-thumb-active {
      border: 3px solid ${({ theme }) => theme.colors.secondary};
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const ProductDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing._30};

  .quantity {
    border-radius: 27px;
    border: solid 2px ${({ theme }) => theme.colors.primary};
    max-width: 151px;
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    font-size: ${({ theme }) => theme.fontSizes.medium_24};

    .plus,
    .minus {
      background-color: rgba(0, 0, 0, 0.2);
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .qty {
      font-size: ${({ theme }) => theme.fontSizes.small_18};
    }
  }

  .buy-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 326px;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    .product-name,
    .price,
    .to-details {
      display: none;
    }

    .buy-buttons {
      max-width: 100%;
    }
  }
`;

export const ProductDetails = styled.div``;
