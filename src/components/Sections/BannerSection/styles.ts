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

  @media only screen and (max-width: 992px) {
    aspect-ratio: 750/436;
  }

  @media only screen and (max-width: 992px) {
    margin-bottom: -80px;
    margin-top: 80px;
  }
`;
