import { StylesProps } from "@/common/types";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing._30};

  @media only screen and (max-width: 1024px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 768px) {
    max-width: 95%;
  }
`;

const ResponsiveSwiperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing._30};

  .swiper {
    display: none;
    flex-direction: column;
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .swiper-pagination {
    position: relative;
    bottom: unset;
  }

  .swiper-pagination-bullet-active {
    background: #936287;
  }

  @media only screen and (max-width: 1024px) {
    .grid-container {
      display: none;
    }
    .swiper {
      display: flex;
    }

    .card {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 768px) {
    /* .swiper-button-next,
    .swiper-button-prev {
      display: none;
    } */
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
`;

const Overlay = styled.div<StylesProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => (props.open ? "display: block;" : "display: none;")}
`;

export { Container, ResponsiveSwiperContainer, TopContainer, Overlay };
