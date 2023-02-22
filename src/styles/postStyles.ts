import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  padding: 3.13vw 0;
`;

export const Post = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: ${({ theme }) => theme.spacing._30};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing._30};
`;

export const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  max-height: 37vh;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    object-fit: cover;
    width: 100%;
    position: relative !important;
    object-position: center;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.big_48};
      font-weight: 400;
    }
  }

  .author {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
  }
`;

export const Text = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small_18};
  margin-top: 5vh;
`;
