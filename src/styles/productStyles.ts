import { VariantProps } from "@/common/types";
import styled from "styled-components";

export const Product = styled.div`
  gap: ${({ theme }) => theme.spacing._30};
  display: flex;
  flex-direction: column;

  .product-name {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.big_48};
      font-family: ${({ theme }) => theme.fonts.primary_regular};
      font-weight: 500;
      line-height: 1;
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
      font-family: ${({ theme }) => theme.fonts.primary_regular};
    }
  }

  .variants {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;

    .color,
    .size {
      display: flex;
      gap: 10px;
    }
  }

  .to-details {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
    text-decoration: underline;
    width: fit-content;
  }

  @media only screen and (max-width: 1024px) {
    .product-name {
      h2 {
        font-size: ${({ theme }) => theme.fontSizes.medium_36};
      }
    }

    .price {
      .previous-price {
        font-size: ${({ theme }) => theme.fontSizes.small_18};
      }

      .current-price {
        font-size: ${({ theme }) => theme.fontSizes.medium_32};
      }
    }

    .to-details {
      font-size: ${({ theme }) => theme.fontSizes.small_18};
    }
  }
`;

export const Variant = styled.button<VariantProps>`
  &.color-variant {
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${(props) => props.color};
    width: 30px;
    height: 30px;
    ${(props) =>
      props.active
        ? "transform: scale(1.3); border: 1.5px solid #8c8b8b;"
        : "border: 1px solid #8c8b8b;"}

    &:hover {
      border: 1px solid #8c8b8b;
    }
  }

  &.size-variant {
    padding: 5px;
    border-radius: 5px;
    border: 1.5px solid #000;
    background-color: transparent;
    cursor: pointer;
    min-width: 70px;

    ${(props) =>
      props.active ? "border: 2px solid  #000;" : "border: 1px solid #8c8b8b;"}

    &:hover {
      border: 2px solid #8c8b8b;
    }
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

  .mySwiper2 {
    .swiper-slide {
      height: 500px;
    }
  }

  .mySwiper {
    .swiper-slide {
      cursor: pointer;
    }
  }

  .swiper {
    .swiper-slide {
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

    .mySwiper2 {
      .swiper-slide {
        min-height: 300px;
        max-height: 40vh;
      }
    }
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

export const ProductDetails = styled.div`
  gap: ${({ theme }) => theme.spacing._30};
  display: flex;
  flex-direction: column;
`;
