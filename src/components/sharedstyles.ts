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
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.secondary};
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
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

export { Container, ResponsiveSwiperContainer };
