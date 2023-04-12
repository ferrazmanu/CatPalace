import styled from "styled-components";

export const Banner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1920/500;
  margin-bottom: -120px;
  margin-top: 120px;

  img {
    object-fit: cover;
  }

  .swiper-slide.mobile {
    display: none;
  }

  @media only screen and (max-width: 992px) {
    aspect-ratio: 750/436;

    .swiper-slide.desktop {
      display: none;
    }

    .swiper-slide.mobile {
      display: block;
    }
  }

  @media only screen and (max-width: 992px) {
    margin-bottom: -80px;
    margin-top: 80px;
  }
`;
