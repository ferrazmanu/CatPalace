import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1.375rem, 1.56vw, 1.875rem);
  max-width: 420px;

  .button {
    max-width: 265px;
  }

  &:hover {
    .post-name,
    p {
      text-decoration: underline;
    }

    img {
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 1024px) {
    max-width: 330px;
    height: 100%;
    padding: 10px;
  }
`;

export const ImagePost = styled.a`
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 230px;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    border-radius: 10px;
  }

  @media only screen and (max-width: 768px) {
    height: 160px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  .post-name {
    font-size: ${({ theme }) => theme.fontSizes.medium_32};
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    text-align: center;
    display: flex;
    line-height: 1;

    @media only screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSizes.medium_30};
    }
  }
`;

export const Exerpt = styled.p`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: ${({ theme }) => theme.fontSizes.medium_24};

  @media only screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }
`;
