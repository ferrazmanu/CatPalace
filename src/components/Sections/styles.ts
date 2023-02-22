import styled from "styled-components";

export const ResponsiveSwiperContainer = styled.div`
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
`;
